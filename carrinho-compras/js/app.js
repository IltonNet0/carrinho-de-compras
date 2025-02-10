function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let preco = valorUnitario * quantidade;

    
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`;

    let valorTotal = document.getElementById('valor-total');
    let texto = valorTotal.textContent;
    let total = texto.replace(/\D/g, '');
    total = Number(total);

    total = preco + total;

    valorTotal.textContent = `R$${total}`;

    document.getElementById('quantidade').value = '';
}

function limpar(){
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = '';

    let valorTotal = document.getElementById('valor-total');
    let texto = valorTotal.textContent;
    let total = texto.replace(/\D/g, '');
    total = Number(total);
    total = 0;
    valorTotal.textContent = `R$${total}`;

    let quantidade = document.getElementById('quantidade').value = '';
    let produto = document.getElementById('produto').value = 'Fone de ouvido - R$100';
}