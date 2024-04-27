const tabAreas = document.querySelectorAll('[data-tabs-area]');

if (tabAreas.length) {
    tabAreas.forEach(area => {
        const tabs = area.querySelectorAll('[data-tab]');
        const content = area.querySelectorAll('[data-tab-content]');

        tabs.forEach(tab => {
            const id = tab.dataset.tab;
            const activeParentContent = tab.closest('[data-tab-content]')
            const childTab = area.querySelector(`[data-tab-content="${id}"] [data-tab]._active`)
            const activeChildTabs = area.querySelectorAll(`[data-tab-content] [data-tab]._active`)

            tab.addEventListener('click', (e) => {
                e.preventDefault();

                tabs.forEach(item => {
                    const currentId = item.dataset.tab;

                    if (currentId == id) {
                        item.classList.add('_active');
                    }
                    else {
                        if (childTab && activeChildTabs.length) {
                            activeChildTabs.forEach(asd => {
                                asd.classList.add('_active');
                            })
                            item.classList.remove('_active');
                        }
                        else {
                            item.classList.remove('_active');
                        }
                    }

                    if (activeParentContent) {
                        const activeParentTab = area.querySelector(`[data-tab="${activeParentContent.dataset.tabContent}"]`);
                        activeParentTab.classList.add('_active');
                    }
                });

                content.forEach(item => {
                    const currentId = item.dataset.tabContent;

                    if (currentId == id) {
                        item.classList.add('_active');
                    }
                    else {
                        if (activeParentContent && activeParentContent.dataset.tabContent == item.dataset.tabContent) {
                            activeParentContent.classList.add('_active');
                        }
                        else {
                            item.classList.remove('_active');
                        }
                    }

                    if (childTab) {
                        const activeChilTabContent = area.querySelector(`[data-tab-content="${childTab.dataset.tab}"]`)
                        if (activeChilTabContent) {
                            activeChilTabContent.classList.add('_active');
                        }
                    }
                });
            })
        })
    })
}