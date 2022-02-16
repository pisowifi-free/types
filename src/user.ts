export interface User {
    $loki: number;
    username: string;
    password: string;
    session: string | null;
}

export interface UserStateEvent {
    event: 'create' | 'update' | 'delete';
    id: number;
    data?: User;
}