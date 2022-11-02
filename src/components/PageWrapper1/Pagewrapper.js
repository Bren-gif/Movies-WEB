export default function Pagewrapper(props){

    return(
        <div className="contenedor-principal">
		  <div id="preloader">
			  <img className="logo" src="images/logo1.png" alt="" width="119" height="58" />
			  <div id="status">
				  <span></span>
				  <span></span>
			  </div>
		  </div>
		  <div className="login-wrapper" id="login-content">
			  <div className="login-content">
				  <a href="#" className="close">x</a>
				  <h3>Acceso</h3>
				  <form method="post" action="#">
					  <div className="row">
						  <label for="username">
							  Nombre de usuario:
							  <input type="text" name="username" id="username" placeholder="Hugh Jackman" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$" required="required" />
						  </label>
					  </div>

					  <div className="row">
						  <label for="password">
							  Clave:
							  <input type="password" name="password" id="password" placeholder="******" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required="required" />
						  </label>
					  </div>
					  <div className="row">
						  <div className="remember">
							  <div>
								  <input type="checkbox" name="remember" value="Remember me" /><span>Remember me</span>
							  </div>
							  <a href="#">Olvidaste la contraseña ?</a>
						  </div>
					  </div>
					  <div className="row">
						  <button type="submit">Acceso</button>
					  </div>
				  </form>
				  <div className="row">
					  <p>O a través de las redes sociales</p>
					  <div className="social-btn-2">
						  <a className="fb" href="#"><i className="ion-social-facebook"></i>Facebook</a>
						  <a className="tw" href="#"><i className="ion-social-twitter"></i>twitter</a>
					  </div>
				  </div>
			  </div>
		  </div>
		  <div className="login-wrapper" id="signup-content">
			  <div className="login-content">
				  <a href="#" className="close">x</a>
				  <h3>Inscribirse</h3>
				  <form method="post" action="#">
					  <div className="row">
						  <label for="username-2">
							  Nombre de usuario:
							  <input type="text" name="username" id="username-2" placeholder="Hugh Jackman" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$" required="required" />
						  </label>
					  </div>

					  <div className="row">
						  <label for="email-2">
							  correo electrónico:
							  <input type="password" name="email" id="email-2" placeholder="" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required="required" />
						  </label>
					  </div>
					  <div className="row">
						  <label for="password-2">
							  Clave:
							  <input type="password" name="password" id="password-2" placeholder="" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required="required" />
						  </label>
					  </div>
					  <div className="row">
						  <label for="repassword-2">
							  Vuelva a escribir la clave:
							  <input type="password" name="password" id="repassword-2" placeholder="" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required="required" />
						  </label>
					  </div>
					  <div className="row">
						  <button type="submit">Inscribirse</button>
					  </div>
				  </form>
			  </div>
		  </div>

		  {props.children}
		  
	  </div>
    );
}