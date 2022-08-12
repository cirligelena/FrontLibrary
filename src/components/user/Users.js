import React, {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {deleteUser, userList} from "../../redux/actions/user";
import {useDispatch, useSelector} from "react-redux";
import {getUserList} from "../../redux/selectors/user";

const UsersComponent = () => {

    const users = useSelector(getUserList);
    const dispatch = useDispatch();

    const deleteUserById = (id) => {
        dispatch(deleteUser(id));
    }


    useEffect(() => {
        dispatch(userList());
    }, []);

    return (
        <div>

            {Array.isArray(users)
                ? users.map(result => {
                    return (
                        <div>
                            <h5>{result.email}</h5>
                            <h5>{result.profile.firstName}</h5>
                            <h5>{result.profile.lastName}</h5>
                            <button onClick={() => deleteUserById(result.id)}>
                                delete
                            </button>
                        </div>
                    )
                })
                : null
            }

        </div>);
}

export default UsersComponent;