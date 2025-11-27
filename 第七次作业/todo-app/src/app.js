import TodoList from './components/TodoList.js';
import TodoInput from './components/TodoInput.js';
import { loadTodos, saveTodos } from './utils/storage.js';

class TodoApp {
    constructor() {
        this.todos = loadTodos();
        this.todoList = new TodoList();
        this.todoInput = new TodoInput();
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.render();
    }
    
    bindEvents() {
        // 绑定添加事件
        this.todoInput.onAdd((text) => {
            this.handleAdd(text);
        });
        
        // 绑定删除事件
        this.todoList.onDelete((index) => {
            this.handleDelete(index);
        });
        
        // 绑定清空事件 - 这里直接绑定，不在TodoList中重复绑定
        this.todoList.onClearAll(() => {
            this.handleClearAll();
        });
        
        // 绑定输入框回车事件
        this.todoInput.onEnter((text) => {
            this.handleAdd(text);
        });
    }
    
    handleAdd(text) {
        if (!text.trim()) {
            alert('请输入待办事项内容');
            return;
        }
        
        this.todos.push(text.trim());
        this.saveAndRender();
        this.todoInput.clear();
    }
    
    handleDelete(index) {
        this.todos.splice(index, 1);
        this.saveAndRender();
    }
    
    handleClearAll() {
        if (this.todos.length === 0) {
            alert('没有可清除的待办事项');
            return;
        }
        
        if (confirm('确定要清空所有待办事项吗？此操作不可撤销！')) {
            this.todos = [];
            this.saveAndRender();
        }
    }
    
    saveAndRender() {
        saveTodos(this.todos);
        this.todoList.render(this.todos);
    }
    
    render() {
        this.todoList.render(this.todos);
    }
}

// 初始化应用
new TodoApp();