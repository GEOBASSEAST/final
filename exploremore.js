        
            const modl = document.querySelector('#modl');
            const openModl = document.querySelector('.open');
            const closeModl = document.querySelector('.close');

            openModl.addEventListener('click', () => {
                modl.showModal(getUsers);
                // აქ უნდა გამოვიძახო getUsers და ვერ მოვაბი თავი ვერანაირად//
                         
                
            })

            async function getUsers() {
            const response =await fetch ('https://jsonplaceholder.typicode.com/users');
            const parsedData = await response.json();
            const html = '';

            parsedData.forEach((user) => {
                let userHtml = `
                <dialog class="modl">
                    <h4>${user.name}</h4>
                    <h5>${user.email}</h5>
                </dialog>`;

                html += userHtml;
            });

            const userDialog = document.getElementById('modl');
            userDialog.innerHTML = html;
            }


            closeModl.addEventListener('click', () => {
                modl.close();
            })