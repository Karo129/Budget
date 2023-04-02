import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoHeaderComponent } from './components/todo-list/todo-header/todo-header.component';
import { TodoItemComponent } from './components/todo-list/todo-item/todo-item.component';
import { TodoFooterComponent } from './components/todo-list/todo-footer/todo-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoHeaderComponent,
    TodoItemComponent,
    TodoFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
