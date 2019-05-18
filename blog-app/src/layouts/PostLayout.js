import React, { Component } from 'react';
import { connect } from 'react-redux';
import BaseLayout from './base_layout';
import { updateActiveMenuItem } from "../components/header/actions";
import { POSTS } from "../components/header/menu_items";
import strapiApi, { getStrapiAssetUrl } from "../services/strapiApi";
import { Grid, Card, Image, Icon } from 'semantic-ui-react';
import { Markdown } from 'react-showdown';

class PostLayout extends Component {
    state = {
        post: null
    }

    componentDidMount = async () => {
        this.props.updateActiveMenuItem(POSTS);

        console.log('PostLayout componentDidMount')
        console.log(this.props);

        let response = await strapiApi.get(`/posts/${this.props.match.params.id}`);
        let post = response.data
        console.log('post', post);
        this.setState({ post });
    };

    renderPost(post) {
        return (
                <Card style={{ width: '100%', marginTop: '16px', maxWidth: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
                    <img style={{width: '100%'}} src={getStrapiAssetUrl(post.mainImage.url)} />
                    <Card.Content>
                        <Card.Header><h1>{post.title_pt_BR}</h1></Card.Header>
                        <Card.Meta>{post.createdAt.substring(0, 10)}</Card.Meta>
                        <Card.Description>
                            <div style={{textAlign: 'left'}}>
                              <Markdown markup={post.markdownContent_pt_BR}/>
                            </div>
                        </Card.Description>
                    </Card.Content>
                </Card>
        )
    };

    render() {
        console.log('this.state.post', this.state.post);

        return (
            <BaseLayout location={this.props.location}>
                {this.state.post ? this.renderPost(this.state.post) : 'Carregando...'}
            </BaseLayout>
        );
    };
}

const mapStateToProps = state => {
    return {};
};

export default connect(
    mapStateToProps,
    { updateActiveMenuItem }
)(PostLayout);
