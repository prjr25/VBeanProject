import React from 'react';
import { Card, CardBody, CardHeader, CardText } from 'reactstrap';



    const Menu = ({selectedMenu}) => selectedMenu.menu.map(item => {
        return(
                <Card key={item.id} className="m-2 col-md-3">
                    <CardHeader className="text-center text-white bg-primary">{item.name}</CardHeader> 
                        <CardBody>                           
                            <CardText>{item.description}</CardText>
                            <CardText>${item.price}</CardText>
                        </CardBody>
                </Card>
        );
    });


export default Menu;
