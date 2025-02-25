import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const VuetifyPlugin = createVuetify({
  theme: {
    defaultTheme: 'light'
  },
  components,
  directives
});

export default VuetifyPlugin;
