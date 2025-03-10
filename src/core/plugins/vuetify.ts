import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import themes from './vuetify/themes';

const VuetifyPlugin = createVuetify({
  theme: {
    defaultTheme: 'light',
    themes
  },
  components,
  directives
});

export default VuetifyPlugin;
