const API_KEY = "api_key=6596dae5d2f1238f662384855bae491e";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const searchURL = BASE_URL + "/search/movie?" + API_KEY + "&query=";

const infoCard =
  '<div class="infocard pt-4 pb-5 shadow-card rounded-lg m-3 bg-black"><div class="w-72 h-80"><div class="spacer h-72"></div><p class="title ml-10 text-2xl mt-2.5 mx-auto font-open-sans font-normal break-words text-white">Hellofff ffff ffffffff fffffff ffff fffffffffffff fffffffffff fffffffff fffffffff ffffff ffffff</p></div></div>';

let pageNo = 1;
var currentURL = API_URL;

const getInfoLists = async (URL) => {
  const imgList = [];
  const titleList = [];
  const response = await fetch(URL);
  const data = await response.json();
  data.results.forEach((element) => {
    imgList.push(IMG_URL + element.poster_path);
    titleList.push(element.title);
  });
  return [imgList, titleList];
};

const getContentFromResponse = (ListResponse) => {
  imgList = ListResponse[0];
  titleList = ListResponse[1];
  //   console.log(imgList);
  //   console.log(titleList);
  const infoDad = document.querySelector(".infodad");
  infoDad.innerHTML = "";
  for (let i = 0; i < imgList.length; i++) {
    infoDad.innerHTML += infoCard;
  }

  let i = 0;
  const infocard = document.querySelectorAll(".infocard");
  infocard.forEach((data) => {
    data.style.backgroundImage = `url('${imgList[i]}')`;
    data.style.backgroundRepeat = "no-repeat, no-repeat";
    data.style.backgroundPosition = "center top";
    // console.log(imgList[i]);
    i++;
  });
  i = 0;
  const title = document.querySelectorAll(".title");
  //   console.log(title.);
  title.forEach((data) => {
    data.innerText = titleList[i];
    // console.log(data.clientHeight);
    // console.log(-data.clientHeight + 32);
    data.style.marginTop = `${-data.clientHeight + 32}px`;
    // data.style;
    // let margin = `${-data.clientHeight + 32}`;
    // data.stlyle = "-50px";
    i++;
  });
};

const quickSearch = document.forms["quick-search"].querySelector("input");
quickSearch.addEventListener("keyup", function (input) {
  const query = input.target.value.toLowerCase();
  pageNo = 1;
  const pageno = document.getElementById("pageno");
  pageno.innerText = pageNo;
  if (query == "") {
    currentURL = API_URL;
  } else {
    currentURL = searchURL + query;
  }
  getInfoLists(currentURL + "&page=" + `${pageNo}`).then((ListResponse) => {
    getContentFromResponse(ListResponse);
  });
});

const backward = document.getElementById("backward");
backward.addEventListener("click", function (input) {
  if (pageNo == 1) {
    return;
  }
  const pageno = document.getElementById("pageno");
  pageno.innerText = --pageNo;
  getInfoLists(currentURL + "&page=" + `${pageNo}`).then((ListResponse) => {
    getContentFromResponse(ListResponse);
  });
});

const forward = document.getElementById("forward");
forward.addEventListener("click", function (input) {
  const pageno = document.getElementById("pageno");
  pageno.innerText = ++pageNo;
  getInfoLists(currentURL + "&page=" + `${pageNo}`).then((ListResponse) => {
    getContentFromResponse(ListResponse);
  });
});

const pageno = document.getElementById("pageno");
pageno.innerText = pageNo;
getInfoLists(currentURL + "&page=" + `${pageNo}`).then((ListResponse) => {
  getContentFromResponse(ListResponse);
});
