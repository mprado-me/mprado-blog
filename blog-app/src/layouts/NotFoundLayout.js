import React, { Component } from 'react';
import BaseLayout from './base_layout';

class NotFoundLayout extends Component {
    render() {
        return (
            <BaseLayout location={this.props.location}>
                <p>404 - Página não encontrada</p>
            </BaseLayout>
        );
    }
}

export default NotFoundLayout;
