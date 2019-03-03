import Layout from '../components/Layout.js'
import {Component} from 'react'

class Index extends Component {
    static getInitialProps({pathname}) {
        return {
            pathname
        }
    }

    render() {
        return (
            <Layout pathname={this.props.pathname}>
                <p>Posts</p>
            </Layout>
        )
    }
}

export default Index
