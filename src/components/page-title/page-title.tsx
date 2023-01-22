import styles from './page-title.module.css';

interface PageTitleType {
  children: React.ReactNode;
}

export function PageTitle({children}: PageTitleType) {
  return(
    <h1 className={styles.title}>
      {children}
    </h1>
  )
}
