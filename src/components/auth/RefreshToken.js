import React, {useEffect, useState} from "react";
import { checkIfTokenValid} from "../../services/token";
import {useDispatch, useSelector} from "react-redux";
import {getTokenStatus, getUserData} from "../../redux/selectors/login";
import {logout, receiveRefreshToken} from "../../redux/actions/login";
import {useNavigate} from "react-router-dom";
import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";



const RefreshToken = ({children}) => {
    const userInfo = useSelector(getUserData);
    const dispatch = useDispatch();
    const tokenValid = useSelector(getTokenStatus);
    const navigate = useNavigate();
    const [showpopup, setShowpopup] = useState(false)
    const handlePopUp = (e) => {setShowpopup(!showpopup)};
    useEffect(() => {
        if (userInfo && !tokenValid && checkIfTokenValid(userInfo.refresh_token)) {
            dispatch(receiveRefreshToken()).then(() => {
                console.log("Token was refreshed")
            });
        } else if (userInfo.email && !tokenValid && !checkIfTokenValid(userInfo.refresh_token)) {
            dispatch(logout())
            handlePopUp()
        }
    }, [tokenValid])


    return  (
        <>
    <div>
        {children}
    </div>
    <Modal show={showpopup} onHide={handlePopUp}>
        <Modal.Header closeButton>
            <Modal.Title>Session finished </Modal.Title>
        </Modal.Header>
        <Modal.Body>Please login again</Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={() => {navigate("/login");  handlePopUp()}}>Login</Button>
        </Modal.Footer>
    </Modal>
        </>
)
}

export default RefreshToken;