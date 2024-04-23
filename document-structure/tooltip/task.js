document.addEventListener('DOMContentLoaded', function() {
    const tooltips = document.querySelectorAll('.has-tooltip');

    tooltips.forEach(function(tooltip) {
        tooltip.addEventListener('click', function(event) {
            event.preventDefault();

            const title = this.getAttribute('title');
            const tooltipElement = document.querySelector('.tooltip');

            if (title) {
                tooltipElement.innerText = title;
                
                const tooltipRect = tooltipElement.getBoundingClientRect();
                const targetRect = tooltip.getBoundingClientRect();
                const targetOffset = targetRect.top - window.scrollY;

                const top = targetOffset - tooltipRect.height - 10;
                const left = targetRect.left + (targetRect.width - tooltipRect.width) / 2;

                tooltipElement.style.top = top + 'px';
                tooltipElement.style.left = left + 'px';

                tooltipElement.classList.add('tooltip_active');
            }
        });
    });

    document.addEventListener('click', function(event) {
        const tooltipElement = document.querySelector('.tooltip');
        if (!event.target.classList.contains('has-tooltip') && !tooltipElement.contains(event.target)) {
            tooltipElement.classList.remove('tooltip_active');
        }
    });
});