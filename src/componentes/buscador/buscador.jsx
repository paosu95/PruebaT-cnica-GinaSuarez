import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import style from './buscador.module.css';

export default function Buscador() {
  const [usuarios, setUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  const peticionGet = async (e) => {
    e.preventDefault();
    setUsuarios([]);
    await axios
      .get('https://api.github.com/search/users?q=' + busqueda)
      .then((response) => {
        setUsuarios(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };

  return (
    <div className={style.contenedorPrincipal}>
      <form onSubmit={peticionGet}>
        <div className={style.input}>
          <input
            className={style.inputBuscador}
            width="100px"
            color="red"
            value={busqueda}
            placeholder="Enter your login"
            onChange={handleChange}
          />
          <button className={style.botonBuscador}>
            <FontAwesomeIcon
              icon={faSearch}
              color={'white'}
              fontSize={'18px'}
            />
          </button>
        </div>

        <div className={style.contenedorTabla}>
          <table>
            <thead>
              <tr>
                <th>Login</th>
                <th>Id</th>
                <th>Node_id</th>
                <th>Avatar</th>
                <th>Gravatar</th>
                <th>Url</th>
                <th>Html</th>
                <th>Followers</th>
                <th>Following</th>
                <th>Gists</th>
                <th>Starred</th>
                <th>Subscriptions</th>
                <th>Organizations</th>
                <th>Repos</th>
                <th>Events</th>
                <th>Received_events</th>
                <th>Type</th>
                <th>Side_admin</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {usuarios &&
                usuarios.map((usuario) => (
                  <tr key={usuario.id}>
                    <td>{usuario.login}</td>
                    <td>{usuario.id}</td>
                    <td>{usuario.node_id}</td>
                    <td>{usuario.avatar_url}</td>
                    <td>{usuario.gravatar_id}</td>
                    <td>{usuario.url}</td>
                    <td>{usuario.html_url}</td>
                    <td>{usuario.html_url}</td>
                    <td>{usuario.following_url}</td>
                    <td>{usuario.gists_url}</td>
                    <td>{usuario.starred_url}</td>
                    <td>{usuario.subscriptions_url}</td>
                    <td>{usuario.organizations_url}</td>
                    <td>{usuario.repos_url}</td>
                    <td>{usuario.events_url}</td>
                    <td>{usuario.received_events_url}</td>
                    <td>{usuario.type}</td>
                    <td>{usuario.site_admin}</td>
                    <td>{usuario.score}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
}
