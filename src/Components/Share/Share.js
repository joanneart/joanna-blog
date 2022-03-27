import './Share.scss';
import React, { useState } from 'react';

import { EmailShareButton, FacebookShareButton, PinterestShareButton, TelegramShareButton, TwitterShareButton, WhatsappShareButton, 
    EmailIcon, FacebookIcon, PinterestIcon, TelegramIcon, TwitterIcon, WhatsappIcon } from "react-share";

export default function Share({url}){
    const [isOpen, setOpener] = useState(false);

    return(
        <div className='share'>
            <button className='success' onClick={() => setOpener(true)}>Udostępnij</button>
            {isOpen && <div className='share-container'><div className='share-popup'>
                <div className="popup-nav">
                    <span>Udostępnij</span>
                    <button className='warning' onClick={() => setOpener(false)}>x</button>
                </div>
                <div className='popup-container'>
                <EmailShareButton url={url}>
                    <EmailIcon  size="32" round="true"/>
                </EmailShareButton >
                <FacebookShareButton url={url}>
                    <FacebookIcon   size="32" round="true"/>
                </FacebookShareButton>
                <PinterestShareButton url={url} media="https://joanneart.netlify.app/imgs/profile/profile.jpg">
                    <PinterestIcon   size="32" round="true"/>
                </PinterestShareButton>
                <TelegramShareButton url={url}>
                    <TelegramIcon   size="32" round="true"/>
                </TelegramShareButton>
                <TwitterShareButton url={url}>
                    <TwitterIcon   size="32" round="true"/>
                </TwitterShareButton>
                <WhatsappShareButton url={url}>
                    <WhatsappIcon   size="32" round="true"/>
                </WhatsappShareButton>
            </div></div></div>}
        </div>
    )
}