const usersWrapper = document.getElementById("users");
async function data() {
  let data;
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("Bir hata oluştu:" + err);
  }

  for (const user of data) {
    usersWrapper.innerHTML += ` <div class= "col-4 mx-auto my-1 rounded border border-3 border-warning-subtle bg-warning bg-gradient bg-opacity-75">

    <h5  class="card-title">Temel Bilgiler <i class="fa-solid fa-user"></i></h5>
<p class="card-text">İd:${user.id}</p>
<p class="card-text">name:${user.name}</p>
<p class="card-text">username: ${user.username}</p>
<hr>
<h5  class="card-title">Adress <i class="fa-solid fa-map-location-dot"></i></h5>
<div id="card_Adrs"></div>
<p class="card-text">Street:${user.address.street}</p>
<p class="card-text">Suite:${user.address.suite}</p>
<p class="card-text">City:${user.address.city}</p>
<p class="card-text">ZipCode:${user.address.zipcode}</p>
<p class="card-text">Geo: lat:${user.address.geo.lat} lng: ${user.address.geo.lng}</p>
<hr>
<h5  class="card-title">Company <i class="fa-solid fa-building-columns"></i></h5>
<div id="card_Cmpny"></div>
<p class="card-text">Company Name: ${user.company.name}</p>
<p class="card-text">Catch Phrase:${user.company.catchPhrase}</p>
<p class="card-text">Bs:${user.company.bs}</p>
<hr>
<h5  class="card-title">İletişim Bilgileri <i class="fa-solid fa-phone-volume"></i></h5>
<div id="contact"></div>
 <p class="card-text">Email: ${user.email}</p>
<p class="card-text">Phone: ${user.phone}</p>
<p class="card-text">Websitesi: ${user.phone}</p>

</div>
</div>`;
  }
}

data();
