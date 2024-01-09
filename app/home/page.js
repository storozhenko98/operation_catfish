'use client'
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
    const [image, setImage] = useState(null);
    const [generatedImages, setGeneratedImages] = useState([]);

    const handleImageUpload = (event) => {
        setImage(event.target.files[0]);
    };

    const handleGenerate = async () => {
        const formData = new FormData();
        formData.append('image', image);

        try {
            const response = await axios.post('/api/generate', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });
            setGeneratedImages(response.data.images);
        } catch (error) {
            console.error('Error generating images:', error);
        }
    };

    return (
        <div style={{
            height:100 + 'vh', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            alignItems: 'center', 
            backgroundColor: 'white',
            }}>
            <div id='header' style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 100 + '%',
                height: 100 + 'px',
                backgroundColor: 'white',
                zIndex: 1,
                
                }}>
                <h1 style={{
                    textAlign: 'center',
                    fontSize: 3 + 'rem',
                    color: 'black',
                    }}>Hinge Catfish</h1>
            </div>
            <div id='uploadBox' style={{
                width: 80 + '%',
                height: 30 + 'vh',
                backgroundColor: 'white',
                zIndex: 2,
                border: '1px solid black',
                borderRadius: 10 + 'px',
                }}>
                <h2 style={{
                    textAlign: 'center',
                    fontSize: 2 + 'rem',
                    color: 'black',
                    }}>Upload a Headshot</h2>
                <p style={{
                    textAlign: 'center',
                    fontSize: 1 + 'rem',
                    color: 'black',
                    margin: 10 + 'px',
                    }}>Upload a headshot and we will generate a catfish for you!
                </p>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 60 + '%',
                }}>
                <div id="imageAddBox" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border : '1px solid black',
                    borderRadius: 10 + 'px',
                    width: 40 + '%',
                    height: 100+'%',
                    margin: 10 + 'px',
                    }}>
                    <input type="file" onChange={handleImageUpload} />
                    <button onClick={handleGenerate}>Generate</button>
                </div>
                <div id="imageAddBox" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border : '1px solid black',
                    borderRadius: 10 + 'px',
                    width: 40 + '%',
                    height: 100+'%',
                    margin: 10 + 'px',
                    }}>
                    <input type="file" onChange={handleImageUpload} />
                    <button onClick={handleGenerate}>Generate</button>
                </div>
                </div>

                    
            </div>
        </div>
    );
}
