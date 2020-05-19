import React from "react";
import PropTypes from "prop-types";
import style from "./InputTitle.module.css";

const InputTitle = ({ title, value, handleChange }) => (
	<label>
		<p style={style}>{title}</p>
		<input
			className={style.formInput}
			value={value}
			type="text"
			placeholder="Enter number"
			onChange={handleChange}
			name={title.toLowerCase()}
		/>
	</label>
);

InputTitle.propTypes = {
	title: PropTypes.string,
};

export default InputTitle;
