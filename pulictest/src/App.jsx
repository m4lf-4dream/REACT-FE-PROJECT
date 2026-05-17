import React from 'react';


function FeatureCard({ title, description, icon }) {
  return (
    <div style={styles.card}>
      <div style={styles.icon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// Komponen Utama Landing Page
export default function LandingPage() {
  const features = [
    {   title: 'Performa Cepat', description: 'Aplikasi web yang dioptimasi untuk kecepatan maksimal.' },
    {   title: 'Sistem Aman', description: 'Perlindungan data tingkat tinggi untuk kenyamanan Anda.' },
    {   title: 'Responsif', description: 'Tampilan yang rapi di HP, tablet, maupun laptop.' }
  ];

  return (
    <div style={styles.container}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>DevStudio</div>
        <div>
          <a href="#fitur" style={styles.navLink}>Fitur</a>
          <button style={styles.btnNav}>Kontak</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header style={styles.hero}>
        <h1 style={styles.title}>Bangun Aplikasi Impian Anda</h1>
        <p style={styles.subtitle}>
          Kami membantu transformasikan ide bisnis Anda menjadi produk digital yang bernilai tinggi.
        </p>
        <button style={styles.btnHero} onClick={() => alert('Terima kasih sudah tertarik!')}>
          Mulai Sekarang
        </button>
      </header>

      {/* Features Section */}
      <section id="fitur" style={styles.featuresSection}>
        <h2 style={styles.sectionTitle}>Mengapa Memilih Kami?</h2>
        <div style={styles.grid}>
          {features.map((item, index) => (
            <FeatureCard 
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>&copy; 2026 TESTING.</p>
      </footer>
    </div>
  );
}


const styles = {
  container: { fontFamily: 'Arial, sans-serif', color: '#333', margin: 0, padding: 0 },
  navbar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 5%', backgroundColor: '#fff', borderBottom: '1px solid #eee' },
  logo: { fontSize: '24px', fontWeight: 'bold', color: '#0070f3' },
  navLink: { marginRight: '20px', textDecoration: 'none', color: '#666' },
  btnNav: { padding: '8px 16px', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' },
  hero: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '100px 20px', textAlign: 'center', backgroundColor: '#f9f9f9' },
  title: { fontSize: '48px', marginBottom: '20px', color: '#111' },
  subtitle: { fontSize: '18px', color: '#666', maxWidth: '600px', marginBottom: '30px', lineHeight: '1.6' },
  btnHero: { padding: '14px 28px', fontSize: '16px', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' },
  featuresSection: { padding: '8px 5% 80px 5%', textAlign: 'center' },
  sectionTitle: { fontSize: '32px', marginBottom: '40px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' },
  card: { padding: '30px', border: '1px solid #eee', borderRadius: '8px', textAlign: 'left', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' },
  icon: { fontSize: '40px', marginBottom: '15px' },
  footer: { textAlign: 'center', padding: '30px', borderTop: '1px solid #eee', color: '#999', fontSize: '14px' }
};