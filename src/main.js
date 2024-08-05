import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader

// Vue I18n setup
import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    "Create Feature XML": "Create Feature XML",
    "Name": "Name",
    "Type": "Type",
    "Description": "Description",
    "OK": "OK",
    "Cancel": "Cancel",
    "Name is required": "Name is required",
    "Name can only contain uppercase letters, numbers, periods, underscores, and hyphens": "Name can only contain uppercase letters, numbers, periods, underscores, and hyphens",
    "Description is required": "Description is required",
    "Description cannot contain the '~' character": "Description cannot contain the '~' character"
  }
  // Add other locales if needed
};

const i18n = createI18n({
  locale: 'en', // Set the default locale
  messages, // Set the locale messages
});

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
  },
});

const app = createApp(App);
app.use(i18n);
app.use(vuetify);
app.mount('#app');
