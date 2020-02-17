import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/html';

// Create Knobs
const buttonTextKnob = (buttonText = 'Submit', buttonLabel = 'Button Text') =>
   text(buttonLabel, buttonText);

storiesOf('Components', module).add(
   'Redemption Button',
   () => `
      <redemption-button offer-id="12345">
         ${buttonTextKnob('Get Code')}
      </redemption-button>
   `,
   {
      notes: 'Provides wrapper for elements to trigger redemptions',
   }
);
