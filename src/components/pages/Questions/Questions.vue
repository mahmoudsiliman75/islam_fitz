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
                  label="رقم الهاتف"
                  prepend-icon="mdi-phone"
                  v-model="phone"
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

      <tab-content
        v-for="question in questions"
        :key="question.id"
        :title="question.question_title"
        icon="far fa-edit"
      >
        <div class="questions_content_wraper">
          <div class="container">
            <div class="question_text_wraper">
              <h3>{{ question.question }}</h3>
            </div>

            <ul class="answers_list">
              <li
                v-for="answer in question.answer"
                :key="answer.id"
                :class="selected_answer == answer.id ? 'selected_answer' : ''"
              >
                <label :for="answer.id">
                  <input
                    type="radio"
                    :value="answer.answer.id"
                    name="answer"
                    :id="answer.id"
                    @change="selectedAnswer(answer.id)"
                  />
                  <img
                    :src="answer.answer.answer"
                    :alt="answer.answer.answer_title"
                  />
                </label>
              </li>
            </ul>

            <textarea
              class="form-control mt-5"
              rows="8"
              v-if="question.hasDescription == true"
            ></textarea>
          </div>
        </div>
      </tab-content>
    </form-wizard>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      selected_answer: "",

      name: "",
      weight: "",
      height: "",
      phone: "",
      answers: [],

      questions: null,
    };
  },

  methods: {
    selectedAnswer(id) {
      this.selected_answer = id;

      this.answers.push(id);
    },
    // START:: AXIOS GET QUESTIONS
    getQuestion() {
      axios
        .get("survey/another_questions", {
          params: {
            type: this.$route.params.type,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.questions = res.data;
        });
    },
    // END:: AXIOS GET QUESTIONS

    submitWizard() {
      alert("Finisheeeeeed");
    },
  },

  mounted() {
    // START:: AXIOS GET QUESTIONS
    this.getQuestion();
    // END:: AXIOS GET QUESTIONS
  },
};
</script>
