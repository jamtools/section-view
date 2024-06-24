import {useGlobalStore} from '@/hooks/useGlobalStore';
import {makeClient4FromConfig, useMattermost} from '@/hooks/useMattermost';
import {useState} from 'react';

export const MattermostConfigButton = () => {
    const [showForm, setShowForm] = useState(false);

    const onSubmit = () => {

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
            <MattermostConfigForm
                onSubmit={onSubmit}
            />
        </>
    );
}

type MattermostConfigFormProps = {
    onSubmit: () => void;
}

const MattermostConfigForm = (props: MattermostConfigFormProps) => {
    const mm = useMattermost();

    const [url, setUrl] = useState(mm.savedConfig?.url || '');
    const [token, setToken] = useState(mm.savedConfig?.token || '');

    const onSubmit = () => {
        alert('submitting');
        props.onSubmit();
    };

    const testConnection = () => {
        const client4 = makeClient4FromConfig({url, token});
        client4.getMe().then((me) => {
            alert(`Success! Logged in as ${me.username}`);
        }, (err) => {
            alert(`Error: ${err.message}`);
        });
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
        </div>
    )

};
