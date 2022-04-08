import React, {useState} from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "./api";

function App() {
	const [users, setUsers] = useState(api.users.fetchAll);
	const handleDelete = (userId) => {
		setUsers(users.filter(user => user._id !== userId));
	};

	return (
		<>
			<h2 className="m-2"><SearchStatus length={users.length}/></h2>
			<table className="table table-hover">
				<thead>
				<tr className="table-secondary">
					<th scope="col">Имя</th>
					<th scope="col">Личные качества</th>
					<th scope="col">Профессия</th>
					<th scope="col">Количество встреч</th>
					<th scope="col">Оценка</th>
					<th scope="col">Избранное</th>
					<th scope="col">Отказаться</th>
				</tr>
				</thead>
				<tbody>
					<Users users={users} onDelete={handleDelete}/>
				</tbody>
			</table>
		</>
	);
}

export default App