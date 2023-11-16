'use client'
import React, { useState }  from "react";
import Linkedin from "./linkedin-icon";
import Github from "./github-icon";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


export default function App() {

  return (

    <Navbar >
      
      <NavbarBrand >
        <Link color = "foreground" href="/">
        <h1 className="font-bold text-inherit">Alex Ayala</h1>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6" justify="end">
        <NavbarItem>
          <Link color="foreground" href="/resume">
            Resume
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="#" aria-current="page">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Linkedin/>
        </NavbarItem>
        <NavbarItem>
        <Github/>
        </NavbarItem>
        
      </NavbarContent>
      
    </Navbar>
    
  );
}