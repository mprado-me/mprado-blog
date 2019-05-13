import React, { Component } from 'react';
import { connect } from 'react-redux';
import BaseLayout from './BaseLayout';
import { updateActiveMenuItem } from '../components/header/actions';
import { POSTS } from '../components/header/menu_items';

class PostsLayout extends Component {
    componentDidMount = () => {
        this.props.updateActiveMenuItem(POSTS);
    };

    render() {
        return (
            <BaseLayout>
                <p>Posts Layout</p>
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
