import React from 'react';
import { Button } from 'reactstrap';
import BeverageMenu from './CafeMenus/BeverageMenuComponent';
import BreakfastMenu from './CafeMenus/BreakfastMenuComponent';
import  DinnerMenu from './CafeMenus/DinnerMenuComponent';

class CafeMenu extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isBevOpen: false,
            isBreakOpen: false,
            isDinOpen: false,
        }
}

    ToggleBev() {
        this.setState = {
            isBevOpen: !this.state.isBevOpen,
            isBreakOpen: false,
            isDinOpen: false,
        };
    }

    render() {

        return(
            <div className="container mt-2">
                <div className="row row-content mt-2">
                    <div className="col-sm text-center">
                        <h3>View Our Menus</h3>
                    </div>
                </div> 
                <div className="row justify-content-center">
                    <Button className="m-1">Beverages</Button>
                    <Button className="m-1">Breakfast</Button>
                    <Button className="m-1">Lunch &amp; Dinner</Button>
                </div>
                <div>
                    {/*<BeverageMenu /> */}
                    {/*<BreakfastMenu /> */}
                    {/*<DinnerMenu /> */}
                </div>
            </div>
        )
        }
}

export default CafeMenu;
