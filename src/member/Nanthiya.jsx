import React from "react" 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faLine, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";


function Aon() {
    return (<div style={{
        display: "flex"

    }}>
         <img style={{height: 400, width: 400, objectFit: "cover", borderRadius: "50%",}} src="https://scontent.fcnx4-1.fna.fbcdn.net/v/t1.0-9/119253209_925180691338375_3215080200242970301_n.jpg?_nc_cat=109&_nc_sid=8bfeb9&_nc_eui2=AeFjf46A0NRDESUf9slNsvGEMhDWUqv7jT4yENZSq_uNPiAMPErzG88UOxBp4PzkLdcwgTgI7zAKcWYVY6eDF1da&_nc_ohc=ezcRrvPFtF4AX84fkQG&_nc_ht=scontent.fcnx4-1.fna&oh=a48bf2e37489614d5d45263f3e6d45d8&oe=5F8463BB"/>
             <div style={{paddingLeft: 100,  flex: 1, }}> 
        <a href="https://facebook.com/pinnanthi/">
          <FontAwesomeIcon style={{ fontSize: 50, }}icon={faFacebook} />
        </a>{" "}
        <a href="http://line.me/ti/p/~aonnaonnnn">
          <FontAwesomeIcon style={{ fontSize: 50, }}icon={faLine} />
        </a>{" "}
        <a href="https://www.instagram.com/__nty.a/?hl=th">
          <FontAwesomeIcon style={{ fontSize: 50, }}icon={faInstagram} />
        </a>{" "}
        </div>
    </div>) 
}
export default Aon
