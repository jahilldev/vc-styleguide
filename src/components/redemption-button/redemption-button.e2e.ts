import { newE2EPage } from '@stencil/core/testing';

describe('redemption-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<redemption-button></redemption-button>');

    const element = await page.find('redemption-button');
    expect(element).toHaveClass('hydrated');
  });
});
