import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here

  constructor () {
    super();
    this.state = {
      balanceInput: 0,
      rateInput: 0,
    }
  }

  userInput() {
dg
  }


  render() {
    return (
      <div className='container'>
      <form className="horizontal-form clearfix">
      <div className="col-sm-offset-2 col-sm-10">
        <h1>Mortgage Calculator</h1>
        <hr></hr>
      </div>
        <div className="form-group clearfix">
          <label for="balance" className="col-sm-2 control-label">Loan Balance</label>
          <div className="col-sm-10">
            <input 
              className="form-control"
              type="number"
              name="balance"
              value={this.state.balanceInput}
            />
          </div>
        </div>
        <div className="form-group clearfix">
          <label for="rate" className="col-sm-2 control-label">Interest Rate (%)</label>
          <div className="col-sm-10">
            <input 
              className="form-control"
              type="number"
              name="rate"
              value={this.state.rateInput}
            />
          </div>
        </div>
        <div className="form-group clearfix">
          <label for="term" className="col-sm-2 control-label">Loan Term (Years)</label>
          <div className="col-sm-10">
            <select name="term" className="form-control">
              <option>15</option>
              <option>30</option>
            </select>
          </div>
        </div>
        <div className="form-group clearfix">
          <div className="col-sm-offset-2 col-sm-10">
          <button trype="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
        <div></div>
        {/* your JSX goes here */}
      </div>
    );
  }
}
