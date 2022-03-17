import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Spinner from './components/Spinner/Spinner'
import * as ROUTES from './constants/routes'

const Home = lazy(() => import('./pages/Home/Home'))
const About = lazy(() => import('./pages/About/About'))
const Housing = lazy(() => import('./pages/Housing/Housing'))
const NotFound = lazy(() => import('./pages/NotFound/NotFound'))

function Router() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={`${ROUTES.HOUSING}/:id`} element={<Housing />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default Router
