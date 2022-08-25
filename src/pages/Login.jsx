import '../assets/styles/login.css';
import LoginFormComponent from "../components/login/LoginForm";
import SideContentComponent from "../components/login/SideContent";


const LoginPage = () => {
    return (
        <div className="login-page">
            <SideContentComponent />
            <LoginFormComponent />
        </div>
    )
}

export default LoginPage;