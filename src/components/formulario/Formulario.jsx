import './Formulario.css';

import angie from './Angie.jpg'

function Formulario(){

return(
<>

<section class="formulario">

    <div class="form">
        <h2 class="titulo">Bienvenido, Angie Vargas</h2>

        <div class="column-1">
            <div class="profile">
                <img src={angie} class="profile"></img>
            </div>
        </div>

        <div class="column-2">
            <div class="form-group">
                <label for="TipoDoc">Tipo de documento</label>
                <input type="text" class="form-control" placeholder="Cédula de Ciudadanía"/>
            </div>

            <div class="form-group">
                <label for="Nombre">Nombres</label>
                <input type="text" class="form-control" placeholder="Angie Camila"/>
            </div>

            <div class="form-group">
                        <label for="fecha">Fecha nacimiento</label>
                        <input type="date" class="form-control" placeholder="10/08/1976"/>
                    </div>

                    <div class="form-check">
                        <h6>Género</h6>
                        <div class="genero">
                            <form class="checks">
                                <label class="radio-inline">
                                    <input type="radio" value="" name="genero" checked/>Mujer
                                </label>
                                <label class="radio-inline">
                                    <input type="radio" value="" name="genero"/>Hombre
                                </label>
                                <label class="radio-inline">
                                    <input type="radio" value="" name="genero"/>Otro
                                </label>
                            </form>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" placeholder="angievargas2@gmail.com"/>
                    </div>

                </div>

                <div class="column-3">
                    <div class="form-group">
                        <label for="NoDoc">Numero de documento</label>
                        <input type="text" class="form-control" placeholder="1025417456"/>
                    </div>

                    <div class="form-group">
                        <label for="Apellido">Apellidos</label>
                        <input type="text" class="form-control" placeholder="Vargas Pinzón"/>
                    </div>

                    <div class="form-group">
                        <label for="Pais">País de origen</label>
                        <input type="text" class="form-control" placeholder="Colombia"/>
                    </div>

                    <div class="form-group">
                        <label for="telefono">Teléfono de contacto</label>
                        <input type="text" class="form-control" placeholder="3135207460"/>
                    </div>
                </div>

                <div class="footer">
                    <button class="button">Actualizar</button>

                    <br/><br/>

                    <div class="contraseñas">
                        <div class="contraseña">
                            <label for="">Contraseña</label>
                            <input type="password" class="form-control"/>
                        </div>

                        <div class="confirmar">
                            <label for="">Confirmar contraseña</label>
                            <input type="password" class="form-control"/>
                        </div>
                    </div>
                    <button class="button">Cambiar</button>

           
     

        </div>
</div>

</section>    


</>
    

    );
}

export default Formulario;