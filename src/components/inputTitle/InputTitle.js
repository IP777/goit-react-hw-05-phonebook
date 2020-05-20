import React from "react";
import PropTypes from "prop-types";
import style from "./InputTitle.module.css";

const InputTitle = ({ title, value, handleChange, placeholder }) => (
	<div className={style.wrapper}>
		<label className={style.title}>{title}</label>
		<input
			className={style.input}
			value={value}
			type="text"
			placeholder={placeholder}
			onChange={handleChange}
			name={title.toLowerCase()}
		/>
	</div>
);

InputTitle.propTypes = {
	title: PropTypes.string,
};

export default InputTitle;
