import { createI18n } from 'vue-i18n';
import { Logger } from './logger/Logger';

// Create an empty I18n instance
const I18nPlugin = createI18n({
  locale: 'vi',
  fallbackLocale: 'en',
  messages: {}
});

const logger = new Logger();

// Function to dynamically load a locale
async function loadLocaleMessages(locale: string) {
  const messages = await import(`@assets/locales/${locale}.lang.json`);

  logger.info(`Loaded messages for language ${locale}:`, messages.default);

  // Set the messages for the specified locale
  I18nPlugin.global.locale = locale;
  I18nPlugin.global.setLocaleMessage(locale, messages.default);

  return locale;
}

// Function to switch language dynamically
const switchLocale = async (lang: string) => {
  if (!I18nPlugin.global.availableLocales.includes(lang)) {
    await loadLocaleMessages(lang);
  }
  I18nPlugin.global.locale = lang;

  // Log the language switch
  logger.info(`Language switched to ${lang}`);
};

// Lazy load the default locale
const initializeDefaultLocale = async (): Promise<void> => {
  try {
    await loadLocaleMessages('vi');
  } catch (error) {
    logger.error('Failed to load default locale messages:', error);
  }
};

// Initialize the default locale on module load
initializeDefaultLocale();

export default I18nPlugin;
