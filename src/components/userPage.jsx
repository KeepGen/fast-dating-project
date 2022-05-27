import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import api from "../api";

const UserPage = () => {
    // const history = useHistory();
    const [user, setUser] = useState();
    const params = useParams();
    const { usersId } = params;

    useEffect(() => {
        api.users.getById(usersId).then((data) => setUser(data));
    });

    // const handleAllUsers = () => {
    //     history.replace("/users");
    // };
    return (
        <>
            {user}
        </>
    );
};

UserPage.propTypes = {
    id: PropTypes.string,
    users: PropTypes.array.isRequired
};

export default UserPage;
