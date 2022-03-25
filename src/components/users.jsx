import React from "react";
import api from '../api';

const Users = () => {
	console.log(api.users.fetchAll());
	return <h1>Users List</h1>;
};

export default Users;