import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'izitoast/dist/css/iziToast.min.css';

// my inport
import RenderGallery from './js/render-functions';
import ImageQuery from './js/pixabay-api';

const optionsSimpleLightBox = {
  captionDelay: 250,
  captionsData: 'alt',
};

function getOn() {
  form.addEventListener(`submit`, event => search(event));
}
function search(event) {
  event.preventDefault();
  if (isValidInput()) {
    gallery.loader();
    pixABay.sendQuery(searchInput, render, errorShow);
  } else {
    errorShow(`Sorry, input not valid`);
    refresh();
  }
}
function isValidInput() {
  if (input.value && input.value.length <= 100) {
    searchInput = input.value;
    return true;
  } else return false;
}

function render(feedback) {
  if (feedback.data.hits.length > 0) {
    gallery.renderItems(data);
    buildLightshow();
  } else
    errorShow(`Sorry, there are no images matching your search query. Please try again!
`);
}

function buildLightshow() {
  // let galleryLight = new SimpleLightbox('.gallery-link', optionsSimpleLightBox);
  // galleryLight.on('show.simplelightbox', function () {});
  // galleryLight.on('error.simplelightbox', function (e) {
  //   console.log(e);
  // });
  galleryLight.refresh();
}

function refresh() {
  gallery.clearGalery();
  input.value = ``;
  pixABay.refreshPage();
}
function errorShow(message) {
  let errorMessage = {
    icon: `material-icons-outlined`,
    iconColor: '#fff',
    iconText: `dangerous`,
    messageColor: `#fff`,
    color: `#ef4040`,
    position: `topRight`,
    timeout: 2000,
    theme: `dark`,
    maxWidth: `432px`,
    message,
  };
  iziToast.show(errorMessage);
}

const gallery = new RenderGallery();
const pixABay = new ImageQuery();
let galleryLight = new SimpleLightbox('.gallery-link', optionsSimpleLightBox);

const form = document.querySelector(`#search-form`);
const btn = document.querySelector(`#search-btn`);
const input = document.querySelector(`#search-input`);

let searchInput;

getOn();
