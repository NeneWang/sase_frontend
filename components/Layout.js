import Navbar from "./Navbar";
import React from 'react'
import { Container } from 'semantic-ui-react'


export default function Layout(props) {
    return <div>
        <Navbar />
        <Container>


            <div className="ui top large padded">
                
                    _
                
            </div>
                {props.children}


        </Container>
    </div>;
}

