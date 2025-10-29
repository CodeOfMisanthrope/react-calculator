import {type MouseEvent} from "react";
import {useState} from 'react';
import style from '~/app.module.css';

function App() {
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const [expression, setExpression] = useState([]);

    const onClickNum = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const num = Number(event.currentTarget.dataset.num);
        console.log(num);
    };

    const onClickSum = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }

    const onClickDiff = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const onClickResult = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const onClickClear = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
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
                <div className={style['calc__display']}></div>
                <div className={style['calc__list-operation']}>
                    {operations.map(({op, handler}) => (
                        <div className={style['calc__item-operation']}>
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
