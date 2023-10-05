"use client"
import NextLink from "next/link";
import * as React  from "react";
import {Providers} from "./providers";
import {Image,Spacer} from "@nextui-org/react";
import About from '../components/aboutme.jsx';
import Header  from '../components/header.jsx';
import Projects from '../components/projects.jsx';
import Skills from '../components/skills.jsx';
import "@/styles/globals.css";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";


export default function Home() {
	return(
		<Providers>				 
      <main className="dark text-foreground bg-background">
		<div className="flex justify-center">
			<div>
				<Image width = {200} alt= "Profile Photo" src = "/IMG_3503.jpg"/>
				<Header/>
			</div>
			<Spacer x={8}/>
			<div className="inline-block max-w-lg text-center justify-center">
				<About/>
			</div>
		</div>
		<Spacer y={8}/>
		<div>
			<Projects/>
		</div>
		<div>
			<Skills/>
		</div>
      </main>
    </Providers>
	);
}
