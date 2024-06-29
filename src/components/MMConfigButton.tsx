import {useGlobalStore} from '@/hooks/useGlobalStore';
import {makeClient4FromConfig, useMattermost} from '@/hooks/useMM';
import {Client4} from '@mattermost/client';
import {useState} from 'react';

export const MMConfigButton = () => {
    const [showForm, setShowForm] = useState(false);

    const onSubmit = () => {
        setShowForm(false);
    }

    const button = (
        <button
            onClick={() => {
                setShowForm(!showForm)}
            }
        >
            Configure Mattermost
        </button>
    );

    if (!showForm) {
        return button;
    }

    return (
        <>
            {button}
            <MMConfigForm
                onSubmit={onSubmit}
            />
        </>
    );
}

type MattermostConfigFormProps = {
    onSubmit: () => void;
}

const MMConfigForm = (props: MattermostConfigFormProps) => {
    const mm = useMattermost();

    const [url, setUrl] = useState(mm.savedConfig?.url || '');
    const [token, setToken] = useState(mm.savedConfig?.token || '');

    const onSubmit = () => {
        testConnection().then(() => {
            mm.setSavedConfig({url, token});
            props.onSubmit();
        });
    };

    const testConnection = async () => {
        const client4 = makeClient4FromConfig({url, token});
        return testConnectWithClient(client4);
    };

    const testSavedConnection = async () => {
        const client4 = mm.client4;
        if (!client4) {
            return;
        }

        return testConnectWithClient(client4);
    };

    return (
        <div>
            <input
                type='text'
                placeholder='URL'
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <input
                type='text'
                placeholder='Token'
                value={token}
                onChange={(e) => setToken(e.target.value)}
            />
            <button
                type='button'
                onClick={onSubmit}
            >
                Submit
            </button>
            <button
                type='button'
                onClick={testConnection}
            >
                Test Connection
            </button>
            <button
                type='button'
                onClick={testSavedConnection}
            >
                Test Saved Connection
            </button>
        </div>
    );
};

const testConnectWithClient = (client4: Client4) => {
    return client4.getMe().then((me) => {
        alert(`Success! Logged in as ${me.username}`);
    }, (err) => {
        alert(`Error: ${err.message}`);
    });
};
