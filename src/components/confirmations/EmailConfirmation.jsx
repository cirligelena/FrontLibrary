import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";


const EmailConfirmationComponent = () => {
     const [loaded, setLoaded] = useState(false)
     const dispatch = useDispatch();
     const params = useParams();

     useEffect(() => {
          
     })

     return (
          <div>

          </div>
     )
}

export default EmailConfirmationComponent;