import Layout from '../components/Layout.js'
import {Component} from 'react'

class AboutMe extends Component {
    static getInitialProps({pathname}) {
        return {
            pathname
        }
    }

    render() {
        return (
            <Layout pathname={this.props.pathname}>
                <p>Sobre mim</p>
            </Layout>
        )
    }
}

export default AboutMe
