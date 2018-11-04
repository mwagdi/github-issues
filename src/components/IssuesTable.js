import React from 'react';
import { connect } from 'react-redux';

import IssuesTableItem from './IssuesTableItem';
import { getIssues } from '../store/actions';

const IssuesTable = ({issues,getIssues}) => (
    <div className="issues-table flex-container flex-column">
        <div className="issues-table__header">
            <div className="flex-container">
                <a
                onClick={() => getIssues(1,"open")}
                className="get-issues open-get bold">Open</a>
                <a
                onClick={() => getIssues(1,"closed")}
                className="get-issues closed-get bold">Closed</a>
            </div>
        </div>

        <div className="issues-table__body">
            {issues.map((issue,i) => (
                <IssuesTableItem key={i} issue={issue} />
            ))}
        </div>
    </div>
);

export default connect(null,{ getIssues })(IssuesTable);