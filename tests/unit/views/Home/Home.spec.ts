import Home from '@/views/Home/Home';
import { mount, Wrapper } from '@vue/test-utils';

describe('Home Component', () => {
    let wrapper: Wrapper<Home>;

    beforeEach(() => {
        wrapper = mount(Home);
    });

    test('Renders 0 on start', () => {
        expect(wrapper.find('.count').text()).toBe('0');
    });

    test('Increment by 1', async () => {
        const button = wrapper.find('button');
        await button.trigger('click');

        expect(wrapper.find('.count').text()).toBe('1');
    });
});
