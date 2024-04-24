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

     <br />
     <h1>UseReducer Hook</h1>
     <Link to={"/UseReducer"}> UseReducer </Link>


     <br />
     <h1>Context API</h1>
     <Link to={"/contextApi"}> Context API </Link>


     <br />
     <h1>Debauncing & Throttling </h1>
     <Link to={"/debauncing"}> Debauncing </Link>
     <Link to={"/throttling"}> Throttling </Link>

     <br />
     <br />

<h3>Event Delegation</h3>
     <div style={{ background:"green", padding: "50px" }} onClick={() => alert("Parent")}> <h1> -: in Parent div alert is presented  but we clicked inside any element of this, after this they invoked its parent event  :- </h1>
     <button>btn one</button>
     <button>btn two</button>
     <button>btn three</button>

<br />
<br />
<br />

       ---- we need to write event.stopPropagation() for stopping event bubbling or event capturing --- 
      <div style={{ background:"red", padding: "50px" }} onClick={(event) =>{
        event.stopPropagation() 
        alert("child")}
       }>
      </div>

     </div>
     
    </div>
  )
}

export default Home