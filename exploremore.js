            const modl = document.querySelector('#modl');
            const openModl = document.querySelector('.open');
            const closeModl = document.querySelector('.close');

            openModl.addEventListener('click', () => {
                modl.showModal();

                
            })

            closeModl.addEventListener('click', () => {
                modl.close();
            })