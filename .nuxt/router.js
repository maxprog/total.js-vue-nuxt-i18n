import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _8247b25e = () => import('../vue/pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _c1b767e8 = () => import('../vue/pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)
const _2aba9e62 = () => import('../vue/pages/_lang/index.vue' /* webpackChunkName: "pages/lang" */).then(m => m.default || m)
const _6a2a53ec = () => import('../vue/pages/_lang/about.vue' /* webpackChunkName: "pages/lang-about" */).then(m => m.default || m)



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
			component: _8247b25e,
			name: "index"
		},
		{
			path: "/about",
			component: _c1b767e8,
			name: "about"
		},
		{
			path: "/:lang",
			component: _2aba9e62,
			name: "lang"
		},
		{
			path: "/:lang/about",
			component: _6a2a53ec,
			name: "lang-about"
		}
    ],
    fallback: false
  })
}
