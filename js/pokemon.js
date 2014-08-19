//POO Pokemon
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
//Lista de Pokemons
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
var Pablo = new Pokemon("Pablo", "Le gusta la leche y los yogures, ojo con él, es un diablillo.", "Macho", 11.0, 0.83, "Humanito", "Estufita", 100, 60,40, "img/pablo.png", "fuego");

//Variables y arrays
var listaPokemonB = [Arbok, Arcanine, Beedrill, Bulbasaur, Charizard, Dugtrio, Gloom, Golbat, Kadabra, Nidoking, Ninetales, Onix, Pidgeotto, Pikachu, Primeape, Squirtle, Pablo];
var listaPokemon = ["Arbok", "Arcanine", "Beedrill", "Bulbasaur", "Charizard", "Dugtrio", "Gloom", "Golbat", "Kadabra", "Nidoking", "Ninetales", "Onix", "Pidgeotto", "Pikachu", "Primeape", "Squirtle", "Pablo"];
var pokemonUsuario;
var pokemonPC;
var ganador;
var cantidadAtaqueMaquina = 0;
var cantidadAtaqueUsuario = 0;
var bonus = 10;
var listaBonus = ["x 0", "x 1", "x 2", "x 3"];

//Funcion que llena el menú con los pokemon
function llenarLista()
{	
	for(var i=0; i<listaPokemon.length;i++)
	{
		$("#menu ul").append("<li onclick='cargarPokemon(" + listaPokemon[i] + ")'>" + listaPokemon[i] + "</li>");
	}
	//Oculto el div intro de inicio.
	$("#intro").addClass("ocultar");
}

//Funcion que carga el Pokemon seleccionado de la lista en la pantalla.
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


//Funcion que genera un número aleatorio indicando un minimo y un maximo.
function aleatorio(minimo, maximo) {
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
}

//Funcion que quita el menú y añade el pokemon elegido a un lado y la bola de eleccion de la maquina al otro lado.
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

//Funcion que hace que la maquina seleccione un pokemon aleatorio cada vez.
function elegirContrincante()
{
	$("#imgBola").addClass("ocultar");
	$("#botonPelear").addClass("botonStart").removeClass("ocultar");
	var numero = aleatorio(0,16);
	pokemonPC = listaPokemonB[numero];
	$("#contenedorBichosPC").removeClass("ocultar");
	$("#imagenPC").html('<img src="' + pokemonPC.imagen + '"/>');
	$("#nombrePC").html(pokemonPC.nombre);
	$("#tipoPC").html("Tipo <span>" + pokemonPC.tipo + "</span>");
	$("#ataquePC").html('Ataque: <span>' + pokemonPC.ataque + '</span><br/><progress value="' + pokemonPC.ataque + '" max="100"></progress>');
	$("#defensaPC").html('Defensa: <span>' + pokemonPC.defensa + '</span><br/><progress value="' + pokemonPC.defensa + '" max="100"></progress>');
	$("#vidaPC").html('Vida: <span>' + pokemonPC.vida + '</span><br/><progress value="' + pokemonPC.vida + '" max="100"></progress>');
}

//Funcion de inicio de batalla, inicia siempre el pokemon del usuario para darle un golpe de ventaja.
function luchar()
{
	$("#botonPelear").removeClass("botonStart").addClass("ocultar");
	$("#resultado").removeClass("ocultar");
	texto = "<p>Comienza atacando " + pokemonUsuario.nombre + "</p>";
	alerta(texto, "success");
	window.setTimeout(ataqueUsuario, 5000);
}

