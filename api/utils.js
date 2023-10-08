import axios from 'axios';

// const {MEME_API} = require('./constants');
import { MEME_API } from './constants';


export async function giveRandomMeme() {
    // https://meme-api.com/gimme
    // console.log("attempted to fetch from ", MEME_API)
    try {
        const response = await axios.get(MEME_API);
        const memeData = response.data;

        if (memeData.preview && memeData.preview.length > 0) {
            const lastPreview = memeData.preview[memeData.preview.length - 1];
            console.log("lastPreview", lastPreview)
            return { lastPreview, url: memeData.url, title: memeData.title };
        } else {
            return { lastPreview: "#", url: 'No previews available.' };
        }
    } catch (error) {
        console.error('Error fetching meme:', error);
        return { lastPreview: "#", url: 'No previews available' };
    }


}
