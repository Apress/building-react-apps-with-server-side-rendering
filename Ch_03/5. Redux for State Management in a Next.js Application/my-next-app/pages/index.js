import React from "react";
import "../style.css";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeState } from '../Actions/actions'

class ReduxDemo extends React.Component {

    render() {
        return (
            <div>
                <h1>Redux Demo</h1>
                <br />
                <div className='center'>
                    <input id='inputTextbox' type='text'>
                    </input>
                    <button type='button'
                        onClick={this.props.changeState}>
                        Update Label
                    </button>
                </div>
                <br />
                <p>{this.props.text}</p>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        changeState: bindActionCreators(changeState, dispatch)
    }
}

export default connect((state) => ({ text: state.text }), mapDispatchToProps)(ReduxDemo)