import React from 'react';
import style from './Balance.module.css'

const Balance = () => (
    <>
        <section className={style.balance}>
            <span>⬆️2000$</span>
            <span>⬇️1000$</span>
            <span>Balance: 5000$</span>
        </section>
    </>
)

export default Balance;