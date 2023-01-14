import cn from 'classnames';

import styles from './button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  priority: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button({priority, children, onClick, ...attr}: ButtonProps) {
  return (
    <button
      {...attr}
      className={cn({
        [styles[`${'button_button__' + priority}`]]: priority,
        [styles.button_button]: true
      })}
      onClick={onClick}
    >
      {children}
    </button>
  )
}