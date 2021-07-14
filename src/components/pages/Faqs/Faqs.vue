<template>
  <div class="faqs">
    <div class="main_content_wraper">
      <div class="container">
        <div class="header_wraper">
          <h2>الأسئلة الشائعة</h2>
        </div>

        <div class="accordion" role="tablist">
          <div class="row justify-content-center">
            <div class="col-12 col-md-6">
              <b-card no-body class="my-2">
                <b-card-header header-tag="header" role="tab">
                  <b-button v-b-toggle.accordion-1>
                    <i class="fas fa-angle-double-left"></i>
                    السؤال الأول
                  </b-button>
                </b-card-header>
                <b-collapse
                  id="accordion-1"
                  visible
                  accordion="faqs_accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    <b-card-text>{{ text }}</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>

            <div class="col-12 col-md-6">
              <b-card no-body class="my-2">
                <b-card-header header-tag="header" role="tab">
                  <b-button v-b-toggle.accordion-2>
                    <i class="fas fa-angle-double-left"></i>
                    السؤال الثانى
                  </b-button>
                </b-card-header>
                <b-collapse
                  id="accordion-2"
                  accordion="faqs_accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    <b-card-text>{{ text }}</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>

            <div class="col-12 col-md-6">
              <b-card no-body class="my-2">
                <b-card-header header-tag="header" role="tab">
                  <b-button v-b-toggle.accordion-3>
                    <i class="fas fa-angle-double-left"></i>
                    السؤال الثالث
                  </b-button>
                </b-card-header>
                <b-collapse
                  id="accordion-3"
                  accordion="faqs_accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    <b-card-text>{{ text }}</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>

            <div class="col-12 col-md-6">
              <b-card no-body class="my-2">
                <b-card-header header-tag="header" role="tab">
                  <b-button v-b-toggle.accordion-4>
                    <i class="fas fa-angle-double-left"></i>
                    السؤال الرابع
                  </b-button>
                </b-card-header>
                <b-collapse
                  id="accordion-4"
                  accordion="faqs_accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    <b-card-text>{{ text }}</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    };
  },
};
</script>
