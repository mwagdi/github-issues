import React,{ Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Comment from '../components/Comment';

import { API } from '../constants';
import { getComments } from '../store/actions';

class SingleIssue extends Component{
    constructor(props){
        super(props);
        this.state = {
            issue: {}
        }
    }
    componentDidMount(){
        axios.get(`${API}/${this.props.match.params.number}`)
        .then(response => {
            this.setState({ issue: response.data });
            this.props.getComments(response.data.comments_url);
        });
    }
    render(){
        const { issue } = this.state;
        const { comments } = this.props;
        return(
            <div className="singleIssue">
                <div className="row">
                    <div className="singleIssue__header">
                        <h1 className="singleIssue__title">{issue.title}</h1>
                        <h2 className="singleIssue__number">#{issue.number}</h2>
                    </div>
                    <div className="flex-container">
                        <div className="comments-container flex-grow">
                            {comments.map((comment,i) => (
                                <Comment key={i} comment={comment} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        comments: state.comments
    }
}

export default connect(mapStateToProps,{ getComments })(SingleIssue);