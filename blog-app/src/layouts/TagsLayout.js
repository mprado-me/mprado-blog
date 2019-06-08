// Import de módulos de terceiros
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import de módulos locais
import messages from '../resources/messages';
import BaseLayout from './base_layout';
import {updateActiveMenuItem} from "../actions";
import {TAGS} from "../resources/consts/menu_items";

// Estados iniciais

// Import das ações

// Ações específicas desse componente

// Reducers que impactam esse componente

// Componente
class TagsLayout extends Component {
    componentDidMount = () => {
        this.props.updateActiveMenuItem(TAGS);
    };

    render() {
        return (
            <BaseLayout location={this.props.location}>
                <p>Tags Layout</p>
            </BaseLayout>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

export default connect(
    mapStateToProps,
    { updateActiveMenuItem }
)(TagsLayout);
