import React, { Component } from 'react';

class TextInputs extends Component {
    render() {
        const {setTopText, setBottomText} = this.props;
        return (
            <div>
                <label>Top text:</label><input onChange={setTopText} type='text'></input>
                <label>Bottom text:</label><input onChange={setBottomText} type='text'></input>
            </div>
        );
    }
}

export default TextInputs;