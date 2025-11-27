class TodoList {
    constructor() {
        this.container = document.getElementById('todoList');
        this.onDeleteCallback = null;
        this.onClearAllCallback = null;
        this.bindClearAllEvent();
    }
    
    render(todos) {
        this.todos = todos;
        
        if (todos.length === 0) {
            this.container.innerHTML = this.getEmptyState();
            return;
        }
        
        this.container.innerHTML = todos.map((todo, index) => 
            this.createTodoItem(todo, index)
        ).join('');
        
        this.bindItemEvents();
    }
    
    createTodoItem(text, index) {
        return `
            <div class="todo-item" data-index="${index}">
                <span class="todo-text">${text}</span>
                <button class="delete-btn" data-index="${index}">删除</button>
            </div>
        `;
    }
    
    bindItemEvents() {
        // 绑定删除按钮事件
        this.container.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const index = parseInt(e.target.dataset.index);
                this.onDeleteCallback && this.onDeleteCallback(index);
            });
        });
    }
    
    bindClearAllEvent() {
        // 绑定清空所有按钮事件
        const clearBtn = document.getElementById('clearBtn');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                this.onClearAllCallback && this.onClearAllCallback();
            });
        }
    }
    
    getEmptyState() {
        return '<div class="empty-state"><p>暂无待办事项</p></div>';
    }
    
    onDelete(callback) {
        this.onDeleteCallback = callback;
    }
    
    onClearAll(callback) {
        this.onClearAllCallback = callback;
    }
}

export default TodoList;