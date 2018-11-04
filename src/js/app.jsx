import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here

  constructor () {
    super();
    this.state = {
      balance: 0,
      rate: 0,
      term: 15,
    };
    this.handleChange = this.handleChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = parseFloat(target.value);
    const name = target.name;

    this.setState({
      [name]: value
    });

  }
    
  calculate() {
    const balance = this.state.balance;
    const rate = (this.state.rate)/1200;
    const term = (this.state.term*12);
    const payment = balance*(rate * Math.pow((1 + rate), term))/(Math.pow((1 + rate), term) - 1);
    document.getElementById("output").innerHTML = `$${payment.toFixed(2)} is your payment.`;
  }

  render() {

    return (
      <div className='container'>
      <form className="horizontal-form clearfix">
      <div className="col-sm-offset-2 col-sm-10">
        <h3>Mortgage Calculator</h3>
        <hr></hr>
      </div>
        <div className="form-group clearfix">
          <label htmlFor="balance" className="col-sm-2 control-label">Loan Balance</label>
          <div className="col-sm-10">
            <input 
              className="form-control"
              type="number"
              name="balance"
              placeholder="0"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-group clearfix">
          <label htmlFor="rate" className="col-sm-2 control-label">Interest Rate (%)</label>
          <div className="col-sm-10">
            <input 
              className="form-control"
              type="number"
              name="rate"
              placeholder="0"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-group clearfix">
          <label htmlFor="term" className="col-sm-2 control-label">Loan Term (Years)</label>
          <div className="col-sm-10">
            <select name="term"
            className="form-control"
            value={this.state.name}
            onChange= {this.handleChange}
            >
              <option value="15">15</option>
              <option value="30">30</option>
            </select>
          </div>
        </div>
        <div className="form-group clearfix">
          <div className="col-sm-offset-2 col-sm-10">
          <button type="button"
          name="submit"
          className="btn btn-primary"
          onClick={this.calculate}
          >Submit</button>
          </div>
        </div>
      </form>
        <div className="form-group clearfix">
          <div
            id="output"
            name="output"
            className="col-sm-offset-2 col-sm-10"
            >
            </div>
        </div>
      </div>
    );
  }
}
