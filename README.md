SOLID é um acronimo criado por Michael Feathers baseado nos princípios definidos no livro Agile Sofware Development, que foi escrito por Robert C. Martin, o famoso Uncle BOB.

Ele define cinco princípios de orientação a objetos, para escrever um código mais limpo e escalável. Aqui vai um resumo para cada um deles para enteder de forma bem símples.

SRP - Single Responsiblity Principle (Princípio da responsabilidade única)
Uma classe só pode ter um, e somente um, motivo para mudar.
Ou seja, se uma classe tiver a responsabilidade de lhe dar com a conexão de banco de dados, com uma entidade de categorias e uma de postagens por exemplo, ela vai estar ferido esse princípio, logo o correto seria dividir em classes diferentes

OCP — Open-Closed Principle (Princípio Aberto-Fechado)
Objetos ou entidades devem estar abertos para extensão, mas fechados para modificação.
Se estamos constantemente adcionando novas condicionais para alterar o comportamento de um método de uma classe, estamos ferindo esse princípio. Uma solução para isso é criar uma classe abstrata com o método definido em questão e sobrepor o comportamento do método nas classes filho.

LSP — Liskov Substitution Principle (Princípio da substituição de Liskov)
Uma classe filho deve ser capaz de aplicar todos os métodos de sua classe pai sem que ocorra nenhum problema.
Algumas formas de ferir esse princípio são:
 Sobrescrever/implementar um método que não executa nada;
 Lançar alguma exceção repentina;
 Retornar valores de tipos diferentes da classe pai;

ISP — Interface Segregation Principle:
Esse princípio diz que uma classe deve implementar todos os métodos definidas por uma interface, não podemos deixar um método que não faz nada, 
nesse caso deveriamos criar uma outra interface para essa classe sem o método em questão

DIP — Dependency Inversion Principle (Princípio da inversão da dependência)
Esse princípio define que uma class não pode depender exclusivamente da instancia de uma outra classe. Por exemplo, uma classe "Filme" não pode depender executar uma instãncia diretamente de uma classe "CategoriaTerror".
O correto seria criar uma interface "Categoria" para não existir mais essa dependência diretamente.

Entre em cada uma das pastas e verá o exemplos de cada um dos princípios do solid

![image](https://github.com/poring86/typescript-solid/assets/10561627/728f9693-8198-40c4-9c31-6f89c728804d)
