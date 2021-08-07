<template>
  <div class="before_after">
    <!-- START:: LOADER -->
    <Loader v-if="isLoading" />
    <!-- END:: LOADER -->

    <div class="main_content_wraper">
      <div class="title_wraper">
        <h2>قبل و بعد</h2>
      </div>

      <div class="container">
        <div
          class="row justify-content-center"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <!-- START:: BEFORE AND AFTER CARD -->
          <div
            class="col-9 col-md-3 my-2"
            v-for="element in pageData"
            :key="element.id"
          >
            <div class="card">
              <div class="image_wraper">
                <img :src="element.image_url" />
              </div>

              <div class="card_body_wraper">
                <h5>{{ element.name }}</h5>
                <div class="description">
                  {{ element.description }}
                </div>
              </div>
            </div>
          </div>
          <!-- END:: BEFORE AND AFTER CARD -->

          <div class="col-12">
            <div class="pagenation" v-if="last_page == 1">
              <ul>
                <li
                  v-for="index in last_page"
                  :class="index === currentPage ? 'active' : ''"
                  :key="index"
                  @click="indexNumber(index)"
                >
                  {{ index }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "../../ui/LoaderScreen.vue";

export default {
  name: "BeforeAndAfter",

  components: {
    Loader,
  },

  data() {
    return {
      isLoading: true,

      pageData: [],

      last_page: "",
      currentPage: "",
      pageNum: "",
    };
  },

  methods: {
    controleBackGround() {
      const target = document.querySelector(".before_after");
      target.addEventListener("mousemove", (e) => {
        let moveX = -e.pageX / 20;
        let moveY = -e.pageY / 20;
        target.style.backgroundPosition = moveX + "px " + moveY + "px";
      });
    },

    getAllData() {
      axios.get("before_after").then((res) => {
        this.isLoading = false;
        this.pageData = res.data.BeforeAndAfter;
      });
    },

    indexNumber(pageNumber) {
      if (this.currentPage !== pageNumber) {
        this.currentPage = pageNumber;
      }
    },
  },

  mounted() {
    this.isLoading = true;
    this.controleBackGround();
    this.getAllData();
  },
};
</script>

<style>
.pagenation {
  margin: auto;
}

.pagenation ul {
  padding: 0;
  text-align: center;
  direction: ltr;
  margin-bottom: 30px;
}

.pagenation li {
  display: inline-flex;
  margin: 0 5px;
  width: 35px;
  height: 35px;
  background: #1c7834;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 50px;
  font-size: 15px;
  border: 1px solid #1c7834;
  cursor: pointer;
  transition: 0.5s;
  opacity: 0.4;
  line-height: 0;
}

.pagenation li.active {
  background: #1c7834;
  color: #fff;
  opacity: 1;
}

.pagenation li:hover {
  background: #1c7834;
  color: #fff;
  transition: 0.5s;
  opacity: 1;
}
</style>
