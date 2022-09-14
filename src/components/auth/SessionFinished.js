import React, {useEffect, useState} from "react";
import { useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Modal} from "react-bootstrap";
import {getShowModalState} from "../../redux/selectors/flagSelectors";



const SessionFinished = ({children}) => {
    const showModal = useSelector(getShowModalState);
    const navigate = useNavigate();
    const [showpopup, setShowpopup] = useState(false)
    const handlePopUp = (e) => {setShowpopup(!showpopup)};
    useEffect(() => {
          if (showModal) {navigate("/");
          setShowpopup(true)}
    }, [showModal])

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
            <button className="card-btn100__buttons" onClick={() => {navigate("/login");  handlePopUp()}}>Login</button>
        </Modal.Footer>
    </Modal>
        </>
)
}

export default SessionFinished;