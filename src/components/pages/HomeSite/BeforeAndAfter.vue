<template>
  <div class="before_after">
    <div class="title_wraper">
      <h2>قبل و بعد</h2>
    </div>

    <div class="container">
      <div
        class="row justify-content-center"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <div class="col-9 col-md-3 my-2">
          <div class="card">
            <div class="image_wraper">
              <img src="../../../assets/images/pics/beforeandafter.jpg" />
            </div>

            <div class="card_body_wraper">
              <h5>الإسم سيعرض هنا</h5>
              <div class="description">
                لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج
                أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار
                ماجنا أليكيوا
              </div>
            </div>
          </div>
        </div>

        <div class="col-9 col-md-3 my-2">
          <div class="card">
            <div class="image_wraper">
              <img src="../../../assets/images/pics/beforeandafter.jpg" />
            </div>

            <div class="card_body_wraper">
              <h5>الإسم سيعرض هنا</h5>
              <div class="description">
                لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج
                أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار
                ماجنا أليكيوا
              </div>
            </div>
          </div>
        </div>

        <div class="col-9 col-md-3 my-2">
          <div class="card">
            <div class="image_wraper">
              <img src="../../../assets/images/pics/beforeandafter.jpg" />
            </div>

            <div class="card_body_wraper">
              <h5>الإسم سيعرض هنا</h5>
              <div class="description">
                لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج
                أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار
                ماجنا أليكيوا
              </div>
            </div>
          </div>
        </div>

        <div class="col-9 col-md-3 my-2">
          <div class="card">
            <div class="image_wraper">
              <img src="../../../assets/images/pics/beforeandafter.jpg" />
            </div>

            <div class="card_body_wraper">
              <h5>الإسم سيعرض هنا</h5>
              <div class="description">
                لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج
                أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار
                ماجنا أليكيوا
              </div>
            </div>
          </div>
        </div>

        <div class="col-9 col-md-3 my-2">
          <div class="card">
            <div class="image_wraper">
              <img src="../../../assets/images/pics/beforeandafter.jpg" />
            </div>

            <div class="card_body_wraper">
              <h5>الإسم سيعرض هنا</h5>
              <div class="description">
                لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج
                أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار
                ماجنا أليكيوا
              </div>
            </div>
          </div>
        </div>

        <div class="col-9 col-md-3 my-2">
          <div class="card">
            <div class="image_wraper">
              <img src="../../../assets/images/pics/beforeandafter.jpg" />
            </div>

            <div class="card_body_wraper">
              <h5>الإسم سيعرض هنا</h5>
              <div class="description">
                لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج
                أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار
                ماجنا أليكيوا
              </div>
            </div>
          </div>
        </div>

        <div class="col-9 col-md-3 my-2">
          <div class="card">
            <div class="image_wraper">
              <img src="../../../assets/images/pics/beforeandafter.jpg" />
            </div>

            <div class="card_body_wraper">
              <h5>الإسم سيعرض هنا</h5>
              <div class="description">
                لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج
                أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار
                ماجنا أليكيوا
              </div>
            </div>
          </div>
        </div>

        <div class="col-9 col-md-3 my-2">
          <div class="card">
            <div class="image_wraper">
              <img src="../../../assets/images/pics/beforeandafter.jpg" />
            </div>

            <div class="card_body_wraper">
              <h5>الإسم سيعرض هنا</h5>
              <div class="description">
                لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج
                أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار
                ماجنا أليكيوا
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="btn_wraper">
          <router-link to="/before_and_after"> إعرض المزيد </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    controleBackGround() {
      const target = document.querySelector(".before_after");
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
