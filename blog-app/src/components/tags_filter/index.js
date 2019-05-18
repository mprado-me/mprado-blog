import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Label, Card, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import strapiApi from "../../services/strapiApi";
import queryString from 'query-string';

// TODO: Utilizar Redux para mapear o status selecionado
class TagsFilter extends Component {
    state = {
        loading: false,
        _limit: 2,
        _start: 0,
        total: undefined,
        tags: []
    };

    fetchFilterTags = async () => {
        this.setState({loading: true});

        if(!this.state.total) {
            const response = await strapiApi.get('/tags/count');
            const total = response.data;
            this.setState({total})
        }
        const response = await strapiApi.get(`/tags?${queryString.stringify({
            _limit: this.state._limit, 
            _start: this.state._start
        })}`);

        this.setState({
            _start: this.state._start + this.state._limit, 
            tags: [...this.state.tags, ...response.data], 
            loading: false
        });

        console.log('this.state', this.state);
    }

    componentDidMount = () => {
        this.fetchFilterTags();
    }
    
    renderTags = () => {
        return this.state.tags.map((tag) => {
            console.log('tag', tag);
            return (
                <Link to={'/'}>
                    <Label style={{marginTop: 4, margingLeft: 4, marginRight: 4}}>{tag.value_pt_BR || tag.key}</Label>
                </Link>
            );
        });
    }

    render() {
        return (
            <Card>
                <Card.Content>
                    <h5>Tags</h5>
                </Card.Content>
                <Card.Content>
                    <Card.Description>
                        {this.renderTags()}
                    </Card.Description>
                    <div style={{textAlign: 'center'}}>
                        <Button primary
                            disabled={this.state.total && this.state.tags.length >= this.state.total}
                            size='small'
                            style = {{marginTop: 14, marginBottom: 0}}
                            onClick={() => {
                                this.fetchFilterTags();
                            }}
                        >
                            {this.state.loading ? 'Carregando...' : 'Carregar Mais'}
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        );
    }
}

export default TagsFilter
