// Import de módulos de terceiros
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Card, Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// Import de módulos locais
import messages from '../resources/messages';
import BaseLayout from './base_layout';
import { updateActiveMenuItem } from '../actions';
import { POSTS } from '../resources/consts/menu_items';
import FilterBox from '../components/filter_box';
import strapiApi, { getStrapiAssetUrl } from "../services/strapiApi";

// Estados iniciais

// Import das ações

// Ações específicas desse componente

// Reducers que impactam esse componente

// Componente
// TODO: Páginar os posts
// TOOD: Considerar a filtragem na hora de exibir os posts
class PostsLayout extends Component {
    state = {
        posts: []
    };

    componentDidMount = async () => {
        this.props.updateActiveMenuItem(POSTS);

        let response = await strapiApi.get('/posts');
        let posts = response.data
        console.log('posts', posts);

        this.setState({ posts });
    };

    renderPosts = () => {
        console.log("this.state on renderPosts", this.state)

        return this.state.posts.map((post) => {
            return (
                <Grid.Column style={{ marginBottom: '16px' }}>
                    <Link to={`/posts/${post._id}`}>
                        <Card style={{ width: '100%' }}>
                            <div style={{ height: '160px', width: '100%', textAlign: 'center' }}>
                                <img style={{ height: '100%', maxWidth: '100%' }} src={getStrapiAssetUrl(post.mainImage.url)} />
                            </div>
                            <Card.Content>
                                <Card.Header>{post.title_pt_BR}</Card.Header>
                                <Card.Meta>{post.createdAt.substring(0, 10)}</Card.Meta>
                                <Card.Description style={{ height: '80px' }}>{post.summary_pt_BR}</Card.Description>
                            </Card.Content>
                        </Card>
                    </Link>
                </Grid.Column>
            );
        });
    }

    render = () => {
        return (
            <BaseLayout location={this.props.location}>
                <Grid style={{ marginTop: 6 }}>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <FilterBox />
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <Grid columns={2}>
                                <Grid.Row>
                                    {this.renderPosts()}
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
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
)(PostsLayout);
