import '../styles/reset.css';
import '../styles/index.css';
import { homeApp } from './store/store';

$(function () {
  homeApp();
});

//Todo entrar en if en post para devolver el template dependiendo de si es album, song, musicvideo or arits.
//TODO incluir mensaje de error en lugar del alert.
//Todo añadir tag audio para la preescucha a los post.
//Todo funcionalidad para poder realizar la preescucha.
//Todo dar estilos a la pagina para aproximarse a vista final.
//Todo Abrir modal al pinchar sobre un titulo de post(incluir boton para añadir a favoritos).
