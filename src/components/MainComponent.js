import React from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import CafeMenu from './CafeMenuComponent';
import Footer from './FooterComponent';

class Main extends React.Component {

    render() {

        return (
            <div>
                <Header />
                <Home />
                <CafeMenu />
                <Footer />
            </div>
        );
    }
}

export default Main;