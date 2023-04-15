import './progress.scss';
import { useAppSelector } from '../../hooks';
import { useEffect } from 'react';

export function Progress(): JSX.Element {
  const progress = useAppSelector(({dataReducer}) => dataReducer.progress);

  useEffect(() => {

  }, [progress])
  return (
    <div className="progress">
      <div className="progress-bar">
      <div className="progress-bar__active" style={{height: progress + '%'}}></div>
        <div className="dot" title="Тип бетона"></div>
        <div className="dot" title="Тип бетона"></div>
        <div className="dot" title="Тип бетона"></div>
        <div className="dot" title="Тип бетона"></div>
        <div className="dot" title="Тип бетона"></div>
      </div>
  </div>
  )
}