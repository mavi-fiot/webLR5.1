function checkBrackets(str) {
    const stack = [];
    const bracketsMap = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let char of str) {
        if (bracketsMap[char]) {
            stack.push(char);
        } else if (Object.values(bracketsMap).includes(char)) {
            if (bracketsMap[stack.pop()] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}


const someFn = "(function() { console.log('Hello World!'); })()";
console.log(checkBrackets(someFn)); // Повинно вивести: true

const invalidFn = "(function() { console.log('Hello World!'); }";
console.log(checkBrackets(invalidFn)); // Повинно вивести: false
