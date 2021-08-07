<template>
  <div class="faqs">
    <!-- START:: LOADER -->
    <Loader v-if="isLoading" />
    <!-- END:: LOADER -->

    <div class="main_content_wraper">
      <div class="container">
        <div class="header_wraper">
          <h2>الأسئلة الشائعة</h2>
        </div>

        <div class="accordion" id="faqs_accordion">
          <div class="row justify-content-center">
            <div
              class="col-12 col-md-6"
              v-for="(faq, index) in faqs"
              :key="faq.id"
            >
              <div class="accordion-item">
                <h2 class="accordion-header" :id="faq.id">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="'#collapse' + faq.id"
                    aria-expanded="true"
                    :aria-controls="'collapse' + faq.id"
                  >
                    {{ faq.question }}
                  </button>
                </h2>
                <div
                  :id="'collapse' + faq.id"
                  class="accordion-collapse collapse"
                  :class="{ show: index == 0 }"
                  :aria-labelledby="faq.id"
                  data-bs-parent="#faqs_accordion"
                >
                  <div class="accordion-body">
                    {{ faq.answer }}
                  </div>
                </div>
              </div>
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
  name: "Faqs",

  components: {
    Loader,
  },

  data() {
    return {
      isLoading: true,

      faqs: [],
    };
  },

  methods: {
    // START:: GET FAQS PAGE DATA
    getFaqsData() {
      axios.get("FAQ").then((res) => {
        this.isLoading = false;
        this.faqs = res.data;
      });
    },
    // END:: GET FAQS PAGE DATA
  },

  mounted() {
    // START:: FAQS PAGE DATA
    this.getFaqsData();
    // END:: FAQS PAGE DATA
  },
};
</script>
