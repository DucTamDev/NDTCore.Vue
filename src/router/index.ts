import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import i18n from '@core/plugins/i18n.plugin';

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(async (to, from, next) => {
  const i18nInstance = await i18n.getI18n();
  const titleKey = to.meta.title as string | undefined;

  const translatedTitle = titleKey ? i18nInstance.global.t(titleKey.toLowerCase()) : titleKey;

  const title =
    translatedTitle && translatedTitle !== titleKey
      ? `NDTCore - ${translatedTitle}`
      : `NDTCore - ${titleKey}`;

  document.title = title;

  next();
});

export default router;
