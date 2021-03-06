import React from 'react';
import { Link } from 'react-router-dom';

const IssuesHeader = props => (
    <div className="issues__header offwhite">
        <div className="row">
            <div className="issues__heading flex-container align-center">
                <svg fill="#959da5" className="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true">
                    <path fillRule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path>
                </svg>
                <span className="issues__header_link blue">facebook</span>
                <span>/</span>
                <span className="issues__header_link blue bold">react</span>
            </div>
            <div className="issues__navbar flex-container">
                <a className="issues__navbar_link text-center">
                    Code
                </a>
                <Link
                to="/"
                className="issues__navbar_link issues__navbar_link--active text-center">
                    Issues
                </Link>
                <a className="issues__navbar_link text-center">
                    Pull requests
                </a>
                <a className="issues__navbar_link text-center">
                    Projects
                </a>
                <a className="issues__navbar_link text-center">
                    Wiki
                </a>
                <a className="issues__navbar_link text-center">
                    Insights
                </a>
            </div>
        </div>
    </div>
);

export default IssuesHeader;