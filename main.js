// Javascript For Perspective Shift Animation
document.querySelectorAll('.half-screen').forEach((element) => {
    element.addEventListener('mousemove', (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const deltaX = (x - rect.width / 2) / rect.width * 40;
        const deltaY = (y - rect.height / 2) / rect.height * -10;

        element.querySelector('a').style.transform = `rotateY(${deltaX}deg) rotateX(${deltaY}deg)`;
    });

    element.addEventListener('click', (e) => {
        e.preventDefault();
        // Trigger a dramatic animation on click, for example a scaling effect
        element.querySelector('a').classList.add('dramatic-animation');
        setTimeout(() => {
            element.querySelector('a').classList.remove('dramatic-animation');
        }, 1000); // Assume the animation takes 1 second, remove the class afterwards
    });
});