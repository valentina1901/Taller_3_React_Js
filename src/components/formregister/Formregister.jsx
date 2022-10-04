import './Formregister.css';

function Formregister(){

return(
<>
{
<body class="cuerpecito">
    
<section class="formulario">

<div class="form">
    <h2 class="titulo">Regístrate</h2>

   
    <div class="column-2">
        <div class="form-group">
            <label for="TipoDoc">Tipo de documento</label>
            <input type="text" class="form-control"/>
        </div>

        <div class="form-group">
            <label for="Nombre">Nombres</label>
            <input type="text" class="form-control"/>
        </div>

        <div class="form-group">
                    <label for="fecha">Fecha de Nacimiento</label>
                    <input type="date" class="form-control"/>
                </div>

       

              

                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" placeholder="angievargas2@gmail.com"/>
                </div>

                
                <div class="form-group">
                    <label for="Pais">País de origen</label>
                    <input type="text" class="form-control" placeholder="Colombia"/>
                </div>

                <div class="contraseña">
                        <label for="">Contraseña</label>
                        <input type="password" class="form-control"/>
                    </div>

            </div>

            <div class="column-3">
                <div class="form-group">
                    <label for="NoDoc">Número de documento</label>
                    <input type="text" class="form-control" />
                </div>

                <div class="form-group">
                    <label for="Apellido">Apellidos</label>
                    <input type="text" class="form-control"/>
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
                </div> <br />


              

                <div class="form-group">
                    <label for="telefono">Teléfono de contacto</label>
                    <input type="text" class="form-control" placeholder="3135207460"/>
                </div>

                <div class="form-group">
                <label for="foto">Foto</label>
                <input type="file" class="form-control"/>
            </div>


                <div class="contraseñas">
                    

                    <div class="confirmar">
                        <label for="">Confirmar contraseña</label>
                        <input type="password" class="form-control"/>
                    </div>
                </div>

                <div class="footer">
            <a href="/home2" class="button"><button class="button">Ingresar</button></a>
        </div>
                </div>
             

       
 

    </div>


</section>    
</body> 
}
</>
    );
}

export default Formregister;