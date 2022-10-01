import './Descripcion.css';

import imgn from './Hotelia negro vertical.svg'

function Descripcion(){
    return(

   <section class="container2">
   <p class="contai">
       Estamos ubicados en el barrio La Cabrera al norte de Bogotá , 
       en un contexto de lujo donde interactúan los negocios , el ocio y el descanso , 
       gracias a su estratégica ubicación rodeada de bancos , restaurantes de alta cocina , 
       centros comerciales , almacenes de lujo y emblemáticos parques para aprovechar la
       naturaleza entre la ciudad caminay y hacer un poco de deporte al aire libre están 
       el parque del Virrey y El Parque de la 93. Además de nuestro exclusivo diseño ,
       ponemos a tu disposición una oferta gastronómica tan sofisticada como saludable 
       a base de productos locales, cargados de lo mejor de la tradición colombiana . 
       </p>
       <img src={imgn}></img>

   </section>
    );
}

export default Descripcion;