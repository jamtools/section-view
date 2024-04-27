import {useState} from 'react'
import {comments as initialComments}  from './testData'
import { CreateCommentProps, comment, commentsProps } from './types';

export const Submit:React.FC<CreateCommentProps> = ({comments, setComments}) => {
 // const [comments, setComment] = useState(initialComments)

  const handleAddComment = (newComment:comment) => {
    setComments(
      comments => [...comments, newComment]
    )
  }

  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index}>
          <p>{comment.name}: {comment.commentText}</p>
        </div>
      ))}
      <button onClick={() => handleAddComment({name: "New User", commentText: "This is a new comment."})}>
        Add Comment
      </button>
    </div>
  );
};
