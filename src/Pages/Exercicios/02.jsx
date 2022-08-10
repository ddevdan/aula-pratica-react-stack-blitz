import React from 'react';
import TemplateExercicio from './TemplateExercicio';
import Exercise2 from '../../exercises/exercise-2';
import Solution2 from '../../exercises/solved/exercise-2';


export default function ListaExercicio() {
  const [showSolution, setShowSolution] = React.useState(false);
  return (
    <div className="exercise__list">
      <TemplateExercicio key={2} position={2} showSolution={showSolution} title="Props">
        {showSolution ? <Solution2 /> : <Exercise2 />}
      </TemplateExercicio>
      <button className="sbtn  key-btn rounded-btn black-btn" type="button" onClick={() => setShowSolution((prev) => !prev)}>
        {showSolution ? 'Mostrar Exercício' : 'Mostrar Solução'}
      </button>
    </div>
  );
}
