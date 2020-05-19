import React from "react";

const style = {
	width: 313,
};

const ContactFilter = ({ value, onChangeFilter }) => (
	<input
		type="text"
		value={value}
		onChange={onChangeFilter}
		placeholder="Search something...."
		style={style}
	/>
);

export default ContactFilter;
