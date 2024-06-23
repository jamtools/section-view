import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFaceSmile} from '@fortawesome/free-solid-svg-icons';

import {EntityPointer} from '@/types/music_sniper_types';
import {useGlobalStore} from '@/hooks/useGlobalStore';
import {plural} from '@/utils';

type CommentsProps = {
    entityPointer: EntityPointer;
}

export const Comments: React.FC<CommentsProps> = ({entityPointer}) => {
    const globalStore = useGlobalStore();
    const comments = globalStore.getCommentsForEntity(entityPointer);

    return (
        <div className="comments">
            <span>{comments.length} {plural('Comment', comments.length)}</span>
            <div className="display-comments">
                {comments.map(comment => (
                    <p
                        key={comment.id}
                        id={comment.id}
                    >
                        <FontAwesomeIcon icon={faFaceSmile} />
                        {comment.username}: {comment.message}
                    </p>
                ))}
            </div>
        </div>
    );
};
