import React, { useState, useEffect } from 'react';
import axios from 'axios';


const SemiFinals = () => {
  const [semiFinals, setSemiFinals] = useState([]);

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/GuilhermeViegasssss/api_times/main/semifinais.json')
      .then((response) => {
        setSemiFinals(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados das semifinais:', error);
      });
  }, []);

  return (
    <div>
      <h2>Semifinais</h2>
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
          {semiFinals.map((jogo) => (
            <tr key={jogo.id}>
              <td>{jogo.jogo}</td>
              <td>{jogo.mandante}</td>
              <td>{jogo.gols_mandante}</td>
              <td><img src={jogo.imagem} alt=""/></td>
              <td>{jogo.gols_visitante}</td>
              <td>{jogo.visitante}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SemiFinals;