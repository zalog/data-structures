const isBracketsBalanced = (string) => {
    const stack = [];
    const BRACKETS = '()[]{}';
    const BRACKET_TYPE_LEFT = 'left';
    const BRACKET_TYPE_RIGHT = 'right';

    for (let i = 0; i < string.length; i++) {
        const bracket = string[i];
        const bracketIndex = BRACKETS.indexOf(bracket);

        if (bracketIndex === -1) {
            console.error('Error!');
            console.error(`"${bracket}" is an invalid bracket.`);

            return false;
        }

        const bracketType = (bracketIndex % 2) ? BRACKET_TYPE_RIGHT : BRACKET_TYPE_LEFT;

        if (bracketType === BRACKET_TYPE_LEFT) {
            stack.push(bracket);
        } else if (bracketType === BRACKET_TYPE_RIGHT) {
            const stackLast = stack[stack.length - 1];
            const bracketLeft = BRACKETS[bracketIndex - 1];

            if (stackLast === bracketLeft) {
                stack.pop();
            } else {
                const neededBracketEnd = BRACKETS[BRACKETS.indexOf(stackLast) + 1];
                console.error('Error with not balanced brackets!');
                console.error(`At index ${i} bracket "${bracket}" was given, but needed to close "${stackLast}" with "${neededBracketEnd}".`);

                return false;
            }
        }
    }

    if (stack.length === 0) {
        console.info('Balanced brackets!');

        return true;
    }
}

const string = '()[{()}]{}[]'; // balanced
// const string = '[x{}'; // error, invalid bracket
// const string = '([{}}{{][)))'; // error, error at index 4

isBracketsBalanced(string);
