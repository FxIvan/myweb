import React from 'react'


export const Contacto = () =>{
    return(
        <div>
            <div>
                <div>
                    <h2>Contacto</h2>
                </div>   
                <div>
                    <div>
                        <ul>
                            <li>Whatsapp: 1136887781</li>
                            <li>Correo: devealmendra@gmail.com</li>
                        </ul>
                    </div>
                    <div>
                        <div>
                        <form onSubmit={handleSubmit}>
                    <label>Nombre</label>
                    <input type="text" name='frm_nombre' onChange={handleChange} placeholder='Tu Nombre'/>
                    <label>Celular</label>
                    <input type="number" name='frm_cel' onChange={handleChange} placeholder="Tu Celular"/>
                    <label>Correo</label>
                    <input type="email" name='frm_email' onChange={handleChange} placeholder="Tu Correo"/>
                    <label>Consulta</label>
                    <textarea type='text' name='frm_consulta' onChange={handleChange} height='300px'/>
                    <div className='container-button-contacto'>
                        <input type='submit' value='Enviar' id='button-contacto'/>
                    </div>
                </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}