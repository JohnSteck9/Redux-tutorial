// observerPattern // Наблюдатель

export function createStore(rootReducer, initialState) {
    // замикання
    // приватні змінні
    let state = rootReducer(initialState, {type: '__INIT__'})
    let subscribers = []

    return {
        // щось помінялося і треба щось замінити
        // action === {type: 'INCREMENT'}        обов`язкове поле type
        dispatch(action) {
            state = rootReducer(state, action)
            subscribers.forEach(sub => sub())
        },
        // всі слухачі що слухають цей обєкт мають щось змінити
        subscribe(callback) {
            subscribers.push(callback);
        },
        getState() {
            return state
        }
    }
}