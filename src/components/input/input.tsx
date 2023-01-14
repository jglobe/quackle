import styles from './input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({label, ...attr}: InputProps) {
  return (
    <label className={styles.label}>
      {label}
      <input 
        {...attr}
        className={styles.label__input}
      />
    </label>
  )
}
