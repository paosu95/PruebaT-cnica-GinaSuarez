// import React from 'react';
// import { useEffect, useState } from 'react';

// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

// export default function Usuarios() {
//   const [tablaUsuarios, setTablaUsuarios] = useState([]);
//   const [usuarios, setUsuarios] = useState([]);
//   const peticionGet = async () => {
//     await axios
//       .get('https://api.github.com/search/users?q=YOUR_NAME')
//       .then((response) => {
//         setTablaUsuarios(response.data);
//         setUsuarios(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   useEffect(() => {
//     peticionGet();
//   }, []);

//   return (
//     <div>
//       <div className="table-responsive">
//         <table className="table table-sm table-bordered">
//           <thead>
//             <tr>
//               <th>Login</th>
//               <th>Id</th>
//               <th>Node_id</th>
//               <th>Avatar</th>
//               <th>Gravatar</th>
//               <th>Url</th>
//               <th>Html</th>
//               <th>Followers</th>
//               <th>Following</th>
//               <th>Gists</th>
//               <th>Starred</th>
//               <th>Subscriptions</th>
//               <th>Organizations</th>
//               <th>Repos</th>
//               <th>Events</th>
//               <th>Received_events</th>
//               <th>Type</th>
//               <th>Side_admin</th>
//               <th>Score</th>
//             </tr>
//           </thead>
//           {/* <tbody>
//             {usuarios &&
//               usuarios.map((usuario) => (
//                 <tr key={usuario.id}>
//                   <td>{usuario.login}</td>
//                   <td>{usuario.id}</td>
//                   <td>{usuario.node_id}</td>
//                   <td>{usuario.avatar_url}</td>
//                   <td>{usuario.gravatar_id}</td>
//                   <td>{usuario.url}</td>
//                   <td>{usuario.html_url}</td>
//                   <td>{usuario.html_url}</td>
//                   <td>{usuario.following_url}</td>
//                   <td>{usuario.gists_url}</td>
//                   <td>{usuario.starred_url}</td>
//                   <td>{usuario.subscriptions_url}</td>
//                   <td>{usuario.organizations_url}</td>
//                   <td>{usuario.repos_url}</td>
//                   <td>{usuario.events_url}</td>
//                   <td>{usuario.received_events_url}</td>
//                   <td>{usuario.type}</td>
//                   <td>{usuario.site_admin}</td>
//                   <td>{usuario.score}</td>
//                 </tr>
//               ))}
//           </tbody> */}
//         </table>
//       </div>
//     </div>
//   );
// }
