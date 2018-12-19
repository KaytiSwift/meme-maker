import React, {Component} from 'react';
import ImagePicker from './ImagePicker';
import MemePreview from './MemePreview';
import TextInputs from './TextInputs';

class MemeEditor extends Component {
    constructor() 
    {
        super();
        this.state = {
            images: ['/images/Dog.jpg', '/images/Dog2.jpg', '/images/dog3.jpg', '/images/dog4.jpg'],
            topText: 'this is top text',
            bottomText: 'this is bottom text',
            selectedImage: '/images/Dog.jpg' 
        }
    }

    pickImage = (i) => {        
        const image = i.target.src;
        console.log(image);
        this.setState({selectedImage: image})
    }

    render() {
        const {images, selectedImage, topText, bottomText} = this.state;
        return(
            <div>
                <ImagePicker   
                    images={images}
                    selectedImage={selectedImage}
                    pickImage={this.pickImage}/>
                <MemePreview 
                    selectedImage={selectedImage}/>
                <TextInputs
                    topText={topText}
                    bottomText={bottomText}/>
            </div>
        );
    }
}

export default MemeEditor;