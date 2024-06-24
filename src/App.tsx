import {useState} from 'react';

import './App.css';
import './css_reset.css'
import './index.css'
import './section_view.css';
import * as types from './types/music_sniper_types';
import {GlobalStoreProvider} from './hooks/useGlobalStore';
import SectionPage from './components/SectionPage';
import {IClient} from './client/IClient';
import {ClientProvider} from './hooks/useClient';
import {useMount} from './hooks/useMount';
import {MattermostProvider} from './hooks/useMattermost';

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
        <SectionPage
            projectId={projectId}
            sectionId={sectionId}
        />
    );

    return (
        <MattermostProvider>
            <ClientProvider client={client}>
                <GlobalStoreProvider initialProjectData={initialProjectData}>
                    {pageContent}
                </GlobalStoreProvider>
            </ClientProvider>
        </MattermostProvider>
    );
}

export default App;
