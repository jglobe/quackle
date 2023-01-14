import { Link as RouterLink } from "react-router-dom";

import styles from './link.module.css';

interface LinkType {
  to: string;
  children: string;
}

export function Link({to, children}: LinkType) {
  return(
    <RouterLink
      to={to}
      className={styles.link}
    >
      {children}
    </RouterLink>
  )
}
