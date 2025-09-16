export default function Home() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>
          Welcome to <span style={styles.highlight}>SRIT</span>
        </h1>
        <p style={styles.subtitle}>
          Srinivasa Ramanujan Institute of Technology, Anantapur
        </p>
      </header>

      <section style={styles.section}>
        <h2>Why Choose SRIT?</h2>
        <ul>
          <li>Experienced faculty and modern labs</li>
          <li>Industry-focused curriculum</li>
          <li>Strong placement support</li>
          <li>Vibrant campus life with clubs and events</li>
        </ul>
      </section>

      <footer style={styles.footer}>
        <p>© 2025 SRIT Anantapur | All Rights Reserved</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    lineHeight: "1.6",
    color: "#333",
  },
  header: {
    textAlign: "center",
    padding: "40px 20px",
    backgroundColor: "#f0f4ff",
    borderRadius: "12px",
    marginBottom: "30px",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "10px",
  },
  highlight: {
    color: "#0077ff",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#666",
  },
  section: {
    marginBottom: "30px",
  },
  footer: {
    textAlign: "center",
    padding: "15px",
    marginTop: "40px",
    backgroundColor: "#f8f8f8",
    borderRadius: "8px",
    fontSize: "0.9rem",
    color: "#777",
  },
};
