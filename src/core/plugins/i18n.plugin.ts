import { isRef, nextTick } from 'vue';
import {
  createI18n,
  type Composer,
  type I18n,
  type I18nMode,
  type I18nOptions,
  type Locale,
  type VueI18n
} from 'vue-i18n';

const fileLocaleDir = import.meta.glob<{ default: Record<string, string> }>(
  '@assets/locales/*.json',
  {
    eager: true
  }
);

const SUPPORT_LOCALES = (function loadSupportLocales() {
  return Object.keys(fileLocaleDir).map(filePath => {
    // Extract the file name
    const fileNameParts = filePath.split('/');
    const fileNameWithoutPath = fileNameParts[fileNameParts.length - 1];
    const localeName = fileNameWithoutPath.split('.lang.json')[0];

    return localeName;
  });
})();

function isComposer(instance: VueI18n | Composer, mode: I18nMode): instance is Composer {
  return mode === 'composition' && isRef(instance.locale);
}

export function getLocale(i18n: I18n): string {
  if (isComposer(i18n.global, i18n.mode)) {
    return i18n.global.locale.value;
  } else {
    return i18n.global.locale;
  }
}

const I18nOptionsDefault: I18nOptions = {
  legacy: false,
  locale: 'vi',
  fallbackLocale: 'vi',
  messages: {}
};

export async function setupI18n(options: I18nOptions = I18nOptionsDefault): Promise<I18n> {
  const i18n = createI18n(options);
  await setI18nLanguage(i18n, options.locale!);
  return i18n;
}

export async function setI18nLanguage(i18n: I18n, locale: Locale): Promise<void> {
  setLocale(i18n, locale);
  document.querySelector('html')!.setAttribute('lang', locale);
}

export function setLocale(i18n: I18n, locale: Locale): void {
  if (isComposer(i18n.global, i18n.mode)) {
    i18n.global.locale.value = locale;
  } else {
    i18n.global.locale = locale;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getResourceMessages = (r: any) => r.default || r;

export async function loadLocaleMessages(i18n: I18n, locale: Locale): Promise<void> {
  const data = await import(`./locales/${locale}.json`).then(getResourceMessages);

  // set locale and locale message
  i18n.global.setLocaleMessage(locale, data);

  return nextTick();
}

export async function loadAllLocaleMessages() {
  const fileDir = import.meta.glob<{ default: Record<string, string> }>('@assets/locales/*.json');
  console.log('File Dir: ', fileDir);

  const fileDirEntries = Object.entries(fileDir);
  console.log('fileDirEntries', fileDirEntries);

  Object.entries(fileDir).map(async ([path, module]) => {
    console.log('path: ', path);
    console.log('module: ', (await module()).default);
  });

  const localePromises = SUPPORT_LOCALES.map(async locale => {
    const data = await import(`@assets/locales/${locale}.lang.json`).then(getResourceMessages);
    console.info(`Loaded messages for language ${locale}:`, data);

    return [locale, data] as const;
  });

  const loadedLocales = await Promise.all(localePromises);
  const fromEntries = Object.fromEntries(loadedLocales);

  console.log('fromEntries', fromEntries);

  return fromEntries;
}

async function setupI18nPlugin() {
  let messages = await loadAllLocaleMessages();

  return await setupI18n({
    legacy: false,
    locale: 'vi',
    fallbackLocale: 'vi',
    messages
  });
}

const i18n = await setupI18nPlugin();

export default i18n;
