let db;

const request = indexedDB.open("maBaseDeDonnees", 1);

request.onupgradeneeded = function(event) {
    db = event.target.result;
    const objectStore = db.createObjectStore("utilisateurs", { keyPath: "id", autoIncrement: true });
    objectStore.createIndex("nom", "nom", { unique: false });
    objectStore.createIndex("email", "email", { unique: true });
};

request.onsuccess = function(event) {
    db = event.target.result;
    alert('base de donnee ouvert avec succes',request.onsuccess)
};

request.onerror = function(event) {
    alert('erreur d ouverture de la base de donnee')
};
