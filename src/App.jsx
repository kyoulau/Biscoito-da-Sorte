import React, { Component } from "react";
import Biscoito2 from "./assets/images/Biscoito2.png";
import Button from "./components/Button";
import("./css/style.css");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frase: "",
      biscoitoAbrido: false
    };

    this.quebrarBiscoito =  this.quebrarBiscoito.bind(this)

    this.FRASES=[
      "A felicidade está ao seu alcance.",
      "Grandes mudanças estão a caminho.",
      "Confie em si mesmo e siga em frente.",
      "Novas oportunidades surgirão em breve.",
      "Você é mais forte do que pensa.",
      "Hoje é um bom dia para começar algo novo.",
      "A sorte favorece os audazes.",
      "Você é capaz de realizar grandes feitos.",
      "Algo maravilhoso está prestes a acontecer.",
      "Confie no processo da vida.",
      "Acredite na sua intuição.",
      "O sucesso está ao virar da esquina.",
      "Grandes coisas estão reservadas para você.",
      "A sorte está do seu lado.",
      "Você merece todas as coisas boas.",
      "Nunca subestime o seu poder.",
      "Você está no caminho certo.",
      "Algo inesperado trará alegria.",
      "Novas amizades surgirão em breve.",
      "Seu esforço será recompensado.",
      "A vida é cheia de surpresas agradáveis.",
      "Você é uma pessoa especial.",
      "Acredite em seus sonhos.",
      "Seu futuro é brilhante.",
      "Grandes aventuras aguardam você.",
      "O universo está conspirando a seu favor.",
      "Você é amado e apreciado.",
      "A persistência é o caminho para o êxito.",
      "A sabedoria vem com a experiência.",
      "A paciência é uma virtude.",
      "A felicidade é um estado de espírito.",
      "A vida é curta, aproveite cada momento.",
      "Você é capaz de mudar o mundo.",
      "A beleza está nos olhos de quem vê.",
      "O amor é a chave para a felicidade.",
      "A gentileza é contagiante.",
      "O conhecimento é poder.",
      "Acredite em você mesmo.",
      "A gratidão transforma tudo.",
      "O otimismo é a fé em ação.",
      "A humildade é a verdadeira sabedoria.",
      "A coragem é a força do coração.",
      "O respeito é a base de qualquer relacionamento.",
      "A honestidade é o melhor caminho.",
      "A simplicidade é a sofisticação suprema.",
      "A generosidade é a essência da amizade.",
      "O tempo cura todas as feridas.",
      "A perseverança é a mãe do sucesso.",
      "A imaginação é mais importante que o conhecimento.",
      "A alegria é a melhor maquiagem.",
      "A paz começa com um sorriso.",
      "A ação é a chave para todo sucesso.",
      "A felicidade não é algo pronto. Ela vem de suas próprias ações.",
      "A vida é o que acontece enquanto você está ocupado fazendo outros planos.",
      "O maior prazer da vida é fazer o que as pessoas dizem que você não pode fazer.",
      "A única maneira de fazer um excelente trabalho é amar o que você faz.",
      "A medida da inteligência é a capacidade de mudar.",
      "O sucesso não é a chave para a felicidade. A felicidade é a chave para o sucesso.",
      "A verdadeira viagem de descobrimento não consiste em procurar novas paisagens, mas em ter novos olhos.",
      "A vida é como andar de bicicleta. Para manter o equilíbrio, você deve continuar se movendo.",
      "O único limite para a nossa realização de amanhã serão nossas dúvidas de hoje.",
      "A vida é 10% o que acontece com você e 90% como você reage a isso.",
      "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
      "A única coisa impossível é aquilo que você não tenta.",
      "A vida é uma aventura ousada ou nada.",
      "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
      "A verdadeira felicidade está em desfrutar o presente, sem depender ansiosamente do futuro.",
      "A vida é uma longa lição de humildade.",
      "A maneira mais rápida de duplicar sua felicidade é dividir com os outros.",
      "O segredo para ser feliz é aceitar o lugar onde você está hoje na vida, e dar o melhor de si todos os dias.",
      "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
      "Você nunca será velho demais para definir outro objetivo ou sonhar um novo sonho.",
      "O único modo de fazer um ótimo trabalho é amar o que você faz.",
      "O melhor tempo para plantar uma árvore foi há 20 anos. O segundo melhor tempo é agora.",
      "Você não pode mudar o vento, mas pode ajustar as velas do barco para chegar onde quer.",
      "A vida é como uma câmera. Foque no que é importante, capture bons momentos, desenvolva a partir dos negativos, e se as coisas não derem certo, tire outra foto.",
      "A verdadeira generosidade é fazer algo bom por alguém que nunca saberá.",
      "Você é mais corajoso do que acredita, mais forte do que parece e mais inteligente do que pensa.",
      "A vida é 10% o que acontece com você e 90% como você reage.",
      "Não espere por uma crise para descobrir o que é importante em sua vida.",
      "Não podemos ajudar a todos, mas todos podem ajudar alguém.",
      "Você não pode nadar para novos horizontes até que tenha coragem de perder de vista a costa.",
      "A gratidão é a memória do coração.",
      "Cada dia é uma nova chance de mudar sua vida.",
      "Não é o que você tem, mas o que você aproveita que constitui a sua abundância.",
      "A sorte é o que acontece quando a preparação encontra a oportunidade.",
      "A felicidade não é um destino. É um método de vida.",
      "A verdadeira riqueza é a saúde, não peças de ouro e prata.",
      "Você nunca sabe que resultados virão da sua ação. Mas se você não fizer nada, não haverá resultados.",
      "O sucesso é uma jornada, não um destino.",
      "A felicidade é quando o que você pensa, o que você diz e o que você faz estão em harmonia.",
      "Você não é uma gota no oceano. Você é o oceano em uma gota.",
      "A melhor maneira de prever o futuro é criá-lo.",
      "O sucesso é gostar de si mesmo, gostar do que você faz, e gostar de como você faz.",
      "O amor é a única coisa que cresce à medida que se reparte.",
      "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
      "A verdadeira felicidade é aproveitar o presente, sem depender ansiosamente do futuro.",
      "O que você faz faz uma diferença, e você precisa decidir que tipo de diferença quer fazer.",
      "A vida é realmente simples, mas insistimos em complicá-la.",
      "O segredo para avançar é começar.",
      "A educação é a arma mais poderosa que você pode usar para mudar o mundo.",
      "A única coisa que devemos temer é o próprio medo.",
      "A imaginação é a prévia das atrações da vida que virão.",
      "A vida é 10% o que acontece com você e 90% como você reage.",
      "Você é mais corajoso do que acredita, mais forte do que parece e mais inteligente do que pensa.",
      "O único modo de fazer um ótimo trabalho é amar o que você faz.",
      "Você não pode mudar o vento, mas pode ajustar as velas do barco para chegar onde quer.",
      "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
      "A verdadeira viagem de descobrimento não consiste em procurar novas paisagens, mas em ter novos olhos.",
      "O melhor tempo para plantar uma árvore foi há 20 anos. O segundo melhor tempo é agora.",
      "Você nunca será velho demais para definir outro objetivo ou sonhar um novo sonho.",
      "A vida é como uma câmera. Foque no que é importante, capture bons momentos, desenvolva a partir dos negativos, e se as coisas não derem certo, tire outra foto.",
      "A verdadeira generosidade é fazer algo bom por alguém que nunca saberá.",
      "A gratidão transforma tudo o que toca.",
      "O otimismo é a fé em ação.",
      "A humildade é a verdadeira sabedoria.",
      "A coragem é a força do coração.",
      "O respeito é a base de qualquer relacionamento.",
      "A honestidade é o melhor caminho.",
      "A simplicidade é a sofisticação suprema.",
      "A generosidade é a essência da amizade.",
      "O tempo cura todas as feridas.",
      "A perseverança é a mãe do sucesso.",
      "A imaginação é mais importante que o conhecimento.",
      "A alegria é a melhor maquiagem.",
      "A paz começa com um sorriso.",
      "A ação é a chave para todo sucesso.",
      "A felicidade não é algo pronto. Ela vem de suas próprias ações.",
      "A vida é o que acontece enquanto você está ocupado fazendo outros planos.",
      "O maior prazer da vida é fazer o que as pessoas dizem que você não pode fazer.",
      "A única maneira de fazer um excelente trabalho é amar o que você faz.",
      "A medida da inteligência é a capacidade de mudar.",
      "O sucesso não é a chave para a felicidade. A felicidade é a chave para o sucesso.",
      "A verdadeira viagem de descobrimento não consiste em procurar novas paisagens, mas em ter novos olhos.",
      "A vida é como andar de bicicleta. Para manter o equilíbrio, você deve continuar se movendo.",
      "O único limite para a nossa realização de amanhã serão nossas dúvidas de hoje.",
      "A vida é 10% o que acontece com você e 90% como você reage"]
    
  }

  quebrarBiscoito(){
    let randomNumber = Math.floor(Math.random() * this.FRASES.length)
    this.setState({ 
      frase: this.FRASES[randomNumber],
      biscoitoAbrido: true
    });

  }

  render() {
    return (
      <>
        <div className="main-class-container">
          <div className="main-div-container">
            <img src={Biscoito2} className="imagem-biscoito" />
            {this.state.biscoitoAbrido ?
              <Button
              botaoFunction={this.quebrarBiscoito}
              text={<p>Abrir outro biscoito!</p>}
              classButton="emo-button"
             />
             :
              <Button
              botaoFunction={this.quebrarBiscoito}
              text={<p>Abrir biscoito</p>}
              classButton="emo-button"
              />
              }
            <h3 className="main-text">{this.state.frase}</h3>
          </div>
        </div>
      </>
    );
  }
}

export default App;
