import styles from './style.module.scss';

export default function index() {
  return (
    <div className={styles.footer}>
        <a>Instagram</a>
        <a>Dribble</a>
        <a href='https://www.linkedin.com/in/ghansham-gavande' style={{color: "white"}}>LinkedIn</a>
    </div>
  )
}
