import React from 'react';
import { Button } from 'reactstrap';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import { BEVERAGES } from '../shared/menu.beverages';
import { BREAKFAST } from '../shared/menu.breakfast';
import { DINNER } from '../shared/menu.dinner';



    /*function RenderBeverageMenu(props) {

            const beverageMenu = props.beverages.map(beverage => {
                    
                return(
                    <Card>
                        <CardBody>
                            <CardTitle className="card-header bg-dark text-white">{beverage.name}</CardTitle>
                                <CardBody>
                                    <div>Size: {beverage.size}</div>
                                    <div>Price: ${beverage.price}</div>
                                </CardBody>
                        </CardBody>
                    </Card>
                );
        }); */

    function RenderBreakfastMenu(props) {

        const breakfastMenu = props.breakfast.map(brkItem => {

            return(
                <Card>
                    <CardBody>
                        <CardTitle className="card-header bg-dark text-white">{brkItem.name}</CardTitle>
                            <CardBody>
                                <div>{brkItem.description}</div>
                                <div>Price: ${brkItem.price}</div>
                            </CardBody>
                    </CardBody>
                </Card>
            );
        });
    }

    function RenderDinnerMenu(props) {

        const dinnerMenu = props.dinner.map(dinItem => {

            return(
                <Card>
                    <CardBody>
                        <CardTitle className="card-header bg-dark text-white">{dinItem.name}</CardTitle>
                            <CardBody>
                                <div>{dinItem.description}</div>
                                <div>Price: ${dinItem.price}</div>
                            </CardBody>
                    </CardBody>
                </Card>
            );
        });
    }

class MainMenu extends React.Component {

    constructor(props) {
        super(props);
        const beverages = BEVERAGES;
        const breakfast = BREAKFAST;
        const dinner = DINNER;
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
            </div>
        )
        }
}

export default MainMenu;
