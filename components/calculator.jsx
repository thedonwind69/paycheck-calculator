import React from 'react';
import calculatePayCheck from '../js/calculatePayCheck';
import Result from './result';

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pay: 0,
            resultReady: false,
            takeHomePay: 0,
            salaryType: null,
            frequency: 'annually',
        }
    }

    update (field) {
        return (event) => {
            this.setState({
                [field]: parseInt(event.currentTarget.value)
            })
        }
    }

    calculatePay () {
        this.setState({
            takeHomePay: calculatePayCheck(this.state.pay, this.state.frequency),
            resultReady: true
        })
    }

    changeSalaryType(type) {
        if (type === 'hourly') {
            this.setState({salaryType: 'hourly'});
        } else {
            this.setState({salaryType: 'annually'})
        }
    }

    changeFrequency () {
        return (event) => {
            this.setState({
                frequency: event.currentTarget.value,
            });
        }
    }

    render () {

        if (!this.state.resultReady) {
            return (
                <div class='input-salary-info'>
                    <form>
                        <br/>
                        <label for='pay'>Your Annual Salary:</label><br/><br/>
                        <input id='pay' onChange={this.update('pay')} type='number' />
                        <br/><button onClick={this.calculatePay.bind(this)} class='qbutton'>Calculate</button>
                    </form>
                </div>
            )
        } else {
            return <Result
                    frequency={this.state.frequency} 
                    changeFrequency={this.changeFrequency.bind(this)} 
                    takeHomePay={this.state.takeHomePay} 
                    grossPay={this.state.pay}
                    />
        }
        
    }

}

export default Calculator;