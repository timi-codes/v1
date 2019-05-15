import { Link } from "gatsby";
import React from "react";
import {socialMedia} from '@config';
import FormattedIcon from './icons/formattedIcon';
import Image from "./image"

const Footer = () => (
<footer className="footer">
    <div className="footer__copyright">
        <div className="top">
            <span>Designed by</span>
        </div>
        <div className="bottom">
            <span><a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/bchiang7/bchiang7.github.io">Brittany Chiang</a></span>
            {/* <Image/> */}
        </div>
    </div>
    <div className="footer__links">
        {
            socialMedia.map(({url, name}, i) => (
                <a href={url} target="_blank" rel="nofollow noopener noreferrer" title={name} key={i}>
                    <span className="text">{name}</span>
                    {/* <img src={`/img/social/${link.t}.svg`} alt="{{link.title}}"/> */}
                     {/* <FormattedIcon className="icon" style={{
                        display: 'none',
                        width: '22px'
                     }} name={name}/> */}
                </a>
        ))}
    </div>
</footer>
)
export default Footer;
