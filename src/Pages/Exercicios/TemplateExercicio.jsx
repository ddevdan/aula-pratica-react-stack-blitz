import React from 'react';
import { Link } from 'react-router-dom';

export default function TemplateExercicio({
  position, children, showSolution, title,
}) {
  const proximo = position + 1;
  const anterior = position - 1;
  const isLast = proximo > 7;
  const isFirst = anterior < 1;
  return (
    <>
      <h1>{title}</h1>
      <h2>
        {showSolution ? 'Solução ' : 'Exercício '}
        {position}
      </h2>
      <div className="template__solution">
        {children}
      </div>

      <div className="navigation">
        {!isFirst ? <Link to={`/exercises/${anterior}`}>ANTERIOR</Link> : <div />}
        {!isLast ? <Link to={`/exercises/${proximo}`}>PROXIMO</Link> : <div />}
      </div>
    </>
  );
}
