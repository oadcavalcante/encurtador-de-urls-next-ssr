import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={`container-fluid bg-transparent shadow text-white py-3 ${styles.header}`}>
      <div className="row align-items-center">
        <div className={`col-md-4 ${styles.gladioNomeFab}`}>
          <div className={styles.logos}>
            <img src="/images/logo-dti.png" alt="Logo DTI" className={styles.logoImage} />
            <img src="/images/gladio-cinza1.png" alt="Gládio Cinza" className={styles.logoImage} />
            <img src="/images/logo-ccabr.png" alt="Logo CCABR" className={styles.logoImage} />
          </div>
        </div>
        <div className="col-md-8 text-center">
          <h1>FORÇA AÉREA BRASILEIRA</h1>
        </div>
      </div>
    </header>
  );
}
