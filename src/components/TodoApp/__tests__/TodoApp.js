import { shallowMount } from '@vue/test-utils'
import TodoItem from '@/components/TodoApp/TodoItem.vue'
import TodoApp from '@/components/TodoApp/index.vue'

describe('TodoHeader.vue', () => {
  let wrapper = null
  test('TodoApp.vue', async () => {
    wrapper = shallowMount(TodoApp)
    const text = 'play'
    wrapper.vm.handleNewTodo(text)
    const todo = wrapper.vm.todos.find(t => t.text === text)
    expect(todo).toBeTruthy()
  })

  test('Todo List', async () => {
    wrapper = shallowMount(TodoApp)
    const todos = [
      { id: 1, text: 'eat', done: false },
      { id: 2, text: 'play', done: true },
      { id: 3, text: 'sleep', done: false }
    ]
    await wrapper.setData({
      todos
    })

    expect(wrapper.findAllComponents(TodoItem).length).toBe(todos.length)
  })
})
