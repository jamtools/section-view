import {useState} from 'react';

import * as types from './types';
import {GlobalStoreProvider} from './hooks/useGlobalStore';
import {IClient} from './client/IClient';
import {ClientProvider} from './hooks/useClient';
import {useMount} from './hooks/useMount';
import SectionView from './SectionView';

type AppProps = {
    projectId: string;
    sectionId: string;

    client: IClient;
}

const App: React.FC<AppProps> = ({projectId, sectionId, client}) => {
    const [initialProjectData, setInitialProjectData] = useState<types.FullProjectData | null>(null);
    const [error, setError] = useState('');

    useMount(async () => {
        const projectDataOrError = await client.fetchFullDataForProject(projectId);

        if (projectDataOrError instanceof Error) {
            alert(projectDataOrError.message);
            setError(projectDataOrError.message);
            return;
        }

        setInitialProjectData(projectDataOrError);
    });

    if (error) {
        return (
            <p>
                {error}
            </p>
        );
    }

    if (!initialProjectData) {
        return (
            <p>
                Loading
            </p>
        );
    }

    const pageContent = (
        <SectionView/>
    );

    return (
        <ClientProvider client={client}>
            <GlobalStoreProvider initialProjectData={initialProjectData}>
                {pageContent}
            </GlobalStoreProvider>
        </ClientProvider>
    );
}

export default App;
