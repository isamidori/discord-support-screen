 import "./Card.scss";
 import React from 'react';
 import megafone from './assets/images/megafone.svg'
//  import teams from './assets/images/teams.svg'
//  import engrenagem from './assets/images/engrenagem.svg'
//  import carinha from './assets/images/carinha.svg'
//  import volume from './assets/images/volume.svg'
//  import emblema from './assets/images/emblema.svg'
//  import loja from './assets/images/loja.svg'
//  import papel from './assets/images/papel.svg'
//  import escudo from './escudo/images/escudo.svg'
//  import lupa from './assets/images/lupa.svg'


 export default function Card (props){
    return(

        <div className="card-meio">
            <img src={props.image}/>
            <h1>{props.titulo}</h1>
            <p>{props.conteudo}</p>


        </div>
    );
 }