import {CommentData, FullProjectData, ProjectData, SectionData} from '../types';

export interface IClient {
    fetchFullProjectData: (projectId: string) => Promise<FullProjectData | string>;
    fetchAllProjects: () => Promise<ProjectData[]>;

    addComment(comment: Omit<CommentData, 'id'>): Promise<CommentData>;
    updateSection(sectionId: string, section: SectionData): Promise<SectionData>;
}
