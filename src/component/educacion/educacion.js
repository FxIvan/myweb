import React from 'react'
import '../css/educacion.css'
import coderHouse from '../../media/img/logoCoderHouse.svg'
import platzi from '../../media/img/platzi.svg'
import openenglish from '../../media/img/openenglish.svg'
import digitalHouse from '../../media/img/digitalHouse.svg'

export const Educacion = () => {
    return (
        <div className='container-educacion'>
            <div className='subcontainer-educacion'>
                <div>
                    <h2>Algunos sitios en donde me eduque</h2>
                </div>
                <div className='container-sitios-educacion'>
                    <div className='container-coder-platzi'>
                        <div>
                            <img src={coderHouse}/>
                        </div>
                        <div>
                            <img src={platzi}/>
                        </div>
                    </div>
                    <div className='container-open-digital'>
                        <div>
                            <img src={openenglish}/>
                        </div>
                        <div>
                            <img src={digitalHouse}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}