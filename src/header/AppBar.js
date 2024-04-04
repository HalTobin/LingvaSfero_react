import './AppBar.css';
import appLogo from '../images/Logo_ALEXIS-07_1.svg'
import { useNavigate } from 'react-router-dom';

function AppBar() {

    const navigate = useNavigate();

    return (
        <div className="top-bar" >
            <span
                className="logo"
                style={{ cursor: 'pointer' }}
                onClick={() => navigate(-1)}>
                <img src={appLogo} className="App-logo" alt="logo" />
            </span>
        </div >
    );
}

export default AppBar;