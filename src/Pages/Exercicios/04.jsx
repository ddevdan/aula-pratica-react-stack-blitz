import React from 'react';
import TemplateExercicio from './TemplateExercicio';
import Exercise4 from '../../exercises/exercise-4';
import Solution4 from '../../exercises/solved/exercise-4';

export default function ListaExercicio() {
  const [showSolution, setShowSolution] = React.useState(false);
  return (
    <div className="exercise__list">
      <TemplateExercicio key={4} position={4} showSolution={showSolution} title="State">
        {showSolution ? <Solution4 /> : <Exercise4 />}
      </TemplateExercicio>
      <button className="sbtn  key-btn rounded-btn black-btn" type="button" onClick={() => setShowSolution((prev) => !prev)}>
        {showSolution ? 'Mostrar Exercício' : 'Mostrar Solução'}
      </button>
    </div>
  );
}
