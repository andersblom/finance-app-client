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

export interface Budget {
    id: number;
    name: string;
    slug: string;
    user_id: number;
}

export interface BudgetsState {
    all?: Budget[];
    current?: Budget;
}

export interface ApplicationState {
    user?: UserState;
    budgets?: BudgetsState;
}
