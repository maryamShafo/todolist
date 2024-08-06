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
    li.textContent = taskText; // Définit le texte de l'élément de liste comme le texte de la tâche

    // 3) Ajoute un mécanisme pour supprimer une tâche en cliquant dessus
    li.addEventListener('click', () => {
        taskList.removeChild(li); // Supprime l'élément de liste de la liste des tâches lorsqu'il est cliqué
    });

    // Ajoute le nouvel élément de liste à la liste des tâches
    taskList.appendChild(li); // Ajoute l'élément <li> à la liste des tâches

    // Réinitialise le champ de texte après l'ajout de la tâche
    taskInput.value = ''; // Vide le champ de texte

    // `taskInput.focus()` donne le focus au champ de texte avec l'ID 'taskInput'.
    //Cela place automatiquement le curseur dans ce champ de texte, permettant à l'utilisateur de commencer à saisir du texte immédiatement. 
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






