import React from 'react';
import style from './Balance.module.css'
import PropTypes from 'prop-types';
const Balance = ({ balanceStay, balanceAdd, balance }) => (
    <>
        <section className={style.balance}>
            <span role="img" aria-label="de">⬆️{balanceAdd}$</span>
            <span role="img" aria-label="de">⬇️{balanceStay}$</span>
            <span>Balance: {balance}$</span>
        </section>
    </>
)

export default Balance;

Balance.propTypes = {
    balanceStay: PropTypes.number.isRequired,
    balanceAdd: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired,
}