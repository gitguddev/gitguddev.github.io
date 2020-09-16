import style from "../css/home.module.css";
import React, { useState, useRef } from "react";

import Thanawat from "../member/Thanawat";
import Aon from "../member/Aon";

import album1 from "../album/album1.jpg";
import album2 from "../album/album2.jpg";
import album3 from "../album/album3.jpg";

const userList = [
  {
    name: "Thanawat Yodnil",
    user: "littleboycoding",
    img:
      "https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-9/76612185_1751899918276565_7047093484993380352_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=lehHhRNYmBkAX-KDjCu&_nc_ht=scontent.fbkk5-3.fna&oh=6b1915b25d4cf4da62d54fef35724651&oe=5F80343D",
  },
  {
    name: "Protae",
    user: "taetargmo",
    img:
      "https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-9/82859128_2582758038718349_5708485176787468288_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=Yn0Lq0MZP3QAX92E7WY&_nc_ht=scontent.fbkk5-3.fna&oh=1450f55969536b7f63ab0465d3c71c10&oe=5F81AAF1",
  },
  {
    name: "Nanthiya Pitisaeng",
    user: "aonann",
    img:
      "https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.0-9/118777158_919280675261710_3009010750730749915_n.jpg?_nc_cat=104&_nc_sid=8bfeb9&_nc_ohc=4RRT7sWaY7gAX8mHZP9&_nc_ht=scontent.fbkk5-5.fna&oh=237c5736753058d9d0dddb7a871429c1&oe=5F8323E2",
  },
  {
    name: "Jiranat Juntamarai",
    user: "pupae",
    img:
      "https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.0-9/90113335_1779067795561337_2267110568936603648_o.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=_3rZge6XBNkAX89z_H6&_nc_ht=scontent.fbkk5-5.fna&oh=f24e1883d2cdc25267c7fba69558eda9&oe=5F822771",
  },
  {
    name: "Natthakiat Jaruenchai",
    user: "UserXCodert",
    img:
      "https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-9/116584317_606879683541543_3734934671500337110_o.jpg?_nc_cat=105&_nc_sid=174925&_nc_ohc=LchyKcRWOjQAX-JyEsa&_nc_ht=scontent.fbkk5-3.fna&oh=a359de28e87d6550774a15251eb7056d&oe=5F835C6F",
  },
  {
    name: "North",
    user: "north",
    img:
      "https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.0-9/118791412_2695907100691047_313690294550642642_o.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=FCGkX4OCiAcAX9iudpD&_nc_ht=scontent.fbkk5-6.fna&oh=1cd9e5a990f5f85cdaa31ae50a7a66e0&oe=5F8150B4",
  },
  {
    name: "Koheng Chokwiwat",
    user: "khc",
    img:
      "https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.0-9/118578961_978147529324966_9050996599303733150_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=8HztZOxRh30AX8pBRdg&_nc_ht=scontent.fbkk5-4.fna&oh=e00652bd382599e5d199b7a21bc49cd4&oe=5F82F907",
  },
];

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
          {userList.map((user) => {
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
            onLoad={(event) => console.log(event.target)}
            className={style.album + " " + (albumState && style.albumShow)}
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          height: 150,
          fontSize: 26,
        }}
        className={style.parallax}
      >
        {"<สมาชิกทั้งหมด />"}
      </div>
      <MemberList />
    </div>
  );
}

function MemberList() {
  return (
    <>
      <MemberSection username="littleboycoding">
        <Thanawat />
      </MemberSection>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          height: 150,
          fontSize: 26,
        }}
        className={style.parallax}
      >
        {"NANTHIYA PITISEANG"}
      </div>
      <MemberSection username="taetargmo">
        <Aon />
      </MemberSection>
    </>
  );
}

function MemberSection(props) {
  return (
    <div className={style.section} style={{ backgroundColor: "white" }}>
      {props.children}
    </div>
  );
}

export default Home;
