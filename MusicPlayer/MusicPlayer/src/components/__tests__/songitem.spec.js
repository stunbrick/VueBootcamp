import SongItem from '@/components/SongItem.vue';
import { shallowMount } from '@vue/test-utils';
import { test, expect, describe } from "vitest";


describe('SongItem.vue', () => {
    test('render song.display_name', () => {
        const song = {
            display_name: 'test',
        };
        const wrapper = shallowMount(SongItem, {
            props: {
                song,
            },
            global: {
                stubs: {
                    RouterLink: true,
                },
            }
        });
        const compositionAuthor = wrapper.find('.text-grey-500');
        expect(wrapper.text()).toContain(song.display_name);
    });

    test('render song.docID in id attribute', () => {
        const song = {
            docID: 'abc',
        };
        const wrapper = shallowMount(SongItem, {
            props: {
                song,
            },
            global: {
                stubs: {
                    RouterLink: true,
                },
            }
        });
        const compositionAuthor = wrapper.find('.text-grey-50');
        expect(wrapper.attributes().id).toBe(`song-id-${song.docID}`);
    });
});