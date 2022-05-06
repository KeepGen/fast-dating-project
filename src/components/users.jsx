import React, { useState } from "react";
import PropTypes from "prop-types";
import Pagination from "./pagination";
import User from "./user";
import { paginate } from "../utils/paginate";
import api from "../api";
import GroupList from "./groupList";

const Users = ({ users: allUsers, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions] = useState(api.professions.fetchAll());
    const count = allUsers.length;
    const pageSize = 4;

    const handleProfessionSelect = (params) => {
        console.log(params);
    };
    console.log(professions);

    const handlePageChange = (pageIndex) => {
        console.log("page:", pageIndex);
        setCurrentPage(pageIndex);
    };

    const userCrop = paginate(allUsers, currentPage, pageSize);

    return (
        <>
            <GroupList items={ professions } onItemSelect={handleProfessionSelect()} />
            {count > 0 && (
                <table className="table table-hover">
                    <thead>
                        <tr className="table-secondary">
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Провфессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {userCrop.map((user) => (
                            <User key={user._id} {...rest} {...user} />
                        ))}
                    </tbody>
                </table>
            )}
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};

Users.propTypes = {
    users: PropTypes.array.isRequired
};

export default Users;
