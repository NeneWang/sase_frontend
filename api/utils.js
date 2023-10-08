import axios from 'axios';

// const {MEME_API} = require('./constants');
import { MEME_API } from './constants';


export async function giveRandomMeme() {
    // https://meme-api.com/gimme
    const fetchMeme = async () => {
        try {
            const response = await axios.get(MEME_API);
            const memeData = response.data;

            if (memeData.preview && memeData.preview.length > 0) {
                const lastPreview = memeData.preview[memeData.preview.length - 1];
                return { lastPreview, };
            } else {
                return 'No previews available for this meme.';
            }
        } catch (error) {
            console.error('Error fetching meme:', error);
            return 'An error occurred while fetching the meme.';
        }
    };

    // Call the fetchMeme function
    fetchMeme().then((lastPreview) => {
        console.log('Last Preview URL:', lastPreview);
    });

}
