import Home from '@/views/Home/Home';
import { mount, Wrapper } from '@vue/test-utils';

describe('Home Component', () => {
    let wrapper: Wrapper<Home>;

    beforeEach(() => {
        wrapper = mount(Home);
    });

    test('Verify Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
