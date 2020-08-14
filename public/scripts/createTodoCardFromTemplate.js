const todoCardTemplate = document.querySelector('.todo-card.template');

function createTodoCardFromTemplate() {
    const todoCard = todoCardTemplate.cloneNode(true);
    todoCard.classList.remove('template');

    function setTitle(title) {
        const todoTitle = todoCard.querySelector('.title');
        todoTitle.innerText = title;
    }

    function setCompletionIcon(completed) {
        const todoCompletionIcon = todoCard.querySelector('.completion-icon');
        if (completed) {
            todoCompletionIcon.setAttribute('src', '/public/assets/completed.svg');
            todoCompletionIcon.setAttribute('alt', 'Completed');
            todoCompletionIcon.setAttribute('title', 'Completed');
        }
    }

    function setOwnerUser(userId, users) {
        const todoOwnerUsername = todoCard.querySelector('.username');
        todoOwnerUsername.innerText = getOwnerUsername(userId, users);
    }

    function getOwnerUsername(userId, users) {
        const { name: ownerUsername } = users[userId - 1];
        return ownerUsername;
    }

    Object.assign(todoCard, {
        setTitle,
        setCompletionIcon,
        setOwnerUser
    });

    return todoCard;
}

export default createTodoCardFromTemplate;
