import React from 'react'

import { motion, Variants } from 'framer-motion';

import { opacity, expand } from '../../anim/anim';



export default function Layout({children}:{children:React.ReactNode}) {



    const anim = (variants:Variants, custom?:number) => {

        return {

            initial: "initial",

            animate: "enter",

            exit: "exit",

            custom,

            variants

        }

    }



    const nombre = "Kevin"; // Tu nombre
    const letrasNombre = nombre.split(""); 

    return (

        <div className='page stairs' style={{backgroundColor:'white'}}>

            <motion.div {...anim(opacity)} className='transition-background'/>

            <div className='transition-container'>

                {

                    letrasNombre.map( (letra, i) => {

                        return (

                            <motion.div key={i} {...anim(expand, letrasNombre.length - i)}>
                                <h1>{letra}</h1>
                            </motion.div>

                        ) 

                    })

                }

            </div>

            {

                children

            }

        </div>

    )

}