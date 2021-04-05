import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <footer>
                <main className="container d-flex flex-column align-items-center justify-content-center text-light">
                    <a>This is a footer</a>
                    
                </main>
            </footer>
        );
    }
}

export default Footer;