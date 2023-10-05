'use client'
import React from 'react';
import { title, subtitle } from "@/components/primitives";
function about(){
    return (
        <about>
            <h2 className={title()}>About Me</h2>
            <h3 className={subtitle({class:"mt-5"})}>Hello! I am a senior at Chico State, pursuing a B.A. in Computer Science. 
            My interest consist of Web Development and UI/UX.
                I have experience in Web Development with Python/Django & React.
            </h3>
            
        </about>
    );
}

export default about;