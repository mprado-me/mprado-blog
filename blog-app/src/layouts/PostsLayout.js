import React, { Component } from 'react';
import { connect } from 'react-redux';
import BaseLayout from './base_layout';
import { updateActiveMenuItem } from '../components/header/actions';
import { POSTS } from '../components/header/menu_items';
import { Grid, GridRow } from 'semantic-ui-react';
import TagsMenu from '../components/tags_filter';

class PostsLayout extends Component {
    componentDidMount = () => {
        this.props.updateActiveMenuItem(POSTS);
    };

    render() {
        return (
            <BaseLayout location={this.props.location}>
                <Grid style={{marginTop: 6}}>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <TagsMenu/>
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <p>Posts Layout</p>
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
