export interface Rate {
    coinValue: number;
    /**
     * Value in seconds.
     */
    valueInTime: number;
}

export interface RateStateEvent {
    event: 'create' | 'update' | 'delete';
    /** `coinValue` field. */
    id: number;
    data?: Rate;
}