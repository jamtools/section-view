import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import {LocalStorageStore} from './store/LocalStorageStore';
import {LocalStorageClient} from './client/LocalStorageClient';

window.addEventListener('load', async () => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );

    const localStore = new LocalStorageStore(localStorage);
    const localClient = new LocalStorageClient(localStore);

    const projectId = 'project-1';
    const sectionId = 'section-1';

    root.render(
        <React.StrictMode>
            <App
                projectId={projectId}
                sectionId={sectionId}
                client={localClient}
            />
        </React.StrictMode>
    );
});
