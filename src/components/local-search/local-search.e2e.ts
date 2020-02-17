import { newE2EPage } from '@stencil/core/testing';

describe('my-component', () => {
   it('renders', async () => {
      const page = await newE2EPage();

      await page.setContent('<local-search></local-search>');
      const element = await page.find('local-search');

      expect(element).toHaveClass('hydrated');
   });

   it('applies titleText property to DOM', async () => {
      const testTitle = 'title';
      const page = await newE2EPage();

      await page.setContent(
         `<local-search title-text="${testTitle}"></local-search>`
      );

      const { textContent } = await page.find('local-search >>> .title');

      expect(textContent).toEqual(testTitle);
   });
});
