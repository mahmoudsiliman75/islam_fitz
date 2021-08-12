<template>
  <div class="questions">
    <!-- START:: LOADER -->
    <Loader v-if="isLoading" />
    <!-- END:: LOADER -->

    <div class="container">
      <form-wizard
        nextButtonText="التالى"
        backButtonText="رجوع"
        finishButtonText="إرسال"
        @on-complete="submitWizard"
      >
        <tab-content title=" البيانات الأساسية " icon="far fa-edit">
          <div class="questions_content_wraper">
            <div class="row">
              <div class="col-12 col-md-6 my-3 px-5">
                <v-text-field
                  color="success"
                  label="اللإسم"
                  prepend-icon="mdi-account"
                  v-model.trim="userData.name"
                >
                </v-text-field>
              </div>

              <div class="col-12 col-md-6 my-3 px-5">
                <v-text-field
                  color="success"
                  label="رقم الهاتف"
                  prepend-icon="mdi-phone"
                  v-model.trim="userData.phone"
                >
                </v-text-field>
              </div>

              <div class="col-12 col-md-6 my-3 px-5">
                <v-text-field
                  color="success"
                  label="الوزن (بالكيلو)"
                  prepend-icon="mdi-scale"
                  v-model.trim="userData.weight"
                >
                </v-text-field>
              </div>

              <div class="col-12 col-md-6 my-3 px-5">
                <v-text-field
                  color="success"
                  label="الطول (بالسنتيمتر)"
                  prepend-icon="mdi-ruler"
                  v-model.trim="userData.length"
                >
                </v-text-field>
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
                  :key="answer.answer.id"
                  :class="
                    selected_answer == answer.answer.id ? 'selected_answer' : ''
                  "
                >
                  <label :for="answer.answer.id">
                    <input
                      type="radio"
                      :value="answer.answer.id"
                      name="answer"
                      :id="answer.answer.id"
                      @change="selectedAnswer(answer.answer.id)"
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
                rows="4"
                placeholder=" ماهى طبيعة أصابتك؟ "
                v-model="userData.description"
                v-if="question.hasDescription == true"
              ></textarea>
            </div>
          </div>
        </tab-content>
      </form-wizard>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "../../ui/LoaderScreen.vue";

export default {
  components: {
    Loader,
  },

  data() {
    return {
      isLoading: true,

      selected_answer: "",

      questionsCount: 0,

      userData: {
        type: this.$route.params.type,
        name: "",
        phone: "",
        length: "",
        weight: "",
        answer: [],
        description: "",
      },

      questions: null,
    };
  },

  methods: {
    selectedAnswer(id) {
      this.selected_answer = id;
      this.userData.answer.push(id);
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
          this.isLoading = false;
          this.questions = res.data;
          this.questionsCount = res.data.length;
        });
    },
    // END:: AXIOS GET QUESTIONS

    submitWizard() {
      if (this.userData.name.length == 0 || this.userData.name == null) {
        this.$swal.fire({
          position: "top-start",
          icon: "error",
          text: "حقل الإسم لايمكن ان يكون فارغ",
          showConfirmButton: false,
          timer: 2000,
        });
        new Audio(require("../../../assets/sounds/error.mp3")).play();
        return;
      }

      if (this.userData.phone.length == 0 || this.userData.phone == null) {
        this.$swal.fire({
          position: "top-start",
          icon: "error",
          text: "حقل الهاتف لايمكن ان يكون فارغ",
          showConfirmButton: false,
          timer: 2000,
        });
        new Audio(require("../../../assets/sounds/error.mp3")).play();
        return;
      }

      if (this.userData.weight.length == 0 || this.userData.weight == null) {
        this.$swal.fire({
          position: "top-start",
          icon: "error",
          text: "حقل الوزن لايمكن ان يكون فارغ",
          showConfirmButton: false,
          timer: 2000,
        });
        new Audio(require("../../../assets/sounds/error.mp3")).play();
        return;
      }

      if (this.userData.length.length == 0 || this.userData.length == null) {
        this.$swal.fire({
          position: "top-start",
          icon: "error",
          text: "حقل الطول لايمكن ان يكون فارغ",
          showConfirmButton: false,
          timer: 2000,
        });
        new Audio(require("../../../assets/sounds/error.mp3")).play();
        return;
      }

      if (
        this.userData.answer.length == 0 ||
        this.userData.answer.length != this.questionsCount ||
        this.userData.answer == null
      ) {
        this.$swal.fire({
          position: "top-start",
          icon: "error",
          text: "يجب الإجابة على جميع الأسئلة",
          showConfirmButton: false,
          timer: 2000,
        });
        new Audio(require("../../../assets/sounds/error.mp3")).play();
        return;
      }

      this.isLoading = true;

      axios
        .post("survey/client/answer/create", this.userData)
        .then((res) => {
          if (res.statusText == "Created") {
            new Audio(require("../../../assets/sounds/done.mp3")).play();

            this.$swal.fire({
              position: "top-start",
              icon: "success",
              text: "تم إرسال الإجابات وجارى تحليلها.....",
              showConfirmButton: false,
              timer: 2000,
            });

            setTimeout(() => {
              this.isLoading = false;
              this.$router.replace("/survey_result");
            }, 2000);
          }
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
        });
    },
  },

  mounted() {
    // START:: AXIOS GET QUESTIONS
    this.getQuestion();
    // END:: AXIOS GET QUESTIONS
  },
};
</script>
