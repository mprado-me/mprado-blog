// Import de módulos de terceiros
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu  } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// Import de módulos locais
import { POSTS, TAGS } from '../../resources/consts/menu_items';

// Estados iniciais

// Import das ações

// Ações específicas desse componente

// Reducers que impactam esse componente

// Componente
class Header extends Component {
    render() {
        return (
            <Menu pointing secondary stackable>
                <Link to={'/'}>
                    <Menu.Item header>mprado.me</Menu.Item>
                </Link>
                <Menu.Menu position='right'>
                    <Link to={'/posts'}>
                        <Menu.Item
                            name='Posts'
                            active={this.props.activeMenuItem === POSTS}
                        />
                    </Link>
                    <Link to={'/tags'}>
                        <Menu.Item
                            name='Tags'
                            active={this.props.activeMenuItem === TAGS}
                        />
                    </Link>
                </Menu.Menu>
            </Menu>
        );
    }
}

const mapStateToProps = state => {
    return { activeMenuItem: state.activeMenuItem };
};

export default connect(
    mapStateToProps
)(Header);
