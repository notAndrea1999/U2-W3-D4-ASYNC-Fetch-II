const URL = "https://api.pexels.com/v1/search?query=ocean";
const URL2 = "https://api.pexels.com/v1/search?query=sharks";
const photoId = new URLSearchParams(window.location.search).get("photoId");

window.onload = async () => {
  const resp = await fetch(URL, {
    method: "GET",
    headers: { Authorization: "DBSGC6RMxkbaTULlDLljiYeScdPCxh8w2bFkHW9f6GTpO881NJdJZsA6" },
  });
  const list = await resp.json();

  const photos = list.photos;
  //   console.log(photos);

  photos.forEach((photo) => {
    if (photo.id === parseInt(photoId)) {
      const container = document.getElementById("container");
      container.innerHTML = `<div class="card mb-4 shadow-sm">
      <img src="${photo.src.original}" alt="">
      <div class="card-body">
        <h5 class="card-title"><a href="./details.html?photoId=${photo.id}">${photo.alt}</a></h5>
        <p class="card-text">${photo.photographer}</p>
        <p class="card-text"><a href="${photo.photographer_url}">Profilo Artista</a></p>
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
    }
  });
  const resp2 = await fetch(URL2, {
    method: "GET",
    headers: { Authorization: "DBSGC6RMxkbaTULlDLljiYeScdPCxh8w2bFkHW9f6GTpO881NJdJZsA6" },
  });
  const list2 = await resp2.json();

  const photos2 = list2.photos;
  //   console.log(photos);

  photos2.forEach((photo) => {
    if (photo.id === parseInt(photoId)) {
      const container = document.getElementById("container");
      container.innerHTML = `<div class="card mb-4 shadow-sm">
      <img src="${photo.src.original}" alt="">
      <div class="card-body">
        <h5 class="card-title"><a href="./details.html?photoId=${photo.id}">${photo.alt}</a></h5>
        <p class="card-text">${photo.photographer}</p>
        <p class="card-text"><a href="${photo.photographer_url}">Profilo Artista</a></p>
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
    }
  });
};
