import styles from './input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({label, ...attr}: InputProps) {
  return (
    <div className={styles.input}>
      <label
        className={styles.input__label}
        htmlFor={'input__' + label}
      >
        {label}
      </label>
      <input 
        {...attr}
        id={'input__' + label}
        className={styles.input__input}
      />
    </div>
  )
}
