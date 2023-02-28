import { describe, expect, test, beforeEach, afterEach, it, vi } from 'vitest'
import { mount, type VueWrapper } from '@vue/test-utils'
import HomePage from '@/views/index.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import { setActivePinia, createPinia } from 'pinia'
import router from '@/router'

let wrapper: VueWrapper

const findHelloWorld = () => wrapper.findComponent(HelloWorld)

const findLinkToAboutPage = () => wrapper.find('a[href="/about"]')

beforeEach(() => {
    /**
     * Testing component with Pinia store
     * @link https://pinia.vuejs.org/cookbook/testing.html
     */
    setActivePinia(createPinia())

    wrapper = mount(HomePage, {
        global: { plugins: [router] },
    })
})

afterEach(() => {
    wrapper.unmount()
})

describe('home page', () => {
    test('has hello world component', () => {
        expect(findHelloWorld().exists()).toBeTruthy()
    })
})

/**
 * Example testing of component with VueRouter
 * @link https://test-utils.vuejs.org/guide/advanced/vue-router.html
 */
describe('when user clicks "About" link', () => {
    it('goes to "About" page via Router not regular link', async () => {
        const push = vi.spyOn(router, 'push')

        await findLinkToAboutPage().trigger('click')

        expect(push).toHaveBeenCalledOnce()
    })
})
