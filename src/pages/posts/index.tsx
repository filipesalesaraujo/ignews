import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
            </strong>
            <p>
              Morbi ut volutpat urna, sit amet vulputate risus. Duis at cursus
              justo, nec faucibus mi. Curabitur mi ipsum, semper non
              pellentesque id, lacinia ac magna.
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
            </strong>
            <p>
              Morbi ut volutpat urna, sit amet vulputate risus. Duis at cursus
              justo, nec faucibus mi. Curabitur mi ipsum, semper non
              pellentesque id, lacinia ac magna.
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
            </strong>
            <p>
              Morbi ut volutpat urna, sit amet vulputate risus. Duis at cursus
              justo, nec faucibus mi. Curabitur mi ipsum, semper non
              pellentesque id, lacinia ac magna.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
