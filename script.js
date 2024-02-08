document.addEventListener('DOMContentLoaded', function () {
    const animatedSection = document.querySelector('.animated-section');

    window.addEventListener('scroll', function () {
        if (isInViewport(animatedSection)) {
            animatedSection.classList.add('show');
        }
    });

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});
