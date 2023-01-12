import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import styles from './Sign.module.css';

export function SignUp() {
  const navigate = useNavigate();

  useEffect(() => {
    if(document.cookie.split(';').some((item) => item.trim().startsWith('signedin='))) {
       navigate('/');
    };
  },[])

  function login():void {
    document.cookie = 'signedin=1';
  }

  return(
    <div className={styles.container}>
      <div className={styles.container_inner}>
        <form
          className={styles.form}
          onSubmit={login}
        >
          <h2 className={styles.form_title}>
            Sign Up
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
          <Input
            type='password'
            required
          >
            Confirm Password
          </Input>
          <Input
            type='email'
            required
          >
            Mail
          </Input>
          <p className={styles.form_error}>
            Error example
          </p>
          <Button
            priority='primary'
            type='submit'
          >
            Sign Up
          </Button>
          <a 
            href="/signin"
            className={styles.form_link}
          >
              Already have an accaunt
          </a>
        </form>
      </div>
    </div>
  )
}