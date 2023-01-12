import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import styles from './Sign.module.css';

export function SignIn() {
  const navigate = useNavigate();

  useEffect(() => {
    if(document.cookie.split(';').some((item) => item.trim().startsWith('signedin='))) {
       navigate('/');
    };
  }, []);

  function login() {
    document.cookie = 'signedin=1';
    navigate('/');
  }

  return(
    <div className={styles.container}>
      <div className={styles.container_inner}>
        <form
          className={styles.form}
          onSubmit={login}
        >
          <h2 className={styles.form_title}>
            Sign In
          </h2>
          <Input
            type='text'
            required
          >
            Login
          </Input>
          <Input
            type='password'
            required
          >
            Password
          </Input>
          <p className={styles.form_error}>
            Error example
          </p>
          <Button
            priority='primary'
            type='submit'
          >
            Sign In
          </Button>
          <a 
            href="/signup"
            className={styles.form_link}
          >
              Create new accaunt
          </a>
        </form>
      </div>
    </div>
  )
}