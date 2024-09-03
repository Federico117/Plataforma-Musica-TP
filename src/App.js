import { useEffect, useState } from "react";
import estilos from "./App.css"

const artistas = [
  {id:1,nombre:'The beatles', imagen:'/imagenes/artistas/beatles.PNG'},
  {id:2,nombre:'Los Pericos',imagen:'/imagenes/artistas/lospericos.Jfif'},
  {id:3,nombre:'Turf',imagen:'/imagenes/artistas/turf.jpg'},
  {id:4,nombre:'Paul Mcartney',imagen:'/imagenes/artistas/paul-mccartney.jpg'},
  {id:5,nombre:'John Lennon',imagen:'/imagenes/artistas/johnlennon.jpg'},
  {id:6,nombre:'Bob Marley',imagen:'/imagenes/artistas/bobmarley.PNG'},
  {id:7,nombre:'Los Cafres',imagen:'/imagenes/artistas/loscafres.jpg'}
];
const subArtistas = artistas.slice(0,3);
const albums = [
  {id:1,nombre:'Quien da +', artista:artistas[6].name,imagen:'/imagenes/albums/quiendamas.jpg'},
  {id:2,nombre:'Turf single', artista:artistas[2].name,imagen:'/imagenes/albums/turfsingle.jpg'},
  {id:3,nombre:'Pampas Reggae', artista:artistas[1].name,imagen:'/imagenes/albums/pampasreggae.jpg'},
  {id:4,nombre:'Turf Show', artista:artistas[2].name,imagen:'/imagenes/albums/turfshow.png'},
  {id:5,nombre:'Help!', artista:artistas[0].name,imagen:'/imagenes/albums/help.jpg'},
  {id:6,nombre:'Mistic Love', artista:artistas[1].name,imagen:'/imagenes/albums/misticlove.jpg'},
  {id:7,nombre:'Quien da +', artista:artistas[6].name,imagen:'/imagenes/albums/quiendamas.jpg'},
  {id:8,nombre:'Kaya', artista:artistas[5].name,imagen:'/imagenes/albums/kaya.jpg'},
  {id:9,nombre:'Natty Dread', artista:artistas[5].name,imagen:'/imagenes/albums/nattydread.jpg'},
  {id:10,nombre:'Rastaman Vibration', artista:artistas[5].name,imagen:'/imagenes/albums/rastamanvibration.jpg'},
  {id:11,nombre:'Double Fantasy', artista:artistas[4].name,imagen:'/imagenes/albums/doublefantasy.jpg'},
  {id:12,nombre:'El paso gigante', artista:artistas[6].name,imagen:'/imagenes/albums/elpasogigante.jpg'},
  {id:13,nombre:'Imagine', artista:artistas[4].name,imagen:'/imagenes/albums/imagine.jpg'}
]
const canciones = [
  {id:1, nombre:'Si el amor se cae', artista:'Los Cafres',imagen:albums[6].imagen}, 
  {id:2, nombre:'Runaway', artista:artistas[1].nombre,imagen:albums[2].imagen},
  {id:3, nombre:'Kurt Cobain', artista:artistas[2].nombre,imagen:albums[1].imagen}, 
  {id:4, nombre:'Loco un poco', artista:artistas[2].nombre,imagen:albums[3].imagen},
  {id:5, nombre:'Yesterday', artista:artistas[0].nombre,imagen:albums[4].imagen}, 
  {id:6, nombre:'Pupilas Lejanas', artista:artistas[1].nombre,imagen:albums[5].imagen},
  {id:7, nombre:'Mostrame como sos', artista:artistas[6].nombre,imagen:albums[6].imagen}, 
  {id:8, nombre:'Is this love?', artista:artistas[5].nombre,imagen:albums[7].imagen},
  {id:9, nombre:'No woman no cry', artista:artistas[5].nombre,imagen:albums[8].imagen}, 
  {id:10, nombre:'War', artista:artistas[5].nombre,imagen:albums[9].imagen},
  {id:11, nombre:'Woman', artista:artistas[4].nombre,imagen:albums[10].imagen}, 
  {id:12, nombre:'Casi que me pierdo', artista:artistas[6].nombre,imagen:albums[11].imagen},
  {id:13, nombre:'Imagine', artista:artistas[4].nombre,imagen:albums[12].imagen}, 
  {id:14, nombre:'Help!', artista:artistas[0].nombre,imagen:albums[4].imagen},
  {id:15, nombre:'Sin cadenas', artista:artistas[1].nombre,imagen:albums[2].imagen}
];

function App() {
  return (
    <>
    <Header />
    <Toggle />
    
    <BarraReproduccion />
    </>
  )
}
function Toggle(){
  return (
    <div style={{display:'flex'}}>
      <div style={{width:'300px', border:'2px solid red'}}>
        <button style={{borderRadius:'15px',color:'black', width:'100%'}}>Nueva playlist</button>
        <div>Como</div>
        <div>Estamos</div>
      </div>
    {false ? <ContenedorPrincipal /> : <Formulario />}
    </div>
  )
}

