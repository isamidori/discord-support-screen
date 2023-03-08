import logo from './logo.svg';
import megafone from './assets/images/megafone.svg'
import teams from './assets/images/teams.svg'
import engrenagem from './assets/images/engrenagem.svg'
import carinha from './assets/images/carinha.svg'
import volume from './assets/images/volume.svg'
import emblema from './assets/images/emblema.svg'
import loja from './assets/images/loja.svg'
import papel from './assets/images/papel.svg'
import escudo from './assets/images/escudo.svg'
import lupa from './assets/images/lupa.svg'
import ajuda1 from './assets/images/ajuda1.svg'
import ajuda2 from './assets/images/ajuda2.svg'
import cabecalho from './assets/images/cabecalho.svg'
import './App.scss';
import Card from './Card';
import "./Card.scss";
import Header from './Header';
import "./Header.scss";


function App() {
  return (
    <div>

      <div className='header'>

        <div className='header-nav'>
        <ol>
          <img src={cabecalho} />


          

            <li><Header titulo={"Feedback"} /></li>
            <li><Header titulo={"Portugues do Brasil"} /></li>
            <li><Header titulo={"Enviar uma solicitação"} /></li>
            <li><Header titulo={"Entrar"} /></li>
          </ol>

        </div>

          <div className='central'>
            <h1>Central de Ajuda</h1>
            <div className='botao-pesquisar'>
              <a>
                <input type="search" name="query" id="query" placeholder="Pesquisa" autocomplete="off" aria-label="Pesquisa" />
              </a>
            </div>
          </div>

        


      </div>

      <div className='texto-1'>
        <h1>Precisa de ajuda? Conte com a gente.</h1>
        <p>De configurações de conta a permissões, encontre ajuda sobre tudo para o Discord
          Se você é novo no Discord e está precisando de umas dicas, dê uma olhada no nosso Guia do Iniciante!</p>
      </div>
      <div className='cards'>
        <div className="parte-um">
          <ol>
            <li><Card image={megafone} titulo={"Anúncios"} conteudo={"Estamos de olho no que está acontecendo. Aqui está o que nós sabemos que náo está certo."} alt="Anuncios" /></li>
            <li><Card image={teams} titulo={"Interface do Discord"} conteudo={"PRA QUE SERVE ESSE BOTÃO!?!!."} alt="Interface do discord" /></li>
            <li><Card image={engrenagem} titulo={"Configuraçoes de Conta"} conteudo={"Voce é importante e sua conta também."} alt="Configuraçoes" /></li>
            <li><Card image={carinha} titulo={"Começando"} conteudo={"Comece com o pé direito! Não com o esquerdo!"} alt="Começo" /></li>
            <li><Card image={volume} titulo={"Configurações de Servidor"} conteudo={"Quase tão emocionante quanto decorações de interiores."} alt="Configuraçoes de servidor" /></li>
            <li><Card image={emblema} titulo={"Programas Comunitários"} conteudo={"Hype para HypeSquader, party para parceiros."} alt="Programas comunitarios" /></li>
            <li><Card image={loja} titulo={"Nitro"} conteudo={"Por favor, não compre até cair. Deixe a gente te ajudar"} alt="nitro" /></li>
            <li><Card image={papel} titulo={"Formas de Pagamento"} conteudo={"Aquela sensa~ao quando saldo."} alt="pagamentos" /></li>
            <li><Card image={escudo} titulo={"Confiança & Segurança"} conteudo={"Mantenha as coisas sas e salvas para voce e seus amigos."} alt="Segurança" /></li>
            <li><Card image={lupa} titulo={"F.A.Q.s"} conteudo={"Tudo o que voce puder fazer num auto-atendimento"} alt="FAQ" /></li>

          </ol>
        </div>

      </div>

      <div className='texto-2'>
        <h1>Outras formas de conseguir ajuda!</h1>
      </div>

      <div className='cards-2'>
        <div className="parte-dois">
          <ol>
            <li><Card image={ajuda1} titulo={"Desenvolvedores de Jogos"} conteudo={"Sua casa para suporte com o desenvolvimento de bots, aplicativos e jogos usando nossa API e SD!."} alt="desenvolvedores de jogos" /></li>
            <li><Card image={ajuda2} titulo={"Twitter"} conteudo={"Alguma perguntinha rápida? Chame a gente no Twitter"} alt="Twitter" /></li>
          </ol>

        </div>
      </div>





    </div>
  );
}

export default App;
