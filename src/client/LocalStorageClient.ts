import {LocalStorageStore} from '../store/LocalStorageStore';
import {CommentData, FullProjectData, SectionData} from '../types';
import {IClient} from './IClient';

export class LocalStorageClient implements IClient {
    private persistentStore: LocalStorageStore;

    constructor(persistentStore: LocalStorageStore) {
        this.persistentStore = persistentStore;
    }

    addComment = async (comment: Omit<CommentData, 'id'>): Promise<CommentData> => {
        const newComment: CommentData = {
            ...comment,
            id: Math.random().toString().slice(2),
        };

        const comments = await this.persistentStore.getAllComments();
        const newState = [...comments, newComment];
        this.persistentStore.setAllComments(newState);

        return newComment;
    }

    // fetchFullDataForProject uses the local storage store to get all data for a given project
    // it fetches the project data, sections, files, and comments for the given project
    fetchFullDataForProject = async (projectId: string): Promise<FullProjectData | Error> => {
        const projects = (await this.persistentStore.getAllProjects()).filter(p => p.id === projectId);
        const sections = (await this.persistentStore.getAllSections()).filter(s => s.projectId === projectId);
        const files = (await this.persistentStore.getAllFiles()).filter(f => f.projectId === projectId);
        const comments = (await this.persistentStore.getAllComments()).filter(c => c.projectId === projectId);

        if (!projects[0]) {
            return new Error(`Error: No project found for projectId ${projectId}`);
        }

        return {
            project: projects[0],
            comments,
            files,
            sections,
        };
    }

    updateSection = async (sectionId: string, section: SectionData): Promise<SectionData> => {
        const sections = await this.persistentStore.getAllSections();
        const newState = sections.map(s => {
            if (s.id === sectionId) {
                return section;
            }

            return s;
        });

        this.persistentStore.setAllSections(newState);

        return section;
    }
}
