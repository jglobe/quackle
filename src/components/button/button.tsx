import cn from 'classnames';

import styles from './button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  priority: string; 
}

export function Button({priority, ...attr}: ButtonProps) {
  return (
    <button
      {...attr}
      className={cn({
        [styles['button_' + priority]]: priority,
        [styles.button]: true
      })}
    />
  )
}
