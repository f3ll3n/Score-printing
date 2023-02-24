import Button from '@mui/material/Button';
import styles from './Btn.module.scss';
export default function MyApp() {
  return (
    <div>
      <Button variant="contained" className={styles.root}>Hello World</Button>
    </div>
  );
}