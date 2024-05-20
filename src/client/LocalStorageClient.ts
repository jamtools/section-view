import {IStore} from '../store/IStore';
import {CommentData, FullProjectData, ProjectData} from '../types';
import {IClient} from './IClient';

export class LocalStorageClient implements IClient {
    private persistentStore: IStore;

    constructor(persistentStore: IStore) {
        this.persistentStore = persistentStore;
    }

    addComment = async (comment: Omit<CommentData, 'id'>): Promise<CommentData> => {
        const newComment: CommentData = {
            ...comment,
            id: Math.random().toString().slice(2),
        };

        // TODO: persist to local storage

        return newComment;
    }

    fetchFullProjectData = async (projectId: string): Promise<FullProjectData | string> => {
        const projects = (await this.persistentStore.getAllProjects()).filter(p => p.id === projectId);
        const sections = (await this.persistentStore.getAllSections()).filter(s => s.projectId === projectId);
        const files = (await this.persistentStore.getAllFiles()).filter(f => f.projectId === projectId);
        const comments = (await this.persistentStore.getAllComments()).filter(c => c.projectId === projectId);

        if (!projects[0]) {
            return `New project found for projectId ${projectId}`;
        }

        return {
            project: projects[0],
            comments,
            files,
            sections,
        };
    }

    fetchAllProjects = async (): Promise<ProjectData[]> => {
        const projects = await this.persistentStore.getAllProjects();
        return projects;
    }
}
