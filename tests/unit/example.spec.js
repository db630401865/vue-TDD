import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

test('hellow.vue', () => {
  // 挂载组件
  const wrapper = shallowMount(HelloWorld)
  // wrapper.element.innerHTML
  const a = wrapper.find('[data-id="data-id"]')
  console.log(a.text())
  expect(a.text()).toContain('ue-cli')
})

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })
