const form = document.getElementById('contato-form');
        const tabelaContatos = document.querySelector('table tbody');
        const contatos = {}; 

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const nome = document.getElementById('nome').value;
            const telefone = document.getElementById('telefone').value;

            if (contatos[telefone]) {
                alert("Este número já está cadastrado em um contato.");
            } else {
                const newRow = tabelaContatos.insertRow();
                const cell1 = newRow.insertCell(0);
                const cell2 = newRow.insertCell(1);

                cell1.innerHTML = nome;
                cell2.innerHTML = telefone;

                contatos[telefone] = true;

                document.getElementById('nome').value = '';
                document.getElementById('telefone').value = '';
            }
        });