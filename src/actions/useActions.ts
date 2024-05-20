import {useClient} from '../hooks/useClient';
import {useGlobalStore} from '../hooks/useGlobalStore';
import {CommentData, EntityPointer} from '../types';

type UseActionsHookValue = {
    addCommentToEntity(text: string, entityPointer: EntityPointer): Promise<CommentData>;
}

export const useActions = (): UseActionsHookValue => {
    const globalStore = useGlobalStore();
    const client = useClient();

    // TODO: this should be retrieved from globalState
    // const projectId = globalStore.getCurrentProjectId()
    const projectId = 'project-1';

    const addCommentToEntity = async (message: string, entityPointer: EntityPointer) => {
        const commentPayload: Omit<CommentData, 'id'> = {
            entityType: entityPointer.entityType,
            entityId: entityPointer.entityId,
            message,
            projectId,
            username: 'mickmister',
        };

        const comment = await client.addComment(commentPayload);
        globalStore.addComment(comment);

        return comment;
    };

    return {
        addCommentToEntity,
    };
}
