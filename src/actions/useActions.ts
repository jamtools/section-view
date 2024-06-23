import {useClient} from '../hooks/useClient';
import {useGlobalStore} from '../hooks/useGlobalStore';
import {CommentData, EntityPointer, SectionData} from '../types/music_sniper_types';

type UseActionsHookValue = {
    addCommentToEntity(text: string, username: string, entityPointer: EntityPointer): Promise<CommentData>;
    updateSection(sectionId: string, section: SectionData): Promise<SectionData>;
}

export const useActions = (): UseActionsHookValue => {
    const globalStore = useGlobalStore();
    const client = useClient();

    // TODO: this should be retrieved from globalState
    // const projectId = globalStore.getCurrentProjectId()
    const projectId = 'project-1';

    const addCommentToEntity = async (message: string, username: string, entityPointer: EntityPointer) => {
        const commentPayload: Omit<CommentData, 'id'> = {
            entityType: entityPointer.entityType,
            entityId: entityPointer.entityId,
            message,
            projectId,
            username,
        };

        const comment = await client.addComment(commentPayload);
        globalStore.addComment(comment);

        return comment;
    };

    const updateSection = async (sectionId: string, section: SectionData) => {
        const newSection = await client.updateSection(sectionId, section);
        globalStore.updateSection(sectionId, newSection);

        return section;
    };

    return {
        addCommentToEntity,
        updateSection,
    };
}
