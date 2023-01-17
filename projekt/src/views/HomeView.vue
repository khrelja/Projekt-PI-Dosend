<template>
<div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="@/assets/1.jpg" class="d-block w-100" alt="...">
      <div class="my-cap carousel-caption d-none d-md-block">
        <h1>NEW LIST</h1>
      </div>
    </div>
    <div class="carousel-item">
      <img src="@/assets/2.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="@/assets/3.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>


<style> 
.carousel-item{
  filter: blur(2px);
  filter: brightness(50%)
}
.my-cap{
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.carousel{
  position: absolute;
  top: 0;
  
}

.still{
  max-width: 100%;
  height: 500px;
  
}


</style>