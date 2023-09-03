async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const parsedData = await response.json();
    const html = '';

    parsedData.forEach((user) => {
        const userHtml = `
        <div class="user">
        <h2>${user.name}</h2>
        <p>${user.email}</p>
        </div>
        `;

        html += userHtml;
    })

    const userDiv = document.getElementById('modal');
    userDiv.innerHTML = html;
}



            const modal = document.querySelector('#modal');
            const openModal = document.querySelector('.open-button');
            const closeModal = document.querySelector('.close-button');

            openModal.addEventListener('click', () => {
                modal.showModal();
            })

            closeModal.addEventListener('click', () => {
                modal.close();
            })
        