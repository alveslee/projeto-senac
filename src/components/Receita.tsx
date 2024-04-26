import { useState, useEffect } from 'react';
import axios from 'axios';
import './Receita.css';

const RecipePage = () => {
  const [recipe, setRecipe] = useState({
    titulo: '',
    ingredientes: [],
    instrucoes: []
  });

  useEffect(() => {
    axios.get('http://localhost:8080/receitas')
      .then((res) => {
        const { titulo, ingredientes, instrucoes } = res.data;
        setRecipe({ titulo, ingredientes, instrucoes });
      })
      .catch((err) => {
        console.error('Error fetching recipe:', err);
      });
  }, []);

  return (
    <div>
      <h1>{recipe.titulo}</h1>
      <h2>Ingredientes:</h2>
      <ul>
        {recipe.ingredientes.map((ingredientes, index) => (
          <li key={index}>{ingredientes}</li>
        ))}
      </ul>
      <h2>Modo de Preparo:</h2>
      <ol>
        {recipe.instrucoes.map((instrucoes, index) => (
          <li key={index}>{instrucoes}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipePage;