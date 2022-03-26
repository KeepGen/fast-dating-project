import React, {useState} from 'react';
import api from '../api';

const Users = () => {
	const [users, setUsers] = useState(api.users.fetchAll());

	const hendleDelete = (userId) => {
		setUsers(prevState => prevState.filter(user => user._id !== userId));
	};

	const renderPhrase = (number) => {
		number = users.length;
		if (number === 0) {
			return <span className="badge bg-danger">{'Желающих больше нет'}</span>
		} else if (number > 4 || number === 1) {
			return <span className="badge bg-primary">{number} {'человек тусанет с тобой сегодня'}</span>
		} else {
			return <span className="badge bg-primary">{number} {'человека тусанет с тобой сегодня'}</span>
		}
	};

	return (
		<>
			<h2>{renderPhrase()}</h2>
			<table className="table table-hover">
				<thead>
				<tr className="table-secondary">
					<th scope="col" className="d-flex align-items-center">Имя</th>
					<th scope="col">Личные качества</th>
					<th scope="col">Профессия</th>
					<th scope="col">Количество встреч</th>
					<th scope="col">Оценка</th>
					<th scope="col">Отказаться</th>
				</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user._id}>
								<td className="align-baseline">{user.name}</td>
								<td className="align-baseline">{user.qualities.map((quality) => <span className={`badge bg-${quality.color} m-2`} key={quality._id}>{quality.name}</span>)}</td>
								<td className="align-baseline">{user.profession.name}</td>
								<td className="align-baseline">{user.completedMeetings}</td>
								<td className="align-baseline">{user.rate}</td>
								<td className="align-baseline"><button className='btn btn-danger' onClick={() => hendleDelete(user._id)}>Удалить</button></td>
							</tr>
						)
					)}
				</tbody>
			</table>
		</>
	);
};

export default Users;