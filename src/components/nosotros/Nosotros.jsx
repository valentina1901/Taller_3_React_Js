
import './Nosotros.css';

import user1 from './user1.png'
import user2 from './user2.png'

function Nosotros(){
    return(
        <>
        <section id="opinion">
              <h2 class="op-title">
                  Nuestros usuarios dicen...
              </h2>
              <div class="op-description">
                  <div class="op">
                      <div class="user">
                    <img src={user1} class="fotop"></img>
                          <div class="ranking">
                              <h3>Diego Rodríguez</h3>
                              <div class="star">
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star" id="check"></i>
                              </div>
      
                          </div>
                          
                      </div>
      
                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et doloremque accusantium, earum distinctio officiis tenetur quos quas a, debitis architecto non tempore, id mollitia! Accusantium nam ea explicabo perferendis!</p>
                  </div>
                  <div class="op">
                      <div class="user">
                    <img src={user2} class="fotop"></img>
                              <div class="ranking">
                                  <h3>Diana García</h3>
                                  <div class="star">
                                      <i class="fa-solid fa-star"></i>
                                      <i class="fa-solid fa-star"></i>
                                      <i class="fa-solid fa-star"></i>
                                      <i class="fa-solid fa-star"></i>
                                      <i class="fa-solid fa-star" id="check"></i>
                                  </div>
                              </div>
                      </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et doloremque accusantium, earum distinctio officiis tenetur quos quas a, debitis architecto non tempore, id mollitia! Accusantium nam ea explicabo perferendis!</p>
                  </div>
      
                  <div class="op">
                      <div class="user">
                      <img src={user1} class="fotop"></img>
                          <div class="ranking">
                              <h3>Diego Rodríguez</h3>
                              <div class="star">
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star"></i>
                              </div>
                              
                          </div>
                          
                      </div>
      
                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et doloremque accusantium, earum distinctio officiis tenetur quos quas a, debitis architecto non tempore, id mollitia! Accusantium nam ea explicabo perferendis!</p>
                  </div>
                  </div>
          </section>
        
</>
    );
}

export default Nosotros;