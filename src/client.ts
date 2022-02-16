export interface Client {
    mac: string;
    /**
     * Value in seconds.
     * */
    timeLeft: number;
    /**
     * Date in the future where the user will run out of time.
     * Value is `null` if the user is `Preauthenticated`, meaning `Online`.
     */
    timeExpiry: Date | null;
}

export interface ClientStateEvent {
    event: 'create' | 'update' | 'delete';
    /**
     * The `mac` address of the client.
     */
    id: string;
    data?: Client;
}

export interface AddTimeRequest {
    coinValue: number;
    mac: string;
}