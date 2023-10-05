'use client'
import React from 'react';
import { title, subtitle } from "@/components/primitives";
import {Image,Spacer} from "@nextui-org/react";
import {Divider} from "@nextui-org/react";
import "@/styles/globals.css";


function projects(){

    return (
        <projects>
            <h2 className={title()}>Project Showcase</h2>
            <Divider className="my-4" />
            <div className="flex justify-center"> 
                <a href="/bluesurf">
                <button className="project1">
                <Image
                    isZoomed
                    width={340}
                    alt="bluesurf"
                    src="/bluesurf.png"
                />
                <h1 className={subtitle()}> Blue Surf</h1>
                </button>
                </a>
                <Spacer x={4}/>
                <a href="/debtsupervisor">
                <button className="project2">
                <Image
                    isZoomed
                    width={340}
                    alt="Debtsupervisor zoom"
                    src="/DebtSupervisor.png"
                />  
                <h1 className={subtitle()}> Debt Supervisor</h1>
                </button>
                </a>
                <Spacer x={4}/>
                <a href = "/threadanalysis">
                <button className="project3">

                <Image
                    isZoomed
                    width={340}
                    alt="Thread analysis zoom"
                    src="/ThreadAnalysis.png"
                />
                <h1 className={subtitle()}>Multi-Thread Analysis</h1>
                </button>
                </a>
            </div>
        </projects>
    );
}

export default projects;