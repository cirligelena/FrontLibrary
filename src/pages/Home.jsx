import '../assets/styles/home.css';
import NavigationComponent from "../components/navigation/Navigation";
import HomeContentComponent from '../components/home/HomeContent';


const HomePage = () => {
    return (
        <>
            <NavigationComponent />
            <HomeContentComponent />
        </>
    )
}

export default HomePage;