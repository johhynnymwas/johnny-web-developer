document.addEventListener('DOMContentLoaded', function() {
    const productCard = document.querySelector('.product-image');

    // Function to apply 3D effect
    function apply3DEffect(event) {
        const { offsetWidth: width, offsetHeight: height } = productCard;
        const { offsetX: x, offsetY: y } = event;

        // Calculate the rotation angles based on mouse position
        const rotateX = ((y / height) - 0.5) * 60; // Rotate between -30 and 30 degrees
        const rotateY = ((x / width) - 0.5) * -60; // Rotate between -30 and 30 degrees

        productCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }

    // Reset the 3D effect when the mouse leaves the card
    function reset3DEffect() {
        productCard.style.transform = 'rotateX(0deg) rotateY(0deg)';
    }

    // Apply the 3D effect on mouse move
    productCard.addEventListener('mousemove', apply3DEffect);

    // Reset the effect when the mouse leaves
    productCard.addEventListener('mouseout', reset3DEffect);
});