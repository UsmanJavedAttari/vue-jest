import BaseVue from '@/components/core/BaseVue';
import { Component } from 'vue-property-decorator';

@Component
export default class Home extends BaseVue {
    public count = 0;
}
