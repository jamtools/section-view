import {createContext, useContext, useEffect, useMemo, useState} from 'react';
import {Client4} from '@mattermost/client';
import {MattermostConfig} from '@/types/mattermost_types';

type MattermostContextValue = {
    client4: Client4 | null;
    savedConfig: MattermostConfig | null;
    setSavedConfig: (config: MattermostConfig) => void;
};

const mmContext = createContext<Client4 | null>(null);

export const useMattermost = (): MattermostContextValue => {
    return useContext(mmContext)!;
};

export const MattermostProvider = (props: React.PropsWithChildren) => {
    const [savedConfig, setSavedConfig] = useState<MattermostConfig | null>(null);
    const [client4, setClient4] = useState<Client4 | null>(null);

    useEffect(() => {
        const config = getMattermostConfigFromLocalStorage();
        if (!config) {
            return;
        }

        const client = makeClient4FromConfig(config);
        setClient4(client);
        setSavedConfig(config);
    }, []);

    const value = useMemo(() => ({
        client4,
        savedConfig,
        setSavedConfig: (config: MattermostConfig) => {
            const client = makeClient4FromConfig(config);
            setClient4(client);
            setSavedConfig(config);
        },
    }), [savedConfig, client4]);

    return (
        <mmContext.Provider value={value}>
            {props.children}
        </mmContext.Provider>
    );
};

const MATTERMOST_CONFIG_LOCAL_STORAGE_KEY = 'mattermost_config';

const getMattermostConfigFromLocalStorage = (): MattermostConfig | null => {
    const configString = localStorage.getItem(MATTERMOST_CONFIG_LOCAL_STORAGE_KEY);
    if (!configString) {
        return null;
    }

    return JSON.parse(configString);
};

const setMattermostConfig = (config: MattermostConfig) => {
    const configString = JSON.stringify(config);
    localStorage.setItem(MATTERMOST_CONFIG_LOCAL_STORAGE_KEY, configString);
}

export const makeClient4FromConfig = (config: MattermostConfig): Client4 => {
    const client4 = new Client4();
    client4.setUrl(config.url);
    client4.setToken(config.token);
    return client4;
};
