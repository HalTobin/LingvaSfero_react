import './AppBar.css';
import appLogo from '../images/Logo_ALEXIS-07_1.svg'

function AppBar() {

    return (
        <div>
            {/* Top Bar */}
            <div className="top-bar" >
                <div className="logo">
                    <img src={appLogo} className="App-logo" alt="logo" />
                </div>
            </div >
        </div>
    );
}

export default AppBar;