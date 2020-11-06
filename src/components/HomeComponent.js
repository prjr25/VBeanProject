import React from 'react';
import CafeCarousel from './CafeCarousel';
import StoreHours from './StoreHours';



function Home(props) {
    return(
        <React.Fragment>

            <div className="row row-content mt-2">
                <div className="col-sm text-center">
                    <h3>Las Vegas' favorite vegan, organic cafe.</h3>
                    <p>Become a BeanHead member today and experience a new way to cafe.</p>
                </div>
            </div>    
            <div className="m-auto carousel-images">
                <CafeCarousel />
            </div>
            <div>
                <div className="row row-content mt-2">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4 mx-auto">
                        <StoreHours />
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Home;