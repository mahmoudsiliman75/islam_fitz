<template>
  <div class="questions">
    <form-wizard
      nextButtonText="التالى"
      backButtonText="رجوع"
      finishButtonText="إرسال"
      @on-complete="submitWizard"
    >
      <tab-content title=" البيانات الأساسية " icon="far fa-edit">
        <div class="questions_content_wraper">
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-6 my-3 px-5">
                <v-text-field
                  color="success"
                  label="اللإسم"
                  prepend-icon="mdi-account"
                  v-model="name"
                >
                </v-text-field>
              </div>

              <div class="col-12 col-md-6 my-3 px-5">
                <v-text-field
                  color="success"
                  label="الوزن (بالكيلو)"
                  prepend-icon="mdi-scale"
                  v-model="weight"
                >
                </v-text-field>
              </div>

              <div class="col-12 col-md-6 my-3 px-5">
                <v-text-field
                  color="success"
                  label="الطول (بالسنتيمتر)"
                  prepend-icon="mdi-ruler"
                  v-model="height"
                >
                </v-text-field>
              </div>
            </div>
          </div>
        </div>
      </tab-content>

      <tab-content title="السؤال الأول" icon="far fa-edit">
        <div class="questions_content_wraper">
          <div class="container">
            <div class="question_text_wraper">
              <h3>السؤال الأول سوف يعرض هنا</h3>
            </div>

            <ul class="answers_list">
              <li>
                <label for="answer_1">
                  <input
                    type="radio"
                    value="answer-1"
                    name="question_1"
                    id="answer_1"
                    @change="selectedAnswer"
                  />
                  <img
                    src="../../../assets/images/pics/answer.jpeg"
                    alt="Question Answer"
                  />
                </label>
              </li>

              <li>
                <label for="answer_2">
                  <input
                    type="radio"
                    value="answer-2"
                    name="question_1"
                    id="answer_2"
                    @change="selectedAnswer"
                  />
                  <img
                    src="../../../assets/images/pics/answer.jpeg"
                    alt="Question Answer"
                  />
                </label>
              </li>

              <li>
                <label for="answer_3">
                  <input
                    type="radio"
                    value="answer-3"
                    name="question_1"
                    id="answer_3"
                    @change="selectedAnswer"
                  />
                  <img
                    src="../../../assets/images/pics/answer.jpeg"
                    alt="Question Answer"
                  />
                </label>
              </li>

              <li>
                <label for="answer_4">
                  <input
                    type="radio"
                    value="answer-4"
                    name="question_1"
                    id="answer_4"
                    @change="selectedAnswer"
                  />
                  <img
                    src="../../../assets/images/pics/answer.jpeg"
                    alt="Question Answer"
                  />
                </label>
              </li>
            </ul>
          </div>
        </div>
      </tab-content>

      <tab-content title="السؤال الثانى" icon="far fa-edit">
        <div class="questions_content_wraper">
          <div class="container">22222222</div>
        </div>
      </tab-content>
    </form-wizard>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      weight: "",
      height: "",
    };
  },

  methods: {
    selectedAnswer(e) {
      // console.log(e.target.closest("label"));
      e.target.closest("label").classList.add("selected_answer");

      // console.log(e.target.closest("label").parentElement.nextSiblings);
    },

    submitWizard() {
      alert("Finisheeeeeed");
    },
  },
};
</script>
