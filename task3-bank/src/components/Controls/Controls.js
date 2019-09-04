import React from 'react';
import style from './Controls.module.css'
import PropTypes from 'prop-types';


const Controls = ({ amount, onClick, onChange }) => (
    <>
        <section className={style.controls}>
            <input
                type="number"
                name='amount'
                onClick={onClick}
                onChange={onChange}
                value={amount} />
            <button type="button"
                name='deposit'
                onClick={onClick}
            >Transfer</button>
            <button type="button"
                name="withdraw"
                onClick={onClick}>Payment</button>
        </section>
    </>
)

export default Controls;

Controls.propTypes = {
    amount: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
}