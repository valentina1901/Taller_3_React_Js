
import './Sectindex.css';
import Feature from './Cardindex.jsx';

function Sectindex(){
    return(
//props
    <section id="features">
    <h2 class="feature-title">Razones por las que disfrutarás quedarte con nosotros</h2>
    <div class="feature-description">
        <Feature
        icono="fa-solid fa-bell-concierge"
        texto="Lorem ipsum dolor"
        background={true}/>
        <Feature
        icono="fa-solid fa-bed"
        texto="Lorem ipsum dolor"
        background={false}/>
         <Feature
        icono="fa-solid fa-wifi"
        texto="Lorem ipsum dolor"
        background={true}/>
        <Feature
        icono="fa-solid fa-dumbbell"
        texto="Lorem ipsum dolor"
        background={false}/>
    </div>
    
   
</section>

);
}

export default Sectindex;