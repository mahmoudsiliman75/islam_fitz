<template>
  <div class="survey_result">
    <!-- START:: LOADER -->
    <Loader v-if="isLoading" />
    <!-- END:: LOADER -->

    <!-- START:: SURVEY RESULT CONTENT -->
    <div class="container">
      <div class="video_wraper">
        <video controls autoplay v-if="surveyResultData.video_url">
          <source :src="surveyResultData.video_url" type="video/mp4" />
          <source :src="surveyResultData.video_url" type="video/mkv" />
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
      <span> تواصل مع الكابتن </span>
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
          this.test_video = res.data[0].video_url;
          console.log(res.data[0].video_url);
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
