import * as Types from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react'
import {comments as initialComments}  from './testData'
import { comment } from './types';

export const Comments: React.FC<Types.commentsProps> = ({ comments = initialComments }) => {
  return (
    <div className="comments">
      <span>3 Comments</span>
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



//




//
