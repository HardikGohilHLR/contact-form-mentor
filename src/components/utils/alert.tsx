// Alert
import { useEffect } from 'react';
import clsx from 'clsx';

type Props = {
  title: string,
  type: string,
  close: () => void,
}

export const Alert = ({
  title,
  type,
  close,
}: Props) => {

  useEffect(() => {
    if (title) {
      setTimeout(() => {
        close();
      }, 2000);
    }
  }, [title])
  
  return (
    <div className={clsx('alert', type)}>
      <div className="alert-header">
        <img src="/images/icon-success-check.svg" alt="Success" />
        <h5>
          {type === 'success' ? 'Message Sent!' : 'Message Failed!'}
        </h5>
      </div>

      <p>{title}</p>
    </div>
  )
}
