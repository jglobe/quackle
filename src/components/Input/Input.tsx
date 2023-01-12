import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children: string;
}

export function Input({children, ...attr}: InputProps) {
  return (
    <input 
      {...attr}
      placeholder={children}
      className={styles.input_input}
    />
  )
}