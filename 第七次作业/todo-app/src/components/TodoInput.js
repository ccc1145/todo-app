class TodoInput {
    constructor() {
        this.input = document.getElementById('todoInput');
        this.addBtn = document.getElementById('addBtn');
        this.onAddCallback = null;
        this.onEnterCallback = null;
        
        this.bindEvents();
    }
    
    bindEvents() {
        // 绑定添加按钮点击事件
        this.addBtn.addEventListener('click', () => {
            this.handleAdd();
        });
        
        // 绑定输入框回车事件
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleAdd();
            }
        });
    }
    
    handleAdd() {
        const text = this.input.value.trim();
        if (text && this.onAddCallback) {
            this.onAddCallback(text);
        }
    }
    
    clear() {
        this.input.value = '';
        this.input.focus();
    }
    
    onAdd(callback) {
        this.onAddCallback = callback;
    }
    
    onEnter(callback) {
        this.onEnterCallback = callback;
    }
    
    focus() {
        this.input.focus();
    }
}

export default TodoInput;