import {useDispatch, useSelector} from "react-redux";
import {getUserData} from "../../redux/selectors/login";
import React, {useEffect, useState} from "react";
import {getUserHistory} from "../../redux/actions/history";
import {getLastModifiedBook} from "../../redux/selectors/allBooks";
import {getHistoryList} from "../../redux/selectors/history";
import NoItemsFoundErrorComponent from "../errors/NoItemsFoundError";

const HistoryComponent = () => {
    const userData = useSelector(getUserData)
    const [loaded, setLoaded] = useState(false)
    const dispatch = useDispatch();
    const history = useSelector(getHistoryList);
    const lastModified = useSelector(getLastModifiedBook)
    useEffect(() => {
        setLoaded(false)
        dispatch(getUserHistory(userData.id)).then(() => {
            setLoaded(true)

        })
    }, [lastModified]);
    return (<div >
            {Array.isArray(history) ?
                history.map((action) => {
                    return (
                        <div>
                            <p>Date: {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(action.date)} Action: {action.actionName}</p>
                        </div>)
                })
                : <NoItemsFoundErrorComponent/>
            }
        </div>
    );
};

export default HistoryComponent;