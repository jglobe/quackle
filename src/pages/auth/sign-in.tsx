import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Link } from '@/components/link';
import { Button } from '@/components/button';
import { Input } from '@/components/input';

import styles from './sign.module.css';

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
      <form
        className={styles.form}
        onSubmit={login}
      >
        <h2 className={styles.form__title}>
          Sign In
        </h2>
        <Input
          label='Login'
          placeholder='username'
          type='text'
          required
        />
        <Input
          label='Password'
          placeholder='******'
          type='password'
          required
        />

        <p className={styles.form__error}>
          Error example
        </p>
        <Button
          priority='primary'
          type='submit'
        >
          Sign In
        </Button>
        <Link to="/signup">
          Create new account
        </Link>
      </form>
    </div>
  )
}
