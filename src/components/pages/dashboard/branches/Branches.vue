<template>
  <div class="all_branches">
    <!-- START:: LOADER -->
    <transition name="fade" mode="in-out">
      <LoaderScreen v-if="isLoading" />
    </transition>
    <!-- END:: LOADER -->

    <!-- START:: POPUP -->
    <transition name="fade" mode="in-out">
      <div class="overlay" @click="closePopup()" v-if="popUpIsVisible">
        <div class="popUp">
          <h3 class="mb-5">{{ $t("are_you_sure") }}</h3>

          <div class="btns_wraper">
            <button class="btn btn-danger" @click="deleteBranch(itemToDelete)">
              {{ $t("delete") }}
            </button>
            <button class="btn btn-light" @click="closePopup()">
              {{ $t("cancel") }}
            </button>
          </div>
        </div>
      </div>
    </transition>
    <!-- END:: POPUP -->

    <div class="container-fluid">
      <!-- START:: BUSINESS OWNER (CENTRAL MARKET) SECTION -->
      <b-card no-body v-if="userType == 'central market'">
        <b-tabs pills card>
          <div class="btn_wraper">
            <router-link to="/addBranch">
              <img src="../../../../assets/images/icons/plus.png" />
              {{ $t("add_new_branch") }}
            </router-link>
          </div>

          <b-tab
            v-for="category in branchesCats"
            :key="category.id"
            :title="category.name"
            @click="getAllBranch(category.id)"
          >
            <b-card-text>
              <transition-group
                name="slither"
                mode="out-in"
                class="row justify-content-center justify-content-md-start px-3"
              >
                <div
                  v-for="branch in allBranches"
                  :key="branch.id"
                  class="col-10 col-md-6 col-lg-3 my-3"
                >
                  <div class="branch_card">
                    <div class="card_header">
                      <h5>{{ branch.name }}</h5>

                      <button class="btn" @click="openPopup(branch.id)">
                        <i class="far fa-trash-alt fa-lg"></i>
                      </button>
                    </div>

                    <router-link
                      :to="{ name: 'branchDetails', params: { id: branch.id } }"
                    >
                      <div class="card_body">
                        <div class="group">
                          <h6>{{ $t("branch_name") }}</h6>
                          <h6>{{ branch.name }}</h6>
                        </div>

                        <div class="group">
                          <h6>{{ $t("mobile_number") }}</h6>
                          <h6>{{ branch.mobile_number }}</h6>
                        </div>

                        <div class="group">
                          <h6>{{ $t("email") }}</h6>
                          <h6>{{ branch.email }}</h6>
                        </div>

                        <div class="group">
                          <h6>{{ $t("location") }}</h6>
                          <h6>{{ branch.location.address }}</h6>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </div>
              </transition-group>
            </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
      <!-- END:: BUSINESS OWNER (CENTRAL MARKET) SECTION -->

      <!-- START:: BUSINESS OWNER SECTION -->
      <div class="wraper" v-else>
        <div class="btn_wraper">
          <router-link to="/addBranch">
            <img src="../../../../assets/images/icons/plus.png" />
            {{ $t("add_new_branch") }}
          </router-link>
        </div>

        <transition-group
          name="slither"
          mode="out-in"
          class="row justify-content-center justify-content-md-start px-3"
        >
          <div
            v-for="branch in allBranchesWithoutId"
            :key="branch.id"
            class="col-10 col-md-6 col-lg-3 my-3"
          >
            <div class="branch_card">
              <div class="card_header">
                <h5>{{ branch.name }}</h5>

                <button class="btn" @click="openPopup(branch.id)">
                  <i class="far fa-trash-alt fa-lg"></i>
                </button>
              </div>

              <router-link
                :to="{ name: 'branchDetails', params: { id: branch.id } }"
              >
                <div class="card_body">
                  <div class="group">
                    <h6>{{ $t("branch_name") }}</h6>
                    <h6>{{ branch.name }}</h6>
                  </div>

                  <div class="group">
                    <h6>{{ $t("mobile_number") }}</h6>
                    <h6>{{ branch.mobile_number }}</h6>
                  </div>

                  <div class="group">
                    <h6>{{ $t("email") }}</h6>
                    <h6>{{ branch.email }}</h6>
                  </div>

                  <div class="group">
                    <h6>{{ $t("location") }}</h6>
                    <h6>{{ branch.location.address }}</h6>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </transition-group>
      </div>
      <!-- END:: BUSINESS OWNER SECTION -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LoaderScreen from "../../../ui/LoaderScreen.vue";

