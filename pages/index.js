import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Cooks from '../components/Cooks'; // Make sure path is correct
import data from '../data/data.json'; // Verify this path matches your file location
import Script from 'next/script';
import Link from 'next/link';
export async function getStaticProps() {
  return {
    props: {
      navbarData: data.navbar,
      heroData: data.hero,
      aboutData: data.about,
      servicesData: data.services,
      menuData: data.menu,
      footerData: data.footer,
      cooksData: data.cooks // Ensure this matches your JSON structure
    },
  };
}

export default function Home({ 
  navbarData, 
  heroData, 
  aboutData, 
  servicesData, 
  menuData, 
  footerData,
  cooksData 
}) {
  return (
    <>
      <Head>
        <title>Food Court - Premium Dining Experience</title>
        <meta name="description" content="Authentic cuisine crafted with passion since 1987" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        <Link 
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Playfair+Display:wght@400;700&family=Satisfy&display=swap" 
          rel="stylesheet" 
        />
      </Head>

      <Navbar data={navbarData} />
      <Hero data={heroData} />
      <About data={aboutData} />
      <Services data={servicesData} />
      <Menu data={menuData} />
      <Cooks data={cooksData} /> {/* Added cooks section */}
      <Footer data={footerData} />
      
      <Script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" 
        strategy="afterInteractive" 
      />
    </>
  );
}