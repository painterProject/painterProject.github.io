'use strict';

function tabs() {
    const tabs = document.querySelectorAll('.tabs-item .item'),
          contents = document.querySelectorAll('.tabs-container__tab-content'),
          tabsParent = document.querySelector('.tabs-item');

    const contentClear = () => {
        contents.forEach(item => {
            item.style.display = 'none';
            
        });
        tabs.forEach(item => {
            item.classList.remove('tabs-item__active');
        });    
    };

    function showTabContent(i = 0) {
        contents[i].style.display = 'flex';
        tabs[i].classList.add('tabs-item__active');
    }
    
    contentClear();
    showTabContent();

    tabsParent.addEventListener('click', event => {
        const target = event.target;
        if (target && target.classList.contains('item')) {
            tabs.forEach((item, i) => {
                if(target == item) {
                    contentClear();
                    showTabContent(i);
                }
                
            });
        }
    });

}
tabs();