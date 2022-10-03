
import './Ubicanos.css';
import imgmap from './imgmaps.png'

function Ubicanos() {
  return (
<>
<div class="maps">
    <h1>Ubícanos</h1>
</div>
    <img class="mapimg" src={imgmap}></img>
<footer>
    <h2>
        AVENIDA CARRERA 8 #12A - 42, BOGOTA D.C COLOMBIA
    </h2>
    <hr />
    <h2>
        +57 601 4567899
    </h2>
</footer>
</>

    );
}

export default Ubicanos;