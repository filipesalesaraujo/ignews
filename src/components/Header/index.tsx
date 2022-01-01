import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <a className={styles.active} href="javascript:void(0)">Home</a>
          <a href="javascript:void(0)">Posts</a>
        </nav>
      </div>
    </header>
  );
}
