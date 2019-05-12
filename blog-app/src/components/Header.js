import React, { Component } from 'react';
import { Menu  } from 'semantic-ui-react';


class Header extends Component {
    // TODO: Utilizar redux para determinar o item ativo
    render() {
        return (
            <Menu pointing secondary stackable>
                <Menu.Item header>mprado.me</Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='Posts'
                        active={true}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='Tags'
                        active={false}
                        onClick={this.handleItemClick}
                    />
                </Menu.Menu>
            </Menu>
        );
    }
}

export default Header;
