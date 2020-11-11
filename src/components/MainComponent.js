import React from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import CafeMenu from './CafeMenuComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends React.Component {

    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        }

        return (
            <div>
                <Header />
                    <Switch>
                        <Route path='/home' component={HomePage} />
                        <Route path='/about' component={About} />
                        <Route path='/menus' component={CafeMenu} />
                        <Redirect to='/home' />
                    </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;