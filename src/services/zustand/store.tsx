import {create, StoreApi} from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import createAuthSlice, {IAuthSlice} from "./Authentication/AuthSlice";

export type StoreState = IAuthSlice;
export type StoreSlice<T> = (
    set: StoreApi<StoreState>["setState"],
    get: StoreApi<StoreState>["getState"],
) => T;

const useStore = create<StoreState>()(
    persist(
        (set, get) => ({
            ...createAuthSlice(set, get)
        }),
        {
            name: "store",
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => Object.fromEntries(
                Object.entries(state).filter((key) => ['accessToken', 'checkedCookies', 'user'].includes(key))
            )
        }
    ),
);

export default useStore;