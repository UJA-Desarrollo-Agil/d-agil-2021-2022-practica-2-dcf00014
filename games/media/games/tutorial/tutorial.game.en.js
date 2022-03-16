// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>Hora de Aventuras</h1>\
		<center><img src='media/games/tutorial/llamada.jpeg' width='300px' height='300px'></center>\
        <p>Era un jueves cualquiera por la tarde, cuando de repente veo en mi teléfono la llamada de Manolo.\
		En ese momento dudo  <a href='sc'>si cogerlo</a> o <a href='nc'>no cogerlo</a>, puesto que si se lo cojo sé que al día\
		siguiente probablemente me toque ir a clase de empalme.</p>\
        \
		"
	),
	
    sc: new undum.SimpleSituation(
        "<h1>Si se lo cojo</h1>\
		<p>Descuelgo el teléfono y sin decir nada, escucho la famosa frase de mi amigo\
		Manolo: ¿Qué marcha llevamos esta noche, Piñero? A lo que yo le respondo:\
		¿Qué marcha quieres que llevemos? Entonces, Manolo me propone dos\
		opciones: <a href='liga'>echar la liga en el centro</a> o <a href='merca'>hacer botellón en el piso de Las Enfermedades</a>.</p>\
		"
			
    ),
    nc: new undum.SimpleSituation(
		"<h1>No se lo cojo</h1>\
		<center><img src='media/games/tutorial/programar.png' width='300px' height='300px'></center>\
		<p>Decido rechazar la llamada, ya que tengo que entregar una práctica para\
		la asignatura de Desarrollo Ágil. Así que aprovecho toda la noche para avanzar\
		la práctica y así tener el fin de semana lo más libre posible.\
		Tras estar un par de horas trabajando en ella, decido irme a la cama para poder estar fresco al dia siguiente\
		y poder atender en <a href='clasee'>clase</a></p>\
		"
    ),
	liga: new undum.SimpleSituation(
        "<h1>Vamos de liga</h1>\
		<center><img src='media/games/tutorial/abuelo.jpg' width='300px' height='300px'></center>\
		<p>Tras decidir ir a echar la liga al centro, nos dirigimos hacia nuestro bar favorito\
		de Jaén, El Abuelo. Tras echarnos un par de rondillas, le digo a Manolos: ¿Hacia\
		dónde nos dirigimos ahora? A lo que él me responde: ¿<a href='porrones'>Vamos a los porrones</a>\
		o <a href='kharma'>vamos directamente a Kharma sin calentar</a>?</p>\
		",
		{
			
            exit: function(character, system, to) {
                system.animateQuality("manolos", character.qualities.manolos-20);
				system.animateQuality("piñeros", character.qualities.piñeros-10);
				system.animateQuality("bManolo", character.qualities.bManolo-1);
				system.animateQuality("bPiñero", character.qualities.bPiñero-1);
            }
		}
    ),
	merca: new undum.SimpleSituation(
        "<h1>Aventura en el piso de las Enfermedades”</h1>\
		<center><img src='media/games/tutorial/jb.jpg' width='300px' height='300px'></center>\
		<p>Decidimos ir al piso de Las Enfermedades, pero primero hacemos una\
		parada en el Mercadona, para comprar una botella de JB muy buena para\
		nosotros y dos bolsas de hielo que nos han encargado para el <a href='bote'>botellón</a>.</p>\
		",
		{
            exit: function(character, system, to) {
                system.animateQuality("manolos", character.qualities.manolos-10);
				system.animateQuality("piñeros", character.qualities.piñeros-10);
            }
		}
    ),
	bote: new undum.SimpleSituation(
        "<h1>LLegamos al piso</h1>\
		<center><img src='media/games/tutorial/botellon.jpg' width='300px' height='300px'></center>\
		<p>Una vez que realizamos los encargos nos dirigimos al piso de Las Enfermedades, donde nos\
		esperan con un par de shishas y un ambientazo que te cagas.	Tras tomarnos\
		unos cuantos cubatas y de fumarnos las shishas, empezamos a discutir sobre\
		nuestra proxima aventura: si <a href='kharmaa'>irnos a Kharma</a> a cazar gatitas\
		o de seguir en el <a href='quedarsee'>piso</a> de chill.</p>\
		",
		{
			exit: function(character, system, to) {
				system.animateQuality("bManolo", character.qualities.bManolo-2);
				system.animateQuality("bPiñero", character.qualities.bPiñero-2);
            }
		}
    ),
	porrones: new undum.SimpleSituation(
        "<h1>Aventura en los porrones</h1>\
		<center><img src='media/games/tutorial/porrones.jpeg' width='300px' height='350px'></center>\
		<p>Después de echarnos la liga en la taberna, nos vamos al pub “Tijuana”, donde nuestro\
		gran amigo Carlos nos prepara un par de porrones para cada uno. Tras tomarnos\
		un par, Manolo me pregunta qué si me quiero <a href='kharma'>bajar ya para Kharma</a>, a lo que le respondo que sí,\
		pero él me responde que prefiere <a href='quedarse'>quedarse aquí</a>.</p>\
		",
		{
			exit: function(character, system, to) {
                system.animateQuality("manolos", character.qualities.manolos-10);
				system.animateQuality("piñeros", character.qualities.piñeros-30);
				system.animateQuality("bManolo", character.qualities.bManolo-1);
				system.animateQuality("bPiñero", character.qualities.bPiñero-1);
            }
		}
    ),
	kharma: new undum.SimpleSituation(
        "<h1>Aventura en Kharma</h1>\
		<center><img src='media/games/tutorial/kharmaa.jpeg' width='300px' height='350px'></center>\
		<p>Negociamos un rato nuestra próxima aventura  y decidimos bajar hacia Kharma\
		para reunirnos con nuestros colegas para empezar la caza de gatitas. Una vez\
		dentro, me da por mirar el móvil para ver la hora, cuando veo que son las 7 de\
		la mañana y recuerdo que tengo <a href='clase'>clase</a> a las 8 y media.</p>\
		",
		{
			exit: function(character, system, to) {
                system.animateQuality("manolos", character.qualities.manolos-20);
				system.animateQuality("piñeros", character.qualities.piñeros-20);
				system.animateQuality("bManolo", character.qualities.bManolo-4);
				system.animateQuality("bPiñero", character.qualities.bPiñero-4);
            }
		}
    ),
	quedarse: new undum.SimpleSituation(
        "<h1>Nuestra aventura continua en los porrones</h1>\
		<p>Tras negociar un buen rato nuestra próxima aventura, decidimos quedarnos y\
		seguir echando la liga allí. De repente dos desconocidos nos\
		dicen que nos quieren retar a un “Beer-Pong”, a lo que Manolo me pregunta <a href='aceptar'>si aceptamos</a> el\
		reto o <a href='noaceptar'>no</a>.</p>\
		"
    ),
	aceptar: new undum.SimpleSituation(
        "<h1>Aventura contra los irlandeses</h1>\
		<center><img src='media/games/tutorial/a.jpg' width='300px' height='300px'></center>\
		<p><p>Finalmente aceptamos el reto de los irlandeses y, como es de esperar, los\
		machacamos. Conseguida nuestra magnifica victoria, Carlos nos propone comenzar un\
		torneo así de improvisado, ya que muchos clientes le habían dicho que querían\
		jugar una partida. Total, que entre partida y partida vemos en el reloj del garito\
		que son las 8 y cuarto de la mañana y que en menos de 15 minutos tenemos\
		<a href='clase'>clase</a>, por lo que salimos corriendo para llegar a tiempo.</p>\
		",
		{
			exit: function(character, system, to) {
				system.animateQuality("bManolo", character.qualities.bManolo-1);
				system.animateQuality("bPiñero", character.qualities.bPiñero-2);
            }
		}
    ),
	noaceptar: new undum.SimpleSituation(
        "<h1>Aventura en el futbolin</h1>\
		<center><img src='media/games/tutorial/futbolin.jpg' width='300px' height='300px'></center>\
		<p>Tras no aceptar la partida de “Beer-pong”, decidimos ponernos a jugar unas\
		partidas al futbolín. Entre partida y porrones, escuchamos a Carlos decir que es\
		hora de cerrar, lo que eso significa que son las 7 de la mañana y que a las 8 y\
		media tenemos <a href='clase'>clase de Desarrollo Ágil</a>, por lo que decimos finalizar nuestra\
		gran noche de aventuras.</p>",
		{
			exit: function(character, system, to) {
				system.animateQuality("bManolo", character.qualities.bManolo-2);
				system.animateQuality("bPiñero", character.qualities.bPiñero-1);
            }
		}
    ),
	kharmaa: new undum.SimpleSituation(
        "<h1>Aventura en Kharma</h1>\
		<center><img src='media/games/tutorial/kharmaa.jpeg' width='300px' height='350px'></center>\
		<p>Con el cubata en mano, decidimos irnos a Kharma en busca de gatitas. Tras\
		llevar un buen rato en la discoteca dándolo todo y diciéndole a las gatitas:\
		¿Nena, que vacuna me llevas? Veo que nos echan las luces, lo que eso significa que\
		ya son las 7 de la mañana y en menos de hora y media tenemos <a href='clase'>clase</a>.</p>",
		{
		exit: function(character, system, to) {
                system.animateQuality("manolos", character.qualities.manolos-30);
				system.animateQuality("piñeros", character.qualities.piñeros-30);
				system.animateQuality("bManolo", character.qualities.bManolo-2);
				system.animateQuality("bPiñero", character.qualities.bPiñero-2);
            }
		}
    ),
	quedarsee: new undum.SimpleSituation(
        "<h1>Nuestra aventura continua en el piso</h1>\
		<center><img src='media/games/tutorial/botelloon.jpeg' width='300px' height='350px'></center>\
		<p>Tras hablar de nuestra próxima aventura, decidimos continuar nuestra noche\
		en el piso inflándonos a cubatas y con las cachimbas, cuando de repente llaman\
		a la puerta… ¡Era la policía! Venía porque los vecinos la habían llamado debido\
		al nivel de ruido que estábamos formando. Total, que nos habian puesto un pedazo de <a href='multa'>multa</a> del copón.</p>\
		",
		{
			exit: function(character, system, to) {
                system.animateQuality("manolos", character.qualities.manolos-90);
				system.animateQuality("piñeros", character.qualities.piñeros-90);
				system.animateQuality("bManolo", character.qualities.bManolo-4);
				system.animateQuality("bPiñero", character.qualities.bPiñero-4);
				system.setCharacterText("<p>QUE BUENA MULTA NOS HEMOS LLEVADO.</p>");
            }
		}
    ),
	multa: new undum.SimpleSituation(
        "<h1>LA MULTA</h1>\
		<center><img src='media/games/tutorial/multa.jpeg' width='300px' height='350px'></center>\
		<p><center><a href='./recuerdo' class='once'>GRAN RECUERDO DE UNA NOCHE INOLVIDABLE</a></center></p>.\
		<p>Tras dar nuestros datos personales y finalizar nuestra gran noche, recogimos nuestras cosas y nos fuimos para <a href='clase'>clase de \
		Desarrollo Ágil</a>.</p>",
		{
			actions: {
					'recuerdo': function( character, system, action) {
						system.setCharacterText( "<p>AIBAAAA QUE NOS HEMOS QUEDADO PELADOOOOSSS.</p>" );
					}
				},
			exit: function(character, system, to) {
					system.setCharacterText("<p>QUE BUENA MULTA NOS HEMOS LLEVADO.</p>");
				}
			}		
    ),
	clase: new undum.SimpleSituation(
        "<h1>Aventura en la UJA</h1>\
		<center><img src='media/games/tutorial/clase.jpeg' width='300px height='350px'></center>\
		<p>Finalmente llegamos a clase y nos ponemos a atender a clase como unos buenos estudiantes ejemplares.</p>\
		<br></br>\
		<center><h1>FIN DE LA HISTORIA</h1></center>"	
    ),
	clasee: new undum.SimpleSituation(
        "<h1>Aventura en la UJA</h1>\
		<center><img src='media/games/tutorial/clasee.jpg' width='300px height='350px'></center>\
		<p>Al dia siguiente me despierto y me dirijo hacia la UJA para asistir a clase de Desarrollo Ágil,\
		donde por el camino me cruzo con mi amigo Manolo y le digo: ¡MENOS MAL QUE NO SALÍ ANOCHE JAJAJAJA!\
		Finalmente llego a clase y me pongo a escuchar muy atentamente a mi gran profesor Victor.</p>\
		<br></br>\
		<center><h1>FIN DE LA HISTORIA</h1></center>"
    )
	
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    manolos: new undum.IntegerQuality(
        "Cartera de Manolo", {priority:"0001", group:'stats'}
    ),
	bManolo: new undum.FudgeAdjectivesQuality( // Fudge as in the FUDGE RPG
        "Salud de Manolo",
        {priority:"0002", group:'stats'}
    ),
	piñeros: new undum.NumericQuality(
        "Cartera de Piñero", {priority:"0003", group:'stats'}
    ),
	bPiñero: new undum.FudgeAdjectivesQuality( // Fudge as in the FUDGE RPG
        "Salud de Piñero",
        {priority:"0004", group:'stats'}
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    character.qualities.manolos = 100;
	character.qualities.bManolo = 3;
    character.qualities.piñeros = 100;
	character.qualities.bPiñero = 3;
};
