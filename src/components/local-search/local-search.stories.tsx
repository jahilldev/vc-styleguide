import { storiesOf } from '@storybook/html';

/* -----------------------------------
 *
 * Search
 *
 * -------------------------------- */

storiesOf('Components', module).add(
   'Local Search',
   () => `
      <local-search
        title-text="Search for shops"
        link-text="View local map"
        map-url="https://vouchercloud.com"
      ></redemption-button>
   `,
   {
      notes: 'Provides local search form',
   }
);
