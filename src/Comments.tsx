import * as types from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import {comments as initialComments}  from './testData'
import { useEffect} from 'react';


export const Comments: React.FC<types.commentsProps> = ({ comments = initialComments, setComments }) => {

  useEffect(() => {
    // Attempt to load comments from localStorage
    const storedCommentsJSON = localStorage.getItem('comments');
    const storedComments = storedCommentsJSON ? JSON.parse(storedCommentsJSON) : null;

    // Check if there are stored comments, otherwise use initial comments
    setComments(storedComments || initialComments);
  }, []); // Empty dependency array ensures this runs once on mount
  

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
