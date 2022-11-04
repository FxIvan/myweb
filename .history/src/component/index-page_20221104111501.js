import React from 'react'
import { Contacto } from './contacto/contacto'
import { Header } from './header/header'
import { Stack } from './stack/stack'

export const IndexPage = () =>{
    return(
        <div>
            <Header/>
            <Stack/>
            <Contacto/>
        </div>
    )
}