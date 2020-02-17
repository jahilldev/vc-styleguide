import { Component, Prop, Event, EventEmitter, Host, h } from '@stencil/core';

/* -----------------------------------
 *
 * Redemption
 *
 * -------------------------------- */

@Component({
   tag: 'redemption-button',
   styleUrl: 'redemption-button.scss',
   shadow: true,
})
export class RedemptionButton {
   @Prop() offerId: number;
   @Prop() redirectUrl?: string;
   @Prop() modalUrl?: string;

   @Event({ eventName: 'onRedemption' })
   redemption: EventEmitter;

   private onClick = () => {
      const { offerId } = this;
      // TRIGGER MODAL / REDIRECT

      console.log('RedemptionButton.onClick()', offerId);

      this.redemption.emit({ offerId });
   };

   render() {
      return (
         <Host onClick={this.onClick}>
            <slot />
         </Host>
      );
   }
}
