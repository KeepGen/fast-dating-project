import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Pagination from "./pagination";
import User from "./user";
import { paginate } from "../utils/paginate";
import api from "../api";
import GroupList from "./groupList";
import SearchStatus from "./searchStatus";

const Users = ({ users: allUsers, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const pageSize = 2;

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const filteredUsers = selectedProf ? allUsers.filter((user) => JSON.stringify(user.profession) === JSON.stringify(selectedProf)) : allUsers;
    const count = filteredUsers.length;
    const userCrop = paginate(filteredUsers, currentPage, pageSize);

    const clearFilter = () => {
        setSelectedProf();
    };

    return (
        <div className="d-flex">
            {professions && (
                <div className="d-flex flex-column flex-shrink-0 p-3">
                    <GroupList selectedItem={selectedProf} items={ professions } onItemSelect={handleProfessionSelect} />
                    <button className="btn btn-secondary mt-2" onClick={clearFilter}>Очистить</button>
                </div>
            )}
            <div className="d-flex flex-column p-2">
                <SearchStatus length={count} />
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
                            {allUsers &&
                                userCrop.map((user) => (
                                    <User
                                        key={user._id}
                                        {...rest}
                                        {...user}
                                    />
                                ))}
                        </tbody>
                    </table>
                )}
                <div className="d-flex justify-content-center">
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
};

Users.propTypes = {
    users: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default Users;
