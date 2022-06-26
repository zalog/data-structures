import { Stack } from './Stack.js';

const isBracketsBalanced = (string) => {
    const stack = new Stack();
    const BRACKETS = '()[]{}';
    const BRACKET_TYPE_LEFT = 'left';
    const BRACKET_TYPE_RIGHT = 'right';

    if (string.length < 2) {
        console.error('Error!');
        console.error(`Input length ${string.length} is too short to have pairs!`);

        return false;
    }

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
            const stackLast = stack.peek;
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

    if (stack.size === 0) {
        console.info('Balanced brackets!');

        return true;
    }
}

const string = '()[{()}]{}[]'; // balanced
// const string = '[x{}'; // error, invalid bracket
// const string = '([{}}{{][)))'; // error, error at index 4
// const string = '['; // error, input too short

isBracketsBalanced(string);
