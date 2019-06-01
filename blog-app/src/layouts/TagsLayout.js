import React, { Component } from 'react';
import { connect } from 'react-redux';
import BaseLayout from './base_layout';
import {updateActiveMenuItem} from "../actions";
import {TAGS} from "../components/header/menu_items";

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
