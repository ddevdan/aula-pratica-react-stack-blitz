import React from 'react';
import TemplateExercicio from './TemplateExercicio';
import Exercise3 from '../../exercises/exercise-3';
import Solution3 from '../../exercises/solved/exercise-3';

export default function ListaExercicio() {
  const [showSolution, setShowSolution] = React.useState(false);
  return (
    <div className="exercise__list">
      <TemplateExercicio key={3} position={3} showSolution={showSolution} title="Eventos">
        {showSolution ? <Solution3 /> : <Exercise3 />}
      </TemplateExercicio>
      <button className="sbtn  key-btn rounded-btn black-btn" type="button" onClick={() => setShowSolution((prev) => !prev)}>
        {showSolution ? 'Mostrar Exercício' : 'Mostrar Solução'}
      </button>
    </div>
  );
}
