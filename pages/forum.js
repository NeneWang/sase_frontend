import React from 'react';
import { Form, Button } from 'semantic-ui-react';


import { useEffect, useState } from 'react';
import CreateFormForm from '@/components/createForm';

import Layout from '@/components/Layout';
import { getPosts, getForum, respondThread, createForum} from '@/api/utils';
// import {FormForCreate} from '@/components/createForm';


export default function Forum() {



    const [forumsData, setForumsData] = useState([]);
    const [individualPost, setIndividualPost] = useState(null);



    useEffect(() => {
        getAllPosts();
    }, []);


    const getAllPosts = async () => {
        const forumsData = await getPosts();
        setForumsData(forumsData);
    }

    const ForumList = () => {
        return (

            <div>
                <CreateFormForm />
                <div className="ui list">
                    {forumsData.map((forum, index) => (
                        <div className="item" key={index}>
                            <div className="content">
                                <div className="header">{forum.title}</div>
                                <div className="description">
                                    Created by User ID {forum.user_id} on {forum.created_time}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };


    const showIndividualForum = (individualPost) => {

        return (
            <div className="ui list">
                <div className="item">
                    <div className="content">
                        <div className="header">{individualPost.title}</div>
                        <div className="description">
                            Created by User ID {individualPost.user_id} on {individualPost.created_time}
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <Layout>
            <h1>Forum</h1>
            <ForumList />

        </Layout>
    )
}




