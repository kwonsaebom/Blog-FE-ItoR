import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const Layout = lazy(() => import('@components/layout'))
const LoginPage = lazy(() => import('@pages/LoginPage'))
const SignUpPage = lazy(() => import('@pages/SignUpPage'))
const MainPage = lazy(() => import('@pages/MainPage'))

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Layout />
      </Suspense>
    ),
    children: [
      { index: true, element: <MainPage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/signUp', element: <SignUpPage /> },
    ],
  },
])

export default router
