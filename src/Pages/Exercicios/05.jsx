import React from 'react';
import TemplateExercicio from './TemplateExercicio';
import Exercise5 from '../../exercises/exercise-5';
import Solution5 from '../../exercises/solved/exercise-5';

export default function ListaExercicio() {
  const [showSolution, setShowSolution] = React.useState(false);
  return (
    <div className="exercise__list">
      <TemplateExercicio key={5} position={5} showSolution={showSolution} title="Renderização Condicional">
        {showSolution ? <Solution5 /> : <Exercise5 />}
      </TemplateExercicio>
      <button className="sbtn  key-btn rounded-btn black-btn" type="button" onClick={() => setShowSolution((prev) => !prev)}>
        {showSolution ? 'Mostrar Exercício' : 'Mostrar Solução'}
      </button>
    </div>
  );
}