//Funcion que analiza el golpe a dar por el pokemon del usuario segun su fuerza de ataque y la defensa del otro pokemon.
function ataqueUsuario()
{
	$("#imagen").addClass("animado");
	//CantidadAtaqueUsuario arranca con 0, en los primeros 5 ataques cabe la posibilidad segun el numero aletarorio de coger un Bonus de ataque.
	//A partir del 5 ataque para que el juego no se demore simpre saldrá un bonus por ataque.
	//El bonus puedes ser muliplicar por (0 - 1 - 2 - 3). Por lo que aveces el resultado es 0 o se queda igual, o multiplica.
	if(cantidadAtaqueUsuario > aleatorio(0,5))
	{
		numero = aleatorio(0,3);
		bonus = listaBonus[numero];
	}
	//Bonus inicia en 10, si no se ha modificado, significa que no ha habido bonus en la condicion anterior. Si se ha modificado es que hay bonus.
	if(bonus == 10)
	{
		// Sin Bonus
		fuerzaAtaqueUsuario = aleatorio((pokemonUsuario.ataque / 2), pokemonUsuario.ataque);
		texto = "<p>" + pokemonUsuario.nombre + " Ataca con una fuerza de " + fuerzaAtaqueUsuario + "</p>";
		alerta(texto, "warning");
		fuerzaDefensaMaquina = aleatorio((pokemonPC.defensa / 2), pokemonPC.defensa);
		golpe = fuerzaAtaqueUsuario - fuerzaDefensaMaquina;
	}
	else
	{
		// Con Bonus
		fuerzaAtaqueUsuario = aleatorio((pokemonUsuario.ataque / 2), pokemonUsuario.ataque);
		fuerzaAtaqueUsuario = fuerzaAtaqueUsuario * numero;
		texto = "<p>" + pokemonUsuario.nombre + " Ataca con una fuerza de " + fuerzaAtaqueUsuario + " con un BONUS de -> X " + numero + " <- .</p>";
		alerta(texto, "error");
		fuerzaDefensaMaquina = aleatorio((pokemonPC.defensa / 2), pokemonPC.defensa);
		golpe = fuerzaAtaqueUsuario - fuerzaDefensaMaquina;
	}
	//Si el resultado del golpe es mayor que cero, golpeamos.
	if (golpe > 0)
	{
		texto = "<p>" + pokemonPC.nombre + " se defiende con " + fuerzaDefensaMaquina + ". y pierde " + golpe + " de vida.</p>";
		alerta(texto, "warning");
		pokemonPC.vida = pokemonPC.vida - golpe;
	}
	//Si no, significa que el pokemon a sacado mas defensa que el ataque recibido.
	else
	{
		texto = "<p>" + pokemonPC.nombre + " se defiende con " + fuerzaDefensaMaquina + ". y rechaza el golpe.</p>";
		alerta(texto, "success");
	}
	//Aqui se analiza si el pokemon que ha recibido el golpe sige con vida o no. 
	if (pokemonPC.vida < 0 || pokemonPC.vida == 0)
		{
			//Si la vida es menor o igual a 0 es que ha perdido. Salimos del bucle.
			pokemonPC.vida = 0;
			$("#vidaPC").html('Vida: <span>' + pokemonPC.vida + '</span><br/><progress value="' + pokemonPC.vida + '" max="100"></progress>');
			texto = "<p>El ganador es: " + pokemonUsuario.nombre + "</p>";
			alerta(texto, "success");
			texto = "<p>Gana el usuario con: " + pokemonUsuario.nombre + "</p><br>Pulsa en OK para reiniciar.";
			alertaB(texto, "success");
			return true;
		}
	//Si aún le queda vida, se la quitamos y pasamos a atacar desde el otro pokemon.
	$("#vidaPC").html('Vida: <span>' + pokemonPC.vida + '</span><br/><progress value="' + pokemonPC.vida + '" max="100"></progress>');
	texto = "<p>" + pokemonPC.nombre + " se queda con " + pokemonPC.vida + " de vida.</p>";
	alerta(texto, "warning");
	$("#imagen").removeClass("animado");
	cantidadAtaqueUsuario = cantidadAtaqueUsuario + 1;
	bonus = "10";
	window.setTimeout(ataqueMaquina, 5000);
		
}

// Es identica, solo que desde el otro lado de la batalla.
function ataqueMaquina()
{
	$("#imagenPC").addClass("animado");
	if(cantidadAtaqueMaquina > aleatorio(0,5))
	{
		numero = aleatorio(0,3);
		bonus = listaBonus[numero];
	}
	if(bonus == 10)
	{
		fuerzaAtaqueMaquina = aleatorio((pokemonPC.ataque / 2), pokemonPC.ataque);
		texto = "<p>" + pokemonPC.nombre + " Ataca con una fuerza de " + fuerzaAtaqueMaquina + "</p>";
		alerta(texto, "warning");
		fuerzaDefensaUsuario = aleatorio((pokemonUsuario.defensa / 2), pokemonUsuario.defensa);
		golpe = fuerzaAtaqueMaquina - fuerzaDefensaUsuario;
	}
	else
	{
		fuerzaAtaqueMaquina = aleatorio((pokemonPC.ataque / 2), pokemonPC.ataque);
		fuerzaAtaqueMaquina = fuerzaAtaqueMaquina * numero;
		texto = "<p>" + pokemonPC.nombre + " Ataca con una fuerza de " + fuerzaAtaqueMaquina + " con un BONUS de -> X " + numero + " <- .</p>";
		alerta(texto, "error");
		fuerzaDefensaUsuario = aleatorio((pokemonUsuario.defensa / 2), pokemonUsuario.defensa);
		golpe = fuerzaAtaqueMaquina - fuerzaDefensaUsuario;
	}
	if (golpe > 0)
	{
		texto = "<p>" + pokemonUsuario.nombre + " se defiende con " + fuerzaDefensaUsuario + ". y pierde " + golpe + " de vida.</p>";
		alerta(texto, "warning");
		pokemonUsuario.vida = pokemonUsuario.vida - golpe;
	}
	else
	{
		texto = "<p>" + pokemonUsuario.nombre + " se defiende con " + fuerzaDefensaUsuario + ". y rechaza el golpe.</p>";
		alerta(texto, "success");
	}
	if (pokemonUsuario.vida < 0 || pokemonUsuario.vida == 0)
		{
			pokemonUsuario.vida = 0;
			$("#vida").html('Vida: <span>' + pokemonUsuario.vida + '</span><br/><progress value="' + pokemonUsuario.vida + '" max="100"></progress>');
			texto = "<p>El ganador es: " + pokemonPC.nombre + "</p>";
			alerta(texto, "success");
			texto = "<p>Gana la maquina con: " + pokemonPC.nombre + "</p><br>Pulsa en OK para reiniciar.";
			alertaB(texto, "success");
			return true;
		}
	$("#vida").html('Vida: <span>' + pokemonUsuario.vida + '</span><br/><progress value="' + pokemonUsuario.vida + '" max="100"></progress>');
	texto = "<p>" + pokemonUsuario.nombre + " se queda con " + pokemonUsuario.vida + " de vida.</p>";
	alerta(texto, "success");
	$("#imagenPC").removeClass("animado");
	cantidadAtaqueMaquina = cantidadAtaqueMaquina + 1;
	bonus = "10";
	window.setTimeout(ataqueUsuario, 5000);
}

//Funcion que genera alerta que desaparece a los 2 segundos con los datos de los ataques.
function alerta(texto, tipo) 
	{

        var n = noty({
            text        : texto,
            type        : tipo,
            dismissQueue: true,
            modal       : true,
            maxVisible  : 3,
            timeout     : 2000,
            layout      : 'center',
            theme       : 'defaultTheme'
        });

        console.log('html: ' + n.options.id);
    }

//Funcion que genera alerta que se queda hasta el final con un botón de OK que reinicia el juego al inicio.
function alertaB(texto, tipo) 
	{

        var n = noty({
            text        : texto,
            type        : tipo,
            dismissQueue: true,
            layout      : 'center',
            theme       : 'defaultTheme',
            buttons		: [{addClass: 'btn btn-primary', text: 'OK', onClick: function($noty){
            	$noty.close();
            	location.reload();
            }} ]
        });

        console.log('html: ' + n.options.id);
    }
