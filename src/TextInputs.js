import React, { Component } from 'react';
import './TextInputs.css';

class TextInputs extends Component {
    render() {
        const {setTopText, setBottomText} = this.props;
        return (
            <div className='TextInputs'>
                <label>Top text:</label><input onChange={setTopText} type='text'></input>
                <label>Bottom text:</label><input onChange={setBottomText} type='text'></input>
            </div>
        );
    }
}

export default TextInputs;