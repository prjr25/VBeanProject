import React from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import { DINNER } from '../../shared/menu.dinner';



function RenderDinnerItem({dinItem, onClick}) {
    const dinner = DINNER;
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle className="card-header bg-dark text-white">{dinItem.name}</CardTitle>
                        <CardBody>
                            <div>{dinItem.description}</div>
                            <div>Price: ${dinItem.price}</div>
                        </CardBody>
                </CardBody>
            </Card>
        </div>
    );
}

function DinnerMenu(props) {

const dinnerMenu = props.dinner.dinner.map(dinItem => {
    return(
        <div key={dinItem.id} className="col-md-3 m-1">
            <RenderDinnerItem dinItem={dinItem} />
        </div>
    );
})
}

export default DinnerMenu;