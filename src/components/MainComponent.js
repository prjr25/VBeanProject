import React from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import MainMenu from './MenuComponent';
import Footer from './FooterComponent';

class Main extends React.Component {

    render() {

        return (
            <div>
                <Header />
                <Home />
                <MainMenu />
                <Footer />
            </div>
        );
    }
}

export default Main;