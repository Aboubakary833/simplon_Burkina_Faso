class AppHeader extends HTMLElement {
    constructor() {
         super();
         this.innerHTML = `
         ${this.HeaderStyle()}
  <header id="header">
    <div class="container">
      <div class="row d-flex py-4">
        <div class="col-sm-4 d-none d-sm-flex justify-content-center searchbar">
          <form class="d-flex justify-content-center" action="#">
            <input type="text" placeholder="Rechercher">
            <button>
              <img src="../src/fonts/search_Icon.png">
            </button>
          </form>
        </div>
        <div class="col-6 col-sm-4 text-center brand">
          <img src="logo.svg" alt="Simplon.co">
        </div>
        <div class="col-6 col-sm-4 text-center lang">
          <button>
            <img src="../src/fonts/lang.png">
          <span>FR</span>
          </button>
        </div>
      </div>
      <div class="row header-block-2">
        <nav class="mx-auto">
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a id="accueil" class="px-1 px-sm-4 nav-link text-light" href="${this.getAttribute('href1')}">Accueil</a>
            </li>
            <li class="nav-item">
              <a id="service" class="px-1 px-sm-4 nav-link text-light" href="${this.getAttribute('href2')}">Services</a>
            </li>
            <li class="nav-item">
              <a id="alumnis" class="px-1 px-sm-4 nav-link text-light" href="${this.getAttribute('href3')}">Alumnis</a>
            </li>
            <li class="nav-item">
              <a id="contacts" class="px-1 px-sm-4 nav-link text-light" href="${this.getAttribute('href4')}">Contacts</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="row">
          <div class="d-flex w-100 pb-5 title justify-content-center">
          <h1 class="mt-5">Simplon Burkina Faso</h1>
          <img class="d-none d-sm-block" src="../src/images/simplonCircle.png">
        </div>
      </div>
    </div>
  </header>
         `;

    }
    HeaderStyle() {
        return `
<style>
.searchbar > form{
    max-width: 70%;
    height: 40px;
    border: .5px solid #ddd;
    border-radius: 20px;
}
.searchbar > form > input{
  width: 60%;
    border: none;
    outline: none;
    margin-bottom: 3px;
    margin-left: 7px;
}
.searchbar > form > button{
  border: none;
  outline: none;
  background: transparent;
}
.searchbar > form > button > img{
  width: 30px;
  height: 30px;
}
.brand > img{
  width: 50%;
  height: 50px;
}
.lang > button{
  border: none;
  outline: none;
  background: transparent;
}
.lang > button > img{
  width: 30%;
  height: 30%;
}
.lang > button > span{
  font-size: 90%;
  font-weight: bolder;
}
.header-block-2{
  background-color: #CE0033;
}
.link{
  font-size: 18px;
  padding:0 65px;
  text-decoration: none;
}
#${this.getAttribute('active')}{
  border-bottom: 2px solid #fff;
}
.title{background: #CE0033;}
.title > img{
  height: 100%;
}
.title > h1{
  font-size: 50px;
  color: #fff;
}
</style>
        `;
    }
}
customElements.define('app-header', AppHeader);