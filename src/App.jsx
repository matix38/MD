import { useState } from 'react';
import Header from './components/Header.jsx';
import HeroGallery from './components/HeroGallery.jsx';
import CatalogSection from './components/CatalogSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import FAQSection from './components/FAQSection.jsx';
import Footer from './components/Footer.jsx';
import CatalogModal from './components/CatalogModal.jsx';
import FloatingContact from './components/FloatingContact.jsx';
import { catalogSections } from './data/catalog.js';
import { gallerySlides } from './data/gallery.js';
import { faqItems } from './data/faq.js';

function App() {
  const [selectedModel, setSelectedModel] = useState(null);

  return (
    <div className="page-shell">
      <Header onNavigate={() => setSelectedModel(null)} />
      <main id="main-content">
        <HeroGallery slides={gallerySlides} />
        {catalogSections.map((section) => (
          <CatalogSection
            key={section.id}
            section={section}
            onSelectModel={setSelectedModel}
          />
        ))}
        <AboutSection />
        <FAQSection items={faqItems} />
      </main>
      <Footer />
      <FloatingContact />
      <CatalogModal model={selectedModel} onClose={() => setSelectedModel(null)} />
    </div>
  );
}

export default App;
