import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Finals = () => {
  const [finals, setFinals] = useState([]);

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/GuilhermeViegasssss/api_times/main/finais.json')
      .then((response) => {
        setFinals(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados das finais:', error);
      });
  }, []);

  return (
    <div>
      <h2>Finais</h2>
      <table>
        <thead>
          <tr>
            <th>Jogo</th>
            <th>Mandante</th>
            <th>Gols Mandante</th>
            <th>Gols Visitante</th>
            <th>Visitante</th>
          </tr>
        </thead>
        <tbody>
          {finals.map((jogo) => (
            <tr key={jogo.id}>
              <td>{jogo.jogo}</td>
              <td>{jogo.mandante}</td>
              <td>{jogo.gols_mandante}</td>
              <td>{jogo.gols_visitante}</td>
              <td>{jogo.visitante}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Finals;