<template>
  <div class="home_intro">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div
          class="col-12 col-md-7 order-2 order-md-1 my-3 my-md-0"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div class="intro_text_wraper">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            nisi temporibus, esse dolor eum, libero officiis porro possimus
            repellat quia minima doloremque enim laboriosam deleniti maiores
            deserunt expedita maxime voluptatibus nemo alias quis. Laboriosam
            aspernatur, unde quisquam nostrum dolorem obcaecati dolore fugiat
            repudiandae iste libero, fuga hic sunt nihil possimus eveniet optio
            veritatis similique tenetur a voluptate! Ratione, temporibus
            perferendis.
          </div>

          <div class="btns_wraper">
            <router-link to="/questions/type">Male</router-link>
            <router-link to="/questions/type">Female</router-link>
          </div>
        </div>

        <div
          class="col-12 col-md-4 text-center order-1 order-md-2"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <div class="img_wraper">
            <img
              src="../../../assets/images/pics/intro.png"
              alt="Intro Image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
