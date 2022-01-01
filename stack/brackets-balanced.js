import { Stack } from './Stack.js';

const isBracketsBalanced = (string) => {
    if (string.length < 2) {
        console.error('Error!');
        console.error(`Input length ${string.length} is too short to have pairs!`);

        return false;
    }

    const stack = new Stack();
    const BRACKETS = '()[]{}';
    const BRACKET_TYPE_LEFT = 'left';
    const BRACKET_TYPE_RIGHT = 'right';
    const getBracketInfo = (bracket) => {
        const bracketIndex = BRACKETS.indexOf(bracket);

        if (bracketIndex === -1) return false;

        let type = BRACKET_TYPE_LEFT;
        let pair = BRACKETS[bracketIndex + 1];

        if (bracketIndex % 2) {
            type = BRACKET_TYPE_RIGHT;
            pair = BRACKETS[bracketIndex - 1];
        }

        return {
            type,
            pair,
        };
    }

    for (let i = 0; i < string.length; i++) {
        const bracket = string[i];
        const bracketInfo = getBracketInfo(bracket);

        if (!bracketInfo) {
            console.error('Error!');
            console.error(`"${bracket}" is an invalid bracket.`);

            return false;
        }

        if (i === 0 && bracketInfo.type === BRACKET_TYPE_RIGHT) {
            console.error('Error!');
            console.error(`First bracket in string must be of type "${BRACKET_TYPE_LEFT}".`);

            return false;
        }

        if (bracketInfo.type === BRACKET_TYPE_LEFT) {
            stack.push(bracket);
        } else if (bracketInfo.type === BRACKET_TYPE_RIGHT) {
            const stackLast = stack.peek;
            const bracketLeft = bracketInfo.pair;

            if (stackLast === bracketLeft) {
                stack.pop();
            } else {
                const neededBracketEnd = getBracketInfo(stackLast).pair;
                console.error('Error with not balanced brackets!');
                console.error(`At index ${i} bracket "${bracket}" was given, but needed to close "${stackLast}" with "${neededBracketEnd}".`);

                return false;
            }
        }
    }

    if (stack.size === 0) {
        console.info('Balanced brackets!');

        return true;
    } else {
        console.error('Error!');
        console.error(`There are ${stack.size} unclosed brackets.`);

        return false;
    }
}

const string = '()[{()}]{}[]'; // balanced
// const string = '[x{}'; // error, invalid bracket
// const string = '([{}}{{][)))'; // error, error at index 4
// const string = '['; // error, input too short
// const string = '(('; // error, unclosed brackets
// const string = '))'; // error, first bracket, incorrect type

isBracketsBalanced(string);
