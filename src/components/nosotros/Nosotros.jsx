
import './Nosotros.css';

import user1 from './user1.png'
import user2 from './user2.png'
import user3 from './user3.png'
import vector from './Vector-opinion.png'

function Nosotros(){
    return(
        <><div class="nosotros" id="nosotros">
            Nuestro usuarios dicen...
        </div>
        <section id="opinion">
            <div class="cards carta1">
                <div class="card-content">
                <img src={vector} class="deg"></img>
                    <div class="image">
                    <img src={user1} class="fotop"></img>
                    </div>
                    <div class="name-profession">
                        <span class="name">Diego Rodríguez</span>
                    </div>
                    <div class="rating">
                        <i class="fas fa-star star5"></i>
                        <i class="fas fa-star star4"></i>
                        <i class="fas fa-star star3"></i>
                        <i class="fas fa-star star2"></i>
                        <i class="fas fa-star star1"></i>
                    </div>
                    <div class="bottom">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequatur
                        doloribus totam quo quibusdam saepe assumenda ad voluptates dolor aliquam.
                    </div>
                </div>
            </div>

            <div class="cards carta2">
                <div class="card-content">
                <img src={vector} class="deg"></img>
                    <div class="image">
                    <img src={user2} class="fotop"></img>
                    </div>
                    <div class="name-profession">
                        <span class="name">Diana García</span>
                    </div>
                    <div class="rating">
                        <i class="fas fa-star star5"></i>
                        <i class="fas fa-star star4"></i>
                        <i class="fas fa-star star3"></i>
                        <i class="fas fa-star star2"></i>
                        <i class="fas fa-star star1"></i>
                    </div>
                    <div class="bottom">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequatur
                        doloribus totam quo quibusdam saepe assumenda ad voluptates dolor aliquam.
                    </div>
                </div>
            </div>

            <div class="cards carta3">
                <div class="card-content">
                <img src={vector} class="deg"></img>
                    <div class="image">
                    <img src={user3} class="fotop"></img>
                    </div>
                    <div class="name-profession">
                        <span class="name">Andrés Hernández</span>
                    </div>
                    <div class="rating">
                        <i class="fas fa-star star5"></i>
                        <i class="fas fa-star star4"></i>
                        <i class="fas fa-star star3"></i>
                        <i class="fas fa-star star2"></i>
                        <i class="fas fa-star star1"></i>
                    </div>
                    <div class="bottom">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequatur
                        doloribus totam quo quibusdam saepe assumenda ad voluptates dolor aliquam.
                    </div>
                </div>
            </div>
        </section>
</>
    );
}

export default Nosotros;