import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

class StoreHours extends React.Component {

    render() {
        return(
            <React.Fragment>
                <Card>
                    <CardTitle className="card-header bg-dark text-white">Store Hours</CardTitle>
                        <CardBody>
                            <dl class="row">
                                <dt class="col-6">Sunday:</dt>
                                <dd class="col-6">6:00am to 7:00pm</dd>
                                <dt class="col-6">Monday:</dt>
                                <dd class="col-6">5:00am to 8:00pm</dd>
                                <dt class="col-6">Tuesday:</dt>
                                <dd class="col-6">5:00am to 8:00pm</dd>
                                <dt class="col-6">Wednesday:</dt>
                                <dd class="col-6">5:00am to 8:00pm</dd>
                                <dt class="col-6">Thursday:</dt>
                                <dd class="col-6">5:00am to 8:00pm</dd>
                                <dt class="col-6">Friday:</dt>
                                <dd class="col-6">5:00am to 9:00pm</dd>
                                <dt class="col-6">Saturday</dt>
                                <dd class="col-6">6:00am to 9:00pm</dd>
                            </dl>
                        </CardBody>
                </Card>
            </React.Fragment>
        );
    };
}

export default StoreHours;