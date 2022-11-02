import React from 'react'
import '../css/header.css'


export const Header = () =>{
    return(
        <header>
            <div className='container-header'>
                <div className='subcontainer-header'>
                    <div>
                        <h1>DEV</h1>
                    </div>
                    <div>
                        <ul>
                            <li><a href='https://www.linkedin.com/in/devalmendra/' target='_blanck'>LinkedIn</a></li>
                            <li><a href='https://github.com/FxIvan' target='_blanck'>GitHub</a></li>
                            <li><a href='https://api.whatsapp.com/send/?phone=541136887781&text&type=phone_number&app_absent=0' target='_blanck'>Whatsapp</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}