import AboutView from '@/views/AboutView.vue';
import { shallowMount } from '@vue/test-utils';
import { test, expect, describe } from "vitest";

describe('AboutView.vue', () => {
    test('renders inner text', () => {
        const wrapper = shallowMount(AboutView, {
            shallow: true,
        });
        expect(wrapper.text()).toContain('about');
    });
});
