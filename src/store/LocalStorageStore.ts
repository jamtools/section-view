import {CommentData, EntityType, FileData, ProjectData, SectionData} from '../types';

export interface LocalStorageDependency {
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
    clear(): void;
}

// TODO: versioning of the store allows for migrations
// const LOCAL_STORAGE_KEY_VERSION = 'version';

const LOCAL_STORAGE_KEY_PROJECTS = 'projects';
const LOCAL_STORAGE_KEY_SECTIONS = 'sections';
const LOCAL_STORAGE_KEY_FILES = 'files';
const LOCAL_STORAGE_KEY_COMMENTS = 'comments';

export type StoreData = {
    projects: ProjectData[];
    sections: SectionData[];
    files: FileData[];
    comments: CommentData[];
}

export class LocalStorageStore {
    private ls: LocalStorageDependency;

    private currentData: StoreData;

    constructor(ls: LocalStorageDependency) {
        this.ls = ls;
        this.currentData = this.migrateLocalStorageStore();

        if (!this.currentData.projects.length) {
            this.initializeWithSampleData();
        }

        // this.clear();
    }

    clear = () => {
        this.ls.clear();
        this.currentData = this.migrateLocalStorageStore();
    }

    initializeWithSampleData = () => {
        this.clear();
        this.setAllProjects(initialProjects);
        this.setAllSections(initialSections);
        this.setAllFiles(initialFiles);
        this.setAllComments(initialComments);
    }

    getAllProjects = async (): Promise<ProjectData[]> => {
        return this.currentData.projects;
    };

    setAllProjects = async (allProjects: ProjectData[]): Promise<void> => {
        this.currentData = {
            ...this.currentData,
            projects: allProjects,
        };

        this.ls.setItem(LOCAL_STORAGE_KEY_PROJECTS, JSON.stringify(allProjects));
    };

    getAllSections = async (): Promise<SectionData[]> => {
        return this.currentData.sections;
    };

    setAllSections = async (allSections: SectionData[]): Promise<void> => {
        this.currentData = {
            ...this.currentData,
            sections: allSections,
        };

        this.ls.setItem(LOCAL_STORAGE_KEY_SECTIONS, JSON.stringify(allSections));
    };

    getAllFiles = async (): Promise<FileData[]> => {
        return this.currentData.files;
    };

    setAllFiles = async (allFiles: FileData[]): Promise<void> => {
        this.currentData = {
            ...this.currentData,
            files: allFiles,
        };

        this.ls.setItem(LOCAL_STORAGE_KEY_FILES, JSON.stringify(allFiles));
    };

    getAllComments = async (): Promise<CommentData[]> => {
        return this.currentData.comments;
    };

    setAllComments = async (allComments: CommentData[]): Promise<void> => {
        this.currentData = {
            ...this.currentData,
            comments: allComments,
        };

        this.ls.setItem(LOCAL_STORAGE_KEY_COMMENTS, JSON.stringify(allComments));
    };

    private migrateLocalStorageStore = (): StoreData => {
        const store: StoreData = {
            projects: [],
            sections: [],
            files: [],
            comments: [],
        };

        const projectsStr = this.ls.getItem(LOCAL_STORAGE_KEY_PROJECTS);
        if (projectsStr) {
            store.projects = JSON.parse(projectsStr);
        } else {
            this.ls.setItem(LOCAL_STORAGE_KEY_PROJECTS, JSON.stringify(store.projects));
        }

        const sectionsStr = this.ls.getItem(LOCAL_STORAGE_KEY_SECTIONS);
        if (sectionsStr) {
            store.sections = JSON.parse(sectionsStr);
        } else {
            this.ls.setItem(LOCAL_STORAGE_KEY_SECTIONS, JSON.stringify(store.sections));
        }

        const filesStr = this.ls.getItem(LOCAL_STORAGE_KEY_FILES);
        if (filesStr) {
            store.files = JSON.parse(filesStr);
        } else {
            this.ls.setItem(LOCAL_STORAGE_KEY_FILES, JSON.stringify(store.files));
        }

        const commentsStr = this.ls.getItem(LOCAL_STORAGE_KEY_COMMENTS);
        if (commentsStr) {
            store.comments = JSON.parse(commentsStr);
        } else {
            this.ls.setItem(LOCAL_STORAGE_KEY_COMMENTS, JSON.stringify(store.comments));
        }

        return store;
    }
}

const initialProjects: ProjectData[] = [
    {
        id: 'project-1',
    },
    {
        id: 'project-2',
    },
];

const initialSections: SectionData[] = [
    {
        id: 'section-1',
        projectId: 'project-1',
        chordProgression: ['C', 'Dm', 'F', 'G'],
        description: 'This is the intro',
        title: 'Intro',
        numRevisions: 3,
    }
];

const initialFiles: FileData[] = [
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

const initialComments: CommentData[] = [
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
