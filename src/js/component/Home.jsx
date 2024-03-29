//import react into the bundle
import React from "react";
import Nav from "./nav.jsx"
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

const Home = () => {
    return (
        <div className="text-center">
            <div className="container1">
                <Nav props= {navLanding}/>
            </div>
            <div className="container2">
                <Jumbotron props= {jumbotronLanding}/>
            </div>
            <div className="row justify-content-center gap-3">
                <Card props= {cardLanding}/>
            </div>
            <div className="container3">
                <Footer/>
            </div>
        </div>
    );
};

const navLanding = {
    tituloNav:"MUSICALIA",
    link1:"BLINK-182",
    link2:"LINKIN-PARK",
    link3:"AEROSMITH",
    link4:"SUM-41"
};

const jumbotronLanding = {
    tituloJumbotron:"¡Los mejores Grupos Musicales!",
    tema1:" Imagino que estás interesado en discutir sobre estos grupos musicales icónicos. Cada uno de ellos ha dejado una marca indeleble en la historia de la música en su propio estilo y género. Permíteme darte un breve resumen de cada uno",
    tema2:"Cada uno de estos grupos ha dejado una huella distintiva en la historia de la música, y sus contribuciones siguen siendo admiradas por fanáticos de todo el mundo. ¿Hay algo específico que te gustaría discutir sobre ellos?",
    botonJumbotron:"Contacta con nosotros"
};

const cardLanding = [
    {
        imagenCard:"/workspaces/Landing-Page-con-React-ManulPrian/src/imagenes/blink-182.jpg",
        tituloCard:"BLINK-182",
        descripcionCard:"Conocidos por su estilo de pop punk, Blink-182 es famoso por sus letras ingeniosas y pegajosas, así como por su energía en el escenario. Canciones como All the Small Things y What's My Age Again? los catapultaron a la fama en la década de 1990 y los convirtieron en una de las bandas más influyentes del género.",
        botonCard:"Mi Favorito"
    },
    {
        imagenCard:"https://www.mondosonoro.com/wp-content/uploads/2020/10/linkin-park-promo.jpg",
        tituloCard:"LINKIN-PARK",
        descripcionCard:"Famosa por fusionar elementos de rock alternativo, metal y electrónica en su música, Linkin Park se convirtió en una de las bandas más influyentes de la década de 2000. Con álbumes como Hybrid Theory y Meteora, la banda produjo éxitos como In the End y Numb, que resuenan con muchas personas por su potencia emocional y líricas introspectivas.",
        botonCard:"Mi Favorito"  
    },
    {
        imagenCard:"https://www.mondosonoro.com/wp-content/uploads/2015/03/aerosmith-wallpapers-6_0.jpg",
        tituloCard:"AEROSMITH",
        descripcionCard:"Esta legendaria banda de rock estadounidense ha estado en la escena desde la década de 1970. Con éxitos como Dream On, Sweet Emotion y Walk This Way, Aerosmith ha vendido millones de álbumes en todo el mundo y ha sido un pilar en la escena del rock durante décadas.",
        botonCard:"Mi Favorito"  
    },
    {
        imagenCard:"https://dynamicmedia.livenationinternational.com/Media/z/n/q/4be0274d-b77b-4fab-b39f-71e0d37979dc.jpg",
        tituloCard:"SUM-41",
        descripcionCard:"Surgiendo en la escena del pop punk a finales de los 90 y principios de los 2000, Sum 41 rápidamente ganó reconocimiento por su estilo único y sus letras a menudo humorísticas pero a veces serias. Canciones como Fat Lip y In Too Deep son himnos de una generación que disfrutaba del punk y el rock alternativo.",
        botonCard:"Mi Favorito"  
    }
];


export default Home;

