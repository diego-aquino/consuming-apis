import createPage from './createPage.js';

try {
    const page = createPage();
    page.load();
} catch (error) {
    console.error('Uncaught error!');
    console.error(error);
}
