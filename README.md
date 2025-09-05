# Dashboard de Vendas - DataVision AI

Um dashboard profissional de vendas desenvolvido com HTML, CSS, JavaScript vanilla e AdminLTE, pronto para deploy no GitHub Pages.

## 🚀 Características

- **Design Moderno**: Interface escura profissional com gradientes e animações
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Autenticação**: Sistema de login com múltiplos usuários e persistência de sessão
- **Gráficos Interativos**: Visualizações de dados usando Chart.js
- **Baseado em AdminLTE**: Framework robusto e bem documentado
- **Deploy Simples**: Arquivos estáticos prontos para GitHub Pages

## 📊 Funcionalidades

### Dashboard Principal
- **KPIs Principais**: Receita total, vendas concluídas, conversões, ticket médio
- **Jornada do Cliente**: Funil de vendas visual
- **Gráficos de Performance**: Linha temporal de vendas e visitas
- **Distribuição por Canal**: Gráfico de pizza com canais de marketing
- **Ranking de Produtos**: Gráfico de barras horizontais
- **Mapa de Calor**: Visualização de atividade por horário/dia
- **Meta de Receita**: Gauge chart com progresso
- **Insights de IA**: Alertas e sugestões automáticas

### Sistema de Autenticação
- **Múltiplos Usuários**: Admin, Manager, Demo
- **Persistência de Sessão**: Opção "Lembrar de mim"
- **Perfil de Usuário**: Informações e controles de conta
- **Logout Seguro**: Limpeza de dados de sessão

## 🔐 Credenciais de Acesso

### Administrador
- **Email**: admin@datavision.ai
- **Senha**: admin123
- **Permissões**: Acesso completo

### Gerente
- **Email**: manager@datavision.ai
- **Senha**: manager123
- **Permissões**: Visualização e relatórios

### Demonstração
- **Email**: demo@datavision.ai
- **Senha**: demo123
- **Permissões**: Acesso limitado

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com variáveis CSS e gradientes
- **JavaScript ES6+**: Funcionalidades interativas
- **AdminLTE 4**: Framework de dashboard
- **Bootstrap 5**: Sistema de grid e componentes
- **Chart.js**: Biblioteca de gráficos
- **Bootstrap Icons**: Ícones vetoriais
- **Font Awesome**: Ícones adicionais

## 📁 Estrutura do Projeto

```
dashboard-html/
├── index.html              # Página inicial (redireciona para login)
├── login.html              # Página de autenticação
├── dashboard.html           # Dashboard principal
├── dashboard-charts.js      # Configuração dos gráficos
├── css/                     # Estilos do AdminLTE
│   └── adminlte.css
├── js/                      # Scripts do AdminLTE
│   └── adminlte.js
└── README.md               # Este arquivo
```

## 🚀 Deploy no GitHub Pages

### Método 1: Upload Direto
1. Faça upload dos arquivos para um repositório GitHub
2. Vá em Settings > Pages
3. Selecione "Deploy from a branch"
4. Escolha "main" branch e "/ (root)"
5. Clique em "Save"

### Método 2: GitHub Actions (Recomendado)
1. Crie o arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Pages
      uses: actions/configure-pages@v3
      
    - name: Upload artifact
      uses: actions/upload-pages-artifact@v2
      with:
        path: '.'
        
    - name: Deploy to GitHub Pages
      id: deployment
      uses: actions/deploy-pages@v2

permissions:
  contents: read
  pages: write
  id-token: write
```

2. Commit e push para o repositório
3. O deploy será automático

## 🔧 Personalização

### Cores e Tema
As cores principais estão definidas em variáveis CSS no arquivo `dashboard.html`:

```css
:root {
    --primary-color: #7f5af0;    /* Roxo principal */
    --secondary-color: #00f5c3;  /* Ciano/Verde-água */
    --dark-bg: #1a1a2e;          /* Fundo escuro */
    --card-bg: #1f1f3a;          /* Fundo dos cards */
    --text-light: rgba(255, 255, 255, 0.8); /* Texto claro */
}
```

### Dados dos Gráficos
Os dados estão no arquivo `dashboard-charts.js` e podem ser facilmente substituídos por dados reais de uma API.

### Adicionar Novos Usuários
No arquivo `login.html`, adicione novos usuários no array `validCredentials`:

```javascript
const validCredentials = [
    { email: 'novo@email.com', password: 'senha123', role: 'user' }
];
```

## 📱 Responsividade

O dashboard é totalmente responsivo e se adapta a diferentes tamanhos de tela:

- **Desktop**: Layout completo com sidebar
- **Tablet**: Sidebar colapsável
- **Mobile**: Navegação otimizada para touch

## 🔒 Segurança

- Validação de credenciais no frontend
- Persistência segura de sessão no localStorage
- Logout automático após 24 horas (se não marcou "Lembrar de mim")
- Redirecionamento automático para login se não autenticado

## 🎨 Customização Visual

### Modificar Logo
Substitua o ícone e texto no header:

```html
<i class="bi bi-graph-up-arrow brand-image"></i>
<span class="brand-text"><b>Seu</b> Logo</span>
```

### Adicionar Novos Gráficos
Use Chart.js para criar novos gráficos. Exemplo:

```javascript
const ctx = document.getElementById('novoGrafico').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: { /* seus dados */ },
    options: { /* suas opções */ }
});
```

## 📈 Performance

- **Carregamento Rápido**: Apenas arquivos estáticos
- **CDN**: Bibliotecas carregadas via CDN para melhor cache
- **Otimizado**: CSS e JS minificados
- **Sem Build**: Deploy direto sem processo de build

## 🐛 Solução de Problemas

### Gráficos não aparecem
- Verifique se o Chart.js está carregando corretamente
- Confirme que os elementos canvas existem no HTML

### Login não funciona
- Verifique o console do navegador para erros JavaScript
- Confirme que as credenciais estão corretas

### Estilos quebrados
- Verifique se o AdminLTE CSS está carregando
- Confirme que os caminhos dos arquivos estão corretos

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique a documentação do AdminLTE
2. Consulte a documentação do Chart.js
3. Abra uma issue no repositório

## 📄 Licença

Este projeto é baseado no AdminLTE (MIT License) e Chart.js (MIT License).

---

**Desenvolvido com ❤️ para demonstrar habilidades em desenvolvimento frontend**

