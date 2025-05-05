# Instruções para Publicar seu Site no GitHub Pages

Olá! Seguem as instruções detalhadas para você publicar a página web educacional que criamos em sua própria conta do GitHub. Isso permitirá que você tenha controle total sobre o site e possa atualizá-lo facilmente no futuro.

**Pré-requisito:** Você precisará do arquivo `educacao_ia_website.zip` que enviei anteriormente. Descompacte este arquivo em uma pasta no seu computador. Você verá os seguintes itens dentro da pasta:

*   `index.html` (a página principal)
*   `style.css` (os estilos visuais)
*   `script.js` (a interatividade)
*   `assets/` (uma pasta contendo o arquivo do eBook original)
*   `todo.md` (o checklist que usamos)

---

**Passo 1: Criar uma Conta no GitHub (se ainda não tiver)**

1.  Acesse o site do GitHub: [https://github.com/](https://github.com/)
2.  Clique em "Sign up" (Inscrever-se) no canto superior direito.
3.  Siga as instruções na tela para criar sua conta gratuita. Você precisará de um nome de usuário, um endereço de e-mail e uma senha.

**Passo 2: Criar um Novo Repositório no GitHub**

1.  Após fazer login na sua conta GitHub, clique no ícone de "+" no canto superior direito e selecione "New repository" (Novo repositório).
2.  **Nome do Repositório (Repository name):** Dê um nome ao seu repositório. Sugestão: `guia-ia-educacao` ou algo similar e fácil de lembrar.
3.  **Descrição (Description):** (Opcional) Adicione uma breve descrição, como "Página web educacional sobre IA na Educação".
4.  **Visibilidade:** Selecione **Public** (Público). O GitHub Pages só funciona gratuitamente para repositórios públicos.
5.  **Inicializar repositório:** Marque a opção "Add a README file" (Adicionar um arquivo README). Isso facilita o próximo passo.
6.  Clique em "Create repository" (Criar repositório).

**Passo 3: Fazer Upload dos Arquivos do Site**

1.  Dentro do seu repositório recém-criado, clique no botão "Add file" (Adicionar arquivo) e depois em "Upload files" (Carregar arquivos).
2.  **Arraste e solte** a pasta `assets` e os arquivos `index.html`, `style.css`, `script.js` e `todo.md` (que você descompactou do ZIP) para a área indicada na página do GitHub.
    *   *Importante:* Certifique-se de que está enviando os arquivos e a pasta `assets`, e não a pasta que continha tudo após descompactar.
3.  Aguarde o carregamento dos arquivos.
4.  **Commit changes (Confirmar alterações):** Role até o final da página. Você pode deixar a mensagem padrão ou escrever algo como "Adiciona arquivos iniciais do site".
5.  Clique em "Commit changes".

**Passo 4: Habilitar o GitHub Pages**

1.  No seu repositório, clique na aba "Settings" (Configurações).
2.  Na barra lateral esquerda, procure e clique em "Pages".
3.  Na seção "Build and deployment", em "Source" (Fonte), selecione "Deploy from a branch" (Implantar a partir de um branch).
4.  Em "Branch", certifique-se de que o branch selecionado seja `main` (ou `master`, dependendo do nome padrão do seu GitHub) e a pasta seja `/ (root)`.
5.  Clique em "Save" (Salvar).
6.  A página será atualizada. Aguarde alguns instantes (pode levar de 1 a 5 minutos). O GitHub está construindo e publicando seu site.
7.  Após alguns momentos, atualize a página de Configurações > Pages. Uma caixa verde aparecerá no topo com a mensagem "Your site is live at" (Seu site está no ar em) seguida do link público do seu site. O link será algo como `https://SEU-NOME-DE-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

**Passo 5: Acessar e Compartilhar seu Site**

1.  Clique no link fornecido pelo GitHub Pages para visitar seu site publicado!
2.  Você pode compartilhar este link com quem quiser.

**Como Atualizar o Site no Futuro?**

Para atualizar o site, basta fazer alterações nos arquivos no seu computador e depois fazer o upload dos arquivos modificados para o mesmo repositório no GitHub (usando a opção "Add file" > "Upload files" novamente). O GitHub Pages automaticamente publicará as novas versões.

Para um fluxo de trabalho mais avançado, você pode aprender a usar o Git diretamente no seu computador, mas o método de upload via navegador funciona perfeitamente para começar.

---

Espero que estas instruções ajudem! Se tiver qualquer dúvida durante o processo, pode me perguntar.
