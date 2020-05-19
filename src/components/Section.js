import React from "react";
import PropTypes from "prop-types";

const style = {
	marginTop: 15,
	marginBottom: 5
};

const Section = ({ title, children }) => (
	<section>
		<h2 style={style}>{title}</h2>
		{children}
	</section>
);

Section.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node.isRequired
};

export default Section;
