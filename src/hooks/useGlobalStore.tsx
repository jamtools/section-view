import {createContext, useContext, useMemo, useState} from 'react';
import {CommentData, EntityPointer, EntityType, FileData, FullProjectData, SectionData} from '../types';
import {matchesEntityPointer} from '../utils';

type GlobalStoreContextValue = {
    getFullProjectData(): FullProjectData;
    setFullProjectData(project: FullProjectData): void;
}

const globalStoreContext = createContext<GlobalStoreContextValue | null>(null);

type GlobalStoreProviderProps = React.PropsWithChildren<{
    initialProjectData: FullProjectData;
}>;

type UseGlobalStoreHookValue = {
    getCommentsForSection(sectionId: string): CommentData[];
    getCommentsForFile(fileId: string): CommentData[];
    getFilesForSection(sectionId: string): FileData[];
    getCommentsForEntity(entityPointer: EntityPointer): CommentData[];
    getSection(sectionId: string): SectionData;

    addComment(comment: CommentData): void;
    updateSection(sectionId: string, section: SectionData): void;
}

export const useGlobalStore = (): UseGlobalStoreHookValue => {
    const globalStore = useContext(globalStoreContext)!;
    const projectData = globalStore.getFullProjectData();

    return useMemo(() => ({
        getCommentsForFile: (fileId) => projectData.comments.filter(c => matchesEntityPointer(c, EntityType.FILE, fileId)),
        getCommentsForSection: (sectionId) => projectData.comments.filter(c => matchesEntityPointer(c, EntityType.SECTION, sectionId)),
        getFilesForSection: (sectionId) => projectData.files.filter(f => matchesEntityPointer(f, EntityType.SECTION, sectionId)),
        getCommentsForEntity: (entityPointer: EntityPointer) => projectData.comments.filter(c => matchesEntityPointer(c, entityPointer.entityType, entityPointer.entityId)),

        // error-prone how we assume the section exists
        getSection: (sectionId) => projectData.sections.find(s => s.id === sectionId)!,

        addComment: (comment) => {
            const state = globalStore.getFullProjectData();
            const newState: FullProjectData = {
                ...state,
                comments: [
                    ...state.comments,
                    comment,
                ],
            };

            globalStore.setFullProjectData(newState);
        },

        updateSection: (sectionId, updatedSection) => {
            const state = globalStore.getFullProjectData();

            const sections = state.sections.map(existingSection => {
                if (existingSection.id === sectionId) {
                    return updatedSection;
                }

                return existingSection;
            });

            const newState: FullProjectData = {
                ...state,
                sections,
            };

            globalStore.setFullProjectData(newState);
        }
    }), [projectData, globalStore]);
};

export const GlobalStoreProvider = (props: GlobalStoreProviderProps) => {
    const [fullProjectData, setFullProjectData] = useState(props.initialProjectData);

    const value = useMemo(() => ({
        getFullProjectData: () => fullProjectData,
        setFullProjectData,
    }), [fullProjectData, setFullProjectData]);

    return (
        <globalStoreContext.Provider value={value}>
            {props.children}
        </globalStoreContext.Provider>
    );
};
