export type ProjectData = {
    id: string;
}

export enum EntityType {
    PROJECT = 'project',
    SECTION = 'section',
    FILE = 'file',
}

export type EntityPointer = {
    entityType: EntityType;
    entityId: string;
}

export type SectionData = {
    id: string;
    projectId: string;
    name: string;
    description: string;
    numRevisions: number;
    chordProgression: ChordProgression;
}

export type ChordProgression = string[]

export type FileData = {
    projectId: string;
    id: string;
    title: string;
} & EntityPointer;

export type CommentData = {
    projectId: string;
    id: string;
    username: string;
    message: string;
} & EntityPointer;

export type FullProjectData = {
    project: ProjectData;
    sections: SectionData[];
    comments: CommentData[];
    files: FileData[];
}
