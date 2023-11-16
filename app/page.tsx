"use client"
import NextLink from "next/link";
import * as React  from "react";
import {Providers} from "./providers";
import {Image,Spacer} from "@nextui-org/react";
import About from '../components/aboutme.jsx';
import Header  from '../components/header.jsx';
import Skills from '../components/skills.jsx';
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

import Projects from "../components/projects"
import SkillsCard from "../components/skills-cards"





export default function Home() {
	return(
		<Providers>				 
      <main className=" flex flex-col justify-center items-center">
	    <Header/>

     

	  <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="p-4">
          <img
		  	width={200}
            src="https://aayala7896.github.io/portfolio/IMG_3503.jpg"
            alt="Profile Photo"
            className="rounded-lg shadow-lg"
          />
        

        </div>
        
        <div className="p-4 text-center">
          <p className="text-2xl font-semibold">About Me</p>
          <p className="text-gray-600">
            I'm a passionate full stack developer with a strong foundation in
            web technologies. I love creating beautiful and user-friendly
            interfaces.
          </p>
          <Link href="/about">
            <a className="text-blue-500 hover:underline mt-4 inline-block">
              Learn more
            </a>
          </Link>
        </div>
      </section>
		
		
		
     
	  <section className="mt-12 text-center">
		<h2 className={title()}>Skills</h2>
    <SkillsCard/>
			<div className="flex flex-wrap justify-center mt-4">
			<Skills/>
			</div>
			
		</section>
		<Spacer y={6}/>
		
		
		<Projects/>
  
		
      </main>
    </Providers>
	);
}
