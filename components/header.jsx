import React from 'react';
import { title, subtitle } from "@/components/primitives";
function Header(){
    return (
        <header>
            <p className={title()}>Alex Ayala</p>
            <p>Web Developer / CS Student</p>
        </header>
    );
}

export default Header;