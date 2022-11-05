import axios from 'axios'
import React, { useState } from 'react'
import '../css/contacto.css'


export const Contacto = () => {

    const [formConsulta , setFormConsulta ] = useState({
        frm_nombre:'',
        frm_cel:'',
        frm_email:'',
        frm_consulta:''
    })

    const [ statusRes , setStatusRes ] = useState('')
    const  [ refreshPage , setRefreshPage] = useState(false)

    const handleChange = (e) =>{
        setFormConsulta({
            ...formConsulta,
            [e.target.name]:e.target.value
        })
    }

    
    const handleSubmit = (e) =>{
        e.preventDefault()
        /*http://devalmendra.online/contacto/data */
         axios.post('https://devalmendra.online/contacto/data' , formConsulta)
         .then(output=>{
            console.log(output)
            setStatusRes(output.data.message)
            if(output.data.estado === 'ok'){
                setRefreshPage(true)
            }
         })   
         
    }

    if(refreshPage){
        setTimeout(()=>{
            window.location.reload()
        },3000)
    }

    return (
        <div>
            <div className='container-contacto'>
                <div>
                    <h2>Contacto</h2>
                </div>
                <div className='container-tel-form'>
                    <div className='contacto-tel-email'>
                        <ul>
                            <li>Whatsapp: 1136887781</li>
                            <li>Correo: devealmendra@gmail.com</li>
                            <li>LinkedIn: <a href='https://www.linkedin.com/in/devalmendra/' target='_blank'>/in/devalmendra/</a></li>
                        </ul>
                    </div>
                    <div className='contacto-formulario'>
                        <div className='contacto-form'>
                            <form onSubmit={handleSubmit}>
                                <label>Nombre</label>
                                <input
                                    type="text"
                                    name='frm_nombre'
                                    onChange={handleChange}
                                    placeholder='Tu Nombre'/>
                                <label>Celular</label>
                                <input
                                    type="number"
                                    name='frm_cel'
                                    onChange={handleChange}
                                    placeholder="Tu Celular"/>
                                <label>Correo</label>
                                <input
                                    type="email"
                                    name='frm_email'
                                    onChange={handleChange}
                                    placeholder="Tu Correo"/>
                                <label>Consulta</label>
                                <textarea
                                    type='text'
                                    name='frm_consulta'
                                    onChange={handleChange}
                                    height='300px'/>
                                <div className='container-button-contacto'>
                                    <input type='submit' value='Enviar' id='button-contacto'/>
                                </div>
                            </form>
                            <div>
                                <div>
                                    <span>{statusRes}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}