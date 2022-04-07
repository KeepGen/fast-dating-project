import React from "react";
import Quality from "./quality";
import Bookmark from "./bookmark";

const User = (props) => {
	const {user, onDelete} = props
	console.log('user', user);
	console.log('user._id', user._id);
	console.log('onDelete', onDelete);
	console.log('= = = = = = = = = = = = = = = = = = = = = = = = = = = = ');
	return (
		<>
			<tr>
				<td className="align-baseline">{user.name}</td>
				<td className="align-baseline">{user.qualities.map((quality) => <Quality key={quality._id} color={quality.color} name={quality.name} _id={quality._id}/>)}</td>
				<td className="align-baseline">{user.profession.name}</td>
				<td className="align-baseline">{user.completedMeetings}</td>
				<td className="align-baseline">{user.rate}</td>
				<td className="align-baseline"><button className='btn btn-danger btn-sm' onClick={() => onDelete(user._id)}>Удалить</button></td>
			</tr>
		</>
	)
};

export default User