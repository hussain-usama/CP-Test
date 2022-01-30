import React from 'react'
import {  Card ,CardBody } from "reactstrap";
import '../styles/index.css'

function Home(props){

    return(
            <Card className='postsCard' key={props?.id}>
                <CardBody>
                    <h5 className='headingText'>
                        {props?.title}
                    </h5>
                    <p className='paraText'>
                        {props?.text}
                    </p>
                </CardBody>
            </Card>
    )
}
export default Home