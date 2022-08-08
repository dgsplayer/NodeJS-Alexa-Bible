var versiculos = {
  '1,1,1': 'No princípio, criou Deus os céus e a terra.',
  '1,1,2': 'A terra, porém, estava sem forma e vazia; havia trevas sobre a face do abismo, e o Espírito de Deus pairava por sobre as águas.',
  '1,1,3': 'Disse Deus: Haja luz; e houve luz.',
  '1,1,4': 'E viu Deus que a luz era boa; e fez separação entre a luz e as trevas.',
  '1,1,5': 'Chamou Deus à luz Dia e às trevas, Noite. Houve tarde e manhã, o primeiro dia.',
  '1,1,6': 'E disse Deus: Haja firmamento no meio das águas e separação entre águas e águas.',
  '11,22,50': 'Josafá descansou com seus pais e foi sepultado na Cidade de Davi, seu pai; e Jeorão, seu filho, reinou em seu lugar.',
  '11,22,51': 'Acazias, filho de Acabe, começou a reinar sobre Israel em Samaria, no décimo sétimo ano de Josafá, rei de Judá; e reinou dois anos sobre Israel.',
  '11,22,52': 'Fez o que era mau perante o SENHOR; porque andou nos caminhos de seu pai, como também nos caminhos de sua mãe e nos caminhos de Jeroboão, filho de Nebate, que fez pecar a Israel.',
  '11,22,53': 'Ele serviu a Baal, e o adorou, e provocou à ira ao SENHOR, Deus de Israel, segundo tudo quanto fizera seu pai.',
  '12,1,1': 'Depois da morte de Acabe, revoltou-se Moabe contra Israel.',
  '12,1,2': 'E caiu Acazias pelas grades de um quarto alto, em Samaria, e adoeceu; enviou mensageiros e disse-lhes: Ide e consultai a Baal-Zebube, deus de Ecrom, se sararei desta doença.',
  '12,1,3': 'Mas o Anjo do SENHOR disse a Elias, o tesbita: Dispõe-te, e sobe para te encontrares com os mensageiros do rei de Samaria, e dize-lhes: Porventura, não há Deus em Israel, para irdes consultar Baal-Zebube, deus de Ecrom?',
  '12,1,4': 'Por isso, assim diz o SENHOR: Da cama a que subiste, não descerás, mas, sem falta, morrerás. Então, Elias partiu.',
  };

var speechOutputObj = Object.keys(versiculos);
var speechOutputValues = Object.values(versiculos);
var capituloValue = 22;
var versiculoValue = 50;

var contador = 11;
var livroValue = 11;
// var contador = pos+1;
var concatenado = contador+','+capituloValue+','+versiculoValue;
if(!versiculoValue)
  concatenado = contador+','+capituloValue+',';
if(!capituloValue)
  concatenado = contador+',';
  
let speechOutput = ''; 

if (typeof String.prototype.startsWith != 'function') {
    String.prototype.startsWith = function (str){
        return this.indexOf(str) == 0;
    };
}
concatenado = '11,22,50';
for(var propt in Object.keys(versiculos)){
  if( speechOutputObj[propt].startsWith(concatenado)){
      //leitura
      if(!speechOutput)
        speechOutput += 'Lendo o livro de ' + livroValue + ', capitulo ' + capituloValue + ', versículo '+versiculoValue+'. '+ speechOutputValues[propt];
      else
        speechOutput += 'Versículo '+versiculoValue+'. '+ speechOutputValues[propt];
    }
  }

  if(!speechOutput)
    speechOutput = 'Não encontrei esta referência na biblia. Tente novamente.';
  
  console.log(speechOutput)