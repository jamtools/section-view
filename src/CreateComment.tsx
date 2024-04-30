
import { CreateCommentProps, comment, commentsProps } from './types';

export const CreateComment:React.FC<CreateCommentProps> = ({comments, setComments}) => {


  const handleAddComment = (newComment:comment) => {
    let result = [...comments]
    result.push(newComment)
    setComments(result)
    console.log(result)
  }

  return (
    <div>
      <button onClick={() => handleAddComment({name: "New User", commentText: "This is a new comment."})}>
        Add Comment
      </button>
    </div>
  );
};
