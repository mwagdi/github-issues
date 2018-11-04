import React from 'react';

import { getDateFormat } from '../helpers';

const Comment = ({comment}) => (
    <div className="comment flex-container justify-space-between">
        <div
        style={{ backgroundImage: `url(${comment.user.avatar_url})`}}
        className="comment__avatar"></div>
        <div className="comment__body">
            <div className="comment__header">
                <span className="comment__login bold">{comment.user.login}</span> commented on {getDateFormat(comment.created_at)}
            </div>
            <div className="comment__content">
                {comment.body}
            </div>
        </div>
    </div>
);

export default Comment;