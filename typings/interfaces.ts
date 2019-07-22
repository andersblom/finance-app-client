export interface User {
    id: number;
    name: string;
    email: string;
    token: string;
}

export interface UserState {
    authenticated?: User;
    error?: string;
}

export interface ApplicationState {
    user: UserState;
}
