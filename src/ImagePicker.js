import React, {Component} from 'react';
import './ImagePicker.css'

class ImagePicker extends Component {
    render() {
        const {images, pickImage} = this.props;
        const imagesList = images.map(i => <img onClick={pickImage} src={i} alt='dog' key={i}/>)
        return(
            <div className="ImagePicker">
                {imagesList}                
            </div>
        );
    }
}

export default ImagePicker;