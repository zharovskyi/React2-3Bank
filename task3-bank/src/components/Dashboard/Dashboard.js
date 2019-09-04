import React, { Component } from 'react';
import shortid from 'shortid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Controls from '../Controls/Controls';
import Balance from '../Balance/Balance';
import TransactionHistory from '../TransactionHistory/TransactionHistory';


export default class Dashboard extends Component {
    state = {
        transiction: [],
        balance: 0,
        amount: '',
        balanceAdd: 0,
        balanceStay: 0,

    }
    // item on input

    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({
            [name]: value,
        })
    };
    // click on Button
    handleClick = ({ target }) => {
        const { name } = target;
        this.addTransaction({ ...this.state }, name);

    }
    cleanInput = () => {
        this.setState({
            amount: ''
        })
    }
    notifyWarn = () => toast.warn('Enter corect amount...');
    notifyError = () =>
        toast.error('Not enough money! Please enter correct number');

    // create object Transiction and add in arr
    // stateObject - object that we have

    addTransaction = (stateObject, typeName) => {
        if (+stateObject.amount < 0) {
            this.notifyWarn();
            this.cleanInput();
            return;
        }
        const transitionAdd = {
            id: shortid.generate(),
            type: typeName,
            amount: stateObject.amount,
            data: new Date().toLocaleString(),
        }
        if (typeName === 'deposit') {
            this.setState(prevState => ({
                transiction: [...prevState.transiction, transitionAdd],
                balance: stateObject.balance + (+stateObject.amount),
                balanceAdd: stateObject.balanceAdd + (+stateObject.amount),

            }))
        } else if (typeName === 'withdraw') {
            if (stateObject.amount <= stateObject.balance) {
                this.setState(prevState => ({
                    transiction: [...prevState.transiction, transitionAdd],
                    balance: stateObject.balance - (+stateObject.amount),
                    balanceStay: stateObject.balanceStay + (+stateObject.amount),
                }))

            } else {
                this.cleanInput();
                this.notifyError();
                return;

            }

        }
    }

    render() {
        const {
            transiction,
            balance,
            amount,
            balanceAdd,
            balanceStay
        } = this.state;

        return (
            <>
                <Controls
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                    amount={amount} />
                <ToastContainer />
                <Balance
                    balanceAdd={balanceAdd}
                    balanceStay={balanceStay}
                    balance={balance} />
                {transiction.length > 0 && (
                    <TransactionHistory transiction={transiction} />
                )}

            </>
        )
    }
}
