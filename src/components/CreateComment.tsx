
import {useActions} from '@/actions/useActions';
import {EntityPointer} from '@/types/music_sniper_types';
import {useState} from 'react';

type CreateCommentProps = {
    entityPointer: EntityPointer;
}

export const CreateComment: React.FC<CreateCommentProps> = ({entityPointer}) => {
    const actions = useActions();

    const [name, setName] = useState('');
    const [commentText, setCommentText] = useState('');

    const handleAddComment = async (e: React.FormEvent) => {
        e.preventDefault();

        await actions.addCommentToEntity(commentText, name, entityPointer);
        setCommentText('');
    }

    return (
        <div>
            <form onSubmit={handleAddComment}>
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
                <button
                    type='submit'
                    disabled={!Boolean(name && commentText)}
                >
                    Add Comment
                </button>
            </form>
        </div>
    );
};
