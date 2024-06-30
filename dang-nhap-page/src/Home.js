import React, { useState, useEffect } from 'react';

function Home() {
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                setImageUrl(data.message);
            });
    }, []);
    return (
        <div>
            <h1>Home</h1>
            {imageUrl && <img src={imageUrl} alt="dog" />}
        </div>
    );
}

export default Home;