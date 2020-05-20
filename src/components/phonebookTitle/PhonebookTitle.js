import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
//---------------------------------------------
import style from "./PhonebookTitle.module.css";
import slideTransition from "./../transition/slide.module.css";

export default class PhonebookTitle extends Component {
	state = {
		onLoad: false,
	};

	componentDidMount() {
		this.setState({ onLoad: true });
	}

	render() {
		const { onLoad } = this.state;
		const { name } = this.props;

		return (
			<CSSTransition
				in={onLoad}
				timeout={500}
				classNames={slideTransition}
				unmountOnExit
			>
				<h2 className={style.title}>{name}</h2>
			</CSSTransition>
		);
	}
}
