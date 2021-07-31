<template>
  <div class="faqs">
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

export default {
  name: "Faqs",

  data() {
    return {
      text: `
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
        synth nesciunt you probably haven't heard of them accusamus labore VHS.
      `,
      faqs: null,
    };
  },

  methods: {
    // START:: GET FAQS PAGE DATA
    getFaqsData() {
      axios.get("FAQ").then((res) => {
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
