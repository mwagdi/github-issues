import React,{ Component } from 'react';
import { connect } from 'react-redux';

import IssuesTable from '../components/IssuesTable';
import { getIssues } from '../store/actions'

class Issues extends Component{
    componentDidMount(){
        this.props.getIssues();
    }
    render(){
        const { issues } = this.props;
        return(
            <div className="issues__body">
                <div className="row">
                    <IssuesTable issues={issues} />
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