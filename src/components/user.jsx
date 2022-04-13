import React from "react";
import Quality from "./quality";
import BookMark from "./bookmark";
const User = ({
	              _id,
	              name,
	              qualities,
	              profession,
	              completedMeetings,
	              rate,
	              onDelete,
	              bookmark,
	              onToggleBookMark,
              }) => {
	return (
		<tr>
			<td className="align-baseline">{name}</td>
			<td className="align-baseline">
				{qualities.map((quality) => (
					<Quality key={quality._id} {...quality} />
				))}
			</td>
			<td className="align-baseline">{profession.name}</td>
			<td className="align-baseline">{completedMeetings}</td>
			<td className="align-baseline">{rate} /5</td>
			<td className="align-baseline">
				<BookMark status={bookmark} onClick={() => onToggleBookMark(_id)}
				/>
			</td>
			<td className="align-baseline">
				<button onClick={() => onDelete(_id)} className="btn btn-danger">
					удалить
				</button>
			</td>
		</tr>
	);
};

export default User;