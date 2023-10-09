import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { getPosts, getForum, respondThread, createForum } from '@/api/utils';
import { useSession } from "next-auth/react"



export default function CreateFormForm() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const { data: session } = useSession()


    const handleSubmit = async (e) => {
        

        try {
            // Create an object with the form data
            const newPostData = {
                title,
                body,
                email: session.user.email,
                parent_id: 0,
            };
            createForum(newPostData);

            // Reset the form fields after successful submission
            setTitle('');
            setBody('');
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return (
        <Form>
            <Form.Field>
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </Form.Field>
            <Form.Field>
                <label>Body</label>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                />
            </Form.Field>
            <Button onClick={handleSubmit}>Create Post</Button>
        </Form>
    );
};
