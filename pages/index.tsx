import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import SEO from '@/components/SEO';

const Home: NextPage = () => (
  <div className={styles.container}>
    <SEO
      title="Create Next App"
      content="This is a boilerplate template for Next.js App"
    />

    <main className={styles.main}>
      Main Content
    </main>

    <footer className={styles.footer}>
      Footer
    </footer>
  </div>
);

export default Home;
