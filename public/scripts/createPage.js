import request from './network/request.js';
import createTodoCardFromTemplate from './createTodoCardFromTemplate.js';

function createPage() {
    const todoScreen = document.querySelector('main');

    let todos = [], users = [];

    async function load() {
        try {
            ({ todos, users } = await getData());
            renderScreen();
        } catch (error) {
            console.error(error);
        }
    }

    async function getData() {
        const [todos, users] = await Promise.all([
            request('todos'),
            request('users')
        ]);

        return { todos, users };
    }

    function renderScreen() {
        todos.forEach( todo => renderTodoCard(todo) );
    }

    function renderTodoCard(todo) {
        const todoCard = createTodoCardFromTemplate();
        todoCard.setTitle(todo.title);
        todoCard.setCompletionIcon(todo.completed);
        todoCard.setOwnerUser(todo.userId, users);

        todoScreen.appendChild(todoCard);
    }

    return { load };
}

export default createPage;
