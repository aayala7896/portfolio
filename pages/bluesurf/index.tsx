import React from 'react';
import {Providers} from "../../app/providers";
import Navbar from "@/components/navbar"
import { title, subtitle } from "@/components/primitives";
import {Image,Spacer} from "@nextui-org/react"
export default function BlueSurf(){
    return(
        <div className = "dark text-foreground bg-background">
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
        <header>
            <Navbar/>
        </header>
        <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow"> 
            <h1 className={title()}>BlueSurf Company </h1>

            <Spacer y={8}/>
            <div className="flex inline-block">
                <Image
                    width={800}
                    src = "/bluesurf-photos/homepage-bluesurf.png"
                    alt = "bluesurf homepage photo"
                />
                <Spacer x ={8}/>
                <ul className = "justify-center"> 
                        <li className ={subtitle()}>Mock-up surf company allowing users to browse, add, & purchase items.</li>
                        <li className ={subtitle()}>Application was developed with Python,Django, Google cloud platform,
                            Django REST API, and Stripe API.
                        </li>
                        <li className ={subtitle()}>Django Rest API allowed optimization in updating items from the Company. </li>
                        <li className ={subtitle()}>Extremely succesful project in scope of funtionality. </li>
                </ul>

            </div>
            <Spacer y={8}/>

            <h2 className={title({class:"text-3xl lg:text-4xl"})}>Cart Page </h2>
            <Spacer y={4}/>
            <div className="flex inline-block">
                <Image
                    width= {600}
                    src = "/bluesurf-photos/cart-bluesurf.png"
                    alt = "bluesurf cart photo"
                />
                <Spacer x={8}/>
                <ul className="justify-center">
                    <li className={subtitle()}> Store products in a cart session</li>
                    <li className={subtitle()}> Add/Remove items</li>
                    <li className={subtitle()}> Update total cost</li>
                </ul>
            
            </div>
            <Spacer y={8}/>
            
            <h2 className={title({class:"text-3xl lg:text-4xl"})}>Rest API </h2>
            
            <Spacer y={4}/>
            <div className="flex inline-block">
            <Image
                width= {600}
                src = "/bluesurf-photos/entrylist-bluesurf.png"
                alt = "bluesurf entry photo"
            />
            <Spacer x={8}/>
            <ul className="justify-center">
                <li className={subtitle()}> Add/Remove Surfboards</li>
                <li className={subtitle()}> Update price/description/image</li>
                <li className={subtitle()}> Optimize the process of adding new products</li>
            </ul>
            
            </div>
            <Spacer y={8}/>
            
            <h2 className={title({class:"text-3xl lg:text-4xl"})}>Stripe API </h2>
            <Spacer y={4}/>
            <div className="inline-block">
                <Image
                    width= {1000}
                    src = "/bluesurf-photos/stripeapi-bluesurf.png"
                    alt = "bluesurf api photo"
                />
                <Spacer x={8}/>
                
                <p className={subtitle()}>- Process payments securely through Stripe API</p>
                <p className={subtitle()}>- Update price/description/image</p>
            </div>

        </main>
        </Providers>
        </div>
    );
}
