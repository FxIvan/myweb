import React from 'react'
import '../css/stack.css'
import {GrReactjs} from 'react-icons/gr';
import {SiCss3,SiExpress,SiProgress,SiGnubash} from 'react-icons/si';
import {AiFillHtml5} from 'react-icons/ai';
import {DiJavascript1, DiNodejsSmall} from 'react-icons/di';
import {BsFillBootstrapFill} from 'react-icons/bs';

export const Stack = () => {
    return (
        <div>
            <div className='container-stack'>
                <div>
                    <h2>Mi STACK</h2>
                </div>
                <div className='container-stack-icons'>
                    <div className='container-icons-frontend'>
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
                            <div className='box-container-2'>
                                <div className='icon-stack-3'>
                                    <AiFillHtml5/>
                                    <p>HTML</p>
                                </div>
                                <div className='icon-stack-4'>
                                    <DiJavascript1/>
                                    <p>JavaScript</p>
                                </div>
                            </div>
                            <div className='box-container-3'>
                                <div className='icon-stack-5'>
                                    <BsFillBootstrapFill/>
                                    <p>Bootstrap</p>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div className='container-icons-frontend'>
                        <div>
                            <div className='box-container-1'>
                                <div className='icon-stack-1'>
                                    <DiNodejsSmall/>
                                    <p>NodeJS</p>
                                </div>
                                <div className='icon-stack-2'>
                                    <SiExpress/>
                                    <p>Express</p>
                                </div>
                            </div>
                            <div className='box-container-2'>
                                <div className='icon-stack-3'>
                                    <SiProgress/>
                                    <p>PROGRESS 4GL</p>
                                </div>
                                <div className='icon-stack-4'>
                                <DiJavascript1/>
                                    <p>JavaScript</p>
                                </div>
                            </div>
                            <div className='box-container-3'>
                                <div className='icon-stack-5'>
                                    <SiGnubash/>
                                    <p>BASH</p>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
            
                </div>
            </div>
        </div>
    )
}