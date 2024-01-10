import React, { useState, useEffect } from 'react';
import Footer from "../Footer";

export default function Home() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    async function loadSections() {
      try {
        // Load the content from index.json
        const content = await import('../../../data/index.json');

        // Focus on the 'sections' part for dynamic component imports
        const importedSections = await Promise.all(
          content.sections.map(item => 
            import(`../${item.section}`).then(module => module.default)
          )
        );

        setSections(importedSections);
      } catch (error) {
        console.error('Failed to load sections:', error);
      }
    }

    loadSections();
  }, []);

  return (
    <>
      {sections.map((Section, index) => (
        <Section key={index} />
      ))}
      <Footer />
    </>
  );
}
