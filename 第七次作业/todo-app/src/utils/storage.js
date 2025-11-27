const STORAGE_KEY = 'todos';

export const loadTodos = () => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.error('加载待办事项失败:', error);
        return [];
    }
};

export const saveTodos = (todos) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (error) {
        console.error('保存待办事项失败:', error);
    }
};

export const clearTodos = () => {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
        console.error('清空待办事项失败:', error);
    }
};