export interface Coinslot {
    disabled: boolean;
    currentUser: {
        mac: string;
        expiry: number;
    } | null;
    minGapDetection?: number;
    maxGapDetection?: number;
}

export interface CoinslotStateEvent {
    event: 'time-added' | 'update' | 'error';
    data?: Coinslot;
    error?: any;
}

export interface TimeAddedEvent {
    coinDropped: number;
    /**
     * in seconds
     */
    timeAdded: number;
    /**
     * mac address of the current user
     */
    coinAddedTo: string;
}

export interface CoinDetectionEvent {
    coinValue: number;
    currentUser: string;
}