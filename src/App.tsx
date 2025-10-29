import {useState} from 'react';
import style from '~/app.module.css';

function App() {
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <>
            <h1 className={style['calc__title']}>Калькулятор</h1>
            <form className={style['calc__form']} action="">
                <label htmlFor="input-number" className={style['calc__label']}>Введите выражение</label>
                <input id="input-number" className={style['calc__input-number'] + ' ' + 'calc-input'} type="number"/>
                <div className={style['calc__list']}>
                    {nums.map((num) =>
                        <div className={style['calc__item']} key={num}>
                            <button className={style['calc__btn-num'] + ' ' + 'calc-btn'}>{num}</button>
                        </div>
                    )}
                </div>
            </form>
        </>
    );
}

export default App;
