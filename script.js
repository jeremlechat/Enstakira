document.addEventListener('click', triggerEffect);
document.addEventListener('keydown', triggerEffect);

function triggerEffect() {
    const background = document.getElementById('background');
    const shinyImage = document.getElementById('shiny-image');
    const linkButtons = document.getElementById('link-buttons');

    // Appliquer l'effet de flou au fond
    background.classList.add('blur-md');

    // Appliquer l'animation de translation et agrandissement à l'image
    shinyImage.style.transform = `translateY(-${window.innerHeight * 0.3}px)`; // Décalage vertical
    shinyImage.classList.remove('opacity-0');
    shinyImage.classList.add('opacity-100', 'image-appear'); // Ajouter l'animation de translation et agrandissement

    // Afficher les boutons de lien avec animation
    linkButtons.classList.remove('opacity-0');
    linkButtons.classList.add('bottom-1/4', 'opacity-100');

    // Ajouter l'animation d'apparition des boutons 
    const buttons = Array.from(linkButtons.children);
    buttons.forEach((button, index) => {
        setTimeout(() => {
            button.classList.add('button-appear'); // Ajouter l'animation d'apparition
        }, index * 150); // Décalage de l'apparition des boutons
    });

    // Ajouter un écouteur d'événement pour chaque bouton afin d'activer le survol après l'animation
    buttons.forEach((button) => {
        button.addEventListener('animationend', () => {
            button.classList.add('activated'); // Ajoute la classe 'activated' après l'animation
        });
    });
}
