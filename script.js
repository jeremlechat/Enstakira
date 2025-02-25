let logoAnimated = false; // Variable pour vérifier si l'animation du logo a déjà eu lieu
let touchLogo = document.getElementById('touch-logo'); // Récupère l'élément du logo tactile

document.addEventListener('click', triggerEffect);
document.addEventListener('keydown', triggerEffect);

function triggerEffect() {
    const background = document.getElementById('background');
    const shinyImage = document.getElementById('shiny-image');
    const linkButtons = document.getElementById('link-buttons');

    if (logoAnimated) return;

    touchLogo.style.display = 'none'; // Cache le logo tactile
    background.classList.add('filter', 'blur-lg'); // Applique un flou de taille 'lg' à l'arrière-plan

    // Appliquer l'animation de translation et agrandissement à l'image
    shinyImage.style.transform = `translateY(-${window.innerHeight * 0.3}px)`;
    shinyImage.classList.remove('opacity-0');
    shinyImage.classList.add('opacity-100', 'image-appear');

    logoAnimated = true;

    // Appliquer les boutons avec animation
    linkButtons.classList.remove('opacity-0');
    linkButtons.classList.add('bottom-1/4', 'opacity-100');

    const buttons = Array.from(linkButtons.children);
    buttons.forEach((button, index) => {
        button.classList.add('pointer-events-none'); // Désactive temporairement les clics
        setTimeout(() => {
            button.classList.add('button-appear'); // Lancer l'animation du bouton
        }, index * 150);
    });

    // Activer les boutons SEULEMENT après l'animation
    buttons.forEach((button) => {
        button.addEventListener('animationend', () => {
            button.classList.remove('pointer-events-none'); // Réactive les clics après l'animation
        });
    });
}
