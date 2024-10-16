import { useEffect, useRef, useState } from "react";
import estilos from "./App.css";
import AudioPlayer from "./components/AudioPlayer";

//Se agrego este comentario pendiente de entrega

const artistas = [
  { id: 1, nombre: "The beatles", imagen: "/imagenes/artistas/beatles.PNG" },
  {
    id: 2,
    nombre: "Los Pericos",
    imagen: "/imagenes/artistas/lospericos.Jfif",
  },
  { id: 3, nombre: "Turf", imagen: "/imagenes/artistas/turf.jpg" },
  {
    id: 4,
    nombre: "Paul Mcartney",
    imagen: "/imagenes/artistas/paul-mccartney.jpg",
  },
  { id: 5, nombre: "John Lennon", imagen: "/imagenes/artistas/johnlennon.jpg" },
  { id: 6, nombre: "Bob Marley", imagen: "/imagenes/artistas/bobmarley.PNG" },
  { id: 7, nombre: "Los Cafres", imagen: "/imagenes/artistas/loscafres.jpg" },
];
const subArtistas = artistas.slice(0, 3);
const albums = [
  {
    id: 1,
    nombre: "Quien da +",
    artista: artistas[6].name,
    imagen: "/imagenes/albums/quiendamas.jpg",
  },
  {
    id: 2,
    nombre: "Turf single",
    artista: artistas[2].name,
    imagen: "/imagenes/albums/turfsingle.jpg",
  },
  {
    id: 3,
    nombre: "Pampas Reggae",
    artista: artistas[1].name,
    imagen: "/imagenes/albums/pampasreggae.jpg",
  },
  {
    id: 4,
    nombre: "Turf Show",
    artista: artistas[2].name,
    imagen: "/imagenes/albums/turfshow.png",
  },
  {
    id: 5,
    nombre: "Help!",
    artista: artistas[0].name,
    imagen: "/imagenes/albums/help.jpg",
  },
  {
    id: 6,
    nombre: "Mistic Love",
    artista: artistas[1].name,
    imagen: "/imagenes/albums/misticlove.jpg",
  },
  {
    id: 7,
    nombre: "Quien da +",
    artista: artistas[6].name,
    imagen: "/imagenes/albums/quiendamas.jpg",
  },
  {
    id: 8,
    nombre: "Kaya",
    artista: artistas[5].name,
    imagen: "/imagenes/albums/kaya.jpg",
  },
  {
    id: 9,
    nombre: "Natty Dread",
    artista: artistas[5].name,
    imagen: "/imagenes/albums/nattydread.jpg",
  },
  {
    id: 10,
    nombre: "Rastaman Vibration",
    artista: artistas[5].name,
    imagen: "/imagenes/albums/rastamanvibration.jpg",
  },
  {
    id: 11,
    nombre: "Double Fantasy",
    artista: artistas[4].name,
    imagen: "/imagenes/albums/doublefantasy.jpg",
  },
  {
    id: 12,
    nombre: "El paso gigante",
    artista: artistas[6].name,
    imagen: "/imagenes/albums/elpasogigante.jpg",
  },
  {
    id: 13,
    nombre: "Imagine",
    artista: artistas[4].name,
    imagen: "/imagenes/albums/imagine.jpg",
  },
];
const canciones = [
  {
    id: 1,
    nombre: "Si el amor se cae",
    artista: "Los Cafres",
    imagen: albums[6].imagen,
  },
  {
    id: 2,
    nombre: "Runaway",
    artista: artistas[1].nombre,
    imagen: albums[2].imagen,
  },
  {
    id: 3,
    nombre: "Kurt Cobain",
    artista: artistas[2].nombre,
    imagen: albums[1].imagen,
  },
  {
    id: 4,
    nombre: "Loco un poco",
    artista: artistas[2].nombre,
    imagen: albums[3].imagen,
  },
  {
    id: 5,
    nombre: "Yesterday",
    artista: artistas[0].nombre,
    imagen: albums[4].imagen,
  },
  {
    id: 6,
    nombre: "Pupilas Lejanas",
    artista: artistas[1].nombre,
    imagen: albums[5].imagen,
  },
  {
    id: 7,
    nombre: "Mostrame como sos",
    artista: artistas[6].nombre,
    imagen: albums[6].imagen,
  },
  {
    id: 8,
    nombre: "Is this love?",
    artista: artistas[5].nombre,
    imagen: albums[7].imagen,
  },
  {
    id: 9,
    nombre: "No woman no cry",
    artista: artistas[5].nombre,
    imagen: albums[8].imagen,
  },
  {
    id: 10,
    nombre: "War",
    artista: artistas[5].nombre,
    imagen: albums[9].imagen,
  },
  {
    id: 11,
    nombre: "Woman",
    artista: artistas[4].nombre,
    imagen: albums[10].imagen,
  },
  {
    id: 12,
    nombre: "Casi que me pierdo",
    artista: artistas[6].nombre,
    imagen: albums[11].imagen,
  },
  {
    id: 13,
    nombre: "Imagine",
    artista: artistas[4].nombre,
    imagen: albums[12].imagen,
  },
  {
    id: 14,
    nombre: "Help!",
    artista: artistas[0].nombre,
    imagen: albums[4].imagen,
  },
  {
    id: 15,
    nombre: "Sin cadenas",
    artista: artistas[1].nombre,
    imagen: albums[2].imagen,
  },
];

