import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const UsersList = ({ users }) => {
    return (
        <>
            <Link key={users._id} to={`/users/page/${users._id}`}>
                {users.name}
            </Link>
        </>
    );
};

UsersList.propTypes = {
    users: PropTypes.object.isRequired
};

export default UsersList;
