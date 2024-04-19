import { Module } from '@nestjs/common';
import { TodoController } from './todo/todo/todo.controller';
import { TodoService } from './todo/todo/todo.service';

@Module({
  controllers: [TodoController],
  providers: [TodoService]
})
export class AppModule {}