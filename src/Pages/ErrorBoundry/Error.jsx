import React, { Suspense, lazy } from 'react'
import ErrorBoundry from './ErrorBoundry';
// import Card from './Card'
const LazyCard = lazy(() => import('./Card'));

const Error = () => {
     return (
          <div>
               <ErrorBoundry>
                    <Suspense fallback="Loading...">
                         <LazyCard />
                    </Suspense>
               </ErrorBoundry>
               <h6> Other UI </h6>
          </div>
     )
}

export default Error




// ------------  try to run this of using useError Boundry npm pakaage ---- 
// import React, { Suspense, lazy } from 'react';
// import { ErrorBoundary, useErrorBoundary } from 'react-error-boundary';

// const LazyCard = lazy(() => import('./Card'));

// function ErrorFallback({ error, resetErrorBoundary }) {
//   return (
//     <div>
//       <h2>Something went wrong:</h2>
//       <pre>{error.message}</pre>
//       <button onClick={resetErrorBoundary}>Try again</button>
//     </div>
//   );
// }

// const ErrorContent = () => {
//   const { ErrorBoundary } = useErrorBoundary();

//   return (
//     <ErrorBoundary FallbackComponent={ErrorFallback}>
//       <Suspense fallback="Loading...">
//         <LazyCard />
//       </Suspense>
//     </ErrorBoundary>
//   );
// };

// export default ErrorContent;