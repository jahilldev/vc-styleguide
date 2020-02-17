import { Component, Listen, Host, h } from '@stencil/core';

/* -----------------------------------
 *
 * Offer
 *
 * -------------------------------- */

@Component({
   tag: 'offer-block-tile',
   styleUrl: 'offer-block-tile.scss',
   shadow: true,
})
export class OfferBlockTile {
   @Listen('onRedemption')
   onRedemption({ detail: { offerId } }: CustomEvent) {
      console.log('OfferBlockTile.onRedemption()', offerId);
   }

   render() {
      return (
         <Host>
            <slot />
         </Host>
      );
   }
}
