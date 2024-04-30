document.addEventListener('DOMContentLoaded', function() {
    const tooltips = document.querySelectorAll('.has-tooltip');
    let currentTooltip = null;
    let tooltipElement = document.querySelector('.tooltip');

    tooltips.forEach(function(tooltip) {
        tooltip.addEventListener('click', function(event) {
            event.preventDefault();

            const title = this.getAttribute('title');

            if (tooltipElement && tooltipElement.innerText === title) {
                tooltipElement.classList.toggle('tooltip_active');
                return;
            }

            currentTooltip = title;
            if (tooltipElement) tooltipElement.innerText = title;
            else {
                tooltipElement = document.createElement('div');
                tooltipElement.classList.add('tooltip');
                tooltipElement.innerText = title;
                document.body.appendChild(tooltipElement);
            }

            const tooltipRect = tooltipElement.getBoundingClientRect();
            const targetRect = tooltip.getBoundingClientRect();
            const targetOffset = targetRect.top - window.scrollY;

            const top = targetOffset - tooltipRect.height - 10;
            const left = targetRect.left + (targetRect.width - tooltipRect.width) / 2;

            tooltipElement.style.top = top + 'px';
            tooltipElement.style.left = left + 'px';

            tooltipElement.classList.add('tooltip_active');
        });
    });

    document.addEventListener('click', function(event) {
        if (!tooltipElement) return;
        if (!event.target.classList.contains('has-tooltip') && !tooltipElement.contains(event.target)) {
            tooltipElement.classList.remove('tooltip_active');
            currentTooltip = null;
        }
    });
});