import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";

import thanawatImg from "./images/thanawat.png";
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

function Thanawat() {
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
          Thanawat Yodnil
        </div>
        <div style={{ marginBottom: 10 }}>@littleboycoding</div>
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
        <Label title="ผู้ก่อตั้ง" color="red" />
        <Label title="Web Developer" color="green" />
      </div>
      <div style={{ flex: 1 }}>
        <div>
          <h3>คำแนะนำตัว</h3>
          ผมนายธณวัฒน์ ยอดนิล เป็นผู้ร่วมก่อตั้ง GitGud ยุคบุกเบิก
          และเป็นผู้นำทีม ณ ปัจจุบัน, ชอบการโปรแกรมมิ่งมากถึงมากที่สุด
          ทักษะที่ถนัดคือเว็บโปรแกรมมิ่ง เคยเข้าร่วมการแข่งขันทักษะเขียนเว็บไซต์
          และสิ่งประดิษฐ์คนรุ่นใหม่ เป้าหมายคือการเป็น Full Stack Developer 💻🖥️
        </div>
        <div>
          <h3>Technologies ที่ใช้</h3>
          <b>Programing Language</b> JavaScript, PHP, Lua
          <br />
          <b>Backend</b> Node.js, PHP
          <br />
          <b>Database</b> MySQL, Postgres, MongoDB
          <br />
          <b>Frontend</b> React, Next.js, Vue.js
          <br />
          <b>API</b> Rest, GraphQL
          <br />
          <b>VCS</b> Git, GitHub
          <br />
          <b>Editor</b> Neovim, Visual Studio Code
        </div>
        <div>
          <h3>คติประจำใจ</h3>
          จงเข้าใจ มากกว่าจำ
        </div>
      </div>
    </div>
  );
}

export default Thanawat;
