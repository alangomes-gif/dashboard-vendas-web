// Simulação de carregamento dinâmico de dados de vendas
const transacoes = [
    { id: '#1052', cliente: 'Ana Silva', produto: 'Teclado Mecânico', valor: 'R$ 250,00', status: 'Concluído' },
    { id: '#1051', cliente: 'Carlos Souza', produto: 'Mouse Gamer', valor: 'R$ 120,00', status: 'Concluído' },
    { id: '#1050', cliente: 'Beatriz Lima', produto: 'Monitor 24"', valor: 'R$ 850,00', status: 'Pendente' },
    { id: '#1049', cliente: 'João Pedro', produto: 'Cadeira Office', valor: 'R$ 600,00', status: 'Concluído' }
];

document.addEventListener('DOMContentLoaded', () => {
    const tabelaCorpo = document.getElementById('tabela-corpo');
    
    transacoes.forEach(item => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td><strong>${item.id}</strong></td>
            <td>${item.cliente}</td>
            <td>${item.produto}</td>
            <td>${item.valor}</td>
            <td><span style="color: ${item.status === 'Concluído' ? '#27ae60' : '#f39c12'}">${item.status}</span></td>
        `;
        tabelaCorpo.appendChild(linha);
    });
});
