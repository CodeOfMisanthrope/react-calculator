import {diff, sum} from "~utils/math.ts";

const reNum = /^[0-9]+$/;
const reOp = /^[+-]$/;

function trimExpr(expr: string[]) {
    const n = expr.length;
    const lastEl = expr[n - 1];
    return reOp.test(lastEl) ? expr.slice(0, n - 1) : expr;
}

function groupsNumsExpr(expr: string[]) {
    const parsedExpr: string[] = [];
    let curNum: string[] = [];

    for (const el of expr) {
        const isNum = reNum.test(el);
        const isOp = reOp.test(el);
        if (isNum) {
            curNum.push(el);
            continue;
        }

        if (isOp) {
            if (curNum.length > 0) {
                parsedExpr.push(curNum.join(''));
                curNum = [];
            }
            parsedExpr.push(el);
        }
    }

    if (curNum.length > 0) {
        parsedExpr.push(curNum.join(''));
    }

    return parsedExpr;
}

export function evalExpr(expr: string[]) {
    let parsedExpr = trimExpr(expr);
    parsedExpr = groupsNumsExpr(parsedExpr);
    console.log(parsedExpr);

    let leftNum;
    let op = '';
    let isNeg = parsedExpr[0] === '-';
    for (let i = isNeg ? 1 : 0; i < parsedExpr.length; i++) {
        const el = parsedExpr[i];
        const isNum = reNum.test(el);
        const isOp = reOp.test(el);

        if (isNum) {
            if (leftNum != null) {
                // console.log(leftNum, el, op)
                if (isNeg) {
                    switch (op) {
                        case '+':
                            leftNum = diff(leftNum, Number(el));
                            op = '';
                            break;
                        case '-':
                            leftNum = sum(leftNum, Number(el));
                            op = '';
                            break;
                        default:
                            throw new Error(`Expected ${el} to be a number`);
                    }
                    isNeg = false;

                } else {
                    switch (op) {
                        case '+':
                            leftNum = sum(leftNum, Number(el));
                            op = '';
                            break;
                        case '-':
                            leftNum = diff(leftNum, Number(el));
                            op = '';
                            break;
                        default:
                            throw new Error(`Expected ${el} to be a number`);
                    }
                }

            } else {
                leftNum = Number(el);
            }
            continue;
        }

        if (isOp) {
            op = el;
            // console.log(leftNum);
        }
    }

    return leftNum;
}
