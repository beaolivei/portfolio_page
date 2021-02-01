let myPosts = item => 
`<div class="post-box">
  <img src=${item.cover_image} />
  <div class="post-inside-div">
  <h3 class="post-title">${item.title}</h3>
  <p class="post-description"><b>${item.description}</b></p>
  <a class="cta-link xs-block-centered" href=${item.canonical_url}>See full text</a>
  </div>
</div>`;

const myData = async() => {
    const response = await fetch ('https://dev.to/api/articles?username=beaolivei');
    const JSON = await response.json();
    console.log(JSON.map((i)=> i.cover_image))
    document.querySelector("#posts")
	.innerHTML = JSON.slice(0,3).map(item => myPosts(item)).join('');
}

  window.addEventListener("load", function(event) {
   myData()
  })