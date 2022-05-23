import React from "react";
// import User from "./user";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import Bookmark from "./bookmark";

const UsersTable = ({ users, onSort, selectedSort, onToggleBookMark, onDelete, ...rest }) => {
    const columns = {
        name: { path: "name", name: "Имя" },
        qualities: { name: "Качества" },
        professions: { path: "profession.name", name: "Профессия" },
        completedMeetings: { path: "completedMeetings", name: "Встретился, раз" },
        rate: { path: "rate", name: "Оценка" },
        bookmark: {
            path: "bookmark",
            name: "Избранное",
            component: (user) => (
                <Bookmark
                    status={user.bookmark}
                    onClick={() => onToggleBookMark(user._id)}
                />
            )
        },
        delete: {
            component: (user) => (
                <button
                    onClick={() => onDelete(user._id)}
                    className="btn btn-danger"
                >
                    удалить
                </button>
            )
        }
    };
    return (
        <table className="table table-hover">
            <TableHeader { ...{ onSort, selectedSort, columns } } />
            <TableBody { ...{ columns, data: users } } />
            {/* <tbody> */}
            {/*    {users.map((user) => ( */}
            {/*        <User key={user._id} {...rest} {...user} /> */}
            {/*    ))} */}
            {/* </tbody> */}
        </table>
    );
};

UsersTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onToggleBookMark: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default UsersTable;
