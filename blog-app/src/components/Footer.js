import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';

class Footer extends Component {
    render() {
        return (
            <Segment inverted style={{borderRadius: 0}}>
                <Container>
                    <p>Footer</p>
                </Container>
            </Segment>
        );
    }
}

export default Footer;
