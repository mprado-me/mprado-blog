// Import de módulos de terceiros
import React, { Component } from 'react';
import { Container, Segment, Grid, List, Divider } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { Icon } from 'semantic-ui-react'
import { connect } from "react-redux";

// Import de módulos locais
import messages from '../../resources/messages';
import strapiApi from "../../services/strapiApi";

// Import das ações
import { FETCH_SOCIAL_NETWORKS } from '../../actions';

// Estados iniciais
const socialNetworksInitialState = [];

// Ações específicas desse componente
export const fetchSocialNetworks = () => async dispatch => {
    let payload = {};
    
    const response = await strapiApi.get('/socialnetworks');
    payload.newSocialNetworks = response.data;

    dispatch({ type: FETCH_SOCIAL_NETWORKS, payload });
};

// Reducers que impactam esse componente
export const socialNetworksReducer = (state = socialNetworksInitialState, action) => {
    switch (action.type) {
        case FETCH_SOCIAL_NETWORKS:
            if(action.payload.newSocialNetworks) {
                return action.payload.newSocialNetworks;
            }
            else {
                return state;
            }
        default:
            return state;
    }
};

// Componente
class Footer extends Component {
    componentDidMount = () => {
        this.props.fetchSocialNetworks();
    }

    renderSocialNetworks = () => {
        return this.props.socialNetworks.map(socialNetwork => {
            return (
                <a target='_blank' href={socialNetwork.url}>
                    <Icon className={socialNetwork.semanticUiClass} size='big' />
                </a>
            )
        });
    };

    render = () => {
        return (
            <Segment.Group style={{border: 0}}>
                <Segment inverted style={{ borderRadius: 0}}>
                    <Container>
                        <Grid columns={2} divided>
                            <Grid.Row >
                                <Grid.Column>
                                    <h5>Páginas</h5>
                                    <Divider/>
                                    <List>
                                        <List.Item><Link to={'/'}>Home</Link></List.Item>
                                        <List.Item><Link to={'/posts'}>Posts</Link></List.Item>
                                        <List.Item><Link to={'/tags'}>Tags</Link></List.Item>
                                        <List.Item><a href='https://strapi.mprado.me/admin'>Strapi</a></List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column>
                                    <h5>Contato</h5>
                                    <Divider/>
                                    <p>marco.pdsv@gmail.com</p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>
                <Segment textAlign='center' inverted style={{ borderRadius: 0 }}>
                    <Container>
                        {this.renderSocialNetworks()}
                    </Container>
                </Segment>
            </Segment.Group>
        );

    }
}

const mapStateToProps = state => {
    return state.footer;
};

export default connect(
    mapStateToProps,
    { fetchSocialNetworks }
)(Footer);
