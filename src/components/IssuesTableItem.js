import React from 'react';
import { Link } from 'react-router-dom';

import OpenSVG from './svgs/OpenClosed';
import { getTimeAgo } from '../helpers';

const IssuesTableItem = ({issue}) => (
    <div className="issues-table__item flex-container">
        <div className="flex-grow flex-container">
            <div className="flex-container flex-column">
                <div className="flex-container issues-table__item_name">
                    <OpenSVG open={issue.state === "open"} />
                    <Link
                    to={`/${issue.number}`}
                    className="issues-table__link">
                        {issue.title}
                    </Link>
                </div>
                <span className="opened">
                    {`#${issue.number} opened ${getTimeAgo(issue.created_at)} by ${issue.user.login}`}
                </span>
            </div>
        </div>
        <Link
        to={`/${issue.number}`}
        className="flex-container">
            <svg className="octicon octicon-comment v-align-middle comments-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path fillRule="evenodd" d="M14 1H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2v3.5L7.5 11H14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 9H7l-2 2v-2H2V2h12v8z"></path>
            </svg>
            <span className="comments-number">{issue.comments}</span>
        </Link>
    </div>
);

export default IssuesTableItem;