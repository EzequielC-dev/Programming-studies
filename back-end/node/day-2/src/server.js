import http from "http";
import { stringify } from "querystring";

const users = [];
const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;

  if ((method === "GET", url === "/users")) {
    return res
      .setHeader("Content-Type", "application/json")
      .end(JSON.stringify(users));
  }

  /* Quando devolvido para o front-end, o que for enviado não pode ser um array

    Para converter um array para uma string, podemos usar um JSON

    Ela pode ter 3 formatos: string, buffer, UintBArray
  
  */

  if ((method === "POST", url === "/users")) {
    users.push({
      id: 1,
      name: "John Doe",
      email: "johndoe@gmail.com",
    });

    return res.end("Criação de usuários");
  }

  return res.end("Hi!!");
});

// CommonJS = require (padrão de importação)
// ESMOdules = import/export (node não suporta, a não ser quando usamos no package.json no title)

// Stateful - guardada na memória, e é necessária para o funcionamento da aplicação
// Stateless - é guardado externamente, é mantida

/* 
    HTPP 
        Método e a URL (obtemos atráves do req)
    
        (GET, POST, PUT, PATCH, DELETE)
        GET => Buscar um recurso do back-end
        POST => Criar um recurso no back-end
        PUT => Editar ou atualizar um recurso no back-end
        PATCH => Atualizar uma informação única ou específica de um recurso no back-end
        DELETE = > Deletar algum recurso do back-end

        PUT x PATCH (PUT atualiza geralmente muitas coisas ao mesmo tempo, logo PATCH é bem específico)
*/

// servidor http ouvindo a porta 3333 do localhost
server.listen(3333);
