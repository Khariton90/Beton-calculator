import { useAppSelector } from '../../../../hooks/hooks';
import './progress.scss';

export function Progress(): JSX.Element {
  const progress = useAppSelector(({dataReducer}) => dataReducer.progress);

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