import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faDiscord , faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import REDzImg from "./REDz.png";
import REDzStyle from "./REDz.module.css";

function REDz() {
  return (<>
    <div className={REDzStyle.Author}>
        <img src={REDzImg} alt="Mr.Natthakiach Charoenpanchai"/>
    </div>

    <div className={REDzStyle.SocialMenu}>
        <ul>
            <li> <a target="_blank" href="https://www.facebook.com/userxcodert/"> <div className={REDzStyle.icon}><FontAwesomeIcon icon={faFacebook} /></div> <div className={REDzStyle.text}>Userxcodert</div> </a> </li>
            <li> <a target="_blank" href="https://www.instagram.com/redz_2003/"> <div className={REDzStyle.icon}><FontAwesomeIcon icon={faInstagram} /></div> <div className={REDzStyle.text}>redz_2003</div> </a> </li>
            <li> <a target="_blank" href="https://github.com/REDzTrue/"> <div className={REDzStyle.icon}><FontAwesomeIcon icon={faGithub} /></div> <div className={REDzStyle.text}>REDzTrue</div> </a> </li>
        </ul>
        <div className={REDzStyle.anmHoverWidth}>

        </div>
    </div>

    <div className={REDzStyle.container}>
        <div className={REDzStyle.col}>
            <div className={REDzStyle.title}>
                คำแนะนำตัว
            </div>
            <div className={REDzStyle.detail}>
                ผมนายณัฐเกียรติ เจริญพันธ์ชัย สมาชิก GITGUD เป็น Web Developer (Frontend, Backend) ถนัดในการใช้ภาษา PHP Language ในการพัฒนาเว็บไซต์
            <hr/>
            <b> เทคโนโลยี </b>
            <br/>
            <b>Programing Language </b> PHP,Javascript
            <br/>
            <b>Frontend</b> Html/Css,Javascript/Jquery
            <br/>
            <b>Backend</b> PHP,Node.js
            <br/>
            <b>Database</b> MySql
            <br/>
            <b>Editor</b> Visual Studio Code
            <hr/>
            <b> แท็ก </b>
            <br/>
                <div className={REDzStyle.Tags}>Backend</div>
                <div className={REDzStyle.Tags}>Frontend</div>
                <div className={REDzStyle.Tags}>Quality control</div>
                <div className={REDzStyle.Tags}>Editor Video</div>
                <div className={REDzStyle.Tags}>Graphic design</div>
            <hr/>
            </div>
        </div>
        <div className={REDzStyle.col}>
            <div className={REDzStyle.title}>
                My Skills
            </div>

            <div className={REDzStyle.detail}>

            <h3><b>Various IT skills</b></h3>
                <div className={REDzStyle.SkillContainer}>
                    <div className={REDzStyle.SkillName}>
                     Adobe Photoshop
                    </div>
                    <div className={REDzStyle.SkillBar}>
                        <div className={REDzStyle.SkillPercen} style={{maxWidth: "99%"}}></div>
                    </div>
                </div>
                <div className={REDzStyle.SkillContainer}>
                    <div className={REDzStyle.SkillName}>
                        Adobe Premiere
                    </div>
                    <div className={REDzStyle.SkillBar}>
                        <div className={REDzStyle.SkillPercen} style={{maxWidth: "60%"}}></div>
                    </div>
                </div>
                <div className={REDzStyle.SkillContainer}>
                    <div className={REDzStyle.SkillName}>
                        FL STUDIO
                    </div>
                    <div className={REDzStyle.SkillBar}>
                        <div className={REDzStyle.SkillPercen} style={{maxWidth: "23%"}}></div>
                    </div>
                </div>
                <div className={REDzStyle.SkillContainer}>
                    <div className={REDzStyle.SkillName}>
                        Various software
                    </div>
                    <div className={REDzStyle.SkillBar}>
                        <div className={REDzStyle.SkillPercen} style={{maxWidth: "95%"}}></div>
                    </div>
                </div>
            <h3><b>Developer skills</b></h3>
                <div className={REDzStyle.SkillContainer}>
                    <div className={REDzStyle.SkillName}>
                        PHP
                    </div>
                    <div className={REDzStyle.SkillBar}>
                        <div className={REDzStyle.SkillPercen} style={{maxWidth: "89%"}}></div>
                    </div>
                </div>
                <div className={REDzStyle.SkillContainer}>
                    <div className={REDzStyle.SkillName}>
                        Web security
                    </div>
                    <div className={REDzStyle.SkillBar}>
                        <div className={REDzStyle.SkillPercen} style={{maxWidth: "34%"}}></div>
                    </div>
                </div>
                <div className={REDzStyle.SkillContainer}>
                    <div className={REDzStyle.SkillName}>
                        Databases
                    </div>
                    <div className={REDzStyle.SkillBar}>
                        <div className={REDzStyle.SkillPercen} style={{maxWidth: "70%"}}></div>
                    </div>
                </div>
                <div className={REDzStyle.SkillContainer}>
                    <div className={REDzStyle.SkillName}>
                        JavaScript
                    </div>
                    <div className={REDzStyle.SkillBar}>
                        <div className={REDzStyle.SkillPercen} style={{maxWidth: "30%"}}></div>
                    </div>
                </div>
                <div className={REDzStyle.SkillContainer}>
                    <div className={REDzStyle.SkillName}>
                        HTML & CSS
                    </div>
                    <div className={REDzStyle.SkillBar}>
                        <div className={REDzStyle.SkillPercen} style={{maxWidth: "98%"}}></div>
                    </div>
                </div>
                <div className={REDzStyle.SkillContainer}>
                    <div className={REDzStyle.SkillName}>
                        Java
                    </div>
                    <div className={REDzStyle.SkillBar}>
                        <div className={REDzStyle.SkillPercen} style={{maxWidth: "5%"}}></div>
                    </div>
                </div>
                <div className={REDzStyle.SkillContainer}>
                    <div className={REDzStyle.SkillName}>
                        Node.js
                    </div>
                    <div className={REDzStyle.SkillBar}>
                        <div className={REDzStyle.SkillPercen} style={{maxWidth: "21%"}}></div>
                    </div>
                </div>
                <div className={REDzStyle.SkillContainer}>
                    <div className={REDzStyle.SkillName}>
                        React
                    </div>
                    <div className={REDzStyle.SkillBar}>
                        <div className={REDzStyle.SkillPercen} style={{maxWidth: "1%"}}></div>
                    </div>
                </div>
                <div className={REDzStyle.SkillContainer}>
                    <div className={REDzStyle.SkillName}>
                        .NET (C#)
                    </div>
                    <div className={REDzStyle.SkillBar}>
                        <div className={REDzStyle.SkillPercen} style={{maxWidth: "12%"}}></div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    </>);
}

export default REDz;
