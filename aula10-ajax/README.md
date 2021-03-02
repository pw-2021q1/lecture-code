## Atenção. 
Sempre que trabalhamos com Ajax, e precisamos acessar recursos locais (i.e. arquivos do nosso próprio site), é recomendável que instalemos um servidor
de desenvolvimento para realizarmos nossos testes. Isso é 
 necessário pois a CORS (Cross Origin Resource Sharing), 
bloqueia o acesso a recursos a partir do  esquema `file://`.

Outra restrição importante é que a Fetch API só funciona no esquema `http://` ou `https://`, portanto nesse caso é imprescindível o uso de um servidor.

Para instalar um servidor minimalista globalmente:

`npm install -g http-server`

Para servir o diretório atual na porta 3000:

`http-server -p 3000`

Tendo levantado o servidor, basta acessá-lo em `http://localhost:3000`