import React from 'react';
import './Receita.css';

class RecipePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {
        title: 'Bolo de Chocolate',
        ingredients: [
          '2 xícaras de farinha de trigo',
          '1 xícara de açúcar',
          '1 xícara de cacau em pó',
          '1 xícara de leite',
          '1/2 xícara de óleo',
          '2 ovos',
          '1 colher de sopa de fermento em pó'
        ],
        instructions: [
          'Pré-aqueça o forno a 180°C.',
          'Em uma tigela grande, misture a farinha de trigo, o açúcar e o cacau em pó.',
          'Adicione o leite, o óleo e os ovos à mistura e mexa bem até ficar homogêneo.',
          'Incorpore o fermento em pó à massa.',
          'Despeje a massa em uma forma untada e leve ao forno por cerca de 40 minutos, ou até que um palito inserido no centro saia limpo.',
          'Deixe o bolo esfriar antes de desenformar e servir.'
        ]
      }
    };
  }

  render() {
    const { title, ingredients, instructions } = this.state.recipe;

    return (
      <div>
        <h1>{title}</h1>
        <h2>Ingredientes:</h2>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2>Modo de Preparo:</h2>
        <ol>
          {instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default RecipePage;