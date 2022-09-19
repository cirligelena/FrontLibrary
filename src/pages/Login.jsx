import '../assets/styles/login.css';
import LoginFormComponent from "../components/login/LoginForm";
import SideContentComponent from "../components/login/SideContent";
import UserLastActionMessageComponent from "../components/useraction/UserLastActionMessage";


const LoginPage = () => {
    return (
        <div className="login-page">
            <SideContentComponent />
            <LoginFormComponent />
            <UserLastActionMessageComponent/>
        </div>
    )
}

export default LoginPage;