function App() {
  const [pistaActual, setPistaActual] = useState("/audios/lospericos.mp3");

  return (
    <>
      <AudioPlayer audioSrc={pistaActual} />
      <Header />
      <Principal setPistaActual={setPistaActual} />
    </>
  );
}

function Principal({ setPistaActual }) {
  const [listplay, setListPlay] = useState([
    {
      titulo: "Clasicos",
      descripcion: "Coleccion de canciones clasicas",
      imagenUrl: albums[10].imagen,
    },
    {
      titulo: "Alegres",
      descripcion: "Colección de canciones alegres",
      imagenUrl: albums[1].imagen,
    },
    {
      titulo: "Varios",
      descripcion: "Playlist de temas variados",
      imagenUrl: albums[6].imagen,
    },
  ]);
  const [alternar, setAlternar] = useState(true);

  const [audios, setAudios] = useState([]);

  const fetchPodcastData = () => {
    fetch("https://api.audioboom.com/audio_clips")
      .then((response) => response.json())
      .then((data) => setAudios(data.body.audio_clips))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchPodcastData();
  }, []);

  return (
    <div style={{ display: "flex", width: "100vw" }}>
      <SideBar alternar={alternar} setAlternar={setAlternar}>
        {listplay.map(({ titulo, descripcion, imagenUrl }) => (
          <PlayList
            tituloPlay={titulo}
            descripPlay={descripcion}
            imagenPlay={imagenUrl}
          />
        ))}
      </SideBar>
      {alternar ? (
        <ContenedorPrincipal
          dataArray={audios}
          setPistaActual={setPistaActual}
        />
      ) : (
        <Formulario lista={listplay} setList={setListPlay} />
      )}
    </div>
  );
}
function SideBar({ alternar, setAlternar, children }) {
  function handleClick() {
    setAlternar(!alternar);
  }
  return (
    <div style={{ width: "300px" }}>
      <button type="button" className="boton-del-sitio" onClick={handleClick}>
        Nueva Playlist
      </button>
      {children}
    </div>
  );
}
function PlayList(props) {
  return (
    <div className="flex-it-center bg-playlist">
      <img src={props.imagenPlay} alt="nada" width="50" height="50" />
      <div>
        <h6 className="playlist-title">{props.tituloPlay}</h6>
        <p className="playlist-desc">{props.descripPlay}</p>
      </div>
    </div>
  );
}

function Formulario({ lista, setList }) {
  const [title, setTitulo] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrlText, setImageUrlText] = useState("");

  function handleChangeTit(event) {
    setTitulo(event.target.value);
  }
  function handleChangeDesc(event) {
    setDescription(event.target.value);
  }
  function handleChangeTextImg(event) {
    setImageUrlText(event.target.value);
  }

  function clearForm() {
    setTitulo("");
    setDescription("");
    setImageUrlText("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    const copiaLista = [...lista];
    copiaLista.push({
      titulo: title,
      descripcion: description,
      imagenUrl: imageUrlText,
    });
    console.log(copiaLista);
    setList(copiaLista);
    clearForm();
  }
  return (
    <div className="contenedor-form">
      <h3 id="cardTitle">Crea tu Playlist</h3>
      <form className="formulario" onSubmit={handleSubmit}>
        <label htmlFor="title">Titulo:</label>
        <br />
        <input
          type="text"
          id="title"
          className="input-del-sitio"
          value={title}
          onChange={handleChangeTit}
        />
        <br />

        <label htmlFor="description">Descripción:</label>
        <br />
        <input
          type="text"
          id="description"
          className="input-del-sitio"
          value={description}
          onChange={handleChangeDesc}
        />
        <br />

        <label htmlFor="urlImagen">Imagen(url):</label>
        <br />
        <input
          type="text"
          id="urlImagen"
          className="input-del-sitio"
          value={imageUrlText}
          onChange={handleChangeTextImg}
        />
        <br />

        <button
          disabled={
            (title.length < 1) |
            (description.length < 1) |
            (imageUrlText.length < 1)
          }
          type="submit"
          className="boton-del-sitio"
        >
          Agregar Playlist
        </button>
      </form>
    </div>
  );
}

