import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap';

class Pros extends Component {
    render() {
        return (
            <div className='pros'>
                <Container>
                    <Row className='pros-row'>
                        <Col sm={3} md={6} lg={3}>
                            <div>
                                <div className='pros-image prim0'></div>
                                <h3>پشتیبانی ۲۴ ساعته</h3>
                            </div>
                        </Col>
                        <Col sm={3} md={6} lg={3}>
                            <div>
                                <div className='pros-image prim1'></div>
                                <h3>کسب درآمد از طریق دعوت دوستان</h3>
                            </div>
                        </Col>
                        <Col sm={3} md={6} lg={3}>
                            <div>
                                <div className='pros-image prim2'></div>
                                <h3>کارمزد بسیار پایین معاملات</h3>
                            </div>
                        </Col>
                        <Col sm={3} md={6} lg={3}>
                            <div>
                                <div className='pros-image prim3'></div>
                                <h3>واریز سریع وجه</h3>
                            </div>
                        </Col>
                    </Row>
                    
                </Container>
               
            </div>
        );
    }
}

export default Pros;