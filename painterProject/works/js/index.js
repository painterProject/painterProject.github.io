const getData = () => {
    const list = document.querySelector('.img__list');
    const btn = document.querySelector('.cross__add');
    let stack =4,
        count = 1;
    const render = (data) => {
        list.innerHTML = '';
        data.forEach(item => {
            list.insertAdjacentHTML('beforeend', `
                <li>
                    <article class="cross__item">
                        <div class="cross__wraper">
                            <img class="cross__image" src="./${item.photo}" alt="${item.id}">
                        </div>
                        <h3 class="cross__title">${item.name}</h3>
                        <p class="cross__year">${item.year} год</p>
                    </article>
                </li>
            `);
        });
    };
    const sliceArray = (data, index) => {
        return data.slice(0, index);
    };
    const changeData = (data) => {
        const newStack = stack * count;

        if (data.length > newStack) {
            count++;
        } else {
            btn.style.display = 'none';
        }
        render(sliceArray(data, newStack));
    };
    const getGoods = () => {
        fetch('../cross-DB/dbase.json')
            .then((response) => {
                if(response.ok) {
                    return response.json();
                } else {
                    throw new Error('Данные были получены с ошибкой!');
                }
            })
            .then((data) => {
                changeData(data);
            })
            .catch((error) => {
                console.error(error.message);
            });
    };
    btn.addEventListener('click', getGoods);
    getGoods();

};
getData();