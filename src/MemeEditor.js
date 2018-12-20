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
            topText: '',
            bottomText: '',
            selectedImage: '/images/Dog.jpg' 
        }
    }

    pickImage = (i) => {        
        const image = i.target.src;
        this.setState({selectedImage: image})
    }

    setTopText = (t) => {
        const text = t.target.value;
        console.log(text);
        this.setState({topText: text})                                                
    }

    setBottomText = (t) => {
        const text = t.target.value
        this.setState({bottomText: text})
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
                    topText={topText}
                    bottomText={bottomText}
                    selectedImage={selectedImage}/>
                <TextInputs
                    topText={topText}
                    bottomText={bottomText}
                    setTopText={this.setTopText}
                    setBottomText={this.setBottomText}/>
            </div>
        );
    }
}

export default MemeEditor;