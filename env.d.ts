/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_ENV: string;
  readonly VITE_APP_API_BASE_URL: string;
  readonly VITE_AUTH_API_BASE_URL: string;
  readonly VITE_PRODUCT_API_BASE_URL: string;
  readonly VITE_FEATURE_FLAG_X: boolean;
  readonly VITE_DEBUG_MODE: boolean;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
