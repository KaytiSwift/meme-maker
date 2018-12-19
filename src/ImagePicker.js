import React, {Component} from 'react';

class ImagePicker extends Component {
    render() {
        const {selectedImage, images, pickImage} = this.props;
        const imagesList = images.map(i => <img onClick={pickImage} src={i} alt='dog' key={i}/>)
        return(
            <div>
                {imagesList}                
            </div>
        );
    }
}

export default ImagePicker;