
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
  
    // Fetch existing comments from localStorage
    const storedComments = localStorage.getItem('comments');
    const existingComments = storedComments ? JSON.parse(storedComments) : [];
  
    // Add the new comment to the array
    const updatedComments = [...existingComments, newComment];
  
    // Save the updated array back to localStorage
    localStorage.setItem('comments', JSON.stringify(updatedComments));
  
    // Update the local state to reflect the new list of comments
    setComments(updatedComments);
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
