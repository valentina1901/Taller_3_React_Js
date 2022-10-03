import './Section.css';

import campana from './hotelia campana.svg'
import angie from './Angie.jpg'

function Section(){

return(
<>
<body class="cuerpo">
    

<section class="dashboard">


<div class="menu_side" id="menu_side">

    <div class="logos">
        <div class="logo">
            <img src={campana} class="logo-1"></img>
            <img src={angie} class="logo-2"></img>
        </div>
    </div>

    <div class="options_menu">
        <a href="#" class="seleccion">
            <div class="opcion">
                <i class="fas fa-bed" title="Habitaciones"></i>
                <h6>Habitaciones</h6>
            </div>
        </a>
        <a href="#">
            <div class="opcion">
                <i class="fas fa-bell-concierge" title="Reservas"></i>
                <h6>Reservas</h6>
            </div>
        </a>
        <a href="#">
            <div class="opcion">
                <i class="fas fa-bed" title="Habitaciones"></i>
                <h6>Habitaciones</h6>
            </div>
        </a>
        <a href="#">
            <div class="opcion">
                <i class="fas fa-bell-concierge" title="Reservas"></i>
                <h6>Reservas</h6>
            </div>
        </a>
        <a href="indexGrid.html">
            <div class="opcion" id="exit">
                <i class="fas fa-arrow-right-from-bracket"></i>
                <h6>Cerrar sesión</h6>
            </div>
        </a>
    </div>

</div>

</section>
</body>
</>

    

    );
}

export default Section;