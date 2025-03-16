<template>
    <GradientBackground>
      <AppHeader />
      
      <section class="about-section">
        <div class="container">
          <SectionTitle title="O mně" />
          
          <div class="about-content">
            <div class="bio">
              <h2>Zdravím, jmenuji se Denisa</h2>
              <p>
                Jsem UX/UI designer se zaměřením na vytváření intuitivních a 
                esteticky příjemných digitálních zážitků. Moje práce zahrnuje 
                mobilní aplikace, webové stránky a dashboardy s důrazem na 
                uživatelský zážitek a přístupnost.
              </p>
              
              <h3>Moje dovednosti</h3>
              <ul class="skills-list">
                <li>UX Research</li>
                <li>Wireframing &amp; Prototyping</li>
                <li>UI Design</li>
                <li>Design Systems</li>
                <li>Figma &amp; Adobe Creative Suite</li>
                <li>Základy HTML/CSS</li>
              </ul>
              
              <div class="contact-info">
                <h3>Kontakt</h3>
                <p>lysakova.denisa98@gmail.com </p>
                <div class="social-links">
                  <!-- Social links would go here -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </GradientBackground>
  </template>
  
  <script setup>
  // Import components handled by auto-imports in Nuxt 3
  </script>
  
  <style scoped>
  .about-section {
    padding: 2rem 0 5rem;
    min-height: calc(100vh - 100px);
  }
  
  .about-content {
    display: flex;
    justify-content: center;
  }
  
  .bio {
    max-width: 700px;
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    border-radius: 1rem;
    padding: 2.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  }
  
  h2 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 1.5rem;
  }
  
  h3 {
    font-size: 1.3rem;
    color: #333;
    margin: 2rem 0 1rem;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #444;
    margin-bottom: 1rem;
  }
  
  .skills-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 0.5rem;
    list-style-type: none;
    margin: 1rem 0 2rem;
  }
  
  .skills-list li {
    background-color: rgba(209, 112, 137, 0.1);
    color: #d17089;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    font-size: 0.9rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .contact-info {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
  
  .social-links {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }
  </style>