import React from 'react'

const Footer = () => {
  return (
      <footer className="ht-footer">
          <div className="container">
              <div className="flex-parent-ft">
                  <div className="flex-child-ft item1">
                      <a href="index-2.html"><img className="logo" src="images/logo1.png" alt="" /></a>
                      <p>Creado @ Desarrolladora Web @Brenda Ledemsa</p>
                      <p>Celular: <a href="#">(+54) 2342 - 504847</a></p>
                  </div>
                  <div className="flex-child-ft item2">
                      <h4>Resources</h4>
                      <ul>
                          <li><a href="#">Sobre</a></li>
                          <li><a href="#">Blockbuster</a></li>
                          <li><a href="#">Contacto</a></li>
                          <li><a href="#">Foros</a></li>
                          <li><a href="#">Blog</a></li>
                          <li><a href="#">Centro de ayuda</a></li>
                      </ul>
                  </div>
                  <div className="flex-child-ft item3">
                      <h4>Legal</h4>
                      <ul>
                          <li><a href="#">Terminos de uso</a></li>
                          <li><a href="#">Política de privacidad</a></li>
                          <li><a href="#">Seguridad</a></li>
                      </ul>
                  </div>
                  <div className="flex-child-ft item4">
                      <h4>Cuenta</h4>
                      <ul>
                          <li><a href="#">Mi cuenta</a></li>
                          <li><a href="#">Lista de observación</a></li>
                          <li><a href="#">Colecciones</a></li>
                          <li><a href="#">Guía del usuario</a></li>
                      </ul>
                  </div>
                  <div className="flex-child-ft item5">
                      <h4>Boletin informativo</h4>
                      <p>Subscríbase a nuestro sistema de boletines ahora<br /> para recibir nuestras ultimas noticias.</p>
                      <form action="#">
                          <input type="text" placeholder="Enter your email..." />
                      </form>
                      <a href="#" className="btn">Subscribase ahora <i className="ion-ios-arrow-forward"></i></a>
                  </div>
              </div>
          </div>
          
      </footer>
  )
}

export default Footer