import React from 'react';


class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <footer className="site-footer">
                    <div className="container">
                        <div className="row row-content mt-5">
                            <div className="col-sm-4">
                                <p>123 Patrick Blvd<br/>
                                Las Vegas, NV 89142<br/>
                                <a href="tel:17022929770"><i className="fa fa-phone"></i> 702-292-9770</a><br/>
                                <a href="mailto:info@vbean.com"><i className="fa fa-envelope"></i> info@vbean.com</a>
                                </p>
                            </div>
                            <div className="col-sm-auto ml-auto">
                                <p className="mb-0">Connect with us:</p><br/>
                                <a href="http://facebook.com" className="btn btn-social-icon btn-facebook m-1">
                                    <span className="fa fa-facebook"></span>
                                </a>
                                <a href="http://instagram.com" className="btn btn-social-icon btn-instagram m-1">
                                    <span className="fa fa-instagram"></span>
                                </a>
                                <a href="http://twitter.com" className="btn btn-social-icon btn-twitter m-1">
                                    <span className="fa fa-twitter"></span>
                                </a>
                                <a href="http://youtube.com" className="btn btn-social-icon btn-google m-1">
                                    <span className="fa fa-youtube"></span>
                                </a>                 
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    };
}

export default Footer;