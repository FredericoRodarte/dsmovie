import {ReactComponent as GuiHubIcon} from 'assets/img/github.svg';

import './styles.css';
function Navbar() {
    
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/devsuperior">
                        <div className="dsmovie-contact-container">
                            <GuiHubIcon />
                            <p className="dsmovie-contact-link">/devsuperior</p>                            
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
