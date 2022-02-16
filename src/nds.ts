  
export type NdsClientState = 'Authenticated' | 'Preauthenticated';

export interface NdsClients {
    client_length: number;
    clients: {
        [key: string]: NdsClient;
    };
}

export interface NdsClient {
    id: number;
    ip: string;
    mac: string;
    added: number;
    active: number;
    duration: number;
    token: string;
    state: NdsClientState;
    downloaded: number;
    avg_down_speed: number;
    uploaded: number;
    avg_up_speed: number;
}

export interface NdsClientStateEvent {
    event: 'update';
    /** The `mac` field of the client. */
    id: string;
    data?: NdsClient;
}