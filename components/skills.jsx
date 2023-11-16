import React from 'react';
import { title, subtitle } from "@/components/primitives";
import {Image,Spacer} from "@nextui-org/react";
import {Divider,Listbox,ListboxItem} from "@nextui-org/react";
import {Chip} from "@nextui-org/react";


function Skills(){
    const skills = ["C++","C    ","Python","Django Framework","HTML/CSS","Bootstrap"]
    return (
        <skills>
            <Divider className="my-4" />
            
            <div className="p-4 ">
            {skills.map((skill,index) => ( 
              <Chip key = {index} color='primary' size="lg" className = "m-2" style={{ width: "200px" }}>
                {skill}
              </Chip>
            ))}
              
             

             
              
            </div>
            
        </skills>
    );
}

export default Skills;