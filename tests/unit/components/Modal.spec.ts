import Modal from '@/components/shared/Modal/Modal';
import { mount, Wrapper } from '@vue/test-utils';

describe('Modal Component', () => {
    let wrapper: Wrapper<Modal>;

    beforeEach(() => {
        wrapper = mount(Modal);
    });

    test('Hidden on start', () => {
        expect(wrapper.find('div.modal').exists()).toBeFalsy();
    });

    test('Shown after true', async () => {
        await wrapper.setData({
            Mode: true
        });

        expect(wrapper.find('div.modal').exists()).toBeTruthy();
    });
});
