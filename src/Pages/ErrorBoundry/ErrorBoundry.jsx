
// import React, { Component } from 'react'

// export default class ErrorBoundry extends Component {

//      constructor(props){
//           super(props)
//           this.state = {
//                error : null,
//                errorInfo : null
//           }
//      }

//      static getDerivedStateFromError(error){
//           return { error: error }
//      }

//      // For getting more info we can componentDidCatch 
//      componentDidCatch(error, errorInfo){
//           this.setState({
//                error: error,
//                errorInfo: errorInfo
//           })
//      }

//   render() {
//      if(this.state.errorInfo){
//           return <>
//           <div> Something went wrong</div>
//           <p>{this.state.error && this.state.error.toString()}</p>
//           <br />
//           {/* {this.state.errorInfo.componentStack} */}
//           </>
//      }
//     return this.props.children
//   }
// }




import React, { useState, useEffect } from 'react'


// ErrorBoundary component to catch errors
const ErrorBoundry = ({ children }) => {
     const [error, setError] = useState(null);
     // useEffect hook to handle error state

     useEffect(() => {
          const errorHandler = (error) => {
               setError(error);
          };

          window.addEventListener('error', errorHandler);

          // Cleanup function
          return () => {
               window.removeEventListener('error', errorHandler);
          };
     }, []);
     console.log("Error => ", error);
     // Render error UI if error occurs
     if (error) {
          return (
               <div>
                    <h1>Something went wrong.</h1>
                    <p>{error && error.message.toString()}</p>
               </div>
          );
     }

     // Render children if no error
     return children;
}

export default ErrorBoundry