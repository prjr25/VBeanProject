import React from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import { BREAKFAST } from '../../shared/menu.breakfast';

const breakfast = BREAKFAST;

function RenderBreakfastItem({brkItem, onClick}) {

    return (
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
}

function BreakfastMenu(props) {

    const breakfastMenu = props.breakfast.breakfast.map(brkItem => {
        return(
            <div key={brkItem.id} className="col-md-3 m-1">
                <RenderBreakfastItem brkItem={brkItem} />
            </div>
        );
    });
}

export default BreakfastMenu;