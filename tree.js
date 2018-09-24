const solution = (T) => {
    let count = 0;
    const stack = [];
    const levels = [];
    const values = [];
    let tree = T;
    let level = 0;
    while (stack.length !== 0 || tree != null) {
        if (tree != null) {
            values[level] = tree.x;
            level++;
            if (tree.r != null) {
                stack.push(tree.r);
                levels.push(level);
            }
            if (tree.l == null && tree.r == null) {
                console.log('mySet : ',values.length);
                const mySet = new Set;
                for (let i = 0; i <= level - 1; i++) {
                    mySet.add(values[i]);
                }
                // console.log('mySet : ',mySet);
                if (count < mySet.size) {
                    count = mySet.size;
                    // console.log('mySet >>> : ',mySet);
                }
            }
            tree = tree.l;
        } else {
            tree = stack.pop();
            level = levels.pop();
        }
    }
    return count;
};


const tree = {
    x: 4,
    l: {
        x: 5,
        l: {
            x: 4,
            l: {
                x: 5,
                l: null,
                r: null
            },
            r: null
        },
        r: null
    },
    r: {
        x: 6,
        l: {
            x: 1,
            l: {
                x: 6,
                l: null,
                r: null
            },
            r: null,
        },
        r: null
    },
};

const count = solution(tree);

console.log('count : ', count);