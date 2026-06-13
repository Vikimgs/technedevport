import styles from './Container.module.css';
import { type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function Container({ children }: Props) {
  return <div className={styles.container}>
  {children}
  </div>;
}