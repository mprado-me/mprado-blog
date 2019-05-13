import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Container } from 'semantic-ui-react';
import queryString from 'query-string'
import { updateQueryParams } from './actions'


class BaseLayout extends Component {
    componentDidMount = () => {
        this.props.updateQueryParams(queryString.parse(this.props.location.search));
    };
    
    render() {
        return (
            <div>
                <Container>
                    <Header/>
                </Container>
                <Container style={{minHeight: 1000}}>
                    {this.props.children}
                </Container>
                <Footer/>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {};
};

export default connect(
    mapStateToProps,
    {updateQueryParams}
)(BaseLayout);
