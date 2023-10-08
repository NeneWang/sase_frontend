import React from 'react';
import { useState, useEffect } from 'react';


import { giveRandomMeme } from "../api/utils";

import Layout from '@/components/Layout';
import LoginButton from '@/components/LoginButton';

export default function HomePage() {
    const [memeUrl, setMemeUrl] = useState(null);
    const [memeTitle, setMemeTitle] = useState(null);
    const [memePostLink, setMemePostLink] = useState(null);

    useEffect(() => {
        // Fetch a random meme when the component mounts
        async function fetchRandomMeme() {
            const result = await giveRandomMeme();

            // Check if the 'lastPreview' property is defined in the result
            if (result && result.lastPreview) {
                setMemeUrl(result.lastPreview);
                setMemeTitle(result.title);
                setMemePostLink(result.url);
            } else {
                console.error('Invalid meme data:', result);
            }
        }
        fetchRandomMeme();


        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                // Do something when Enter key is pressed on the page
                //   console.log('Enter key was pressed on the page.');
                fetchRandomMeme();
            }
        };

        // Attach the event listener to the window object
        window.addEventListener('keydown', handleKeyPress);

        // Cleanup: remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    const handleAnotherMemeClick = async () => {
        // Fetch another random meme when the button is clicked
        const { lastPreview } = await giveRandomMeme();
        setMemeUrl(lastPreview);
    };

    return <div>
        <Layout>

            {memeUrl &&
                <div>
                    <h1>{memeTitle}</h1>
                    <img src={memeUrl}
                        style={{ width: '100%', height: 'auto' }}
                        alt="Random Meme" />
                    <a href={memePostLink}>{memeUrl.url}</a>

                </div>
            }
            <div className='center aligned content'>
                <button  className='ui primary button center aligned content' onClick={handleAnotherMemeClick}>Another Meme [ Press Enter ] </button>
            </div>

        </Layout>
    </div>;
}