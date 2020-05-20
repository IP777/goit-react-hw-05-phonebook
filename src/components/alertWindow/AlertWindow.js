import React from "react";
import { CSSTransition } from "react-transition-group";
import openTransition from "./../transition/open.module.css";
import style from "./AlertWindow.module.css";

const AlertWindow = ({ delay, toggle, text }) => (
	<CSSTransition
		timeout={delay}
		classNames={openTransition}
		in={toggle}
		unmountOnExit
	>
		<div className={style.window}>{text}</div>
	</CSSTransition>
);

export default AlertWindow;
