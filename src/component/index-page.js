import React from 'react'
import { Contacto } from './contacto/contacto'
import { Educacion } from './educacion/educacion'
import { Footer } from './footer/footer'
import { Header } from './header/header'
import { Stack } from './stack/stack'

export const IndexPage = () =>{
    return(
        <div>
            <Header/>
            <Stack/>
            <Contacto/>
            <Educacion/>
            <Footer/>
        </div>
    )
}