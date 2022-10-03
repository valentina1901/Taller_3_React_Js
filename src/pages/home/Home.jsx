
import Nav from '../../components/nav/Nav';
import Imgindex from '../../components/imgindex/Imgindex';
import Descripcion from '../../components/descripcion/Descripcion';
import Sectindex from '../../components/sectindex/Sectindex';
import Ubicanos from '../../components/ubicanos/Ubicanos';
import Nosotros from '../../components/nosotros/Nosotros';
import Footerindex from '../../components/footerindex/Footerindex';


function Home() {
  return (
    <div>
    <Nav />
    <Imgindex />
    <Descripcion />
    <Sectindex/>
    <Ubicanos/>
    <Nosotros/>
    <Footerindex/>
    </div>
  );
}

export default Home;
