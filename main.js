const form = document.getElementById('contactForm');
  const table = document.getElementById('contactTable');
  const contacts = {}; // Armazenar contatos para verificação de duplicatas

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão de envio do formulário

    // Obtém os valores do formulário
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    // Verifica se o nome ou número já existem na agenda de contatos
    if (contacts[name] || Object.values(contacts).includes(phone)) {
      alert('Este nome ou número já está na agenda!');
      return; // Encerra a execução da função se o contato já existir
    }

    // Cria uma nova linha na tabela
    const newRow = table.insertRow(-1);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    // Insere os valores na nova linha da tabela
    cell1.textContent = name;
    cell2.textContent = phone;

    // Adiciona o contato ao objeto de contatos
    contacts[name] = phone;

    // Limpa os campos do formulário
    form.reset();
  });