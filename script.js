class hero{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    attack(){
        let ataque;
    
    switch (this.tipo.toLowerCase()) {
        case "mago":
            ataque = "magia";
            break;
    
        case "guerreiro":
            ataque = "espada";    
            break;
        case "monge":
            ataque = "artes marciais";
            break
        case "ninja":
            ataque = "shuriken";
            break;
        default:
        ataque = "ataque desconhecido";
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
    }
   function iniciarAventura(){
    const heroes = [
        new hero("merlin", 150, "Mago"),
        new hero("Arthur", 30, "Guerreiro"),
        new hero("Kharazim", 25, "Monge"),
        new hero("Isanagi", 28, "Ninja"),
    ];
    heroes.forEach((hero) => {
        hero.attack();

    });
   }
   iniciarAventura();