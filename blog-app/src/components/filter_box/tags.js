// Import de módulos de terceiros
import queryString from 'query-string';
import React, { Component } from 'react';
import { Card, Button, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

// Import de módulos locais
import messages from '../../resources/messages';
import strapiApi from '../../services/strapiApi';

// Import das ações
import {
    FILTER_BOX_FETCH_TAGS_BEGIN,
    FILTER_BOX_FETCH_TAGS_END
} from '../../actions';

// Estados iniciais
const initialState = {
    limit: 2,
    start: 0,
    total: undefined,
    tags: [],
    loading: false
};

// Ações específicas desse componente
const fetchTags = ({limit, start, total, tags}) => async dispatch => {
    dispatch({type: FILTER_BOX_FETCH_TAGS_BEGIN});
    
    let payload = {};
    
    if(!total) {
        const response = await strapiApi.get('/tags/count');
        const total = response.data;
        payload.total = total;
    }

    if(tags.length >= total) {
        payload.alreadyFetchedEverything = true;
    }
    
    const response = await strapiApi.get(`/tags?${queryString.stringify({
        _limit: limit, 
        _start: start
    })}`);

    payload.newTags = response.data;

    dispatch({type: FILTER_BOX_FETCH_TAGS_END, payload})
}

// Reducers que impactam esse componente
export const filterBoxTagsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_BOX_FETCH_TAGS_BEGIN:
            return {
                ...state,
                loading: true
            }
        case FILTER_BOX_FETCH_TAGS_END:
            if(action.payload.alreadyFetchedEverthing) {
                return state;
            }
            else {
                return {
                    ...state,
                    tags: [...state.tags, ...action.payload.newTags],
                    total: action.payload.total ? action.payload.total : state.total,
                    start: state.start + state.limit,
                    loading: false
                };
            }
        default:
            return state;
    }
}

// Componente
class TagsFilterSection extends Component {
    fetchFilterTags = async () => {
        this.props.fetchTags(this.props);
    }

    componentDidMount = () => {
        if(this.props.tags.length == 0) {
            this.props.fetchTags(this.props);
        }
    }
    
    renderTags = () => {
        console.log(this.props);
        return this.props.tags.map((tag) => {
            console.log('tag', tag);
            return (
                <Link to={'/'}>
                    <Label style={{marginTop: 4, margingLeft: 4, marginRight: 4}}>{tag.value_pt_BR || tag.key}</Label>
                </Link>
            );
        });
    }
    
    render = () => {
        return (
            <Card.Content>
                <Card.Header>
                <h5>{messages.tags}</h5>
                </Card.Header>
                <Card.Description>
                    {this.renderTags()}
                </Card.Description>
                <div style={{textAlign: 'center'}}>
                    <Button primary
                        disabled={this.props.total && this.props.tags.length >= this.props.total}
                        size='small'
                        style = {{marginTop: 14, marginBottom: 0}}
                        onClick={() => {
                            this.fetchFilterTags();
                        }}
                    >
                        {this.props.loading ? messages.loading : messages.loadMore}
                    </Button>
                </div>
            </Card.Content>
        )
    }
}

const mapStateToProps = state => {
    return state.filterBox.tags;
};

export default connect(
    mapStateToProps,
    { fetchTags }
)(TagsFilterSection);
