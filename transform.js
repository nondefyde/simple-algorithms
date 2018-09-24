/** *
 * @returns Very simple crow distance between 2 points
 */
function polygonType() {
    function isTriange(polygon = []) {
        const length = polygon.length === 3;
        if (!length) return false;
        const a = parseInt(polygon[0]);
        const b = parseInt(polygon[1]);
        const c = parseInt(polygon[2]);
        return ((a + b) > c) && ((a + c) > b) && ((b + c) > a);
    }

    function isSquare(polygon = []) {
        const length = polygon.length === 4;
        if (!length) return false;
        return polygon.reduce(function (sum, val) {
            return val === polygon[0];
        });
    }

    function isRectangle(polygon) {
        const length = polygon.length === 4;
        if (!length) return false;
        const result = [];
        const object = {};
        polygon.forEach((side) => {
            if (object.hasOwnProperty(side)) {
                object[side] = true;
                result.push(true)
            }
            else {
                object[side] = false;
            }
        });
        return result.length === 2;
    }

    function readTextFile(file) {
        const rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status == 0) {
                    // when text file content json : [["1,3,1"], ["2,2,2,2"], ["2,4,2,4"], ["4,2,3"], ["3,4,2,6"]]
                    //fileText = JSON.parse(rawFile.responseText);

                    // for line separated file
                    fileText = rawFile.responseText.split('\n');
                    //alert(fileText);
                }
            }
        }
        rawFile.send(null);
    }

    // create polygons array
    const polygons = [];
    readTextFile('./polygons.txt');
//document.write(fileText.length);
    fileText.forEach(function (p) {
        polygons.push(p);
    });
//document.write(polygons[0]);

    const triangles = [];
    const squares = [];
    const rectangles = [];
    const others = [];
    let result;
    for (let i = 0; i < polygons.length; i++) {
        let polygon = polygons[i].split(',');
        if (polygon.length === 3 && isTriange(polygon)) {
            triangles.push(polygon);
        }
        else if (polygon.length === 4 && isSquare(polygon)) {
            squares.push(polygon)
        }
        else if (polygon.length === 4 && isRectangle(polygon)) {
            rectangles.push(polygon);
        }
        else {
            others.push(polygon)
        }
    }

    console.log('polygons triangles subsets:');
    console.log(triangles);

    console.log('polygons squares subsets:');
    console.log(squares);

    console.log('polygons rectangles subsets:');
    console.log(rectangles);

    console.log('polygons others subsets:');
    console.log(others);
}

console.log('result : ', polygonType());