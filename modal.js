
            const modal = document.querySelector('#modal');
            const openModal = document.querySelector('.open-button');
            const closeModal = document.querySelector('.close-button');

            openModal.addEventListener('click', () => {
                modal.showModal();   
                
            })


            async function getTodos() {
                const response =await fetch ('https://jsonplaceholder.typicode.com/todos');
                const parsedData = await response.json();
                const html = '';
    
                parsedData.forEach((user) => {
                    let userHtml = `
                    <dialog class="modal">
                        <h4>${user.id}</h4>
                        <h4>${user.title}</h4>
                    </dialog>`;
    
                    html += userHtml;
                });
    
                const userDialog = document.getElementById('modal');
                userDialog.innerHTML = html;
                }

            closeModal.addEventListener('click', () => {
                modal.close();
            })



            
        