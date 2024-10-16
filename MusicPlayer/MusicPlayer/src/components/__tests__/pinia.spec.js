import {setActivePinia, createPinia} from "pinia";
import { shallowMount } from '@vue/test-utils';
import { test, expect, describe } from "vitest";
import useUserStore from "@/stores/user";

vi.mock("@/includes/firebase", () => ({
    auth: {
        signInWithEmailAndPassword: () => Promise.resolve(),
    }
}));

describe("stores", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });
    test("authenticates user", async () => {
        const store = useUserStore();
        expect(store.userLoggedIn).not.toBe(true);
        await store.authenticate({});
        expect(store.userLoggedIn).toBe(true);
    });
});