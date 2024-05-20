import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {LocalStorageStore} from './store/LocalStorageStore';
import {LocalStorageClient} from './client/LocalStorageClient';
import {ClientProvider} from './hooks/useClient';
import {GlobalStoreProvider} from './hooks/useGlobalStore';

window.addEventListener('load', async () => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );

    const localStore = new LocalStorageStore(localStorage);
    const localClient = new LocalStorageClient(localStore);

    const projectId = 'project-1';
    const sectionId = 'section-1';

    // this should really be done in a useEffect in App probably
    const projectData = await localClient.fetchFullProjectData(projectId);

    if (typeof projectData === 'string') {
        alert(projectData);
        return;
    }

    root.render(
        <React.StrictMode>
            <ClientProvider client={localClient}>
                <GlobalStoreProvider initialProjectData={projectData}>
                    <App
                        projectId={projectId}
                        sectionId={sectionId}
                    />
                </GlobalStoreProvider>
            </ClientProvider>
        </React.StrictMode>
    );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
