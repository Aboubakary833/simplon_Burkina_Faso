class AppFooter extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        ${this.FooterStyle()}
        <footer>
      <div class="container redfield pb-2 text-center">
        <div class="row">
          <div class="col-sm-4 d-flex flex-column justify-content-center py-4 px-sm-4 font-weight-bold">
            <a href="#header" class="text-decoration-none text-light d-flex mx-auto"><span>Retourner en haut</span><img class="mx-auto pb-2" src="../src/fonts/chevron_up.png" width="40" height="40" alt="Chevron_top"></a>
            <a class="text-light" href="#">Contenue principale</a>
            <a class="mt-3 text-light" href="#">Pied de page</a>
            <a class="mt-3 text-light" href="#">Plan du site</a>
          </div>
          <div class="col-sm-5 d-flex flex-column text-center py-sm-4 px-sm-4 font-weight-bold">
            <p>S'inscrire à la newsletter</p>
            <form class="d-flex mx-auto newsletter" action="#">
              <input class="ml-2" type="email" placeholder="Votre email:">
              <input class="text-light px-2" type="submit" value="S'inscrire">
            </form>
          </div>
          <div class="col-sm-3 d-inline-flex d-sm-flex flex-column justify-content-center py-4 px-sm-4 font-weight-bold">
            <p>Nous suivre sur:</p>
            <a class="mt-3 text-light text-center" href="#"><img class="icon" src="../src/fonts/facebook.png" alt="facebook"><span class="ml-2">facebook</span></a>
            <a class="mt-3 mr-3 text-light text-center" href="#"><img class="icon" src="../src/fonts/twitter.png" alt="twitter"><span class="ml-2">twitter</span></a>
          </div>
        </div>
        <div class="row mt-2 d-flex flex-column text-center">
          <img class="mx-auto bottom-logo" src="../src/images/simplonCircleWhite.png" alt="Simplon.co">
          <p class="font-weight-bold text-light mt-3">&copy;Copyright 2020</p>
        </div>
      </div>
    </footer>
        `;
    }
   FooterStyle() {
        return `
    <style>
.newsletter{
  background: #fff;
  border: .5px solid #fff;
  border-radius: 5px;
  }
.newsletter input{
  height: 40px;
  border: none;
  outline: none;
}
.newsletter input[type="email"]{
  width: 68%;
}
.newsletter input[type="submit"]{
  background: #CE0033;
  border-radius: 5px;
}
.icon{
  width: 35px;
  height: 35px;
}
.bottom-logo{
  width: 10%;
}
    </style>
        `
    }
}
customElements.define('app-footer', AppFooter);