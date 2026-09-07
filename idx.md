---
layout: null
title: "Pré-vente des Jarres CFOC — Croix-Rouge française, DT Yvelines"
description: "Prévente solidaire de jarres CFOC au profit des actions locales de la Croix-Rouge française — Délégation territoriale des Yvelines."
lang: fr
permalink: /operation-jarres/
<style>
:root {
  --red: #E2001A;
  --red-dark: #A8000F;
  --ink: #1E2224;
  --porcelain-blue: #2C5B70;
  --porcelain-blue-light: #DCE9EC;
  --cream: #FAF6EF;
  --paper: #FFFFFF;
  --line: #E4DDD0;
  --muted: #6B6459;
  --radius: 4px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  color: var(--ink);
  background: var(--cream);
  line-height: 1.55;
  font-family: "Public Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
h1, h2, h3 {
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 600;
  letter-spacing: -.01em;
}
a { color: inherit; }
img { max-width: 100%; display: block; }

.wrap {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--paper);
  border-bottom: 1px solid var(--line);
}
.site-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 14px 24px;
  max-width: 1120px;
  margin: 0 auto;
}
.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 600;
  font-size: 1.05rem;
}
.cross {
  width: 26px;
  height: 26px;
  position: relative;
  flex: none;
}
.cross::before,
.cross::after {
  content: "";
  position: absolute;
  background: var(--red);
}
.cross::before { left: 40%; top: 0; width: 20%; height: 100%; }
.cross::after { top: 40%; left: 0; height: 20%; width: 100%; }
.brand small {
  display: block;
  font-family: inherit;
  font-weight: 500;
  color: var(--muted);
  font-size: .68rem;
  letter-spacing: .03em;
  text-transform: uppercase;
}
.site-links {
  display: flex;
  gap: 28px;
  font-size: .92rem;
  font-weight: 500;
}
.site-links a { text-decoration: none; opacity: .75; }
.site-links a:hover { opacity: 1; }
.selection {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--ink);
  color: #fff;
  border-radius: 999px;
  padding: 9px 18px;
  font-weight: 600;
  font-size: .85rem;
  text-decoration: none;
}
.selection span {
  background: var(--red);
  border-radius: 999px;
  padding: 1px 8px;
  font-size: .75rem;
}

.hero {
  background: linear-gradient(180deg, #fff 0%, var(--cream) 100%);
  border-bottom: 1px solid var(--line);
}
.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr .9fr;
  gap: 56px;
  align-items: center;
  padding: 64px 24px 48px;
  max-width: 1120px;
  margin: 0 auto;
}
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--porcelain-blue-light);
  color: var(--porcelain-blue);
  font-size: .75rem;
  font-weight: 700;
  letter-spacing: .06em;
  text-transform: uppercase;
  padding: 6px 12px;
  border-radius: 999px;
  margin-bottom: 18px;
}
.hero h1 {
  font-size: clamp(2.1rem, 4vw, 3.2rem);
  line-height: 1.06;
  margin: 0;
}
.hero h1 em { font-style: normal; color: var(--red); }
.lead {
  margin-top: 18px;
  font-size: 1.08rem;
  color: var(--muted);
  max-width: 46ch;
}
.hero-facts {
  display: flex;
  gap: 28px;
  margin-top: 32px;
  flex-wrap: wrap;
}
.fact strong {
  display: block;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.3rem;
}
.fact span { font-size: .8rem; color: var(--muted); }
.hero-cta {
  margin-top: 34px;
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 24px;
  border-radius: 999px;
  font-weight: 600;
  font-size: .92rem;
  text-decoration: none;
  border: 1.5px solid transparent;
}
.btn-primary { background: var(--red); color: #fff; }
.btn-primary:hover { background: var(--red-dark); }
.btn-ghost { border-color: var(--ink); color: var(--ink); }
.hero-image {
  width: 100%;
  max-width: 320px;
  margin: auto;
  border-radius: 8px;
}

.steps {
  padding: 56px 24px;
  background: var(--paper);
}
.steps h2, .catalog h2, .info h2, .order h2 {
  margin-top: 0;
}
.section-intro {
  text-align: center;
  color: var(--muted);
  margin-bottom: 38px;
}
.step-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  max-width: 1000px;
  margin: 0 auto;
}
.step {
  border-top: 2px solid var(--red);
  padding-top: 14px;
}
.step .number {
  font-family: Georgia, "Times New Roman", serif;
  color: var(--red);
  font-size: .85rem;
  font-weight: 600;
}
.step h3 { font-size: 1.05rem; margin: 6px 0; }
.step p { color: var(--muted); font-size: .92rem; margin-top: 6px; }

