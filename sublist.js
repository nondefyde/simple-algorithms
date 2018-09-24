const convert = (n) => {
    const hash = {
        0: '0',
        1: 'a',
        2: 't',
        3: 'l',
        4: 's',
        5: 'i',
        6: 'n'
    };

    function toBase7(n) {
        return n.toString(7);
    }

    const base7 = toBase7(n).split("");
    let value = '';
    for (let i = 0; i < base7.length; i++) {
        value += hash[base7[i]];
    }
};
const find = (list, sublist) => {
    let value1 = '';
    let value2 = '';
    let head = list;
    let head2 = sublist;
    while (head != null) {
        value1 += head.val;
        head = head.next;
    }

    while (head2 != null) {
        value2 += head2.val;
        head2 = head2.next;
    }
    console.log('value1 : ', value1);
    console.log('value2 : ', value2);
    const index = value1.search(value2);
    return index;
};
const list = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                }
            }
        }
    }
};
const sublist = {
    val: 3,
    next: {
        val: 4,
        next: {
            val: 5,
            next: null
        }
    }
};

const lookAndSay = (n) => {
    const hash = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    };
    n = n.toString();
    const obj = {};
    for (let i = 0; i < n.length; i++) {
        let current = n[i];
        if (obj[current]) {
            obj[current] = obj[current] + 1;
        } else {
            obj[current] = 1;
        }
    }
    console.log('obj : ', obj);
};
lookAndSay(11);

// convert(7792875);