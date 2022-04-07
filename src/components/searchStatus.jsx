import React from "react";

const SearchStatus = ({length}) => {
	if (length === 0) {
		return <span className="badge bg-danger">{'Желающих больше нет'}</span>
	} else if (length > 4 || length === 1) {
		return <span className="badge bg-primary">{length} {'человек тусанет с тобой сегодня'}</span>
	} else {
		return <span className="badge bg-primary">{length} {'человека тусанет с тобой сегодня'}</span>
	}
};

export default SearchStatus