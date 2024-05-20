import {CommentData, EntityType, FileData, ProjectData, SectionData} from '../types';
import {IStore} from './IStore';

export interface LocalStorageDependency {
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
}

export class LocalStorageStore implements IStore {
    private ls: LocalStorageDependency;

    constructor(ls: LocalStorageDependency) {
        this.ls = ls;
    }

    getAllProjects = async (): Promise<ProjectData[]> => {
        return [
            {
                id: 'project-1',
            },
            {
                id: 'project-2',
            },
        ];
    };

    getAllSections = async (): Promise<SectionData[]> => {
        return [
            {
                id: 'section-1',
                projectId: 'project-1',
                chordProgression: ['C', 'Dm', 'F', 'G'],
                description: 'This is the intro',
                title: 'Intro',
                numRevisions: 3,
            }
        ];
    };

    getAllFiles = async (): Promise<FileData[]> => {
        return [
            {
                id: 'file-1',
                projectId: 'project-1',
                entityId: 'section-1',
                entityType: EntityType.SECTION,
                title: 'Bass.mp3',
            },
            {
                id: 'file-2',
                projectId: 'project-1',
                entityId: 'section-1',
                entityType: EntityType.SECTION,
                title: 'Chunky Monkey.mp3',
            },
        ];
    }

    getAllComments = async (): Promise<CommentData[]> => {
        return [
            {
                id: 'comment-1',
                projectId: 'project-1',
                message: 'Hey what\'s up',
                entityType: EntityType.SECTION,
                entityId: 'section-1',
                username: 'username-1',
            },
            {
                id: 'comment-2',
                projectId: 'project-1',
                message: 'Yeah',
                entityType: EntityType.FILE,
                entityId: 'file-1',
                username: 'username-1',
            },
            {
                id: 'comment-3',
                projectId: 'project-1',
                message: 'Yeah 3',
                entityType: EntityType.FILE,
                entityId: 'file-1',
                username: 'username-1',
            },
        ];
    };
}
