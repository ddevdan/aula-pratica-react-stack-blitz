import React from 'react';
import TemplateExercicio from './TemplateExercicio';
import Exercise6 from '../../exercises/exercise-6';
import Solution6 from '../../exercises/solved/exercise-6';

export default function ListaExercicio() {
  const [showSolution, setShowSolution] = React.useState(false);
  return (
    <div className="exercise__list">
      <TemplateExercicio key={6} position={6} showSolution={showSolution} title="Manipulando Arrays">
        {showSolution ? <Solution6 /> : <Exercise6 />}
      </TemplateExercicio>
      <button className="sbtn  key-btn rounded-btn black-btn" type="button" onClick={() => setShowSolution((prev) => !prev)}>
        {showSolution ? 'Mostrar Exercício' : 'Mostrar Solução'}
      </button>
    </div>
  );
}
