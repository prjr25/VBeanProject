import React from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import { BEVERAGES } from '../../shared/menu.beverages';


const beverages = BEVERAGES;

function RenderBeverageItem({bevItem, onClick}) {

    return (
            <Card>
                <CardBody>
                    <CardTitle className="card-header bg-dark text-white">{bevItem.name}</CardTitle>
                        <CardBody>
                            <div>{bevItem.size}</div>
                            <div>Price: ${bevItem.price}</div>
                        </CardBody>
                </CardBody>
            </Card>
    );
}

function BeverageMenu(props) {

    const beverageMenu = props.beverages.beverages.map(bevItem => {
        return(
            <div key={bevItem.id} className="col-md-3 m-1">
                <RenderBeverageItem bevItem={bevItem} />
            </div>
        );
    });
        return (
            <div className="container">
                <div className="row">
                    {beverageMenu}
                </div>
            </div>
        )

}

export default BeverageMenu;
