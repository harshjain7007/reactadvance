import React from 'react'
import { Link } from 'react-router-dom'



const Home = () => {
  return (
    <div>
    <br />
     <Link to={"/children/prop"}> Children Prop </Link>
    <br />

     <Link to={"/MemoCallback"}> MemoCallback </Link>
    <br />

     <Link to={"/UseMemo"}> UseMemo </Link>
    <br />

     <Link to={"/Errors"}>Errors </Link>
    <br />

     <Link to={"/Styled"}>Styled </Link>
    <br />

     <Link to={"/Interceptor"}>Interceptor </Link>
    <br />

     <Link to={"/CustomHook"}>CustomHook </Link>
    <br />

     <Link to={"/Scss"}>Scss </Link>
    <br />

     <h1> Ref And useRef Hook </h1>
     <Link to={"/UseRefFocus"}>UseRefFocus </Link>
    <br />

     <Link to={"/UseRefValuePersist"}>UseRefValuePersist </Link>
    <br />

     <Link to={"/RouteCompo"}> Ref With useRef attribute </Link>

     <br /> <h1> Redux Toolkit </h1>
     <Link to={"/ReApiCall"}> Redux Api Call </Link>

     <br />
     <Link to={"/ReState"}> Redux State </Link>

     <br />

     <h1>React Query NPM</h1>
     <Link to={"/reactQuery"}> React Query </Link>


     <br />

     <h1>Use LayOut Effect Hook</h1>
     <Link to={"/UseLayoutHook"}> UseLayoutHook </Link>
    </div>
  )
}

export default Home