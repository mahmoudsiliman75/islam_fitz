<template>
  <div class="about_us">
    <!-- START:: UPPER SHAPE -->
    <div class="upper_shape_wraper">
      <Scratch />
    </div>
    <!-- START:: UPPER SHAPE -->

    <!-- START:: ABOUT US CONTENT -->
    <div class="container">
      <div
        class="
          row
          justify-content-center justify-content-md-between
          align-items-center
        "
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <div class="col-8 col-md-4 order-2 order-md-1">
          <div class="img_wraper">
            <img src="../../../assets/images/pics/about.png" />
          </div>
        </div>

        <div class="col-12 col-md-7 order-1 order-md-2">
          <div class="title_wraper">
            <h2>عن كابتن إسلام</h2>
          </div>

          <div class="text_wraper">
            لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو
            أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت
            انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي
            يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أريري دولار إن
            ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت
            نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون
            بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست
            لابوريوم
          </div>

          <div class="btn_wraper">
            <router-link to="/about"> إعرض المزيد </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- END:: ABOUT US CONTENT -->

    <!-- START:: LOEWR SHAPE -->
    <div class="lower_shape_wraper">
      <Scratch />
    </div>
    <!-- END:: LOWER SHAPE -->
  </div>
</template>

<script>
import Scratch from "../../ui/ScratchShape.vue";

export default {
  components: {
    Scratch,
  },
};
</script>
