/**
 * Script à coller dans Extensions > Apps Script du Google Sheet de gestion.
 * Il reçoit les précommandes envoyées par le site web, les ajoute à l'onglet
 * "Preventes" et envoie un email de notification à l'adresse de précommande.
 *
 * Installation :
 * 1. Ouvrir le Google Sheet > Extensions > Apps Script.
 * 2. Coller ce fichier (remplacer le contenu de Code.gs).
 * 3. Déployer > Nouveau déploiement > type "Application Web".
 *      - Exécuter en tant que : Moi
 *      - Qui a accès : Tous les utilisateurs (Anyone)
 * 4. Copier l'URL du déploiement et la coller dans CONFIG.APPS_SCRIPT_URL
 *    du fichier index.html.
 * 5. Vérifier que l'onglet "Prevente" existe avec ces colonnes en ligne 1 :
 *    Horodatage | Nom | Email | Téléphone | Détail commande | Total (€) | Note | Statut
 */

const SPREADSHEET_ID = "1jp0kOLJOHfWfqg5cLhSsunFyHw63XtlI";
const PREVENTES_SHEET_NAME = "Prevente";
const NOTIFICATION_EMAIL = "gmoulard+precommandeJarre@gmail.com";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(PREVENTES_SHEET_NAME);

    if (!sheet) {
      throw new Error('Onglet "' + PREVENTES_SHEET_NAME + '" introuvable.');
    }

    sheet.appendRow([
      new Date(),
      data.nom || "",
      data.email || "",
      data.telephone || "",
      data.detail || "",
      data.total || "",
      data.note || "",
      "Nouvelle"
    ]);

    MailApp.sendEmail({
      to: NOTIFICATION_EMAIL,
      subject: "Nouvelle précommande jarres CFOC — " + (data.nom || "sans nom"),
      body:
        "Nouvelle précommande reçue via le site.\n\n" +
        "Nom : " + (data.nom || "") + "\n" +
        "Email : " + (data.email || "") + "\n" +
        "Téléphone : " + (data.telephone || "") + "\n\n" +
        "Détail de la commande :\n" + (data.detail || "") + "\n\n" +
        "Total estimé : " + (data.total || "") + " €\n" +
        "Note : " + (data.note || "—")
    });

    return ContentService
      .createTextOutput(JSON.stringify({ status: "ok" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/** Petit test manuel : Exécuter cette fonction depuis l'éditeur pour vérifier
 * l'écriture dans la feuille et l'envoi d'email, sans passer par le site. */
function testDoPost() {
  const fakeEvent = {
    postData: {
      contents: JSON.stringify({
        nom: "Test Dupont",
        email: "test@example.com",
        telephone: "0600000000",
        detail: "- 2 x Jarre Guangxi | Grand modèle / Bleu céladon | 59.00 € pièce | sous-total 118.00 €",
        total: "118.00",
        note: "Test depuis l'éditeur"
      })
    }
  };
  Logger.log(doPost(fakeEvent).getContent());
}
