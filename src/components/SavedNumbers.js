import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteNumber } from '../store/actions';

class SavedNumbers extends Component {

    render() {

        if (this.props.numberList.length === 0) {
            return null;
        } else {
            return (
                <div>
                    <h4 className='border-bottom mb-4'>Saved Numbers:</h4>
                    {this.props.numberList.map(element => (

                        <div className='d-flex border-bottom mb-4' key={element.id}>
                            <div className='col-8'><span>{element.val}</span></div>
                            <div className='col-4'>
                                <button type='button' className='btn btn-danger'
                                    onClick={() => { this.props.deleteNumber(element.id) }}
                                >Remove</button>
                            </div>
                        </div>

                    ))}
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        numberList: state.savedList.results
    }
}

const mapDispatchToProps = {
    deleteNumber
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedNumbers);