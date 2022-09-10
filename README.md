### dep instaladas
- express // servidor
- body-parser // parser
- nodemon // auto reload
- sequelize // orm
- sequelize-cli // linha de comandos
- path

### ações
- npx sequelize-cli init // para iniciar global
- são criadas 4 pastas (config, migrations, models e seeders)
- mover as 4 pa api
- criar o arquivo .sequelizerc

## criar config.json models e migrations com sequelize-cli
- npx sequelize-cli model:create --name Pessoas --attibutes nome:string,ativo:boolean,email:string,role:string

/*migrations servem para controlar alterações no banco*/
## startando o migration
- npx sequelize-cli db:migrate


/*
  onde name demo pessoa refere-se ao arquivo e não a coluna no banco
  seed serve para auxiliar na manipulação dos dados do banco: insert
*/
## criar seed
- npx sequelize-cli seed:generate --name demo-pessoa

## rodar todas seed
- npx sequelize-cli db:seed:all