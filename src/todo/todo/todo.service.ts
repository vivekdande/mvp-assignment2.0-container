import { Injectable } from '@nestjs/common';
import { Todo, TodoId } from '../todo.dto';

const todos: Todo[] = []
@Injectable()
export class TodoService {

    get(): Todo[] {
        return todos;
    }

    getTodoById(todoId: TodoId): Todo {
        return todos.find((todo) => todo.id === parseInt(todoId.id));
    }

    createTodo(todo: Todo): Todo {
        todos.push({ id: todos.length + 1, ...todo })
        return todos[todos.length - 1]
    }

    updateTodo(id: string, todo: Todo): TodoId {
        const index = todos.findIndex((todo) => todo.id === parseInt(id))
        todos[index] = {
            id: todos[index].id,
            ...todo
        }
        return { id }
    }
}
