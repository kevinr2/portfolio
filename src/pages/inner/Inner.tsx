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



    const nbOfColumns = 5

    return (

        <div className='page stairs' style={{backgroundColor:'white'}}>

            <motion.div {...anim(opacity)} className='transition-background'/>

            <div className='transition-container'>

                {

                    [...Array(nbOfColumns)].map( (_, i) => {

                        return (

                            <motion.div key={i} {...anim(expand, nbOfColumns - i)}/>

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