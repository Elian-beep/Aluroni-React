import styles from './PageDefault.module.scss';
import { Outlet } from 'react-router-dom';
import stylesTema from 'styles/Theme.module.scss';

export default function PageDefault({ children }: {children?: React.ReactNode}) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do código e da amassa
        </div>
      </header>
      <div className={stylesTema.container}>
        <Outlet />
        {children}
      </div>
    </>
  );
}