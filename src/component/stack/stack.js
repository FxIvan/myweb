import React from 'react'
import '../css/stack.css'
import {GrReactjs} from 'react-icons/gr';
import {
    SiCss3,
    SiExpress,
    SiProgress,
    SiGnubash,
    SiMongodb,
    SiMysql,
    SiUbuntu,
    SiDigitalocean,
    SiPostman,
    SiHeroku,
    SiJirasoftware
} from 'react-icons/si';
import {AiFillHtml5} from 'react-icons/ai';
import {DiJavascript1, DiNodejsSmall, DiGoogleCloudPlatform} from 'react-icons/di';
import {BsFillBootstrapFill} from 'react-icons/bs';
import {FaCentos} from 'react-icons/fa';
import {AiFillGithub} from 'react-icons/ai';
import {FiGitlab} from 'react-icons/fi';

export const Stack = () => {
    return (
        <div>
            <div className='container-stack'>
                <div className='title-container-stack'>
                    <h2>Mi STACK</h2>
                </div>
                <div>
                    <div className='container-stack-icons'>
                        <div className='container-icons-frontend'>
                            <div className='subcontainer-icons-mb'>
                                <div className='box-container-1'>
                                    <div className='icon-stack-1'>
                                        <GrReactjs size={40}/>
                                        <p>ReactJS</p>
                                    </div>
                                    <div className='icon-stack-2'>
                                        <SiCss3 size={40}/>
                                        <p>CSS</p>
                                    </div>
                                </div>
                                <div className='box-container-2'>
                                    <div className='icon-stack-3'>
                                        <AiFillHtml5 size={40}/>
                                        <p>HTML</p>
                                    </div>
                                    <div className='icon-stack-4'>
                                        <DiJavascript1 size={40}/>
                                        <p>JS</p>
                                    </div>
                                </div>
                                <div className='box-container-3'>
                                    <div className='icon-stack-5'>
                                        <BsFillBootstrapFill size={40}/>
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
                                        <DiNodejsSmall size={40}/>
                                        <p>NodeJS</p>
                                    </div>
                                    <div className='icon-stack-2'>
                                        <SiExpress size={40}/>
                                        <p>Express</p>
                                    </div>
                                </div>
                                <div className='box-container-2'>
                                    <div className='icon-stack-3'>
                                        <SiProgress size={40}/>
                                        <p>PROGRESS 4GL</p>
                                    </div>
                                    <div className='icon-stack-4'>
                                        <DiJavascript1 size={40}/>
                                        <p>JS</p>
                                    </div>
                                </div>
                                <div className='box-container-3'>
                                    <div className='icon-stack-5'>
                                        <SiGnubash size={40}/>
                                        <p>BASH</p>
                                    </div>
                                    <div className='icon-stack-6'>
                                        <SiJirasoftware size={40}/>
                                        <p>Jira</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='container-icons-frontend'>
                            <div>
                                <div className='box-container-1'>
                                    <div className='icon-stack-1'>
                                        <SiMongodb size={40}/>
                                        <p>MongoDB</p>
                                    </div>
                                    <div className='icon-stack-2'>
                                        <SiMysql size={40}/>
                                        <p>MySQL</p>
                                    </div>
                                </div>
                                <div className='box-container-2'>
                                    <div className='icon-stack-3'>
                                        <AiFillGithub size={40}/>
                                        <p>GitHub</p>
                                    </div>
                                    <div className='icon-stack-4'>
                                        <FiGitlab size={40}/>
                                        <p>GitLab</p>
                                    </div>
                                </div>
                                <div className='box-container-3'>
                                    <div className='icon-stack-5'></div>
                                </div>
                            </div>
                        </div>

                        <div className='container-icons-frontend'>
                            <div>
                                <div className='box-container-1'>
                                    <div className='icon-stack-1'>
                                        <SiUbuntu size={40}/>
                                        <p>Ubuntu</p>
                                    </div>
                                    <div className='icon-stack-2'>
                                        <FaCentos size={40}/>
                                        <p>CentOS</p>
                                    </div>
                                </div>
                                <div className='box-container-2'>
                                    <div className='icon-stack-3'>
                                        <SiDigitalocean size={40}/>
                                        <p>Digital Ocean</p>
                                    </div>
                                    <div className='icon-stack-4'>
                                        <DiGoogleCloudPlatform size={40}/>
                                        <p>GCP</p>
                                    </div>
                                </div>
                                <div className='box-container-3'>
                                    <div className='icon-stack-5'>
                                        <SiPostman size={40}/>
                                        <p>Postman</p>
                                    </div>
                                    <div className='icon-stack-6'>
                                        <SiHeroku size={40}/>
                                        <p>Heroku</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}