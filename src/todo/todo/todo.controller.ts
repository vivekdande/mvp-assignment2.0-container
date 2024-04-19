import { Controller, Get, Post, HttpCode, Param, Body, Patch } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo, TodoId } from '../todo.dto';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService) { }

    @Get()
    @HttpCode(200)
    getTodo(): Todo[] {
        return this.todoService.get();
    }

    @Get('/:id')
    @HttpCode(200)
    getTodoById(@Param() id: TodoId): Todo {
        return this.todoService.getTodoById(id);
    }

    @Post()
    @HttpCode(200)
    createTodo(@Body() todo: Todo): Todo {
        return this.todoService.createTodo(todo);
    }

    @Patch('/:id')
    @HttpCode(204)
    updateTodo(@Param() id: string, @Body() todo: Todo): TodoId {
        return this.todoService.updateTodo(id, todo);
    }
}
