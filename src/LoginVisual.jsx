// import React, { useState } from "react";
// import Project from "./Project";
// import './LoginVisual.css';

// function LoginV() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loggedIn, setLoggedIn] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Check if username and password match some predefined values
//     if (username === "admin" && password === "password") {
//       setLoggedIn(true);
//     } else {
//       alert("Incorrect username or password");
//     }
//   };

//   if (loggedIn) {
//     return <Project />;
//   }

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Username:
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default LoginV;