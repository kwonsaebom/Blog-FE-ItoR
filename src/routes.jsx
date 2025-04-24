import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Spinner from '@components/Spinner'

const Layout = lazy(() => import('@components/layout'))
const MainPage = lazy(() => import('@pages/MainPage'))
const PostDetailPage = lazy(() => import('@pages/PostDetailPage'))
const PostWritePage = lazy(() => import('@pages/PostWritePage'))
const SignUpPage = lazy(() => import('@pages/SignUpPage'))
const EmailSignUpPage = lazy(() => import('@pages/EmailSignUpPage'))
const KakaoSignUpPage = lazy(() => import('@pages/KakaoSignUpPage'))
const MyPage = lazy(() => import('@pages/MyPage'))
const ModifyPage = lazy(() => import('@pages/ModifyPage'))

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Spinner />}>
        <Layout />
      </Suspense>
    ),
    children: [
      { index: true, element: <MainPage /> },
      { path: '/post/:id', element: <PostDetailPage /> },
      { path: '/write', element: <PostWritePage /> },
      { path: '/signUp', element: <SignUpPage /> },
      { path: '/signup/email', element: <EmailSignUpPage /> },
      { path: '/signup/kakao', element: <KakaoSignUpPage /> },
      { path: '/mypage', element: <MyPage /> },
      { path: '/mypage/setting', element: <ModifyPage /> },
    ],
  },
])

export default router
