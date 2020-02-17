import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/html';

/* -----------------------------------
 *
 * Knobs
 *
 * -------------------------------- */

const buttonTextKnob = (buttonText = 'Submit', buttonLabel = 'Button Text') =>
   text(buttonLabel, buttonText);

/* -----------------------------------
 *
 * Redemption
 *
 * -------------------------------- */

storiesOf('Components', module).add(
   'Redemption Button',
   () => `
      <redemption-button
         class="button"
         offer-id="12345"
      >
         ${buttonTextKnob('Get Code')}
      </redemption-button>
   `,
   {
      notes: 'Provides wrapper for elements to trigger redemptions',
   }
);
