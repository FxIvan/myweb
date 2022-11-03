import React from 'react'
import '../css/stack.css'
import { GrReactjs } from 'react-icons/gr';
import { SiCss3 } from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiJavascript1 } from 'react-icons/di';
import { BsFillBootstrapFill } from 'react-icons/bs';

export const Stack = () =>{
    return(
        <div>
            <div className='container-stack'>
                <div>
                    <h2>Mi STACK</h2>
                </div>
                <div>
                    <div>
                        <div className='box-container-1'>
                            <div className='icon-stack-1'>
                            <GrReactjs/>
                            <p>ReactJS</p>
                            </div>
                            <div className='icon-stack-2'>
                            <SiCss3/>
                            <p>CSS</p>
                            </div>
                        </div>
                        <div  className='box-container-2'>
                            <div>
                                <AiFillHtml5/>
                                <p>HTML</p>
                            </div>
                            <div>
                                <DiJavascript1/>
                                <p>JavaScript</p>
                            </div>
                        </div>
                        <div className='box-container-3'>
                            <div>
                                <BsFillBootstrapFill/>
                                <p>Bootstrap</p>
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