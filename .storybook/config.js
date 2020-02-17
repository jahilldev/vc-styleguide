import { configure, addDecorator } from '@storybook/html';

const req = require.context('../src', true, /\.stories\.tsx$/);

function loadStories() {
   req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
