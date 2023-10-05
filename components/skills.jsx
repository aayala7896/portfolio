import React from 'react';
import { title, subtitle } from "@/components/primitives";
import {Image,Spacer} from "@nextui-org/react";
import {Divider,Listbox,ListboxItem} from "@nextui-org/react";
import "@/styles/globals.css";


function skills(){

    return (
        <skills>
            <h2 className={title()}>Skills</h2>
            <Divider className="my-4" />
            <div className="flex justify-between"> 
              
              <ul class="list-disc w-1/2 pl-4 text-xl">
                <li className="mb-2"> 
                    <span className="font-semibold">C++ (4 yrs experience)</span>
                </li>
                <li className="mb-2">
                    <span className="font-semibold">C (2 yrs experience)</span>
                </li>
                <li className="mb-2"> 
                <span className="font-semibold">Python(2 yrs experience)</span>
                </li>
               
              </ul>

              <ul class="list-disc w-1/2 pl-4 text-xl">
                <li className="mb-2"> 
                    <span className="font-semibold">Django Framework (1 yrs experience)</span>
                </li>
                <li className="mb-2">
                    <span className="font-semibold">HTML/CSS (2 yrs experience)</span>
                </li>
                <li className="mb-2"> 
                <span className="font-semibold">Bootstrap (1 yr experience)</span>
                </li>
               
              </ul>
              
            </div>
        </skills>
    );
}

export default skills;