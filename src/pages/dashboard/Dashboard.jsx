import './Dashboard.css';

import campana from './hotelia campana.svg'
import angie from './Angie.jpg'

function Dashboard(){

return(
<>
    <div class="logos">
        <div class="logo">
            <img src={campana} class="logo-1"></img>
            <img src={angie} class="logo-2"></img>
        </div>
    </div>
</>
    

    );
}

export default Dashboard;