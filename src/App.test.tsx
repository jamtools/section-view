import {render, screen, waitFor} from '@testing-library/react';
import App from './App';
import {IClient} from './client/IClient';
import {ProjectData, CommentData, SectionData, EntityType, FileData} from './types/music_sniper_types';
import {LocalStorageStore, StoreData} from './store/LocalStorageStore';
import {MockLocalStorageDependency} from './store/MockLocalStorageDependency';
import {LocalStorageClient} from './client/LocalStorageClient';

// import * as testData from './sampleData'

globalThis.alert = () => {};

const makeTestStore = (): StoreData => {
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

    return {
        projects: initialProjects,
        sections: initialSections,
        files: initialFiles,
        comments: initialComments,
    };
};

describe('App', () => {
    let client: IClient;

    beforeEach(() => {
        const initialStore = makeTestStore();

        const localStorageDependency = new MockLocalStorageDependency(initialStore);
        const store = new LocalStorageStore(localStorageDependency);
        client = new LocalStorageClient(store);
    });

    describe('initializing', () => {
        it('should show "Loading"', async () => {
            // this method is made blocking for this specific test
            client.fetchFullDataForProject = (() => new Promise(r => setTimeout(r)));

            render(
                <App
                    projectId={'project-1'}
                    sectionId={'section-1'}
                    client={client}
                />
            );

            expect(screen.getByText(/Loading/)).toBeDefined();
        });

        it('should show client error', async () => {
            client.fetchFullDataForProject = jest.fn().mockResolvedValue(new Error('Some error'));

            render(
                <App
                    projectId={'project-1'}
                    sectionId={'section-1'}
                    client={client}
                />
            );

            await waitFor(() => {
                expect(screen.queryByText(/Loading/)).toBeNull();
            });

            expect(screen.getByText(/Some error/)).toBeDefined();
        });
    });

    describe('initialized', () => {
        it('should show the section title and description', async () => {
            render(
                <App
                    projectId={'project-1'}
                    sectionId={'section-1'}
                    client={client}
                />
            );

            await waitFor(() => {
                expect(screen.queryByText(/Loading/)).toBeNull();
            });

            expect(screen.getByText(/Intro/)).toBeDefined();
            expect(screen.getByText(/This is the intro/)).toBeDefined();
        });

        it('should show the chord progression', async () => {
            const {container} = render(
                <App
                    projectId={'project-1'}
                    sectionId={'section-1'}
                    client={client}
                />
            );

            await waitFor(() => {
                expect(screen.queryByText(/Loading/)).toBeNull();
            });

            expect(container.querySelector('.chords')?.textContent).toEqual('CDmFG');
        });

        it('should show files attached to the section', async () => {
            const {container} = render(
                <App
                    projectId={'project-1'}
                    sectionId={'section-1'}
                    client={client}
                />
            );

            await waitFor(() => {
                expect(screen.queryByText(/Loading/)).toBeNull();
            });

            expect(container.querySelector('.files #file-1')?.textContent).toContain('Bass.mp3');
            expect(container.querySelector('.files #file-1')?.textContent).toContain('2 Comments');
        });

        it('should show the comments on the section', async () => {
            const {container} = render(
                <App
                    projectId={'project-1'}
                    sectionId={'section-1'}
                    client={client}
                />
            );

            await waitFor(() => {
                expect(screen.queryByText(/Loading/)).toBeNull();
            });

            expect(container.querySelector('.comments')?.textContent).toContain('1 Comment');
            expect(container.querySelector('.comments #comment-1')?.textContent).toContain('username-1');
            expect(container.querySelector('.comments #comment-1')?.textContent).toContain('Hey what\'s up');
        });
    });
});
