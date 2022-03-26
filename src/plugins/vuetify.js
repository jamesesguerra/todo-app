import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#EF7C8E',
            secondary: '#b0bec5',
            accent: '#1C2321',
            error: '#EEF1EF',
          },
        },
      },
});
