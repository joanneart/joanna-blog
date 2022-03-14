import './Footer.css';
import React from "react";

export default function Footer(){
    return(
        <footer>
            <div className='footer-container'>
                <h1>Kontakt</h1>
                <p>Joanna Dębiec</p>
                <p>e-mail: </p>
                <div className='icon-container'>
                    <a href="https://www.facebook.com/JoanneArt-115784413667108"><img alt="facebook icon" src='../imgs/utils/fb.svg' className="ico" /></a>
                </div>
                <div className='freepik'><a href="https://pl.freepik.com/wektory/logo">Plik wektorowy utworzony przez freepik - pl.freepik.com</a></div>
            </div>
        </footer>
    )
}