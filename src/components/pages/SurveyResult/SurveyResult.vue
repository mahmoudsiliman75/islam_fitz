<template>
  <div class="survey_result">
    <!-- START:: LOADER -->
    <Loader v-if="isLoading" />
    <!-- END:: LOADER -->

    <!-- START:: SURVEY RESULT CONTENT -->
    <div class="container">
      <div class="video_wraper">
        <video controls autoplay>
          <source :src="surveyResultData.video_url" type="video/mp4" />
        </video>
      </div>

      <div class="text_wraper">
        {{ surveyResultData.description }}
      </div>
    </div>
    <!-- END:: SURVEY RESULT CONTENT -->

    <!-- START:: WHATS APP BTN -->
    <a
      class="whats_btn"
      :href="'https://wa.me/' + surveyResultData.whatsapp_number"
    >
      <img
        src="../../../assets/images/icons/social/whatsapp.png"
        alt="Whats App"
      />
    </a>
    <!-- END:: WHATS APP BTN -->
  </div>
</template>

<script>
import axios from "axios";
import Loader from "../../ui/LoaderScreen.vue";

export default {
  name: "SurveyResult",

  components: {
    Loader,
  },

  data() {
    return {
      isLoading: true,
      surveyResultData: [],
    };
  },

  methods: {
    getSurveyResultdata() {
      axios
        .get("survey/last_page")
        .then((res) => {
          this.isLoading = false;
          this.surveyResultData = res.data[0];
        })
        .catch((error) => {
          console.log(error.data);
        });
    },
  },

  mounted() {
    this.getSurveyResultdata();
  },
};
</script>
