import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from './styles/style.module.css';
import Link from 'next/link'
import { useRouter } from 'next/router';
import AppData from './Home/data';

const HomePage = () => {
    const router = useRouter();
    function handleClick() {
      router.push('/Data/data');
    }

  return (
    <div className={styles.maindiv}>
      <AppData />
    </div>
  );
};

export default HomePage;
