import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _cba7a9c4 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _7a745059 = () => import('../pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)
const _e7c0f148 = () => import('../pages/_lang/index.vue' /* webpackChunkName: "pages/lang" */).then(m => m.default || m)
const _6c67ac97 = () => import('../pages/_lang/about.vue' /* webpackChunkName: "pages/lang-about" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _cba7a9c4,
			name: "index"
		},
		{
			path: "/about",
			component: _7a745059,
			name: "about"
		},
		{
			path: "/:lang",
			component: _e7c0f148,
			name: "lang"
		},
		{
			path: "/:lang/about",
			component: _6c67ac97,
			name: "lang-about"
		}
    ],
    fallback: false
  })
}