function Header() {
  return (
    <>
      <header>
        <CirculoImgTexto
          foto="/imagenes/logito.png"
          mensaje="MUSIC"
          direccion="row-reverse"
        />
        <Buscador />
        <CirculoImgTexto
          foto={artistas[4].imagen}
          mensaje="Valdez"
          direccion="row"
        />
      </header>
    </>
  );
}
function ContenedorPrincipal(props) {
  return (
    <div className="contenedorprincipal">
      <br />
      <div className="barrita">
        <CirculoImgTexto
          foto={artistas[4].imagen}
          mensaje={
            <h6>
              eschucar
              <br />
              OTRA VEZ
            </h6>
          }
          direccion="row-reverse"
        />
        <PrevNextButtons />
      </div>
      <section style={{ flexWrap: "wrap" }}>
        <AlbumCard
          albumArray={props.dataArray.slice(7, 10)}
          ancho="300"
          alto="300"
          setPistaActual={props.setPistaActual}
        />
      </section>
      <div className="barrita">
        <CirculoImgTexto
          foto={artistas[4].imagen}
          mensaje={
            <h6>
              artistas
              <br />
              SIMILARES
            </h6>
          }
          direccion="row-reverse"
        />
        <PrevNextButtons />
      </div>
      <section>
        <ArtistCard arreglo={subArtistas} />
      </section>
      <div className="barrita">
        <CirculoImgTexto
          foto={artistas[4].imagen}
          mensaje={
            <h6>
              QUICK
              <br />
              PICKS
            </h6>
          }
          direccion="row-reverse"
        />
        <PrevNextButtons />
      </div>
      <section style={{ flexWrap: "wrap" }}>
        <SongCard songArray={canciones} ancho="100" alto="100" />
      </section>
      <div className="barrita">
        <CirculoImgTexto
          foto={artistas[4].imagen}
          mensaje={
            <h6>
              ALBUMES
              <br />
              RECOMENDADOS
            </h6>
          }
          direccion="row-reverse"
        />
        <PrevNextButtons />
      </div>
      <section style={{ flexWrap: "wrap" }}>
        <AlbumCard albumArray={albums} ancho="300" alto="300" />
      </section>
    </div>
  );
}
function PrevNextButtons() {
  return (
    <img
      src="/imagenes/pngegg.png"
      width="80"
      height="40"
      style={{ marginRight: "15px" }}
    />
  );
}

function CirculoImgTexto({ foto, mensaje, direccion }) {
  return (
    <div className="flex-it-center" style={{ flexDirection: direccion }}>
      <h3 className="leyendaImagen">{mensaje}</h3>
      <img src={foto} className="imagencirculo" />
    </div>
  );
}
function Buscador() {
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar cancion, artista o album"
        className="buscador"
      />
    </div>
  );
}

function ArtistCard({ arreglo, enlaceMp3 }) {
  return (
    <>
      {arreglo.map((arre) => (
        <article style={{ padding: "10px", margin: "10px" }}>
          <img
            src={arre.imagen}
            width="300"
            height="300"
            style={{ borderRadius: "100%", border: "3px solid white" }}
          />
          <h2 id="cardTitle">{arre.nombre}</h2>
        </article>
      ))}
    </>
  );
}

function SongCard({ songArray, ancho, alto }) {
  return (
    <>
      {songArray.map((arre) => (
        <article
          className="articleSong"
          style={{ padding: "10px", margin: "10px", width: "300px" }}
        >
          <img
            src={arre.imagen}
            width={ancho}
            height={alto}
            style={{ border: "3px solid white" }}
          />
          <div style={{ paddingLeft: "10px" }}>
            <h6 style={{ fontSize: "13px" }}>Cancion:</h6>
            <h6 style={{ fontSize: "15px", color: "yellow" }}>{arre.nombre}</h6>
            <h6 style={{ fontSize: "13px" }}>Artista:</h6>
            <h6>{arre.artista}</h6>
          </div>
        </article>
      ))}
    </>
  );
}

function AlbumCard({ albumArray, ancho, alto, enlaceMp3, setPistaActual }) {
  return (
    <>
      <h1></h1>
      {albumArray.map((arre, indice) => {
        const imagenPortada = arre?.channel?.urls?.logo_image?.original;
        console.log(imagenPortada);
        return (
          <SingleAlbumCard
            recurso={arre}
            ancho="300"
            alto="300"
            imagen={imagenPortada ? imagenPortada : "/imagenes/no-image.svg"}
            setPistaActual={setPistaActual}
          />
        );
      })}
    </>
  );
}
function SingleAlbumCard({ recurso, imagen, ancho, alto, setPistaActual }) {
  const recursoMp3 = useRef(null);

  useEffect(() => {
    recursoMp3.current = recurso?.urls?.high_mp3;
  });

  function manipularClick() {
    //aca deberiamos modificar el estado del reproductor con su setState pasado por props
    setPistaActual(recursoMp3.current);
  }

  return (
    <article
      style={{
        padding: "10px",
        margin: "10px",
        width: "300px",
        cursor: "pointer",
      }}
      onClick={manipularClick}
    >
      <img
        src={imagen}
        width={ancho}
        height={alto}
        style={{ border: "3px solid white" }}
      />
      <h2 id="cardTitle">{recurso.title}</h2>
    </article>
  );
}

function BarraReproduccion() {
  return (
    <div
      style={{
        backgroundColor: "rgb(9,9,9, 0.8)",
        width: "100%",
        height: "70px",
        position: "fixed",
        bottom: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src="/imagenes/playboton.png" width="60" height="60" />
      <div
        style={{
          width: "900px",
          height: "10px",
          backgroundColor: "white",
          marginLeft: "20px",
        }}
      >
        <div
          style={{
            width: "300px",
            height: "10px",
            backgroundColor: "green",
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
