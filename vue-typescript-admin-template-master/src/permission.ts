import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'
import { Route } from 'vue-router'
import { UserModule } from '@/store/modules/user'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login']

router.beforeEach((to: Route, from: Route, next: any) => {
  NProgress.start()
  console.log('getToken()')
  console.log(getToken())
  if (getToken()) {
    if (to.path === '/login') {
      console.log('to.path')
      next({ path: '/' })
      NProgress.done() // If current page is dashboard will not trigger afterEach hook, so manually handle it
    } else {
      console.log('1222222')

      if (UserModule.roles.length === 0) {
        console.log('356353653')
        UserModule.GetUserInfo().then(() => {
          console.log('next()')
          console.log(next())
          next()
        }).catch((err) => {
          UserModule.FedLogOut().then(() => {
            Message.error(err || 'Verification failed, please login again')
            next({ path: '/' })
          })
        })
      } else {
        console.log('444444444')
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`) // Redirect to login page
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
