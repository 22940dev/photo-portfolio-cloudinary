import React, {Component} from "react";

import instagramIcon from "../assets/instagram.png";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import mailIcon from "../assets/mail_icon.png";

export default class Footer extends Component {
    
    render() {
        const socialItems = [
            {
                "name":"linkedin",
                "url":"https://www.linkedin.com/in/philip-hoang-7a50b2181/",
                "className":"linkedin",
                "imgsrc": linkedinIcon
            },
            {
                "name":"github",
                "url":"https://github.com/philiphoang",
                "className":"github",
                "imgsrc":githubIcon
            },
            {
                "name":"instagram",
                "url":"https://instagram.com/philipoth",
                "className":"instagram",
                "imgsrc":instagramIcon
            }
            ,
            {
                "name":"mail",
                "url":"mailto: philip.t.hoang",
                "className":"mail",
                "imgsrc": mailIcon
            }
        ];
        return <React.Fragment>
            <div id="container">
                <div className="d-flex flex-row justify-content-center pt-4">
                        {socialItems.map((item, index) =>{
                            return(
                                <div className="pl-3 pr-3" key={index} >
                                    <a href={item.url}>
                                        <i className={item.className} />
                                        <img src={item.imgsrc} alt="" width="50px"/>
                                    </a>
                                </div>
                            );
                        })}
                </div>
            </div>
        </React.Fragment>
    }
}