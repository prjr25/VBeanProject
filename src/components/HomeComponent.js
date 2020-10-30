import React from 'react';
import CafeCarousel from './CafeCarousel';



function Home(props) {
    return(
        <React.Fragment>

            <div className="row row-content mt-2">
                <div className="col-sm text-center">
                    <h3>Las Vegas' favorite vegan, organic cafe.</h3>
                    <p>Become a BeanHead member today and experience a new way to cafe.</p>
                </div>
            </div>
    
            <div>
                <CafeCarousel />
            </div>

        </React.Fragment>
    )
}

export default Home;