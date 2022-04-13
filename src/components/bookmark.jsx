import React from "react";

const BookMark = ({ status, ...rest }) => {
	return (
		<button className="btn btn-outline-info" {...rest}>
			<i className={"bi bi-bookmark" + (status ? "-star-fill" : "")}></i>
		</button>
	);
};

export default BookMark;
