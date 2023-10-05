'use client'
import React, { useState }  from "react";

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
          <Link color="foreground" href="#">
            Resume
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="#" aria-current="page">
            Projects
          </Link>
        </NavbarItem>
        
      </NavbarContent>
      
    </Navbar>
  );
}