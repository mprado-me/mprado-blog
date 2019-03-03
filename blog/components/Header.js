import _ from 'lodash'
import faker from 'faker'
import Link from 'next/link'
import React, { Component } from 'react'
import { Menu, Segment, Input, Search, Label } from 'semantic-ui-react'

const source = _.times(5, () => ({
    title: faker.company.companyName(),
    description: faker.company.catchPhrase(),
    image: faker.internet.avatar(),
    price: faker.finance.amount(0, 100, 2, '$'),
}))

class Header extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.resetComponent()
    }

    resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

    handleResultSelect = (e, { result }) => this.setState({ value: result.title })

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })

        setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent()

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
            const isMatch = result => re.test(result.title)

            this.setState({
                isLoading: false,
                results: _.filter(source, isMatch),
            })
        }, 300)
    }

    resultRenderer = ({ title }) => {
        return (
            <Label content={title} />
        )
    }

    render() {
        const { isLoading, value, results } = this.state

        return (
            <Menu pointing secondary>
                <Link href='/keystone'>
                    <Menu.Item name='admin' />
                </Link>
                <Link href='/about-me'>
                    <Menu.Item name='sobre-mim' active={this.props.pathname === '/about-me'} />
                </Link>
                <Link href='/'>
                    <Menu.Item name='posts' active={this.props.pathname === '/'} />
                </Link>
                <Menu.Menu position='right'>
                    <Menu.Item style={{paddingBottom: '8px'}}>
                        <Search
                            loading={isLoading}
                            onResultSelect={this.handleResultSelect}
                            onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                            results={results}
                            value={value}
                            aligned='right'
                            resultRenderer={this.resultRenderer}
                        />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}

export default Header
