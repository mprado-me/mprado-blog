import React, { Component } from 'react';
import BaseLayout from './BaseLayout';

class NotFoundLayout extends Component {
    render() {
        return (
            <BaseLayout>
                <p>404 - Página não encontrada</p>
            </BaseLayout>
        );
    }
}

export default NotFoundLayout;
