import _ from "lodash";
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters({
      drawer: "drawer",
    }),
    /**
     *
     * @returns true if xs;
     */
    is_mobile() {
      return this.$vuetify.breakpoint.name === "xs";
    },
  },
  methods: {
    ...mapMutations({
      SET_DRAWER: "SET_DRAWER",
    }),
    /**
     *
     * @param {*} date
     * @param {*} format
     * @returns format the date // default: "DD MMMM YYYY, hh:mm"
     */
    formatDate(date, format) {
      if (format) {
        return this.$moment(date).format(format);
      } else {
        return this.$moment(date).fromNow();
      }
    },
  },
  filters: {
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();

      return value.replace(/\w+/g, _.capitalize);
    },
  },
};
