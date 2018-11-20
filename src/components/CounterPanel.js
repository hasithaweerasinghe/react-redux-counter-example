import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveNumber, add, subtract, increment, decrement, reset } from '../store/actions';

class CounterPanel extends Component {
    state = {
        addValue: 10,
        subtractValue: 5
    }

    addValueChangeHandler = (event) => {
        this.setState({ addValue: event.target.value })
    }

    subtractValueChangeHandler = (event) => {
        this.setState({ subtractValue: event.target.value })
    }
    
    render() {
        return (
            <React.Fragment>
                <div className='d-flex flex-row justify-content-center mb-5'>
                    <h1>React - Redux Counter Example</h1>
                </div>

                <div className='d-flex flex-row mt-5 mb-5'>
                    <div className='d-flex flex-column flex-fill align-items-center'>
                        <h1>Counter :</h1>
                    </div>
                    <div className='d-flex flex-column flex-fill align-items-start'>
                        <h1>{this.props.counter}</h1>
                    </div>
                    <div className='d-flex flex-column flex-fill align-items-start'>
                        <button
                            type='button' className='btn btn-primary'
                            onClick={() => this.props.saveNumber(this.props.counter)}
                        >Save Number</button>
                        <button
                            type='button' className='btn btn-secondary mt-2'
                            onClick={this.props.reset}
                        >Reset</button>
                    </div>
                </div>

                <hr />

                <div className='d-flex flex-row mt-5 justify-content-between'>
                    <div className='d-flex flex-column align-items-center'>
                        <button
                            type='button' className='btn btn-primary'
                            onClick={this.props.increment}
                        >Increment by 1</button>
                    </div>
                    <div className='d-flex flex-column align-items-center'>
                        <button
                            type='button' className='btn btn-primary'
                            onClick={this.props.decrement}
                        >Decrement by 1</button>
                    </div>
                    <div className='d-flex flex-column  align-items-center'>
                        <input type='number' className='form-control' placeholder='Add to Counter'
                            onChange={this.addValueChangeHandler} value={this.state.addValue} />
                        <button
                            type='button' className='btn btn-primary btn-block'
                            onClick={() => this.props.add(this.state.addValue)}
                        >Add</button>
                    </div>
                    <div className='d-flex flex-column  align-items-center'>
                        <input type='number' className='form-control' placeholder='Add to Counter'
                            onChange={this.subtractValueChangeHandler} value={this.state.subtractValue} />
                        <button
                            type='button' className='btn btn-primary btn-block'
                            onClick={() => this.props.subtract(this.state.subtractValue)}
                        >Subtract</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter.counter,
    }
}

const mapDispatchToProps = {
    saveNumber, add, subtract, increment, decrement, reset
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterPanel);