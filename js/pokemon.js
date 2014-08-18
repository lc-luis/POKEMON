//funcion que se carga al inicio para llenar la lista con los pokemon
function Pokemon (nombre, descripcion, sexo, peso, altura, especie, habilidad, vida, ataque, defensa, imagen, tipo) {
	this.nombre = nombre,
	this.tipo = tipo,
	this.descripcion = descripcion,
	this.sexo = sexo,
	this.peso = peso,
	this.altura = altura,
	this.especie = especie,
	this.habilidad = habilidad,
	this.vida = vida,
	this.ataque = ataque,
	this.defensa = defensa,
	this.imagen = imagen
};

var Arbok = new Pokemon("Arbok", "El dibujo que tiene en la panza aterroriza. Los rivales más débiles salen huyendo al verlo.", "Ambos", 65.0, 3.5, "Cobra", "Mudar / Intimidación", 100, 40, 30, "img/arbok.png", "veneno");
var Arcanine = new Pokemon("Arcanine", "Un Pokémon muy admirado desde la antigüedad por su belleza. Corre ágilmente como si tuviera alas.", "Ambos", 155.0, 1.9, "Legendario", "Intimidación / Absorbe Fuego", 100, 100, 60, "img/arcanine.png", "fuego");
var Beedrill = new Pokemon("Beedrill", "Tiene 3 aguijones venenosos en sus patas y cola. Suelen pinchar a sus enemigos repetidas veces.", "Ambos", 29.5, 1.0, "Abeja Venenosa", "Enjambre", 100, 60, 20, "img/beedrill.png", "bicho" );
var Bulbasaur = new Pokemon("Bulbasaur", "Una rara semilla le fue plantada en el lomo al nacer. La planta brota y crece con este Pokémon.", "Ambos", 6.9, 0.7, "Semilla", "Espesura", 100, 30, 20, "img/bulbasaur.png", "planta");
var Charizard = new Pokemon("Charizard", "Cuando lanza una descarga de fuego supercaliente, la roja llama de su cola brilla más intensamente.", "Ambos", 90.5, 1.7, "Llama", "Mar de Llamas", 100, 40, 30, "img/charizard.png", "fuego");
var Dugtrio = new Pokemon("Dugtrio", "En combate, cava la tierra, se esconde y sale de repente para golpear a su rival. Nunca se sabe por dónde puede aparecer.", "Ambos", 33.0, 0.7, "Topo", "Velo Arena / Trampa arena", 100, 40, 20, "img/dugtrio.png", "tierra");
var Gloom = new Pokemon("Gloom", "¡Huele bastante mal! De todas formas, una de cada mil personas aprecian su fétido olor.", "Ambos", 8.6, 0.8, "Hierbajo", "Clorofila", 100, 30, 30, "img/gloom.png", "planta");
var Golbat = new Pokemon("Golbat", "Cuando ataque, seguirá chupando energía de su víctima, aunque pese tanto que ya no pueda volar.", "Ambos", 55.5, 1.6, "Murciélago", "Foco Interno", 100, 40, 30, "img/golbat.png", "veneno");
var Kadabra = new Pokemon("Kadabra", "Cuando utiliza su poder psíquico, emite poderosas ondas alfa que pueden destruir dispositivos.", "Ambos", 56.5, 1.3, "Psi", "Foco Interno / Sincronía", 100, 20, 20, "img/kadabra.png", "psiquico");
var Nidoking = new Pokemon("Nidoking", "Es fácil reconocerlo por tener una dura piel y un gran cuerno lleno de peligrosísimo veneno.", "Masculino", 62.0, 1.4, "Taladro", "Punto Tóxico / Rivalidad", 100, 60, 30, "img/nidoking.png", "veneno");
var Ninetales = new Pokemon("Ninetales", "Tiene nueve colas y un pelaje de color dorado. Dicen que este Pokémon llega a vivir 1000 años.", "Ambos", 19.9, 1.1, "Zorro", "Absorbe Fuego", 100, 60, 60, "img/ninetales.png","fuego");
var Onix = new Pokemon("Onix", "Cava a gran velocidad en busca de comida. Los túneles que deja son usados por los Diglett.", "Ambos", 210.0, 8.8, "Serp. Roca", "Cabeza Roca / Robustez", 100, 20, 80, "img/onix.png", "roca");
var Pidgeotto = new Pokemon("Pidgeotto", "Tiene unas garras desarrolladas. Puede atrapar un Exeggcute y transportarlo desde una distancia de casi 100 km.", "Ambos", 30.0, 1.1, "Pájaro", "Vista Lince / Tumbos", 100, 30, 30, "img/pidgeotto.png", "volador");
var Pikachu = new Pokemon("Pikachu", "Levanta su cola para vigilar los alrededores. A veces, puede ser alcanzado por un rayo en esa pose.", "Ambos", 6.0, 0.4, "Ratón", "Eletricidad Estática", 100, 30, 20, "img/pikachu.png", "electrico");
var Primeape = new Pokemon("Primeape", "Solo se calma cuando nadie está cerca. Llegar a ver ese momento es realmente difícil.", "Ambos", 32.0, 1, "Mono Cerdo", "Espritu´Vital / Irascible", 100, 80, 40, "img/primeape.png", "lucha");
var Squirtle = new Pokemon("Squirtle", "Se protege con su caparazón y luego contraataca lanzando agua a presión cuando tiene oportunidad.", "Ambos", 9.0, 0.5, "Tortuguita", "Torrente", 100, 30,30, "img/squirtle.png", "agua");

var listaPokemonB = [Arbok, Arcanine, Beedrill, Bulbasaur, Charizard, Dugtrio, Gloom, Golbat, Kadabra, Nidoking, Ninetales, Onix, Pidgeotto, Pikachu, Primeape, Squirtle];
var listaPokemon = ["Arbok", "Arcanine", "Beedrill", "Bulbasaur", "Charizard", "Dugtrio", "Gloom", "Golbat", "Kadabra", "Nidoking", "Ninetales", "Onix", "Pidgeotto", "Pikachu", "Primeape", "Squirtle"];
var pokemonUsuario;
var pokemonPC;
var ganador;
function cargarPokemon(pokemon)
{
	pokemonUsuario = pokemon;
	$("#contenedorBichos").removeClass("ocultar");
	$("#caja").addClass("animated fadeIn").removeClass("ocultar");
	$("#imagen").html('<img src="' + pokemon.imagen + '"/>');
	$("#nombre").html(pokemon.nombre);
	$("#tipo").html("Tipo <span>" + pokemon.tipo + "</span>");
	$("#descripcion").html(pokemon.descripcion);
	$("#altura").html("Altura <span>" + pokemon.altura + " m</span>");
	$("#peso").html("Peso <span>" + pokemon.peso + " kg</span>");
	$("#sexo").html("Sexo <span>" + pokemon.sexo + "</span>");
	$("#especie").html("Especie <span>" + pokemon.especie + "</span>");
	$("#habilidad").html("Habilidad <span>" + pokemon.habilidad + "</span>");
	$("#ataque").html('Ataque: <span>' + pokemon.ataque + '</span><br/><progress value="' + pokemon.ataque + '" max="100"></progress>');
	$("#defensa").html('Defensa: <span>' + pokemon.defensa + '</span><br/><progress value="' + pokemon.defensa + '" max="100"></progress>');
	$("#vida").html('Vida: <span>' + pokemon.vida + '</span><br/><progress value="' + pokemon.vida + '" max="100"></progress>');}

function llenarLista()
{	
	for(var i=0; i<listaPokemon.length;i++)
	{
		$("#menu ul").append("<li onclick='cargarPokemon(" + listaPokemon[i] + ")'>" + listaPokemon[i] + "</li>");
	}
	$("#intro").addClass("ocultar");
}

function aleatorio(minimo, maximo) {
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
}

