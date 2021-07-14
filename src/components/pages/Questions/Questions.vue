<template>
  <div class="questions">
    <form-wizard
      nextButtonText="التالى"
      backButtonText="رجوع"
      finishButtonText="إرسال"
      @on-complete="submitWizard"
    >
      <tab-content title="السؤال الأول" icon="far fa-edit">
        <div class="questions_content_wraper">
          <div class="container">11111111</div>
          <v-text-field color="success" label="E-mail" required></v-text-field>
        </div>
      </tab-content>

      <tab-content title="السؤال الثانى" icon="far fa-edit">
        <div class="questions_content_wraper">
          <div class="container">22222222</div>
        </div>
      </tab-content>

      <tab-content title="السؤال الثالث" icon="far fa-edit">
        <div class="questions_content_wraper">
          <div class="container">3333333</div>
        </div>
      </tab-content>
    </form-wizard>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    submitWizard() {
      alert("Finisheeeeeed");
    },
  },
};
</script>
