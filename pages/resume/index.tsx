import React from 'react';
import "../../styles/globals.css"
import {Providers} from "../../app/providers";
import Navbar from "@/components/navbar"
import { title, subtitle } from "@/components/primitives";
import {Image,Spacer} from "@nextui-org/react"
import {Card, CardHeader, CardBody, CardFooter, Button} from "@nextui-org/react";
export default function BlueSurf(){
    return(
        
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
        <header>
            <Navbar/>
        </header>
        <main className="container mx-auto max-w-7xl pt-16 px-12 flex-grow"> 
            <div>
            <h1 className={title()}>Resume </h1>
            </div>
            <Spacer y={4}/>
            
            <Card isFooterBlurred className="w-full h-[100%] col-span-12 sm:col-span-5">
            
           
                    <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full scale-95 object-cover"
                src="/RESUME.jpg"
            />
            <CardFooter className="absolute bg-zinc/30 top-0 z-10 border-t-1 border-zinc-100/50 ">
            <Button className="text-tiny" color="primary" radius="full" size="sm">
                        Download PDF
            </Button>
            </CardFooter>
            </Card>
        </main>
        </Providers>
      
    );
}