function prepararCampo()
{
	$("#menu").addClass("ocultar");
	$(".contenedor").addClass("fullAncho");
	$("#caja").addClass("ocultar");
	$("#listaA").addClass("ocultar");
	$("#botonEmpezar").removeClass("botonStart").addClass("ocultar");
	$("#vs").removeClass("ocultar");
	$("#resultado").removeClass("ocultar");
	$("#contenedorMaquina").removeClass("ocultar");
	$("#contenedorUsuario").removeClass("contenedorUsuario").addClass("contenedorUsuarioB");
}
function elegirContrincante()
{
	$("#imgBola").addClass("ocultar");
	$("#botonPelear").addClass("botonStart").removeClass("ocultar");
	var numero = aleatorio(0,15);
	pokemonPC = listaPokemonB[numero];
	//var pokemonPC = Pikachu;
	$("#contenedorBichosPC").removeClass("ocultar");
	$("#imagenPC").html('<img src="' + pokemonPC.imagen + '"/>');
	$("#nombrePC").html(pokemonPC.nombre);
	$("#tipoPC").html("Tipo <span>" + pokemonPC.tipo + "</span>");
	$("#ataquePC").html('Ataque: <span>' + pokemonPC.ataque + '</span><br/><progress value="' + pokemonPC.ataque + '" max="100"></progress>');
	$("#defensaPC").html('Defensa: <span>' + pokemonPC.defensa + '</span><br/><progress value="' + pokemonPC.defensa + '" max="100"></progress>');
	$("#vidaPC").html('Vida: <span>' + pokemonPC.vida + '</span><br/><progress value="' + pokemonPC.vida + '" max="100"></progress>');

}

function ataqueUsuario()
{
	vidaMaquina = pokemonPC.vida - (pokemonUsuario.ataque - (pokemonPC.defensa / 2));
	if (vidaMaquina < 0 || vidaMaquina == 0)
		{
			vidaMaquina = 0;
			pokemonPC.vida = vidaMaquina;
			$("#vidaPC").html('Vida: <span>' + pokemonPC.vida + '</span><br/><progress value="' + pokemonPC.vida + '" max="100"></progress>');
			$("#resultado").append("<p>El ganador es: " + pokemonUsuario.nombre + "</p>");
			return true;
		}
	pokemonPC.vida = vidaMaquina;
	$("#vidaPC").html('Vida: <span>' + pokemonPC.vida + '</span><br/><progress value="' + pokemonPC.vida + '" max="100"></progress>');
	$("#resultado").append("<p>" + pokemonUsuario.nombre + " Ataca</p>");
	$("#resultado").append("<p>" + pokemonPC.nombre + " pierde " + vidaMaquina + " de vida.</p>");
	ataqueMaquina();
		
}

function ataqueMaquina()
{
	vidaUsuario = pokemonUsuario.vida - (pokemonPC.ataque - (pokemonUsuario.defensa / 2));
	if (vidaUsuario < 0 || vidaUsuario == 0)
		{
			vidaUsuario = 0;
			pokemonUsuario.vida = vidaUsuario;
			$("#vida").html('Vida: <span>' + pokemonUsuario.vida + '</span><br/><progress value="' + pokemonUsuario.vida + '" max="100"></progress>');
			$("#resultado").append("<p>El ganador es: " + pokemonPC.nombre + "</p>");
			return true;
		} 
	pokemonUsuario.vida = vidaUsuario;
	$("#vida").html('Vida: <span>' + pokemonUsuario.vida + '</span><br/><progress value="' + pokemonUsuario.vida + '" max="100"></progress>');
	$("#resultado").append("<p>" + pokemonPC.nombre + " Ataca</p>");
	$("#resultado").append("<p>" + pokemonUsuario.nombre + " pierde " + vidaUsuario + " de vida.</p>");
	ataqueUsuario();
		

}

function luchar()
{
	$("#botonPelear").removeClass("botonStart").addClass("ocultar");
	$("#resultado").removeClass("ocultar");
	$("#resultado").append("<p>Comienza atacando " + pokemonUsuario.nombre + "</p>");
	var fin = ataqueUsuario();
	
}