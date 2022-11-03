import React from 'react'
import cohete from '../../media/img/coheteSection.svg'
import '../css/header.css'


export const Section1 = () =>{
    return(
        <div>
            <div className='container-presentacion'>
                <div className='pesentacion-img'>
                    <img src={cohete}/>
                </div>
                <div className='presentacion-text'>
                    <div>
                        <p>Bienvenido a mi Pagina Web, me llamo Ivan y soy Desarrollador de aplicaciones web manejando un stack que me permite desarrollar una página desde cero.Tengo experiencia en monitoreo de servidores CentOS además de desarrollar herramientas en lenguaje de programación PROGRESS, actualmente fuera de lo laboral me encuentro desarrollando con el stack MERN y desplegando mi backend en servidores Ubuntu. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}