.catalog { padding: 64px 24px; }
.catalog-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 28px;
}
.catalog-head p { color: var(--muted); margin: 6px 0 0; }
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 22px;
}
.product-card {
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.product-card img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  background: var(--porcelain-blue-light);
}
.product-body {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
}
.product-tag {
  font-size: .7rem;
  text-transform: uppercase;
  letter-spacing: .05em;
  color: var(--porcelain-blue);
  font-weight: 700;
}
.product-body h3 { font-size: 1.05rem; margin: 0; }
.product-meta { font-size: .82rem; color: var(--muted); }
.product-price {
  margin-top: auto;
  padding-top: 10px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.15rem;
}
.stock {
  font-size: .78rem;
  color: var(--muted);
}
.note {
  margin-top: 24px;
  color: var(--muted);
  font-size: .9rem;
}

.info {
  padding: 56px 24px;
  background: var(--porcelain-blue);
  color: #fff;
}
.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
  align-items: start;
}
.info h2 { color: #fff; }
.info-list {
  list-style: none;
  padding: 0;
  margin: 18px 0 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.info-list li {
  display: flex;
  gap: 12px;
  font-size: .95rem;
}
.info-list b { display: block; }
.info-list .dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #fff;
  margin-top: 7px;
  flex: none;
}
.map {
  width: 100%;
  min-height: 280px;
  border: 0;
  border-radius: var(--radius);
}

.order {
  padding: 64px 24px;
  background: var(--paper);
}
.order-wrap { max-width: 760px; margin: 0 auto; }
.order-summary {
  margin-top: 32px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 18px 20px;
  background: var(--cream);
}
.order-summary p { margin: 0; }
.order-form {
  margin-top: 26px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.order-form .full { grid-column: 1 / -1; }
.order-form label {
  display: block;
  font-size: .82rem;
  font-weight: 600;
  margin-bottom: 6px;
}
.order-form input,
.order-form textarea {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 11px 12px;
  font: inherit;
  background: #fff;
}
.order-form textarea {
  resize: vertical;
  min-height: 100px;
}
.order-form .submit-row {
  grid-column: 1 / -1;
  margin-top: 6px;
}
.help {
  margin-top: 18px;
  color: var(--muted);
  font-size: .85rem;
}

footer {
  padding: 34px 24px;
  text-align: center;
  font-size: .82rem;
  background: var(--ink);
  color: #cfcac0;
}
footer strong { color: #fff; }

@media (max-width: 820px) {
  .hero-grid,
  .info-grid { grid-template-columns: 1fr; }
  .hero-grid { padding-top: 36px; }
  .hero-image { order: -1; max-width: 220px; }
  .step-grid { grid-template-columns: 1fr; }
  .order-form { grid-template-columns: 1fr; }
  .order-form .full,
  .order-form .submit-row { grid-column: 1; }
  .site-links { display: none; }
}
<header class="site-header">
  <div class="site-nav">
    <div class="brand">
      <span class="cross" aria-hidden="true"></span>
      <div>
        Croix-Rouge française
        <small>Délégation territoriale des Yvelines</small>
      </div>
    </div>
    <nav class="site-links" aria-label="Navigation principale">
      <a href="#catalogue">Catalogue</a>
      <a href="#infos">Infos pratiques</a>
      <a href="#commande">Précommander</a>
    </nav>

    <a class="selection" href="#commande" aria-label="Accéder à la précommande">
      🧺 Ma sélection <span>0</span>
    </a>
</div>
</header>
<main>
<section class="hero" aria-labelledby="titre">
  <div class="hero-grid">
    <div>
      <span class="eyebrow">Vente solidaire · CFOC</span>
      <h1 id="titre">Précommandez vos <em>jarres CFOC</em>,<br>soutenez la Croix-Rouge des Yvelines</h1>

      <p class="lead">
        Une sélection de jarres en grès et porcelaine CFOC — tailles, poids et coloris variés —
        proposée en pré-vente exclusive au profit des actions locales de la Croix-Rouge française.
        Réservez en ligne, retirez et réglez sur place.
      </p>

      <div class="hero-facts">
        <div class="fact">
          <strong>19 &amp; 20 sept. 2026</strong>
          <span>Jours de vente et de retrait</span>
        </div>
        <div class="fact">
          <strong>Guyancourt (78)</strong>
          <span>DT Yvelines · 2 rue Galilée</span>
        </div>
        <div class="fact">
          <strong>100%</strong>
          <span>reversés aux actions locales</span>
        </div>
      </div>

      <div class="hero-cta">
        <a href="#catalogue" class="btn btn-primary">Voir le catalogue</a>
        <a href="#infos" class="btn btn-ghost">Infos pratiques</a>
      </div>
    </div>

    <div>
      <img class="hero-image" src="jarre.jpg" alt="Jarre CFOC">
    </div>
</div>
</section>
<section class="steps" aria-labelledby="participer">
  <div class="wrap">
    <h2 id="participer">Comment participer</h2>
    <p class="section-intro">Trois étapes simples entre votre réservation et le retrait de vos jarres.</p>
    <div class="step-grid">
      <article class="step">
        <div class="number">Étape 1</div>
        <h3>Choisissez vos jarres</h3>
        <p>Parcourez le catalogue CFOC : taille, poids et couleur sont précisés pour chaque modèle.</p>
      </article>

      <article class="step">
        <div class="number">Étape 2</div>
        <h3>Précommandez en ligne</h3>
        <p>Renseignez vos coordonnées, votre précommande est transmise à l'équipe organisatrice.</p>
      </article>

      <article class="step">
        <div class="number">Étape 3</div>
        <h3>Retirez &amp; réglez sur place</h3>
        <p>Rendez-vous les 19 ou 20 septembre 2026 à la DT Yvelines pour récupérer vos jarres et régler votre commande.</p>
      </article>
    </div>
</div>
</section>
<section class="catalog" id="catalogue" aria-labelledby="catalogue-title">
  <div class="wrap">
    <div class="catalog-head">
      <div>
        <h2 id="catalogue-title">Catalogue des jarres CFOC</h2>
        <p>Toutes les jarres sont de la marque CFOC. Stock limité et non garanti avant confirmation.</p>
      </div>
    </div>
    <div class="product-grid">

      <article class="product-card">
        <img src="jarre-vert.jpg" alt="Jarre CFOC verte, 90 × 50 cm">
        <div class="product-body">
          <span class="product-tag">CFOC · J-01</span>
          <h3>Jarre CFOC</h3>
          <div class="product-meta">H90 × L50 cm · 45 kg · Vert</div>
          <div class="product-price">212,50 €</div>
          <div class="stock">Stock indiqué : 1</div>
        </div>
      </article>

      <article class="product-card">
        <img src="jarre-vert-ecru.jpg" alt="Jarre CFOC écrue, 65 × 50 cm">
        <div class="product-body">
          <span class="product-tag">CFOC · J-02</span>
          <h3>Jarre CFOC</h3>
          <div class="product-meta">H65 × L50 cm · 30 kg · Ecru</div>
          <div class="product-price">142,50 €</div>
          <div class="stock">Stock indiqué : 7</div>
        </div>
      </article>

      <article class="product-card">
        <img src="jarre-bordeaux.jpg" alt="Jarre Bordeaux, 99 × 43 cm">
        <div class="product-body">
          <span class="product-tag">CFOC · J-03</span>
          <h3>Jarre Bordeaux</h3>
          <div class="product-meta">H99 × L43 cm · 50 kg · Bordeaux</div>
          <div class="product-price">212,50 €</div>
          <div class="stock">Stock indiqué : 4</div>
        </div>
      </article>

      <article class="product-card">
        <img src="jarre-marron.jpg" alt="Pot Marron, 122 × 35 cm">
        <div class="product-body">
          <span class="product-tag">CFOC · J-04</span>
          <h3>Pot Marron</h3>
          <div class="product-meta">H122 × L35 cm · 65 kg · Marron</div>
          <div class="product-price">325,00 €</div>
          <div class="stock">Stock indiqué : 1</div>
        </div>
      </article>

      <article class="product-card">
        <img src="jarre-marron.jpg" alt="Pot Marron, 70 × 57 cm">
        <div class="product-body">
          <span class="product-tag">CFOC · J-05</span>
          <h3>Pot Marron</h3>
          <div class="product-meta">H70 × L57 cm · 35 kg · Marron</div>
          <div class="product-price">142,50 €</div>
          <div class="stock">Stock indiqué : 1</div>
        </div>
      </article>

      <article class="product-card">
        <img src="jarre-marron.jpg" alt="Pot Marron, 70 × 46 cm">
        <div class="product-body">
          <span class="product-tag">CFOC · J-06</span>
          <h3>Pot Marron</h3>
          <div class="product-meta">H70 × L46 cm · 35 kg · Marron</div>
          <div class="product-price">142,50 €</div>
          <div class="stock">Stock indiqué : 6</div>
        </div>
      </article>

      <article class="product-card">
        <img src="jarre-marron.jpg" alt="Pot Marron, 62 × 50 cm">
        <div class="product-body">
          <span class="product-tag">CFOC · J-07</span>
          <h3>Pot Marron</h3>
          <div class="product-meta">H62 × L50 cm · 30 kg · Marron</div>
          <div class="product-price">125,00 €</div>
          <div class="stock">Stock indiqué : 1</div>
        </div>
      </article>

      <article class="product-card">
        <img src="jarre-marron.jpg" alt="Pot Marron, 44 × 21 cm">
        <div class="product-body">
          <span class="product-tag">CFOC · J-08</span>
          <h3>Pot Marron</h3>
          <div class="product-meta">H44 × L21 cm · 20 kg · Marron</div>
          <div class="product-price">100,00 €</div>
          <div class="stock">Stock indiqué : 1</div>
        </div>
      </article>

      <article class="product-card">
        <img src="jarre-marron.jpg" alt="Pot Marron, 40 × 37 cm">
        <div class="product-body">
          <span class="product-tag">CFOC · J-09</span>
          <h3>Pot Marron</h3>
          <div class="product-meta">H40 × L37 cm · 20 kg · Marron</div>
          <div class="product-price">100,00 €</div>
          <div class="stock">Stock indiqué : 1</div>
        </div>
      </article>

      <article class="product-card">
        <img src="jarre-vert-ecru.jpg" alt="Pot Vert et Ecru, 40 × 48 cm">
        <div class="product-body">
          <span class="product-tag">CFOC · J-10</span>
          <h3>Pot Vert et Ecru</h3>
          <div class="product-meta">H40 × L48 cm · 20 kg · Vert et Ecru</div>
          <div class="product-price">100,00 €</div>
          <div class="stock">Stock indiqué : 1</div>
        </div>
      </article>

      <article class="product-card">
        <img src="jarre-vert-ecru.jpg" alt="Pot Vert et Ecru, 33 × 35 cm">
        <div class="product-body">
          <span class="product-tag">CFOC · J-11</span>
          <h3>Pot Vert et Ecru</h3>
          <div class="product-meta">H33 × L35 cm · 15 kg · Vert et Ecru</div>
          <div class="product-price">75,00 €</div>
          <div class="stock">Stock indiqué : 1</div>
        </div>
      </article>

      <article class="product-card">
        <img src="jarre-vert.jpg" alt="Pot Vert, 38 × 40 cm">
        <div class="product-body">
          <span class="product-tag">CFOC · J-12</span>
          <h3>Pot Vert</h3>
          <div class="product-meta">H38 × L40 cm · 20 kg · Vert</div>
          <div class="product-price">75,00 €</div>
          <div class="stock">Stock indiqué : 1</div>
        </div>
      </article>

      <article class="product-card">
        <img src="jarre-noir.jpg" alt="Pot Noir, 120 × 55 cm">
        <div class="product-body">
          <span class="product-tag">CFOC · J-13</span>
          <h3>Pot Noir</h3>
          <div class="product-meta">H120 × L55 cm · 65 kg · Noir</div>
          <div class="product-price">325,00 €</div>
          <div class="stock">Stock indiqué : 1</div>
        </div>
      </article>

      <article class="product-card">
        <img src="jarre-noir.jpg" alt="Pot Noir, 95 × 50 cm">
        <div class="product-body">
          <span class="product-tag">CFOC · J-14</span>
          <h3>Pot Noir</h3>
          <div class="product-meta">H95 × L50 cm · 50 kg · Noir</div>
          <div class="product-price">212,50 €</div>
          <div class="stock">Stock indiqué : 1</div>
        </div>
      </article>

      <article class="product-card">
        <img src="jarre-bleu.jpg" alt="Pot Bleu, 122 × 35 cm">
        <div class="product-body">
          <span class="product-tag">CFOC · J-15</span>
          <h3>Pot Bleu</h3>
          <div class="product-meta">H122 × L35 cm · 65 kg · Bleu</div>
          <div class="product-price">325,00 €</div>
          <div class="stock">Stock indiqué : 2</div>
        </div>
      </article>

    </div>

    <p class="note">
      Les quantités et disponibilités correspondent au catalogue actuellement publié.
      Le stock est limité et non garanti avant confirmation de la précommande.
    </p>
</div>
</section>
<section class="info" id="infos" aria-labelledby="infos-title">
  <div class="info-grid">
    <div>
      <h2 id="infos-title">Infos pratiques</h2>
      <ul class="info-list">
        <li>
          <span class="dot" aria-hidden="true"></span>
          <div><b>Dates de vente et de retrait</b>Samedi 19 et dimanche 20 septembre 2026</div>
        </li>
        <li>
          <span class="dot" aria-hidden="true"></span>
          <div><b>Lieu</b>Croix-Rouge française — DT Yvelines<br>2 rue Galilée, 78280 Guyancourt</div>
        </li>
        <li>
          <span class="dot" aria-hidden="true"></span>
          <div><b>Retrait &amp; règlement</b>Sur place, aux dates de vente. Merci de vous munir de votre email de confirmation.</div>
        </li>
        <li>
          <span class="dot" aria-hidden="true"></span>
          <div>
            <b>Contact précommandes</b>
            <a href="mailto:gmoulard+precommandeJarre@gmail.com">gmoulard+precommandeJarre@gmail.com</a>
          </div>
        </li>
      </ul>
    </div>
    <div>
      <iframe
        class="map"
        title="Carte — Croix-Rouge française, Délégation territoriale des Yvelines"
        src="https://www.google.com/maps?q=2+rue+Galil%C3%A9e,+78280+Guyancourt&amp;output=embed"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
</div>
</section>
<section class="order" id="commande" aria-labelledby="commande-title">
  <div class="order-wrap">
    <h2 id="commande-title">Ma précommande</h2>
    <p class="section-intro">
      Vérifiez votre sélection puis renseignez vos coordonnées pour transmettre votre précommande.
    </p>
    <div class="order-summary">
      <p>
        La version Markdown conserve le catalogue, les informations pratiques et les liens de contact
        de la page originale. Pour passer une précommande, utilisez le bouton ci-dessous afin de préparer
        votre message à l'équipe organisatrice.
      </p>
    </div>

    <form class="order-form" action="mailto:gmoulard+precommandeJarre@gmail.com" method="post" enctype="text/plain">
      <div>
        <label for="nom">Nom et prénom</label>
        <input id="nom" name="Nom et prénom" type="text" required>
      </div>

      <div>
        <label for="telephone">Téléphone</label>
        <input id="telephone" name="Téléphone" type="tel" required>
      </div>

      <div class="full">
        <label for="email">Email</label>
        <input id="email" name="Email" type="email" required>
      </div>

      <div class="full">
        <label for="creneau">Créneau de retrait souhaité</label>
        <select id="creneau" name="Créneau de retrait souhaité">
          <option value="Samedi matin">Samedi matin</option>
          <option value="Samedi après-midi">Samedi après-midi</option>
          <option value="Dimanche matin">Dimanche matin</option>
          <option value="Dimanche après-midi">Dimanche après-midi</option>
        </select>
      </div>

      <div class="full">
        <label for="message">Message (optionnel)</label>
        <textarea id="message" name="Message" placeholder="Indiquez les références et quantités souhaitées, ainsi que toute précision utile."></textarea>
      </div>

      <div class="submit-row">
        <button class="btn btn-primary" type="submit">📧 Préparer ma précommande</button>
      </div>
    </form>

    <p class="help">
      Si votre navigateur ne permet pas l'envoi direct par email, écrivez à
      <a href="mailto:gmoulard+precommandeJarre@gmail.com">gmoulard+precommandeJarre@gmail.com</a>
      en indiquant les références des jarres, les quantités, vos coordonnées et votre créneau de retrait.
    </p>
</div>
</section>
</main>
<footer>
  <div class="wrap">
    <p>
      <strong>Croix-Rouge française — Délégation territoriale des Yvelines</strong><br>
      2 rue Galilée, 78280 Guyancourt — Vente au profit des actions locales de la Croix-Rouge
    </p>
    <p>Jarres de la marque CFOC — pré-vente du 19 au 20 septembre 2026</p>
    <p>Version Markdown adaptée de la page originale.</p>
  </div>
</footer>
