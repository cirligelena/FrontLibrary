import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {confirmEmailByToken} from "../../redux/actions/emailConfirmation";
import NavigationComponent from "../navigation/Navigation";
import {PulseLoader} from "react-spinners";
import {getConfirmationToken} from "../../redux/selectors/emailConfirmation";


const EmailConfirmationComponent = () => {
    const [loaded, setLoaded] = useState(false);
    const emailConfirmationToken = useSelector(getConfirmationToken);
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(confirmEmailByToken(params.token)).then(() => {
            setLoaded(true);
        })
    })

    return (
        <>
            {
                loaded ?
                    <>
                        <NavigationComponent/>
                        <div>

                        </div>
                    </>
                    :
                    <PulseLoader cssOverride={{
                        textAlign: "center",
                        paddingTop: "20%"
                    }} size={25}/>
            }
        </>
    )
}

export default EmailConfirmationComponent;