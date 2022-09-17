//localhost:3333/anuncio
// GET - buscar algo, leitura
// POST -  criando algo dentro da aplicação
// PUT - editando entidade  ( ex : editar perfil com vário campos)
// PATCH - editar uma informação escifica dentro da entidade ( ex no perfil tem opção de receber notificação ou não true e false)
// DELETE - Deletar alguma entidade

// http methods / API Restful / HTTP Codes  = mostra se a resposta é valida / se deu certo

Parametros:

                                    Query Params (GET)

Recebe os dados da requisição como parâmetro na URL.

Caso de uso: Filtros para fazer consultas na aplicação, persisitir estado,  mane ele como foi filtrado!

Pode conter um ou mais parâmetros:

Exemplos:

http://minhaapi.com/banks?name=nubank
No exemplo acima acesso o recurso (ou rota) banks, filtrando por name. Para inserir parâmetros coloco ? após a rota e adiciono a propriedade e valor: name=nubank.

http://minhaapi.com/movies?name=transformers&actors=megan,peter
No exemplo acima acesso API de filmes, pesquisando por name e actors. Sempre que for passar mais de um parâmetro podemos colocar & para separar os parâmetros.

                                    Route Params (GET)


Recebe os dados da requisição na rota.

Caso de uso: Melhor maneira para buscar algo específico, deletar ou atualizar usando o identificador único, por exemplo:

GET: https://api.github.com/users/tgmarinho
PUT: https://api.github.com/users/tgmarinho
DELETE: https://api.github.com/users/380327

Nesse exemplo acima busco, atualizo e deleto o usuário do GitHub com login: tgmarinho ou id: 380327.

As duas maneiras mudam a forma de escrever o código, veja:

/**
* Query params = ?name=Thiago
* Route params = /users/1
*/

// Query params: ?name=thiago

// faça a requisição no navegador: http://localhost:3333/users/?name=Thiago
server.get("/users", (req, res) => {
 const name = req.query.name;	
 return res.json({ message: `Hello ${name}` });
});

// Route Params = /users/1

// faça a requisição no navegador: http://localhost:3333/users/1
server.get("/users/:id", (req, res) => {
 // const id = req.params.id; 
 const { id } = req.params; // desestruturado com ES06	
 return res.json({ message: `Buscando o usuário de ID: ${id}`});


            
            
                                        Body Params (POST e PUT)
Recebe os dados da requisição no corpo da requisição, em um objeto em JSON. Sempre utilizando no método POST da requisição.

{ 
	"name": "Thiago", "age": 18, "email": "thiago@mail.com"
}

No Controller você pega a requisição para salvar os dados no banco de dados.

server.post("/users", (req, res){ 
 const { name, age, email } = req.body; 
 await connection("users").insert({ name, age, email }); 
return res.json({ id }); }