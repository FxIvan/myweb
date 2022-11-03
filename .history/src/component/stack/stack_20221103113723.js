import React from 'react'
import '../css/stack.css'
import { GrReactjs } from 'react-icons/gr';
import { SiCss3 } from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiJavascript1 } from 'react-icons/di';

export const Stack = () =>{
    return(
        <div>
            <div className='container-stack'>
                <div>
                    <h2>Mi STACK</h2>
                </div>
                <div>
                    <div>
                        <div>
                            <div>
                            <GrReactjs/>
                            <p>ReactJS</p>
                            </div>
                            <div>
                            <SiCss3/>
                            <p>CSS</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <AiFillHtml5/>
                                <p>HTML</p>
                            </div>
                            <div>
                                <DiJavascript1/>
                                <p>JavaScript</p>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}