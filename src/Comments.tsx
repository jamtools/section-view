import * as types from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import {comments as initialComments}  from './testData'


export const Comments: React.FC<types.commentsProps> = ({ comments = initialComments }) => {
  return (
    <div className="comments">
      <span>{comments.length} Comments</span>
      <div className="display-comments">
        {comments.map((comment, index) => {
          return <>
            <p><FontAwesomeIcon icon={faFaceSmile} /> {comments[index].name}: {comments[index].commentText}</p>
          </>;
        })}
      </div>
    </div>
  );
};
