document.addEventListener('DOMContentLoaded', function () {
  var grid = document.getElementById('product-grid');

  fetch('jarres.json?v=' + Date.now(), { cache: 'no-store' })
    .then(function (res) { return res.json(); })
    .then(function (jarres) {
      grid.innerHTML = jarres.map(function (j) {
        return (
          '<article class="product-card" data-jarre-status="' + j.statut + '">' +
            '<img src="' + j.image + '" alt="' + j.nom + '">' +
            '<div class="product-body">' +
              '<span class="product-tag">' + j.ref + '</span>' +
              '<h3>' + j.nom + '</h3>' +
              '<div class="product-meta">' + j.dimensions + '</div>' +
              '<div class="product-price">' + j.prix + '</div>' +
              '<div class="stock">' + j.statut + '</div>' +
            '</div>' +
          '</article>'
        );
      }).join('');

      var cards = Array.from(grid.querySelectorAll('.product-card'));
      var statuts = Array.from(new Set(cards.map(function (c) { return c.dataset.jarreStatus; })));

      var wrapper = document.createElement('div');
      wrapper.style.cssText = 'display:flex;flex-wrap:wrap;gap:1em;align-items:center;margin:1em 0;';

      var titre = document.createElement('span');
      titre.textContent = 'Filtrer par statut : ';
      titre.style.fontWeight = 'bold';
      wrapper.appendChild(titre);

      var checkboxes = {};
      statuts.forEach(function (statut) {
        var label = document.createElement('label');
        label.style.cssText = 'display:inline-flex;align-items:center;gap:.4em;cursor:pointer;';

        var cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.checked = true;
        cb.dataset.statut = statut;

        label.appendChild(cb);
        label.appendChild(document.createTextNode(statut));
        wrapper.appendChild(label);
        checkboxes[statut] = cb;
      });

      grid.parentElement.insertBefore(wrapper, grid);

      function appliquerFiltre() {
        var actifs = statuts.filter(function (s) { return checkboxes[s].checked; });
        cards.forEach(function (card) {
          card.style.display = actifs.indexOf(card.dataset.jarreStatus) !== -1 ? '' : 'none';
        });
      }

      Object.values(checkboxes).forEach(function (cb) {
        cb.addEventListener('change', appliquerFiltre);
      });
    })
    .catch(function (err) {
      console.error('Erreur de chargement de jarres.json :', err);
    });
});
