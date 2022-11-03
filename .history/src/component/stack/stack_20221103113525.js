import React from 'react'
import '../css/stack.css'
import { GrReactjs } from 'react-icons/gr';
import { SiCss3 } from 'react-icons/si';

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
                            <p>SiCss3</p>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}