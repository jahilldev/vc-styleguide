import { Component, Prop, h, getAssetPath, State } from '@stencil/core';

/* -----------------------------------
 *
 * Search
 *
 * -------------------------------- */

@Component({
   tag: 'local-search',
   styleUrl: 'local-search.scss',
   assetsDirs: ['assets'],
   shadow: true,
})
export class LocalSearch {
   @Prop() titleText: string;
   @Prop() linkText: string;
   @Prop() mapUrl: string;
   @State() searchValue: string = '';

   private onKeyUp = (ev: Event) => {
      const { value } = ev.target as HTMLInputElement;

      this.searchValue = value;
   };

   private onSubmit = (ev: Event) => {
      ev.preventDefault();

      console.log('submit', ev, this.searchValue);
   };

   render() {
      return (
         <div class="wrapper">
            <div class="content">
               <h3 class="title">{this.titleText}</h3>
               <form class="form" method="POST" onSubmit={this.onSubmit}>
                  <input
                     class="input"
                     type="text"
                     value={this.searchValue}
                     onKeyUp={this.onKeyUp}
                  />
                  <button class="button">Show Offers</button>
               </form>
               <a href={this.mapUrl} class="link" target="_blank">
                  {this.linkText}
               </a>
            </div>
            <img class="image" src={getAssetPath('./assets/map.png')} />
         </div>
      );
   }
}
