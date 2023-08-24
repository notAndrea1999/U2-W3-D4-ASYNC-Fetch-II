const URL = "https://api.pexels.com/v1/search?query=tiger/";
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
    if (photo.id === photoId) {
      const container = document.getElementById("container");
      container.innerHTML = `<div class="card mb-4 shadow-sm">
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
    }
  });
};
