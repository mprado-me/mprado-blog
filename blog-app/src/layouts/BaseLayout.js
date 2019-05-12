import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container } from 'semantic-ui-react';

class BaseLayout extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Header/>
                </Container>
                <Container style={{minHeight: 1000}}>
                    {this.props.children}
                </Container>
                <Footer/>
            </div>
        );
    }
}

export default BaseLayout;
