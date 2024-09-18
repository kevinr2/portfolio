import React from 'react'
import Inner from '../inner/Inner'
import Head from 'next/head'





export default function About() {
  return (
    <>
    <Head>
        <title> Revelo</title>
    </Head>
  <Inner >

           <div className='w-[100%] h-[100vh] flex justify-between items-center'>
            <h1>
              <p>Soy un apasionado desarrollador frontend con un enfoque claro en la creación de experiencias web intuitivas y visualmente impactantes. Me gradué como tecnólogo en análisis y desarrollo de sistemas de información en el SENA, donde adquirí una base sólida en el desarrollo de software. Actualmente, soy estudiante de ingeniería de sistemas, lo que me permite seguir ampliando mis conocimientos y habilidades en un entorno cada vez más dinámico y competitivo. Mi objetivo es estar a la vanguardia de las tecnologías emergentes y contribuir a proyectos que hagan la diferencia.</p><br />
              <p>Me especializo en el desarrollo de soluciones frontend utilizando herramientas modernas y eficientes. Trabajo con tecnologías como React, Next.js y React Native, lo que me permite construir aplicaciones web y móviles dinámicas y escalables. También utilizo Framer Motion para integrar animaciones fluidas y atractivas, y frameworks como Tailwind CSS y Material UI para crear interfaces responsive y accesibles, adaptadas a las necesidades del cliente.</p><br />
              <p>Además, me enfoco en asegurar la calidad de cada proyecto a través del testing riguroso. Esto no solo mejora el rendimiento de las aplicaciones, sino que garantiza una experiencia fluida y libre de errores. Me siento cómodo trabajando en equipos colaborativos, donde cada detalle cuenta, y disfruto del proceso de transformar ideas en soluciones digitales efectivas que impacten de manera positiva tanto en los usuarios como en los negocios.</p>
            </h1>
        </div>
 </Inner>
    </>
  )
}
