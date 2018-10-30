import React,{ Component } from 'react';
import { connect } from 'react-redux';

import IssuesTable from '../components/IssuesTable';
import { getIssues } from '../store/actions'

class Issues extends Component{
    componentDidMount(){
        this.props.getIssues();
    }
    render(){
        return(
            <div className="issues__body">
                <div className="row">
                    <IssuesTable />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        issues: state.issues
    }
}

export default connect(mapStateToProps,{ getIssues })(Issues);