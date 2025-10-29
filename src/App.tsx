import {type MouseEvent} from "react";
import {useState} from 'react';
import style from '~/app.module.css';
import {evalExpr} from "~utils/calc.ts";

type MouseEventBtn = MouseEvent<HTMLButtonElement>;

function App() {
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    // console.log(evalExpr(['1', '2', '3', '+', '6']));
    // console.log(evalExpr(['1', '2', '3', '+', '6', '-']));
    console.log(evalExpr(['-', '1', '2', '3', '+', '6', '-']));
    const [expression, setExpression] = useState<string[]>([]);

    const onClickNum = (event: MouseEventBtn) => {
        event.preventDefault();
        const num = String(event.currentTarget.dataset.num);
        setExpression([...expression, num]);
    };

    const onClickSum = (event: MouseEventBtn) => {
        event.preventDefault();
        setExpression([...expression, '+']);
    }

    const onClickDiff = (event: MouseEventBtn) => {
        event.preventDefault();
        setExpression([...expression, '-']);
    };

    const onClickResult = (event: MouseEventBtn) => {
        event.preventDefault();
        const result = evalExpr(expression);
        setExpression([...String(result)]);
    };

    const onClickClear = (event: MouseEventBtn) => {
        event.preventDefault();
        setExpression([]);
    };

    const operations = [
        {op: '+', handler: onClickSum},
        {op: '-', handler: onClickDiff},
        {op: '=', handler: onClickResult},
        {op: 'c', handler: onClickClear},
    ];

    return (
        <>
            <h1 className={style['calc__title']}>Калькулятор</h1>
            <form className={style['calc__form']} action="">
                {/*<label htmlFor="input-number" className={style['calc__label']}>Введите выражение</label>*/}
                {/*<input id="input-number" className={style['calc__input-number'] + ' ' + 'calc-input'} type="number"/>*/}
                <div className={style['calc__display']}>{expression.join('')}</div>
                <div className={style['calc__list-operation']}>
                    {operations.map(({op, handler}) => (
                        <div className={style['calc__item-operation']} key={op}>
                            <button
                                className={style['calc__btn-operation'] + ' ' + 'calc-btn'}
                                onClick={handler}
                                data-op={op}>
                                {op}
                            </button>
                        </div>
                    ))}
                </div>
                <div className={style['calc__list-num']}>
                    {nums.map((num) =>
                        <div className={style['calc__item-num']} key={num}>
                            <button
                                className={style['calc__btn-num'] + ' ' + 'calc-btn'}
                                onClick={onClickNum}
                                data-num={num}>
                                {num}
                            </button>
                        </div>
                    )}
                </div>
            </form>
        </>
    );
}

export default App;
