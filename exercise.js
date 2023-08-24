// fetch API
const URL = "https://api.pexels.com/v1/search?query=ocean";
const URL2 = "https://api.pexels.com/v1/search?query=sharks";

const getData = async () => {
  const response = await fetch(URL, {
    method: "GET",
    headers: {
      Authorization: "DBSGC6RMxkbaTULlDLljiYeScdPCxh8w2bFkHW9f6GTpO881NJdJZsA6",
    },
  });

  const list = await response.json();
  //   console.log(list);

  const photos = list.photos;
  //   console.log(photos);

  const row = document.getElementById("card-row");
  row.innerHTML = "";

  photos.forEach((photo) => {
    // console.log(photo.src.original);
    const col = document.createElement("div");
    col.className = "col";
    col.innerHTML = `<div class="card mb-4 shadow-sm">
    <img src="${photo.src.original}" alt="">
    <div class="card-body">
      <h5 class="card-title"><a href="./details.html?photoId=${photo.id}">${photo.photographer}</a></h5>
      <p class="card-text">
        This is a wider card with supporting text below as a natural lead-in to additional content. This
        content is a little bit longer.
      </p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
          <button type="button" onclick="hideCard(event)" class="btn btn-sm btn-outline-secondary">Hide</button>
        </div>
        <small class="text-muted">${photo.id}</small>
      </div>
    </div>
  </div>;`;

    row.appendChild(col);
  });
};

const getOtherImgs = async () => {
  const response = await fetch(URL2, {
    method: "GET",
    headers: {
      Authorization: "DBSGC6RMxkbaTULlDLljiYeScdPCxh8w2bFkHW9f6GTpO881NJdJZsA6",
    },
  });

  const list = await response.json();
  //   console.log(list);

  const photos = list.photos;
  //   console.log(photos);

  const row = document.getElementById("card-row");
  row.innerHTML = "";

  photos.forEach((photo) => {
    // console.log(photo.src.original);
    const col = document.createElement("div");
    col.className = "col";
    col.innerHTML = `<div class="card mb-4 shadow-sm">
    <img src="${photo.src.original}" alt="">
    <div class="card-body">
      <h5 class="card-title"><a href="./details.html?photoId=${photo.id}">${photo.photographer}</a></h5>
      <p class="card-text">
        This is a wider card with supporting text below as a natural lead-in to additional content. This
        content is a little bit longer.
      </p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
          <button type="button" onclick="hideCard(event)" class="btn btn-sm btn-outline-secondary">Hide</button>
        </div>
        <small class="text-muted">${photo.id}</small>
      </div>
    </div>
  </div>;`;

    row.appendChild(col);
  });
};

const hideCard = (event) => {
  event.target.closest(".col").remove();
};

const loadImg = document.getElementById("load-img");
loadImg.onclick = getData;

const loadSecondaryImg = document.getElementById("load-secondary-img");
loadSecondaryImg.onclick = getOtherImgs;
