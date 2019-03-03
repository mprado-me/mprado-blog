import Header from './Header'
import {Component} from 'react'
import Head from 'next/head'
import { Container } from 'semantic-ui-react'

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        const props = this.props;
        
        return (
            <Container>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta charSet="utf-8" />
                    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
                </Head>

                <Header pathname={props.pathname}/>
                {props.children}
            </Container>
        )
    }
}

export default Layout
