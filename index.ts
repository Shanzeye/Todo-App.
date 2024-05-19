#! /usr/bin/env node

import inquirer from 'inquirer';

let todos: string[] = [];

function showMenu() {
    inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'Choose an action:',
        choices: ['Add Todo', 'List Todos', 'Exit']
    }).then((answers: { action: string }) => {
        switch (answers.action) {
            case 'Add Todo':
                addTodo();
                break;
            case 'List Todos':
                listTodos();
                break;
            case 'Exit':
                console.log('Exiting Todo app.');
                break;
        }
    });
}

function addTodo() {
    inquirer.prompt({
        type: 'input',
        name: 'title',
        message: 'Enter todo title:'
    }).then((answers: { title: string }) => {
        todos.push(answers.title);
        console.log('Todo added successfully!');
        showMenu();
    });
}

function listTodos() {
    console.log('Your Todos:');
    todos.forEach(todo => {
        console.log('- ' + todo);
    });
    showMenu();
}

console.log('Welcome to Todo App!');
showMenu();
