import {CommentData, FileData, ProjectData, SectionData} from '../types';

export interface IStore {
    getAllProjects(): Promise<ProjectData[]>;
    getAllSections(): Promise<SectionData[]>;
    getAllFiles(): Promise<FileData[]>;
    getAllComments(): Promise<CommentData[]>;
}
