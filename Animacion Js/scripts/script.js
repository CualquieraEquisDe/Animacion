$(document).ready(Inicio);
$(document).keydown(manejarEvento);

function Inicio(){

	lienzo = $("#lienzo")[0];
	contexto = lienzo.getContext("2d");
	buffer = document.createElement("canvas");
	balon = new Balon();
	futbolista = new Futbolista();

	animar();	

}


function animar(){

	buffer.width = lienzo.width;
	buffer.height = lienzo.height;
	contextoBuffer = buffer.getContext("2d");

	contextoBuffer.clearRect(0,0,buffer.width, buffer.height);
	futbolista.dibujar(contextoBuffer);
	balon.dibujar(contextoBuffer);
	balon.actualizar();

	

	contexto.clearRect(0,0,lienzo.width, lienzo.height);
	contexto.drawImage(buffer,0,0);

	setTimeout("animar()", 20);

}


function Balon(){


	this.x = 310;
	this.y = 200;
	this.vel = 1;
	this.img = $("#balon")[0];
	
	this.dibujar = function(ctx){
		ctx.drawImage(this.img, this.x , this.y);
	}

	this.actualizar = function(){
		this.y += this.vel;

		if (this.y + 280 >= lienzo.height || this.y <= lienzo.height/3){
			this.vel *= -1;
		}
  
	}

	this.cambiar_velocidad = function(accion){
		if(accion == "aumentar"){
		
			this.vel += 1;	

		}else{

			this.vel -= 1;

		}

	}

}

function manejarEvento(event){
	
	if(event.which == 38){

		balon.cambiar_velocidad("aumentar");
	}

	if(event.which == 40){

		balon.cambiar_velocidad("disminuir");
	}		

}

function Futbolista(){

	this.x = 200;
	this.y = 150;
	this.img = $("#futbolista")[0];
	
	this.dibujar = function(ctx){
		ctx.drawImage(this.img, this.x , this.y);
	}	

}