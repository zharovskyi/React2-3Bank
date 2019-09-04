import React, { Component } from 'react';
import Controls from '../Controls/Controls';
import Balance from '../Balance/Balance';
import TransactionHistory from '../TransactionHistory/TransactionHistory';


export default class Dashboard extends Component {
    state = {
        transiction: [],
        balance: 0,

    }

    render() {
        return (
            <>
                <Controls />
                <Balance />
                <TransactionHistory />

            </>
        )
    }
}
