// 1) Récupération du champ de texte où l'utilisateur entre une tâche
let taskInput = document.getElementById('taskInput');
// 2) Récupération du bouton pour ajouter les tâches à la liste
let addTaskBtn = document.getElementById('addTaskBtn');
// 3) Récupération de la liste où les tâches seront affichées
let taskList = document.getElementById('taskList');

// Fonction pour ajouter une nouvelle tâche à la liste
function addTask() {
    // Récupère le texte saisi dans le champ de texte et enlève les espaces inutiles
    // trim() ---> est une méthode simple mais puissante pour nettoyer les chaînes de caractères des espaces blancs indésirables en début et en fin de texte.
    // value ---> Récupère la valeur actuelle du champ de texte
    let taskText = taskInput.value.trim(); // Nettoie le texte de la tâche

    // Vérifie si le texte de la tâche est vide
    if (taskText === '') {
        // Affiche un message d'alerte si aucun texte n'est saisi
        alert('Veuillez entrer une tâche.');
        return; // Interrompt la fonction si la tâche est vide
    }

    // Crée un nouvel élément de liste (li) pour la tâche
    let li = document.createElement('li');

    // Crée une case à cocher pour marquer la tâche comme réalisée
    let checkbox = document.createElement('input');
    // Définit le type de l'élément 'checkbox' comme une case à cocher.
    checkbox.type = 'checkbox';
    // L'événement 'change' se déclenche lorsque l'utilisateur coche ou décoche la case.
    // Modifie la liste des classes de l'élément 'li' en fonction de l'état de la case à cocher.
    // 'completed' est la classe CSS qui sera ajoutée ou retirée.
    // 'checkbox.checked' est une valeur booléenne qui indique si la case est cochée (true) ou non (false).
    // Si 'checkbox.checked' est true, la classe 'completed' est ajoutée à 'li'.
    // Si 'checkbox.checked' est false, la classe 'completed' est retirée de 'li'.
    checkbox.addEventListener('change', () => {
        li.classList.toggle('completed', checkbox.checked); // Marque la tâche comme réalisée ou non
    });

    // Crée un élément span pour afficher l'icône de poubelle
    let deleteIcon = document.createElement('span');
    deleteIcon.classList.add('delete-icon');

    // Crée l'élément img pour l'icône de poubelle
    let trashImg = document.createElement('img');
    trashImg.src = './poubelle-de-recyclage.png';
    trashImg.alt = 'Supprimer la tâche';
    trashImg.style.width = '20px'; 
    trashImg.style.height = '20px'; 

    // Ajoute l'image à l'icône de poubelle
    deleteIcon.appendChild(trashImg);

    // Ajoute l'événement de clic à l'icône de poubelle pour supprimer la tâche
    deleteIcon.addEventListener('click', () => {
        li.classList.add('remove-task');
        // Supprime l'élément de la liste après la fin de l'animation
        setTimeout(() => {
            taskList.removeChild(li);
        }, 300);
    });

    // Ajoute les éléments à l'élément de liste
    li.appendChild(checkbox); // Ajoute la case à cocher
    li.appendChild(document.createTextNode(taskText)); // Ajoute le texte de la tâche
    li.appendChild(deleteIcon); // Ajoute l'icône de poubelle

    // Ajoute une animation d'ajout
    li.classList.add('add-task');
    taskList.appendChild(li); // Ajoute l'élément <li> à la liste des tâches

    // Supprime la classe d'animation après que l'animation est terminée
    setTimeout(() => {
        li.classList.remove('add-task');
    }, 300);

    // Réinitialise le champ de texte après l'ajout de la tâche
    taskInput.value = ''; // Vide le champ de texte

    // Redonne le focus au champ de texte pour faciliter l'ajout d'une nouvelle tâche
    taskInput.focus(); 
}

// Ajoute un écouteur d'événement au bouton pour appeler la fonction addTask lorsque le bouton est cliqué
addTaskBtn.addEventListener('click', addTask); 

// Permet l'ajout de tâches en appuyant sur la touche "Entrée" dans le champ de texte
taskInput.addEventListener('keyup', (e) => {
    // Vérifie si la touche relâchée est "Entrée"
    if (e.key === 'Enter') {
        // Appelle la fonction addTask pour ajouter la tâche
        addTask(); // Ajoute la tâche lorsque la touche "Entrée" est relâchée
    }
});
