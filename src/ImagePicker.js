import React, {Component} from 'react';
import './ImagePicker.css'

class ImagePicker extends Component {
    render() {
        const {images, pickImage, selectedImage} = this.props;
    const imagesList = images.map(i => {
        let cssClass = '';
        if (i === selectedImage) {
            cssClass = 'highlighted'
        }
        return <img onClick={pickImage} src={i} alt='dog' key={i} className={cssClass}/>
    })
        return(
            <div className="ImagePicker">
                {imagesList}                
            </div>
        );
    }
}

export default ImagePicker;