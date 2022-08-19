import React from "react";
import NavigationComponent from "../navigation/Navigation";



const HomeComponent = () => {
    return (
        <div>
            <NavigationComponent/>
            <div className="photo-container">
                <div className="photo-container__library-cartoon"></div>
            </div>
            <div className="content-container">
                <div className="content-container__title">
                    <h1>Stefanini Library</h1>
                </div>
                <div className="content-container__description">
                    <p>
                        The <strong>Stefanini Library</strong> is situated in the center of Chisinau, established in
                        2022. It was founded on the initiative of 3 interns : Daria, Denis and Elena, who believed that
                        reading books is the best way to spend time. Membership is open to all, without any payment.
                    </p>
                </div>
                <div className="content-container__button">
                    <button className="open-library__btn">
                        Open Library
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeComponent;