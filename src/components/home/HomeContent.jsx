import libraryPhoto from '../../assets/images/library-photo.jpg';
import {useNavigate} from "react-router-dom";
import React from "react";
import {logout} from "../../redux/actions/login";
import {useDispatch} from "react-redux";

const HomeContentComponent = () => {
    const navigate = useNavigate();
const dispatch= useDispatch()

    return (
        <div className="home-page">
                <div className="photo-container">
                    <img src={libraryPhoto}/>
                </div>
                <div className="content-container">
                    <div className="content-container__title">
                        <h1>Stefanini Library</h1>
                    </div>
                    <div className="content-container__description">
                        <p>
                            The <strong>Stefanini Library</strong> is situated in the center of Chisinau, established in
                            2022. It was founded on the initiative of 3 interns : Daria, Denis and Elena, who believed
                            that
                            reading books is the best way to spend time. Membership is open to all, without any payment.
                            No running.
                            No food or drinks.
                            Return library books on time.
                            Pay late fees on time.
                            Keep hands clean while reading.
                            Use a bookmark.
                            Report all book damage to librarian.
                            Be quiet.
                            Be respectful of others.
                            Put books back where they belong.
                        </p>
                    </div>
                    <div className="content-container__button">
                        <button className="open-library__btn" onClick={() => dispatch(logout())}>
                            logout
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default HomeContentComponent;