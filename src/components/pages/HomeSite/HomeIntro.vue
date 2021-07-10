<template>
  <div class="home_intro">
    <div class="container">
      <div class="row justify-content-between align-items-center target">
        <div
          class="col-12 col-md-7 order-2 order-md-1 my-3 my-md-0"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div class="title_wraper">
            <h1>لوريم ايبسوم دولار سيت</h1>
          </div>
          <div class="intro_text_wraper">
            لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو
            أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت
            انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي
            يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أريري دولار إن
            ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت
            نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون
            بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست
            لابوريوم
          </div>

          <div class="btns_wraper">
            <router-link to="/questions/type">ذكر</router-link>
            <router-link to="/questions/type">انثي</router-link>
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

<script>
export default {
  methods: {
    controleBackGround() {
      const target = document.querySelector(".home_intro");
      target.addEventListener("mousemove", (e) => {
        let moveX = -e.pageX / 20;
        let moveY = -e.pageY / 20;
        target.style.backgroundPosition = moveX + "px " + moveY + "px";
      });
    },
  },

  mounted() {
    this.controleBackGround();
  },
};
</script>
