import Vue from 'vue';
import { Subscription } from 'rxjs';

export default abstract class BaseVue extends Vue {
    private Subscriptions: Array<Subscription> = [];

    set AddSubscription$(subscription: Subscription) {
        this.Subscriptions.push(subscription);
    }

    /**
     * Unsubscribes from all the subscriptions
     * (*used in `beforeDestroy` hook of Vue Components)*.
     */
    public unsubscribeSubscriptions() {
        for (const subscription of this.Subscriptions) {
            if (subscription) {
                try {
                    subscription.unsubscribe();
                } catch (err) {
                    alert();
                    console.log(new Error(err));
                }
            }
        }
        if (this.Subscriptions.length > 0) {
            this.Subscriptions.splice(0, this.Subscriptions.length);
        }
    }

    public beforeDestroy() {
        this.unsubscribeSubscriptions();
    }
}
