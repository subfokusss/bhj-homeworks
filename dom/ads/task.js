function rotateText() {
    const rotators = document.querySelectorAll('.rotator');

    rotators.forEach(rotator => {
        const cases = rotator.querySelectorAll('.rotator__case');
        let currentIndex = 0;

        setInterval(() => {
            cases.forEach(caseElement => {
                caseElement.classList.remove('rotator__case_active');
            });

            cases[currentIndex].classList.add('rotator__case_active');

            const currentCase = cases[currentIndex];
            const speed = parseInt(currentCase.dataset.speed) || 1000;
            const color = currentCase.dataset.color || 'black';

            currentCase.style.color = color;

            currentIndex = (currentIndex + 1) % cases.length;
        }, 1000); 
    });
}

rotateText();