import { newE2EPage } from '@stencil/core/testing';

describe('offer-block-tile', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<offer-block-tile></offer-block-tile>');

    const element = await page.find('offer-block-tile');
    expect(element).toHaveClass('hydrated');
  });
});
