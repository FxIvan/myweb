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
                            <form>
                                <label>Correo</label>
                                <input type='text' onChange={handleChange}/>
                                <label>Telefono</label>
                                <input/>
                                <label>Consulta</label>
                                <input/>
                                <input type='submit' value='Enviar'/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}