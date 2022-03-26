import './Footer.scss';
import React from "react";

export default function Footer(){
    return(
        <footer>
            <div className='footer-container' id='kontakt'>
                <h1>Kontakt</h1>
                <p>Joanna Dębiec</p>
                <p>e-mail: <a href="mailto: daridebiec@gmail.com">daridebiec@gmail.com</a></p>
                <div className='icon-container'>
                    <a href="https://www.facebook.com/JoanneArt-115784413667108"><img alt="facebook icon" src='../imgs/utils/fb.svg' className="ico" /></a>
                </div>
                
  
                <div className='freepik'>
                    <a href="https://pl.freepik.com/wektory/logo">Plik wektorowy utworzony przez freepik - pl.freepik.com</a>
                    <div>
                    Photo by <a href="https://unsplash.com/@alexander_ant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alexander Ant</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                    </div>
            </div>
        </footer>
    )
}