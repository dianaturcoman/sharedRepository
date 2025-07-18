export type User = {
    ID: number;
    Username: string;
    Password: string;
    Accesslevel: string;
    Lastlogin: number;
    Lastlogout: number;
    Lang: string;
    Sessionstatus: number;
}

export const defaultUser = (): User => ({
    ID: 0,
    Username: '',
    Password: '',
    Accesslevel: '',
    Lastlogin: 0,
    Lastlogout: 0,
    Lang: '',
    Sessionstatus: 0
})