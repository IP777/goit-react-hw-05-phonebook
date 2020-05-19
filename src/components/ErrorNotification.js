import React from "react";
import PropTypes from "prop-types";

const style = {
	color: "#ff0000",
	display: "block",
	fontSize: 14,
	fontWeight: 300,
	margin: 0,
	marginBottom: 5,
};

const ErrorNotificatrion = ({ errorType }) => (
	<span style={style}>{errorType}</span>
);

ErrorNotificatrion.propTypes = {
	errorType: PropTypes.string.isRequired,
};

export default ErrorNotificatrion;
