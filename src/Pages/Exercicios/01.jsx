import React from 'react';
import TemplateExercicio from './TemplateExercicio';
import Exercise1 from '../../exercises/exercise-1';
import Solution1 from '../../exercises/solved/exercise-1';

export default function ListaExercicio() {
  const [showSolution, setShowSolution] = React.useState(false);
  return (
    <div className="exercise__list">
      <TemplateExercicio key={1} position={1} showSolution={showSolution} title="Componente, Função, JSX">
        {showSolution ? <Solution1 /> : <Exercise1 />}
      </TemplateExercicio>
      <button className="sbtn  key-btn rounded-btn black-btn" type="button" onClick={() => setShowSolution((prev) => !prev)}>
        {showSolution ? 'Mostrar Exercício' : 'Mostrar Solução'}
      </button>
    </div>
  );
}
