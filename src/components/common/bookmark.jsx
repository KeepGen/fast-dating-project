import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ status, ...rest }) => {
    return (
        <button className="btn btn-outline-info" {...rest}>
            <i className={"bi bi-bookmark" + (status ? "-star-fill" : "")}></i>
        </button>
    );
};

Bookmark.propTypes = {
    status: PropTypes.bool.isRequired
};

export default Bookmark;
