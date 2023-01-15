import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@components/button';
import { PageTitle } from '@components/page-title';

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
      <div className={styles.page__content}>
        <PageTitle>
          Homepage
        </PageTitle>
        <Button
          type='button'
          priority='primary'
          onClick={logout}
        >
          Sign Out
        </Button>
      </div>
    </div>
  )
}
