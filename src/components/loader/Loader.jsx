import {PulseLoader} from "react-spinners";
import React, {useEffect, useState, CSSProperties } from "react";
import NavigationComponent from "../navigation/Navigation";



const LoaderComponent = ({divToLoad}) => {
    const [isLoading, setLoading] = useState(true);
    const [divLoaded] = useState(divToLoad);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 800)
    }, []);

    const executeLoader = (loader, divLoaded) => {
        return (
            <>
                {
                    isLoading ?
                        <PulseLoader cssOverride={{
                            textAlign: "center",
                            paddingTop: "20%"
                        }}
                                     size={25} />
                        : <>
                            <NavigationComponent />
                            {divLoaded}
                        </>

                }
            </>
        );

    };


    return (
        <div>
            {executeLoader(<PulseLoader />, divLoaded)}
        </div>
    );
};

export default LoaderComponent;