export default {
  name: "branches",
  components: {
    LoaderScreen,
  },
  data() {
    return {
      isLoading: true,

      popUpIsVisible: false,
      itemToDelete: "",

      branchesCats: [],
      activeCatId: "",
      branchesById: [],

      allBranches: [],
      allBranchesWithoutId: [],
      userType: localStorage.getItem("business_type"),
    };
  },

  methods: {
    // START:: CONTROLING POPUP
    openPopup(id) {
      this.popUpIsVisible = true;
      this.itemToDelete = id;
    },
    closePopup() {
      this.popUpIsVisible = false;
    },
    // END:: CONTROLING POPUP

    // START:: AXIOS GET BRANCHES CATEGORIES
    getBranchesCategories() {
      axios
        .get("branch_category", {
          headers: {
            "Accept-Language": localStorage.getItem("dashboard_lang"),
            "cache-control": "no-cache",
            "Content-type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setTimeout(() => {
            this.isLoading = false;
          }, 2000);

          this.branchesCats = res.data.data;
          let cats = res.data.data;
          cats.forEach((element, index) => {
            if (index == 0) {
              this.activeCatId = element.id;
            }
          });
        });
    },
    // END:: AXIOS GET BRANCHES CATEGORIES

    // START:: AXIOS GET ALL BRANCHES
    getAllBranch(id) {
      this.activeCatId = id;

      axios
        .get("vue/branch", {
          headers: {
            "Accept-Language": localStorage.getItem("dashboard_lang"),
            "cache-control": "no-cache",
            "Content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("user_token")}`,
            Accept: "application/json",
          },
          params: {
            category_id: this.activeCatId,
          },
        })
        .then((res) => {
          setTimeout(() => {
            this.isLoading = false;
          }, 2000);
          this.allBranches = res.data.data;
        });
    },
    // END:: AXIOS GET ALL BRANCHES

    // START:: AXIOS GET ALL BRANCHES WITOUT ID
    getAllBranchWithoutId() {
      axios
        .get("vue/branch", {
          headers: {
            "Accept-Language": localStorage.getItem("dashboard_lang"),
            "cache-control": "no-cache",
            "Content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("user_token")}`,
            Accept: "application/json",
          },
        })
        .then((res) => {
          setTimeout(() => {
            this.isLoading = false;
          }, 2000);
          this.allBranchesWithoutId = res.data.data;
        });
    },
    // END:: AXIOS GET ALL BRANCHES WITOUT ID

    // START:: DELETE BRANCH
    deleteBranch(id) {
      axios
        .post(
          "business_owner/branch/delete",
          { id: id },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("user_token")}`,
              "Accept-Language": localStorage.getItem("dashboard_lang"),
              "cache-control": "no-cache",
              "Content-type": "application/json",
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          this.$iziToast.success({
            message: res.data.message,
            position: "bottomCenter",
            rtl: true,
          });
          location.reload();
        })
        .catch((error) => {
          this.$iziToast.error({
            message: error.response.data.message,
            position: "bottomCenter",
            rtl: true,
          });
        });

      this.popUpIsVisible = false;
    },
    // END:: DELETE BRANCH
  },

  mounted() {
    // START:: CONTROLE SPINNER
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 2500);
    // END:: CONTROLE SPINNER

    // START:: AXIOS GET BRANCHES CATEGORIES
    this.getBranchesCategories();
    // END:: AXIOS GET BRANCHES CATEGORIES

    // START:: AXIOS GET BRANCHES ID
    setTimeout(() => {
      this.getAllBranch(this.activeCatId);
      this.getAllBranchWithoutId();
    }, 2000);
    // END:: AXIOS GET BRANCHES ID

    localStorage.removeItem("new_branch_name");
    localStorage.removeItem("new_branch_phone");

    let user_token = localStorage.getItem("user_token");
    if (!user_token) {
      this.$router.push("/login");
    }
  },
};
</script>
