import React from 'react';

function About(props) {

    return (
        <React.Fragment>
            <div className="row row-content">
                <div className="col text-center my-4">
                    <h3>A new way to cafe.</h3>
                </div>
            </div>

            <div className="container article-container">
                <article className="row row-content my-4">
                    <div className="col-md-10 col-lg-8 align-self-center mx-auto">
                        <div className="media align-items-center">            
                            <img src="https://res.cloudinary.com/prjr25/image/upload/v1604631212/VBeanProject/images/cafe/POC-paying-sq_erky8h.jpg" className="d-flex img-thumbnail article-img mr-3" alt="Paying with memebership" />     
                            <div className="media-body">
                                <h4>Memberships for coffee lovers like you.</h4>
                                <p className="d-none d-sm-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                                Shop memberships<a href="shop.html"> here</a>.
                            </div>
                        </div>
                        <hr/>
                    </div>            
                </article>
                <article className="row row-content my-4">
                    <div className="col-md-10 col-lg-8 align-self-center mx-auto">
                        <div className="media align-items-center">            
                            <div className="media-body">
                                <h4>Coffee that exceeds expectations.</h4>
                                <p className="d-none d-sm-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                                Check out our drinks menu<a href="menus.html"> here</a>.
                            </div>
                            <img src="https://res.cloudinary.com/prjr25/image/upload/v1604631224/VBeanProject/images/drinks/coffee-beans-sq_htpq4s.jpg" className="d-flex img-thumbnail article-img ml-3" alt="Paying with memebership" />     
                        </div>
                        <hr/>
                    </div>            
                </article>
                <article className="row row-content my-4">
                    <div className="col-md-10 col-lg-8 align-self-center mx-auto">
                        <div className="media align-items-center">            
                            <img src="https://res.cloudinary.com/prjr25/image/upload/v1604631218/VBeanProject/images/cafe/two-dining-sq_hvd52q.jpg" className="d-flex img-thumbnail article-img mr-3" alt="Paying with memebership" />     
                            <div className="media-body">
                                <h4>Delightful dine-in experience.</h4>
                                <p className="d-none d-sm-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                                View the food menu<a href="menus.html"> here</a>.
                            </div>
                        </div>
                        <hr/>
                    </div>            
                </article>
                <article className="row row-content my-4">
                    <div className="col-md-10 col-lg-8 align-self-center mx-auto">
                        <div className="media align-items-center">            
                            <div className="media-body">
                                <h4>Gift Certificates for your fellow V Bean lovers.</h4>
                                <p className="d-none d-sm-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                                Buy gift certificates<a href="shop.html"> here</a>.
                            </div>
                            <img src="https://res.cloudinary.com/prjr25/image/upload/v1604631225/VBeanProject/images/misc/present-sq_hz87mj.jpg" className="d-flex img-thumbnail article-img ml-3" alt="Paying with memebership" />     
                        </div>
                        <hr/>
                    </div>            
                </article>
            </div>
        </React.Fragment>
    )
}

export default About;
