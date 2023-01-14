import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/button';

import styles from './home.module.css';

export function Home() {  
  const navigate = useNavigate();

  useEffect(() => {
    if(!document.cookie.split(';').some((item) => item.trim().startsWith('signedin='))) {
      navigate('/signin');
    };
  },[])

  function logout() {
    document.cookie = "signedin=;expires=" + new Date(0).toUTCString();
    navigate('/signin');
  }

  return(
    <div className={styles.page}>
      <div className={styles.page_container}>
        <h1 className={styles.page_title}>
          Homepage
        </h1>
        <Button
          type='button'
          priority='tertiary'
          onClick={logout}
        >
          SignOut
        </Button>
      </div>
    </div>
  )
}