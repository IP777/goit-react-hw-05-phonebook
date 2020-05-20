import React from "react";
import InputTitle from "./../inputTitle/InputTitle";
import style from "./SearchForm.module.css";

const SearchForm = ({ value, handleChange }) => (
	<div className={style.wrapper}>
		<InputTitle
			title="Find contacts by name"
			value={value}
			handleChange={handleChange}
			placeholder="Search something...."
		/>
	</div>
);

export default SearchForm;
