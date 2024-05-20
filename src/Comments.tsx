import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFaceSmile} from '@fortawesome/free-solid-svg-icons';

import {EntityPointer} from './types';
import {useGlobalStore} from './hooks/useGlobalStore';

type CommentsProps = {
    entityPointer: EntityPointer;
}

export const Comments: React.FC<CommentsProps> = ({entityPointer}) => {
    const globalStore = useGlobalStore();
    const comments = globalStore.getCommentsForEntity(entityPointer);

    return (
        <div className="comments">
            <span>{comments.length} Comments</span>
            <div className="display-comments">
                {comments.map(comment => (
                    <p key={comment.id}>
                        <FontAwesomeIcon icon={faFaceSmile} />
                        {comment.username}: {comment.message}
                    </p>
                ))}
            </div>
        </div>
    );
};
