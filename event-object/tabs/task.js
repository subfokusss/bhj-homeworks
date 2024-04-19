document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    
    const tabContents = document.querySelectorAll('.tab__content');
    
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach((t) => {
                t.classList.remove('tab_active');
            });
            
            tab.classList.add('tab_active');
            
            tabContents.forEach((content) => {
                content.classList.remove('tab__content_active');
            });
            
            tabContents[index].classList.add('tab__content_active');
        });
    });
});
