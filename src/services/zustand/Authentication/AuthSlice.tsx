import {StoreSlice} from "../store";

export interface IAuthSlice {
    checkedCookies: boolean | null,
    accessToken: string | null,
    user: {[key: string]: string} | null,
    setAccessToken: (value: string | null) => void,
    setCheckCookies: (value: boolean | null) => void,
    setUser: (value: {}) => void
}

const createAuthSlice: StoreSlice<IAuthSlice> = set => ({
    checkedCookies: false,
    accessToken: null,
    user: {},
    setAccessToken: (accessToken: string | null) => set((state) => ({...state, accessToken: accessToken})),
    setCheckCookies: (cookie: boolean | null) => set((state) => ({...state, checkedCookies: cookie})),
    setUser: (user: {}) => set((state) => ({...state, user: user}))
});

export default createAuthSlice;