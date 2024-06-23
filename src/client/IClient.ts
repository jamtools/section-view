import {CommentData, FullProjectData, SectionData} from '../types/music_sniper_types';

export interface IClient {
    fetchFullDataForProject: (projectId: string) => Promise<FullProjectData | Error>;

    addComment(comment: Omit<CommentData, 'id'>): Promise<CommentData>;
    updateSection(sectionId: string, section: SectionData): Promise<SectionData>;
}
