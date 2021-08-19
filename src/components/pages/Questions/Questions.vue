<template>
  <div class="questions">
    <!-- START:: LOADER -->
    <Loader v-if="isLoading" />
    <!-- END:: LOADER -->

    <div class="container">
      <h3 class="questions_main_title">
        إختار بالضبط ما هو النظام الغذائي والتدريب الأفضل بالنسبة لك
      </h3>
      <form-wizard
        nextButtonText="التالى"
        backButtonText="رجوع"
        finishButtonText="إرسال"
        @on-complete="submitWizard"
      >
        <tab-content
          title=" البيانات الأساسية "
          :before-change="mainDataValidation"
        >
          <div class="questions_content_wraper">
            <div class="row justify-content-center align-items-center">
              <div class="col-12 col-md-6">
                <div class="wraper my-5">
                  <label for="name" class="form-label"> الإسم </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    v-model.trim="name"
                    placeholder="الإسم"
                  />
                </div>

                <div class="wraper my-5">
                  <label for="phone" class="form-label"> رقم الهاتف </label>
                  <vue-phone-number-input
                    id="phone"
                    v-model="phoneNumber"
                    default-country-code="EG"
                    show-code-on-list
                    size="lg"
                    :translations="translations"
                    @update="phoneResults = $event"
                  />
                </div>
              </div>
            </div>
          </div>
        </tab-content>

        <tab-content title=" الطول " :before-change="heightValidation">
          <div class="questions_content_wraper">
            <div class="row justify-content-center align-items-center">
              <div class="col-12 col-md-6 py-5">
                <div class="wraper py-5">
                  <h3 class="text-center mb-4">قم بإختيار طولك</h3>
                  <h4 class="text-center mb-4">(cm) {{ length }}</h4>
                  <v-slider
                    v-model="length"
                    class="align-center"
                    :max="heightMax"
                    :min="heightMin"
                    hide-details
                  >
                  </v-slider>
                </div>
              </div>
            </div>
          </div>
        </tab-content>

        <tab-content title=" الوزن " :before-change="weightValidation">
          <div class="questions_content_wraper">
            <div class="row justify-content-center align-items-center">
              <div class="col-12 col-md-6 py-5">
                <div class="wraper py-5">
                  <h3 class="text-center mb-4">قم بإختيار وزنك</h3>
                  <h4 class="text-center mb-4">(kg) {{ weight }}</h4>
                  <v-slider
                    v-model="weight"
                    class="align-center"
                    :max="weightMax"
                    :min="weightMin"
                    hide-details
                  >
                  </v-slider>
                </div>
              </div>
            </div>
          </div>
        </tab-content>

        <tab-content
          v-for="question in questions"
          :key="question.id"
          :title="question.question_title"
          :before-change="questionValidation"
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
                v-model="description"
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
      phoneNumber: null,
      phoneResults: {
        formattedNumber: "",
      },

      translations: {
        countrySelectorLabel: "كود الدولة",
        phoneNumberLabel: "رقم الهاتف",
      },

      isLoading: true,

      selected_answer: "",

      questionsCount: 0,

      // START:: HEIGHT DATA
      heightMin: 0,
      heightMax: 300,
      // END:: HEIGHT DATA

      // START:: WEIGHT DATA
      weightMin: 0,
      weightMax: 300,
      // END:: WEIGHT DATA

      // START:: USER DATA
      type: this.$route.params.type,
      name: "",
      length: 0,
      weight: 0,
      answer: [],
      description: "",

      // START:: QUESTIONS DATA
      questions: null,
    };
  },

  methods: {
    // START:: SELECT ANSWER
    selectedAnswer(id) {
      this.selected_answer = id;
      this.answer.push(id);
    },
    // END:: SELECT ANSWER

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

    // START:: VALIDATION METHODS
    mainDataValidation() {
      if (
        this.name.length == 0 ||
        this.name == null ||
        this.phoneResults.formattedNumber == 0 ||
        this.phoneResults.formattedNumber == null
      ) {
        this.$swal.fire({
          position: "top-start",
          icon: "error",
          text: "يجب ملئ جميع البيانات الأساسية",
          showConfirmButton: false,
          timer: 2000,
        });
        new Audio(require("../../../assets/sounds/error.mp3")).play();
        return false;
      } else {
        return true;
      }
    },

    heightValidation() {
      if (this.length.length == 0 || this.length == null || this.length == 0) {
        this.$swal.fire({
          position: "top-start",
          icon: "error",
          text: "يجب تحديد طولك",
          showConfirmButton: false,
          timer: 2000,
        });
        new Audio(require("../../../assets/sounds/error.mp3")).play();
        return false;
      } else {
        return true;
      }
    },

    weightValidation() {
      if (this.weight.length == 0 || this.weight == null || this.weight == 0) {
        this.$swal.fire({
          position: "top-start",
          icon: "error",
          text: "يجب تحديد وزنك",
          showConfirmButton: false,
          timer: 2000,
        });
        new Audio(require("../../../assets/sounds/error.mp3")).play();
        return false;
      } else {
        return true;
      }
    },

    questionValidation() {
      console.log(this.selected_answer);
      if (
        this.selected_answer.length == 0 ||
        this.selected_answer == 0 ||
        this.selected_answer == null
      ) {
        this.$swal.fire({
          position: "top-start",
          icon: "error",
          text: "يجب إختيار إجابة للسؤال",
          showConfirmButton: false,
          timer: 2000,
        });
        new Audio(require("../../../assets/sounds/error.mp3")).play();
        return false;
      } else {
        this.selected_answer = 0;
        return true;
      }
    },
    // END:: VALIDATION METHODS

    // START:: SUBMIT DATA
    submitWizard() {
      if (
        this.answer.length == 0 ||
        this.answer.length != this.questionsCount ||
        this.answer == null
      ) {
        this.$swal.fire({
          position: "top-start",
          icon: "error",
          text: "يجب الإجابة على جميع الأسئلة",
          showConfirmButton: false,
          timer: 2000,
        });
        new Audio(require("../../../assets/sounds/error.mp3")).play();
        setTimeout(() => {
          location.reload();
        }, 1000);
        return;
      }

      this.isLoading = true;

      axios
        .post("survey/client/answer/create", {
          type: this.type,
          name: this.name,
          phone: this.phoneResults.formattedNumber,
          length: this.length,
          weight: this.weight,
          answer: this.answer,
          description: this.description,
        })
        .then((res) => {
          if (res.statusText == "Created") {
            new Audio(require("../../../assets/sounds/done.mp3")).play();

            this.$swal.fire({
              position: "top-start",
              icon: "success",
              text: "تم إرسال بياناتك الى الكابتن",
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
    // FINISH:: SUBMIT DATA
  },

  mounted() {
    // START:: AXIOS GET QUESTIONS
    this.getQuestion();
    // END:: AXIOS GET QUESTIONS
  },
};
</script>
