import React from 'react';
import { Button } from 'reactstrap';
import Menu from './Menu';
import { MENUS } from '../shared/menus';

class CafeMenu extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            menus: MENUS,
            selectedMenu: 0,
        }
}

    toggleSelectedMenu(val){
        this.setState({
            selectedMenu: val,
        })
    }

    render() {

        return(
            <div className="container">
                <div className="row row-content my-4">
                    <div className="col-sm text-center">
                        <h3>View Our Menus</h3>
                    </div>
                </div> 
                <div className="row justify-content-center">
                    <Button className="btn btn-lg m-2" onClick={() => this.toggleSelectedMenu(0)}>Beverages</Button>
                    <Button className="btn btn-lg m-2" onClick={() => this.toggleSelectedMenu(1)}>Breakfast</Button>
                    <Button className="btn btn-lg m-2" onClick={() => this.toggleSelectedMenu(2)}>Lunch &amp; Dinner</Button>
                </div>
                <div className="container">
                    <div className="text-center my-4">
                        <h2 className="menu-header">{this.state.menus[this.state.selectedMenu].name}</h2>
                    </div>
                    <div className="row justify-content-center">
                        <Menu selectedMenu={this.state.menus[this.state.selectedMenu]}/>
                    </div>
                </div>
            </div>
        )
        }
}

export default CafeMenu;

