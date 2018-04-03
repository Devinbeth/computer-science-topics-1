// =============== RECURSION ===============

// =========== REVERSE A STRING ============
var long = 'This is my really long sentence that will hopefully take a lot more time to run because I need my freaking timers to slow the hell down therefore I will make this sentence ridiculously run on ish and don\'t even think about me using a comma are you serious a comma shut the fuck up alas this isn\'t working and it all still takes less than a millisecond to run!';

// =========== WITHOUT RECURSION ===========
function reverse(str) {
    let time1 = Date.now();
    let newStr = '';
    console.log(str);
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
        console.log(newStr);
    }
    let time2 = Date.now();
    console.log(time2);
    console.log(time1);
    console.log(time2 - time1);
    return newStr;
}
reverse(long);

// ============ WITH RECURSION =============
let time3 = Date.now();
function reverseRecursion(str) {
    console.log(str);
    if (str.length === 1) {
        return str;
    }
    let temp = str[str.length - 1] += reverseRecursion(str.slice(0, str.length - 1));
    console.log(temp);
    return temp;
}
reverseRecursion(long);
let time4 = Date.now();
console.log(time4);
console.log(time3);
console.log(time4 - time3);


// =========== RECURSIVE OBJECT ============
let organization = {
    CEO: {
        name: 'Jimmy',
        survey: 'I run this town.',
        team: {
            CFO: {
                name: 'Jane',
                survey: 'the CEO is shady.',
                team: {
                    accounting: {
                        sr: {
                            name: 'Jerry',
                            survey: 'Things are all good here!'
                        },
                        jr: {
                            name: 'Jerold',
                            survey: 'I dunno about this place...'
                        }
                    }
                }
            },
            COO: {
                name: 'Joe',
                survey: 'What does COO even stand for?',
                team: {
                    marketing: {
                        sr: {
                            name: 'Jen',
                            survey: 'All the things are gettin marketed!'
                        }
                    },
                    sales: {
                        sr: {
                            name: 'Jenny',
                            survey: 'I used to go by Jen...'
                        }
                    }
                }
            },
        }
    }
};


// ========= RECURSION WITH SURVEY RESPONSES ==========
function survey(obj, arr) {
    for (let prop in obj) {
        if (typeof obj[prop] === 'object') {
            survey(obj[prop], arr);
        } else if (prop === 'survey') {
            arr.push(obj[prop]);
        }
    }
    return arr;
}

console.log(survey(organization, []));


















