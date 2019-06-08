// Import de módulos de terceiros
import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { connect } from "react-redux";

// Import de módulos locais
import messages from '../../resources/messages';
import FilterTagsSection from './tags';

// Estados iniciais

// Import das ações

// Ações específicas desse componente

// Reducers que impactam esse componente

// Componente
class FilterBox extends Component {
    render = () => {
        return (
            <Card>
                <FilterTagsSection/>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return null;
};

export default connect(
    mapStateToProps,
    {}
)(FilterBox);
