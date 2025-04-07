import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const Layout = lazy(() => import('@components/layout'))
const MainPage = lazy(() => import('@pages/MainPage'))
const PostDetailPage = lazy(() => import('@pages/PostDetailPage'))
const LoginPage = lazy(() => import('@pages/LoginPage'))
const SignUpPage = lazy(() => import('@pages/SignUpPage'))
const EmailSignUpPage = lazy(() => import('@pages/EmailSignUpPage'))

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
      { path: '/post/:id', element: <PostDetailPage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/signUp', element: <SignUpPage /> },
      { path: '/signup/email', element: <EmailSignUpPage /> },
    ],
  },
])

export default router
