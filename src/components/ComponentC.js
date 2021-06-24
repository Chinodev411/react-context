import { useContext } from 'react';
import { DataContext } from '../App';

export default function ComponentC() {
    const data = useContext(DataContext);
    return (
        <div>
            {/* Only render the below h3 tag when the user is logged in */}
            {/* {data.loggedIn ? <h3>The user is: {data.userName}</h3> : ""} */}
            {data.loggedIn && <h3>The user is: {data.userName}</h3> }
            <button onClick={()=> data.setLoggedIn(true)}>Log In</button>
        </div>
    )
}











// import { useContext } from 'react';
// import { DataContext } from '../App';




// export default function ComponentC() {
//   // console.log(DataContext)
//   const data = useContext(DataContext);
//   return (
//     <div>
//       {/* /* {Only render the below h3 tag when the user is logged in } */ }
//       {data.loggedIn ? <h3> The user is: {data.userName} </h3> : "" }
//       {/* <h3> The user is: {data.userName} </h3> */}
//       {/* {data.loggedIn } */}
//       <button onClick= {() => data.setLoggedIn(true)}>Log In</button>
//     </div>
//   )
// }




  