import './Formregister.css';




function Register(){

return(
<>
<section class="formulario">


        <h2 class="titulo">Regístrate</h2>

        <div class="form">


            <div class="form-group">
                <label for="TipoDoc">Tipo de documento</label>
                <input type="text" class="form-control" placeholder="Escoja una opción"/>
            </div>

            <div class="form-group">
                <label for="NoDoc">Número de documento</label>
                <input type="text" class="form-control"/>
            </div>

            <div class="form-group">
                <label for="Nombre">Nombres</label>
                <input type="text" class="form-control"/>
            </div>

            <div class="form-group">
                <label for="Apellido">Apellidos</label>
                <input type="text" class="form-control"/>
            </div>

            <div class="form-group">
                <label for="fecha">Fecha nacimiento</label>
                <input type="date" class="form-control"/>
            </div>

            <div class="form-check">
                <h6>Género</h6>
                <div class="genero">
                    <form class="checks">
                        <label class="radio-inline">
                            <input type="radio" value="" name="genero"/>Mujer
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
                <input type="email" class="form-control"/>
            </div>

            <div class="form-group">
                <label for="telefono">Teléfono de contacto</label>
                <input type="text" class="form-control"/>
            </div>

            <div class="form-group">
                <label for="Pais">País de origen</label>
                <input type="text" class="form-control"/>
            </div>

            <div class="form-group">
                <label for="foto">Foto</label>
                <input type="file" class="form-control"/>
            </div>

            <div class="contraseña">
                <label for="">Contraseña</label>
                <input type="password" class="form-control"/>
            </div>

            <div class="confirmar">
                <label for="">Confirmar contraseña</label>
                <input type="password" class="form-control"/>
            </div>

        </div>



        <div class="form-1">


            <div class="column-1">
                <div class="form-group">
                    <label for="TipoDoc">Tipo de documento</label>
                    <input type="text" class="form-control" placeholder=""/>
                </div>

                <div class="form-group">
                    <label for="Nombre">Nombres</label>
                    <input type="text" class="form-control" placeholder=""/>
                </div>

                <div class="form-group">
                    <label for="fecha">Fecha nacimiento</label>
                    <input type="date" class="form-control" placeholder=""/>
                </div>

                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" placeholder=""/>
                </div>

                <div class="form-group">
                    <label for="Pais">País de origen</label>
                    <input type="text" class="form-control" placeholder=""/>
                </div>

                <div class="form-group">
                    <label for="">Contraseña</label>
                    <input type="password" class="form-control"/>
                </div>

            </div>



            <div class="column-2">
                <div class="form-group">
                    <label for="NoDoc">Numero de documento</label>
                    <input type="text" class="form-control" placeholder=""/>
                </div>

                <div class="form-group">
                    <label for="Apellido">Apellidos</label>
                    <input type="text" class="form-control" placeholder=""/>
                </div>

                <div class="form-check">
                    <p>Género</p>
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
                    <label for="telefono">Teléfono de contacto</label>
                    <input type="text" class="form-control" placeholder=""/>
                </div>

                <div class="form-group">
                    <label for="foto">Foto</label>
                    <input type="file" class="form-control"/>
                </div>

                <div class="form-group">
                    <label for="">Confirmar contraseña</label>
                    <input type="password" class="form-control"/>
                </div>
            </div>
        </div>

        <div class="footer">
            <label><input type="checkbox" value="" name="terminos">Acepto términos y condiciones</input></label>
            <a href="dashboard.html" class="button"><button class="button">Ingresar</button></a>
        </div>

    </section>
</>
    );
}

export default Register;