import { configure, addDecorator } from '@storybook/html';

import '../src/style/entry/development.scss';

const req = require.context('../src', true, /\.stories\.tsx$/);

function loadStories() {
   req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
