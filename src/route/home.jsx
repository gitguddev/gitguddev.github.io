import style from "../css/home.module.css";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
	return (
		<>
			<div className={style.header}>
				<span className={style.title}>{"GitGud DEV"}</span>
				<br />
				<span className={style.description}>
					Learn to be developer{" "}
					<span role="img" aria-label="Laptop and nerd face">
						💻 😎
					</span>
				</span>
				<br />
				<Link to="/blog" className={style.nav_bt}>
					Blog
					<span role="img" aria-label="Pencil">
						✏️
					</span>
				</Link>
				<Link to="/about" className={style.nav_bt}>
					Who Are We
					<span role="img" aria-label="Question Mark">
						❓
					</span>
				</Link>
				<Link to="/contact" className={style.nav_bt}>
					Contact
					<span role="img" aria-label="Mailbox">
						📫
					</span>
				</Link>
			</div>
		</>
	);
}

export default Home;
