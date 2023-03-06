import logo from './logo.svg';
import megafone from './assets/images/megafone.svg'
// import teams from './assets/images/teams.svg'
// import engrenagem from './assets/images/engrenagem.svg'
// import carinha from './assets/images/carinha.svg'
// import volume from './assets/images/volume.svg'
// import emblema from './assets/images/emblema.svg'
// import loja from './assets/images/loja.svg'
// import papel from './assets/images/papel.svg'
// import escudo from './escudo/images/escudo.svg'
// import lupa from './assets/images/lupa.svg'
import './App.scss';
import Card from './Card';
import "./Card.scss";

function App() {
  return (
    <div>
      <div className='cards'>
      <div className="parte-um">
        <Card image = {megafone} titulo = {"Anuncios"} conteudo = {"bla bla"} alt="lalalala" />

        </div>

    </div>

    </div>
  );
}

export default App;
