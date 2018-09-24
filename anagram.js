const solution = (N) => {
    if (typeof N == "number")
        N = N.toString();

    if (N == "0")
        return 1;

    let anagrams = {};
    let recurse = (ana, str) => {
        if (strstr.length === 0) {
            console.log('str ', str);
            anagrams[ana] = 1;
        }
        for (let i = 0; i < str.length; i++) {
            // console.log(`ana: ${i} ${ana}, str: ${str}`);
            console.log('ana ', ana + str[i]);
            console.log('str  ', str.slice(0, i) + str.slice(i + 1));
            recurse(ana + str[i], str.slice(0, i) + str.slice(i + 1));
        }
    };

    recurse('', N);

    console.log(Object.keys(anagrams));
    return Object.keys(anagrams)
        .filter((item, index, list) => item.charAt(0) !== '0').length;
};

const count = solution('1213');

console.log('count : ', count);