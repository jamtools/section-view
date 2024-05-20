import {CommentData, FullProjectData, ProjectData} from '../types';

export interface IClient {
    fetchFullProjectData: (projectId: string) => Promise<FullProjectData | string>;
    fetchAllProjects: () => Promise<ProjectData[]>;

    addComment(comment: Omit<CommentData, 'id'>): Promise<CommentData>;
}
