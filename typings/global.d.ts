interface Action {
    type: string;
    payload?: {
        [key: string]: any;
    };
}

type TEMP_any = any;
