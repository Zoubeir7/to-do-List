document.addEventListener('DOMContentLoaded', function () {
    const formulaireTache = document.getElementById('formulaireTache');
    const listeTaches = document.getElementById('listeTaches');

    formulaireTache.addEventListener('submit', function (event) {
        event.preventDefault();

        // Récupérer les valeurs des champs du formulaire
        const titre = document.getElementById('titre').value;
        const description = document.getElementById('description').value;
        const dateLimite = document.getElementById('dateLimite').value;
        const etat = document.getElementById('etat').value;
        const priorite = document.getElementById('priorite').value;

        // Créer un nouvel élément de tâche
        const elementTache = document.createElement('li');
        elementTache.innerHTML = `
            <p><strong>Titre :</strong> ${titre}</p>
            <p><strong>Description :</strong> ${description}</p>
            <p><strong>Date :</strong> ${dateLimite}</p>
            <p><strong>État :</strong> ${etat}</p>
            <p><strong>Priorité :</strong> ${priorite}</p>
            <button class="supprimer">Supprimer</button>
            <button class="modifier">Modifier</button>
        `;

        // Ajouter la tâche à la liste des tâches
        listeTaches.appendChild(elementTache);

        // Effacer les champs du formulaire après soumission
        formulaireTache.reset();

        // Ajout des écouteurs d'événements pour les boutons de chaque tâche
        const boutonSupprimer = elementTache.querySelector('.supprimer');
        const boutonModifier = elementTache.querySelector('.modifier');

        // Suppression de la tâche
        boutonSupprimer.addEventListener('click', function () {
            elementTache.remove();
        });

        // Modification de la tâche (à implémenter)
        boutonModifier.addEventListener('click', function () {

        });

        // Barrer une tâche si elle est terminée
        if (etat === 'terminee') {
            elementTache.style.textDecoration = 'line-through';
        }
    });
});