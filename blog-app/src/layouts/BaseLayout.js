import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
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
