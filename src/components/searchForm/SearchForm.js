import React from "react";
import { CSSTransition } from "react-transition-group";
import InputTitle from "./../inputTitle/InputTitle";
import style from "./SearchForm.module.css";
import popTransition from "./../transition/pop.module.css";

const SearchForm = ({ value, handleChange, toggle }) => (
	<CSSTransition
		timeout={250}
		classNames={popTransition}
		in={toggle}
		unmountOnExit
	>
		<div className={style.wrapper}>
			<InputTitle
				title="Find contacts by name"
				value={value}
				handleChange={handleChange}
				placeholder="Search something...."
			/>
		</div>
	</CSSTransition>
);

export default SearchForm;
