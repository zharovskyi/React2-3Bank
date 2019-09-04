import React from 'react';
import style from './Controls.module.css'

const Controls = () => (
    <>
        <section className={style.controls}>
            <input type="number" />
            <button type="button">Deposit</button>
            <button type="button">Withdraw</button>
        </section>
    </>
)

export default Controls;