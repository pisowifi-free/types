 export interface Preferences {
    /**
     * How often a client's time and status is checked and updated
     * @default 60 // Equivalent to 60 seconds
     */
    checkInterval: number;
    /**
     * In seconds
     * @default 20 // Equivalent to 20 seconds
     */
    coinslotWindowTime: number;
}

export interface PreferencesStateEvent {
    event: 'update';
    data: Preferences;
}