import React, {Component} from 'react';
import './MemePreview.css';

class MemePreview extends Component{
    render(){
        const {selectedImage, topText, bottomText} = this.props;
        const divStyle = {
            backgroundImage: `url(${selectedImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            maxWidth: '50vw',

          };
        return(
            <div className="MemePreview" style={divStyle}>
                <p>{topText}</p>
                <img src={selectedImage} alt='my meme'/>
                <p>{bottomText}</p>
            </div>
        );
    }
}

export default MemePreview;