import {createContext, useContext} from 'react';
import {IClient} from '../client/IClient';

const clientContext = createContext<IClient | null>(null);

type ClientProviderProps = React.PropsWithChildren<{
    client: IClient;
}>;

export const useClient = (): IClient => {
    const client = useContext(clientContext)!;
    return client;
};

export const ClientProvider = (props: ClientProviderProps) => {
    return (
        <clientContext.Provider value={props.client}>
            {props.children}
        </clientContext.Provider>
    );
};
