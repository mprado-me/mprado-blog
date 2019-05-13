import React, { Component } from 'react';
import { connect } from 'react-redux';
import BaseLayout from './BaseLayout';
import {updateActiveMenuItem} from "../components/header/actions";
import {TAGS} from "../components/header/menu_items";

class TagsLayout extends Component {
    componentDidMount = () => {
        this.props.updateActiveMenuItem(TAGS);
    };

    render() {
        return (
            <BaseLayout>
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
