import React from 'react';
import { Link } from 'react-router-dom';

class Logo extends React.Component {
    render() {
        return (
            <div>
                <Link to='/home'><img src="https://res.cloudinary.com/prjr25/image/upload/v1604631219/VBeanProject/images/logo/vBeanLogo_pbkqau.png" alt="V Bean Logo" /></Link>
            </div>
        )
    }
};

export default Logo;