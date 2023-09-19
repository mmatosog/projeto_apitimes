import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuarterFinals = () => {
  const [quarterFinals, setQuarterFinals] = useState([]);

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/GuilhermeViegasssss/api_times/main/quartas.json')
      .then((response) => {
        setQuarterFinals(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados das quartas de final:', error);
      });
  }, []);

  return (
    <div>
      <h2>Quartas de Final</h2>
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
          {quarterFinals.map((jogo) => (
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

export default QuarterFinals;
