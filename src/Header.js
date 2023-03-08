import React from 'react';
// import cabecalho from './assets/images/cabecalho.svg';
 import'./common/font.scss';
 import "./Header.scss";

export default function Header (props){
    return(

        <div className="barra-nav">
            <h1>{props.titulo}</h1>
            {/* <img>{props.image}</img> */} 
        </div>
    );

    
 }