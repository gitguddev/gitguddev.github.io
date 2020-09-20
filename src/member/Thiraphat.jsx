import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";

import thanawatImg from "./images/Thiraphat.png";
import thanawatStyle from "./stylesheet/thanawat.module.css";

function Label(props) {
  return (
    <div
      style={{
        backgroundColor: props.color,
        margin: "10px 5px 5px 0px",
        padding: 5,
        borderRadius: 5,
        color: "white",
        display: "inline-block",
        fontSize: 12,
      }}
    >
      {props.title}
    </div>
  );
}

function Thiraphat() {
  return (
    <div className={thanawatStyle.thanawat}>
      <div>
        <img src={thanawatImg} />
        <br />
        <div
          style={{
            marginBottom: 5,
            fontWeight: "bold",
            fontSize: "1.5em",
            textDecoration: "underline",
          }}
        >
          Thiraphat Nakkasem
        </div>
        <div style={{ marginBottom: 10 }}>ไม่มีขี้เกียจใส่</div>
        <a href="https://github.com/littleboycoding/">
          <FontAwesomeIcon icon={faGithub} />
        </a>{" "}
        <a href="https://facebook.com/littleboycoding/">
          <FontAwesomeIcon icon={faFacebook} />
        </a>{" "}
        <a href="https://littleboycoding.github.io/">
          <FontAwesomeIcon icon={faBook} />
        </a>
        <br />
        <Label title="ลูกสมุน" color="red" />
        <Label title="Web Developer" color="green" />
      </div>
      <div style={{ flex: 1 }}>
        <div>
          <h3>คำแนะนำตัว</h3>
          ผมนาย `ธีรพัทธ์ นาคเกษมเป็นผู้ร่วมก่อตั้ง GitGud ยุคบุกเบิก
          และเป็นสมุนของพี่เกม ณ ปัจจุบัน, ชอบการโปรแกรมมิ่งมากถึงมากที่สุด
          ทักษะที่ถนัดคือโปรแกรมมิ่ง ออกแบบเซิฟเวอร์ เป้าหมายคือการเป็น Full
          Stack Developer 💻🖥️
        </div>
        <div>
          <h3>Technologies ที่ใช้</h3>
          <b>Programing Language</b> JavaScript,JAVA,C#,C
          <br />
          <b>Backend</b> Node.js
          <br />
          <b>Database</b> MySQL, Postgres
          <br />
          <b>Frontend</b> React
          <br />
          <b>API</b> Rest, GraphQL
          <br />
          <b>VCS</b> Git, GitHub
          <br />
          <b>Editor</b> Visual Studio Code
        </div>
        <div>
          <h3>คติประจำใจ</h3>
          ไม่มีอะไรยาก อยู่ที่จะทำรึป่าว
        </div>
      </div>
    </div>
  );
}

export default Thiraphat;
