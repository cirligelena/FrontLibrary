import {useDispatch, useSelector} from "react-redux";
import {getTokenStatus, getUserData} from "../../redux/selectors/login";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const ChangePasswordNotification = ({children}) => {
    const userInfo = useSelector(getUserData);
    const navigate = useNavigate();
    const [showpopup, setShowpopup] = useState(false)
    const handleShowPopUp = () => {setShowpopup(true)};
    const handleHidePopUp = () => {setShowpopup(false)};
    useEffect(() => {
        if (userInfo.status === "new user") {
           setInterval(handleShowPopUp, 30000);
            handleShowPopUp()
        }
    }, [])


    return  (
        <>
            <div>
                {children}
            </div>
            <Modal show={showpopup} onHide={handleHidePopUp}>
                <Modal.Header closeButton>
                    <Modal.Title>Your password is not safe </Modal.Title>
                </Modal.Header>
                <Modal.Body>Please change your password</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => {navigate("/profile");  handleHidePopUp()}}>Navigate profile</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ChangePasswordNotification;