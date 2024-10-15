import { shallowMount } from "@vue/test-utils";
import SongItem from "@/components/SongItem.vue";
import {describe} from "vitest";
import { test, expect, describe } from "vitest";
describe('Snapshots SongItem.vue', () => {
    test('renders correctly', () => {
        const song = {
            docID: 'abc',
            modified_name: 'test',
            display_name: 'test',
            commen_count: 5,
        };
        const wrapper = shallowMount(SongItem, {
            props: { song },
            global: {
                stubs: {
                    RouterLink: true,
                },
            }
        });
        expect(wrapper.element).toMatchSnapshot();
    });
});