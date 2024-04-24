import React, {Suspense} from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

export const HOME  = React.lazy(() => import("./Pages/Layout/Home"))

// import Ind from './Pages/ChildrenProp/Ind'
const IND = React.lazy(() => import('./Pages/ChildrenProp/Ind'))

// import ParentComponent from './Pages/MemoCallback/ParentComponent'
const ParentComponent = React.lazy(() => import('./Pages/MemoCallback/ParentComponent'))

// import UseMemo from './Pages/UseMemo/UseMemo'
const UseMemo = React.lazy(() => import('./Pages/UseMemo/UseMemo'))

// import Error from './Pages/ErrorBoundry/Error'
const Errors = React.lazy(() => import('./Pages/ErrorBoundry/Error'))

// import Styled from './Pages/StyledComponents/Styled'
const Styled = React.lazy(() => import('./Pages/StyledComponents/Styled'))

// import Interceptor from './Pages/Interceptor/Interceptor'
// const Interceptor = React.lazy(() => import('./Pages/Interceptor/Interceptor'))
const Inter = React.lazy(() => import('./Pages/Interceptor/Inter')) 

// import CustomHook from './Pages/CustomHook/CustomHook'
const CustomHook = React.lazy(() => import('./Pages/CustomHook/CustomHook'))

// import Scss from './Pages/SCSS_Css/Scss'
const Scss = React.lazy(() => import('./Pages/SCSS_Css/Scss'))

// import UseRefFocus from './Pages/RefUseRef/UseRefFocus'
const UseRefFocus = React.lazy(() => import('./Pages/RefUseRef/UseRefFocus'))

// import UseRefValuePersist from './Pages/RefUseRef/UseRefValuePersist'
const UseRefValuePersist = React.lazy(() => import('./Pages/RefUseRef/UseRefValuePersist'))

// import RouteCompo from './Pages/RefUseRef/RouteCompo'
const RouteCompo = React.lazy(() => import('./Pages/RefUseRef/RouteCompo'))

const ReState = React.lazy(() => import('./Pages/ReduxState/ReState'))

const ReApiCall = React.lazy(() => import('./Pages/ReduxState/ReApiCall'))

const Query = React.lazy(() => import('./Pages/ReactQuery/Query'))

const UseLayoutHook = React.lazy(() => import('./Pages/UseLayoutEffectHook/UseLayoutHook'))

const UseReducer = React.lazy(() => import('./Pages/useReducerHook/UseReducer')) 

const AppDemo = React.lazy(() => import('./Pages/ContextApi/AppDemo')) 

const Debauncing = React.lazy(() => import('./Pages/DebauncingThrottling/Debauncing'))  

const Throttling = React.lazy(() => import('./Pages/DebauncingThrottling/Throttling'))  



const App = () => {

  return (
    <>
    {/* <BrowserRouter> */}
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HOME />} />
        <Route path="/children/prop" element={<IND />} />
        <Route path="/MemoCallback" element={<ParentComponent />} />
        <Route path="/UseMemo" element={<UseMemo />} />
        <Route path="/Errors" element={<Errors />} />
        <Route path="/Styled" element={<Styled />} />
        <Route path="/Interceptor" element={<Inter />} />
        <Route path="/CustomHook" element={<CustomHook />} />
        <Route path="/Scss" element={<Scss />} />
        <Route path="/UseRefFocus" element={<UseRefFocus />} />
        <Route path="/UseRefValuePersist" element={<UseRefValuePersist />} />
        <Route path="/RouteCompo" element={<RouteCompo />} />
        <Route path="/ReApiCall" element={<ReApiCall />} />
        <Route path="/ReState" element={<ReState />} />
        <Route path="/reactQuery" element={<Query />} />
        <Route path="/UseLayoutHook" element={<UseLayoutHook />} />
        <Route path="/UseReducer" element={<UseReducer />} />
        <Route path="/contextApi" element={<AppDemo />} />
        <Route path="/debauncing" element={<Debauncing />} />
        <Route path="/throttling" element={<Throttling />} />
      </Routes>
      </Suspense>
    </>
  )
}

export default App


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
