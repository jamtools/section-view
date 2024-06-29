import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {LocalStorageStore} from './store/LocalStorageStore';
import {LocalStorageClient} from './client/LocalStorageClient';
import 'semantic-ui-css/semantic.min.css';

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
