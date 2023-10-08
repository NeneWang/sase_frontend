import React from 'react';
import Navbar from '../components/Navbar';
import { giveRandomMeme } from "../api/utils";


export default function HomePage() {
    return <div>
        <Navbar />
        <h1>Home Page</h1>

        <button>Another Meme</button>
    </div>;
}