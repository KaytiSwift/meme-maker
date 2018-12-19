import React, {Component} from 'react';

class MemePreview extends Component{
    render(){
        const {selectedImage} = this.props;
        return(
            <div>
                <img src={selectedImage} alt='my meme'/>
            </div>
        );
    }
}

export default MemePreview;