function Formulario(){
  return (
    <div style={{paddingLeft:'100px', backgroundColor:'rgba(150,150,150,0.2)'}}>
      <form >
      <label htmlFor="title">Titutlo:</label><br/>
      <input type="text" id="title"/><br/>
      <label htmlFor="title">Titutlo:</label><br/>
      <input type="text" id="title"/><br/>
      <label htmlFor="title">Titutlo:</label><br/>
      <input type="text" id="title"/>
    </form>
    </div>
    
  )
}

function Header(){
  return (
    <>
      <header>
        <CirculoImgTexto foto="/imagenes/logito.png" mensaje="MUSIC" direccion="row-reverse" />
        <Buscador/>
        <CirculoImgTexto foto={artistas[4].imagen} mensaje="Valdez" direccion="row" />
      </header>
      
    </>
  )
}
function ContenedorPrincipal(){
  return (
    <div className="contenedorprincipal">
      <br/>
      <div className="barrita">
      <CirculoImgTexto foto={artistas[4].imagen} mensaje={(<h6>eschucar<br/>OTRA VEZ</h6>)} direccion="row-reverse" />
      <PrevNextButtons />
      </div>
      <section style={{flexWrap:'wrap'}}>
        <AlbumCard albumArray={canciones.slice(4,7)} ancho="300" alto="300"/>
      </section>
      <div className="barrita">
      <CirculoImgTexto foto={artistas[4].imagen} mensaje={(<h6>artistas<br/>SIMILARES</h6>)} direccion="row-reverse" />
      <PrevNextButtons />
      </div>
      <section>
        <ArtistCard arreglo={subArtistas}/>
      </section>
      <div className="barrita">
      <CirculoImgTexto foto={artistas[4].imagen} mensaje={(<h6>QUICK<br/>PICKS</h6>)} direccion="row-reverse" />
      <PrevNextButtons />
      </div>
      <section style={{flexWrap:'wrap'}}>
        <SongCard songArray={canciones} ancho="100" alto="100"/>
      </section>
      <div className="barrita">
      <CirculoImgTexto foto={artistas[4].imagen} mensaje={(<h6>ALBUMES<br/>RECOMENDADOS</h6>)} direccion="row-reverse" />
      <PrevNextButtons />
      </div>
      <section style={{flexWrap:'wrap'}}>
        <AlbumCard albumArray={albums} ancho="300" alto="300"/>
      </section>
    </div>
  )
}
function PrevNextButtons(){
  return (
    <img src="/imagenes/pngegg.png" width="80" height="40" style={{marginRight:'15px'}}/>
  )
}

function CirculoImgTexto({foto, mensaje, direccion}){
  return (
    <div className="hijoheader1" style={{flexDirection: direccion}}>
      <h3 className="leyendaImagen">{mensaje}</h3>
      <img src={foto} className="imagencirculo"/>
    </div>
  )
}
function Buscador(){
  return (
    <div>
      <input type="text" placeholder="Buscar cancion, artista o album" className="buscador" />
    </div>
  )
}

function ArtistCard({arreglo}){
  return (
    <>
      {arreglo.map(arre => (
        <article style={{ padding: '10px', margin: '10px' }}>
          <img src={arre.imagen} width="300" height="300" style={{ borderRadius: '100%', border: '3px solid white' }} />
          <h2 id="cardTitle">{arre.nombre}</h2>
        </article>
      ))}
    </>
  )
}

function SongCard({songArray, ancho, alto}){
  return (
    <>{songArray.map(arre => (
      <article className="articleSong" style={{ padding: '10px', margin: '10px', width:'300px'}}>
        <img src={arre.imagen} width={ancho} height={alto} style={{ border: '3px solid white' }} />
        <div style={{paddingLeft:'10px'}}>
        <h6 style={{fontSize:'13px'}}>Cancion:</h6>
        <h6 style={{fontSize:'15px', color:'yellow'}}>{arre.nombre}</h6>
        <h6 style={{fontSize:'13px'}}>Artista:</h6>
        <h6>{arre.artista}</h6>
        </div>
      </article>
    ))}
    </>
  )  
}

function AlbumCard({albumArray, ancho, alto}){
  return (
    <>{albumArray.map(arre => (
      <article style={{ padding: '10px', margin: '10px', width:'300px'}}>
        <img src={arre.imagen} width={ancho} height={alto} style={{ border: '3px solid white' }} />
        <h2 id="cardTitle">{arre.nombre}</h2>
      </article>
    ))}
    </>
  )
}

function BarraReproduccion(){
  return (
    <div style={{backgroundColor:'rgb(9,9,9, 0.8)', width:'100%', height:'70px', position:'fixed', bottom:'0', display:'flex', alignItems:'center'}}>
      <img src="/imagenes/playboton.png" width="60" height="60" style={{marginLeft:'160px'}}/>
      <div style={{width:'900px', height:'10px', backgroundColor:'white', margin:'auto'}}></div>
    </div>
  )
}

export default App;
