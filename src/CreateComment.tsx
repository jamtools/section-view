
import {Comment} from './types';
import {useState} from 'react';


type CreateCommentProps = {
  comments: Comment[],
  setComments: (comments: Comment[]) => void;
}



export const CreateComment: React.FC<CreateCommentProps> = ({ comments, setComments }) => {

  const [name, setName] = useState('');
  const [commentText, setCommentText] = useState('');

  const handleAddComment = () => {
    const newComment = { name, commentText };
    const result = [...comments, newComment];
    setComments(result);
  }

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleAddComment();
        setCommentText('');
      }}>
        <input 
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter your name'
        />
        <input 
          type='text'
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder='Type your thoughts here'
        />
        <button type='submit'>Add Comment</button>
      </form>
    </div>
  );
};
