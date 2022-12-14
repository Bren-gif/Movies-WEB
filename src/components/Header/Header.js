import React from 'react'

const Header = () => {
  return (
    <header className="ht-header">
			  <div className="container">
				  <nav className="navbar navbar-default navbar-custom">
					  <div className="navbar-header logo">
						  <div className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
							  <span className="sr-only">Navegación de palanca</span>
							  <div id="nav-icon1">
								  <span></span>
								  <span></span>
								  <span></span>
							  </div>
						  </div>
						  <a href="index-2.html"><img className="logo" src="images/logo1.png" alt="" width="119" height="58" /></a>
					  </div>
					  <div className="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
						  <ul className="nav navbar-nav flex-child-menu menu-left">
							  <li className="hidden">
								  <a href="#page-top"></a>
							  </li>
							  <li className="dropdown first">
								  <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown">
									  Home <i className="fa fa-angle-down" aria-hidden="true"></i>
								  </a>
								  <ul className="dropdown-menu level1">
									  <li><a href="index-2.html">Home 01</a></li>
									  <li><a href="homev2.html">Home 02</a></li>
									  <li><a href="homev3.html">Home 03</a></li>
								  </ul>
							  </li>
							  <li className="dropdown first">
								  <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
									  películas<i className="fa fa-angle-down" aria-hidden="true"></i>
								  </a>
								  <ul className="dropdown-menu level1">
									  <li className="dropdown">
										  <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Movie grid<i className="ion-ios-arrow-forward"></i></a>
										  <ul className="dropdown-menu level2">
											  <li><a href="moviegrid.html">Grilla de película</a></li>
											  <li><a href="moviegridfw.html">Cuadrícula de película de ancho completo</a></li>
										  </ul>
									  </li>
									  <li><a href="movielist.html">Lista de películas</a></li>
									  <li><a href="moviesingle.html">Única película</a></li>
									  <li className="it-last"><a href="seriessingle.html">Serie soltera</a></li>
								  </ul>
							  </li>
							  <li className="dropdown first">
								  <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
									  famosos <i className="fa fa-angle-down" aria-hidden="true"></i>
								  </a>
								  <ul className="dropdown-menu level1">
									  <li><a href="celebritygrid01.html">Grilla de celebridades 01</a></li>
									  <li><a href="celebritygrid02.html">Grilla de celebridades 02 </a></li>
									  <li><a href="celebritylist.html">Lista de celebridades</a></li>
									  <li className="it-last"><a href="celebritysingle.html">Celebridad soltera</a></li>
								  </ul>
							  </li>
							  <li className="dropdown first">
								  <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
									  noticias <i className="fa fa-angle-down" aria-hidden="true"></i>
								  </a>
								  <ul className="dropdown-menu level1">
									  <li><a href="bloglist.html">Lista de Blog</a></li>
									  <li><a href="bloggrid.html">Grilla de Blog</a></li>
									  <li className="it-last"><a href="blogdetail.html">Detalles del blog</a></li>
								  </ul>
							  </li>
							  <li className="dropdown first">
								  <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
									  comunidad <i className="fa fa-angle-down" aria-hidden="true"></i>
								  </a>
								  <ul className="dropdown-menu level1">
									  <li><a href="userfavoritegrid.html">Grilla favorita del usuario</a></li>
									  <li><a href="userfavoritelist.html">Lista favorita del usuario</a></li>
									  <li><a href="userprofile.html">Perfil del usuario</a></li>
									  <li className="it-last"><a href="userrate.html">Tasa de usuario</a></li>
								  </ul>
							  </li>
						  </ul>
						  <ul className="nav navbar-nav flex-child-menu menu-right">
							  <li className="dropdown first">
								  <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
									  paginas <i className="fa fa-angle-down" aria-hidden="true"></i>
								  </a>
								  <ul className="dropdown-menu level1">
									  <li><a href="landing.html">Aterrizaje</a></li>
									  <li><a href="404.html">Pagina 404</a></li>
									  <li className="it-last"><a href="comingsoon.html">Próximamente</a></li>
								  </ul>
							  </li>
							  <li><a href="#">Ayuda</a></li>
							  <li className="loginLink"><a href="#">Iniciar sección</a></li>
							  <li className="btn signupLink"><a href="#">Inscribirse</a></li>
						  </ul>
					  </div>
				  </nav>

				  <div className="top-search">
					  <select>
						  <option value="united">Programa de televisión</option>
						  <option value="saab">Otros</option>
					  </select>
					  <input type="text" placeholder="Search for a movie, TV Show or celebrity that you are looking for" />
				  </div>
			  </div>
		  </header>
  )
}

export default Header