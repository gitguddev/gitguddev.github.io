import style from "../css/home.module.css";
import React, { useState, useRef } from "react";

import album1 from "../album/album1.jpg";
import album2 from "../album/album2.jpg";
import album3 from "../album/album3.jpg";

import meteor from "./meteor.svg";

import MemberList from "../member/memberList";

function Teletype() {
  const [currentCode, updateCode] = useState("");
  const code = `
  function Header() {
    return (
      <div className={style.headContainer}>
          <Teletype />
          <span className={style.title}>GitGud DEV</span>
          <span className={style.info}>Learn to be Developer</span>
  
          <div className={style.memberList}>
            {userList.map(user => {
              return <img className={style.memberLogo} src={user.img} />
            })}
          </div>
      </div>
    );
  }
  `;

  if (code.length > currentCode.length)
    setTimeout(() => {
      updateCode(currentCode + code[currentCode.length]);
    }, 30);

  return (
    <div className={style.teletype}>
      <pre>{currentCode}</pre>
    </div>
  );
}

function Header() {
  return (
    <div className={style.headContainer + " " + style.parallax}>
      <Teletype />
      <div className={style.headFronter}>
        <span className={style.title}>
          <span style={{ color: "transparent", WebkitTextStroke: "1px white" }}>
            Git
          </span>
          Gud DEV
        </span>
        <span className={style.info}>Learn to be Developer</span>

        <div className={style.memberList}>
          {MemberList.map((user) => {
            return (
              <a href={"#" + user.user}>
                <img className={style.memberLogo} src={user.img} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function isScrollReach(el) {
  var rect = el.getBoundingClientRect();

  return (
    (rect.top + rect.bottom) / 2 <=
    (window.innerHeight || document.documentElement.clientHeight)
  );
}

function Home() {
  const albumRef = useRef();
  const [albumState, updateAlbum] = useState(false);

  return (
    <div
      onScroll={
        !albumState
          ? () => {
              updateAlbum(isScrollReach(albumRef.current));
            }
          : null
      }
      style={{
        height: "100%",
        overflowX: "hidden",
        overflowY: "auto",
        scrollBehavior: "smooth",
        perspective: 2,
        backgroundColor: "#151515",
      }}
    >
      <Header />
      <div className={style.section}>
        <h1 style={{ marginTop: 0 }}>GitGud คืออะไร</h1>
        GitGud คือกลุ่มที่จัดตั้งขึ้นมา
        โดยจุดประสงค์คือเพื่อรวบรวมคนที่สนใจในการศึกษาทักษะด้านการโปรแกรมมิ่ง
        โดยไม่จำกัดว่าจะเป็นด้านไหน
        <h1>GitGud แปลว่าอะไร</h1>
        GitGud เป็นคำแสลง มาจากคำว่า Get Good ซึ่งแปลว่า <b>"ทำให้เก่ง"</b>{" "}
        มักใช้ในบทสนทนาของต่างชาติ นอกจากนั้น <b>Git</b> ยังไปตรงกับชื่อ Version
        Control System พอดี ซึ่งเป็น Software
        ที่โปรแกรมเมอร์หรือผู้เขียนโค้ดมักใช้ เพื่อจัดการเวอร์ชั่นของซอร์สโค้ด
        <center>
          <div
            ref={albumRef}
            className={style.albumTest + " " + (albumState && style.fadeIn)/* style.album*/}
          >
            <img src={album1} />
            <img src={album2} />
            <img src={album3} />
          </div>
          <h1>
            " <u>The road to success has been bulit.</u> "
          </h1>
          GitGud ณ วันก่อตั้ง 7 สิงหาคม 2562
        </center>
      </div>
      <div
        style={{
          fontSize: 26,
        }}
        className={style.parallax}
      >
        {/* <img src={meteor} /> */}
      </div>
      <Members />
    </div>
  );
}

function Members() {
  return MemberList.map(
    (map, index) =>
      map.Component && (
        <>
          {index > 0 && (
            <div style={{ fontSize: 30,}}
              className={style.parallax}
            >
              {map.name}
            </div>
          )}
          <MemberSection username={map.user}>
            <map.Component />
          </MemberSection>
        </>
      )
  );
}

function MemberSection(props) {
  return (
    <div
      id={props.username}
      className={style.section}
      style={{ backgroundColor: "white" }}
    >
      {props.children}
    </div>
  );
}

export default Home;
