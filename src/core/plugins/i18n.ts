import { createI18n, type I18n, type I18nOptions } from 'vue-i18n';

const fileLocaleDir = import.meta.glob<{ default: Record<string, string> }>(
  '@assets/locales/*.json',
  {
    eager: true
  }
);

const SUPPORT_LOCALES = (function loadSupportLocales() {
  return Object.keys(fileLocaleDir).map(filePath => {
    const fileNameParts = filePath.split('/');
    const fileNameWithoutPath = fileNameParts[fileNameParts.length - 1];
    const localeName = fileNameWithoutPath.split('.lang.json')[0];

    return localeName;
  });
})();

const I18nOptionsDefault: I18nOptions = {
  legacy: false,
  locale: 'vi',
  fallbackLocale: 'vi',
  messages: {}
};

class I18nPlugin {
  private static instance: I18nPlugin | null = null;
  private i18n: I18n | null = null;

  private constructor(private options: I18nOptions = I18nOptionsDefault) {}

  // Private method to load locale messages
  private async loadLocaleMessages(): Promise<Record<string, Record<string, string>>> {
    const localePromises = SUPPORT_LOCALES.map(async locale => {
      const data = await import(`@assets/locales/${locale}.lang.json`).then(res => res.default);
      console.info(`Loaded messages for language ${locale}:`, data);

      return [locale, data] as const;
    });

    const loadedLocales = await Promise.all(localePromises);
    const fromEntries = Object.fromEntries(loadedLocales);

    return fromEntries;
  }

  // Public method to initialize i18n
  public async setupI18n(): Promise<I18n> {
    if (this.i18n) {
      return this.i18n;
    }

    const messages = await this.loadLocaleMessages();
    this.options.messages = messages;
    this.i18n = createI18n(this.options);
    return this.i18n;
  }

  public async getI18n(): Promise<I18n> {
    // Ensure the i18n instance is initialized before returning it
    if (!this.i18n) {
      await this.setupI18n();
    }

    return this.i18n!;
  }

  // Singleton pattern to get the same instance of I18nPlugin
  public static getInstance(): I18nPlugin {
    if (!I18nPlugin.instance) {
      I18nPlugin.instance = new I18nPlugin();
    }
    return I18nPlugin.instance;
  }
}

// Use the singleton instance
const i18nPlugin = I18nPlugin.getInstance();

export default i18nPlugin;
