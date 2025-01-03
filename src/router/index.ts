import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import i18n from '@core/plugins/i18n.plugin';

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(async to => {
  const titleKey = to.meta.title as string | undefined;

  const translatedTitle = titleKey ? i18n.global.t(titleKey.toLocaleLowerCase()) : titleKey;

  const title =
    translatedTitle && translatedTitle !== titleKey
      ? `NDTCore - ${translatedTitle}`
      : `NDTCore - ${titleKey}`;

  document.title = title;
});
export default router;
