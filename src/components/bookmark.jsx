import React, {useState} from "react";

const Bookmark = () => {
	const [status, setStatus] = useState(false);
	const isFav = <i className={`bi bi-bookmark-star-fill`}></i>
	const notFav = <i className={`bi bi-bookmark`}></i>

	const toggle = () => {
		setStatus(!status);
	}

	return (
		<button type="button" className="btn btn-outline-info" onClick={toggle}>{(status ? isFav : notFav)}</button>
	)
};

export default Bookmark