'use client'
import React from 'react';
import { title, subtitle } from "@/components/primitives";
import {Spacer} from "@nextui-org/react";
import {Divider} from "@nextui-org/react";
import Link from 'next/link'
import {Card, CardBody, Image, Button, Progress} from "@nextui-org/react";
import { projectsData } from '../data/projectData';

function ProjectCard({project}){
    return (
    <Card isBlurred className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]" shadow="sm">
                <CardBody>
                    <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-12 justify-center">
                        <div className="relative col-span-6 md:col-span-6">
                            <Image
                            isZoomed
                            height={200}
                            width="100%"
                            alt="bluesurf"
                            src={project.image}
                            />
                        </div>

                        <div className="relative col-span-6 md:col-span-6">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-0">
                                    <h1 className="text-large font-medium ">{project.title} ({project.technolgy})</h1>
                                    
                                    <Divider className="my-2" />
                                </div>
                               
                
                            </div>
                            <div className='relative col-span-6 md:col-span-6'>
                                <li className="text-small text-foreground/80">{project.description1}</li>
                                <li className="text-small text-foreground/80">{project.description2}</li>
                            </div>
                        </div>
                    </div>

                </CardBody>
            </Card>
            );
}

function Projects(){

    return (
        <div>
            <h2 className={title()}>Project Showcase</h2>
            <Divider className="my-4" />

            <div class = "grid grid-cols-2 gap-4">
            {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
      ))}

        

          

            </div>

     
        </div>
    );
}

export default Projects;


 