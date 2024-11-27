import { fileURLToPath, URL } from 'node:url';
import { ConfigEnv, defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => {
  const environment = loadEnv(mode, path.resolve(process.cwd(), 'src/environments'), '');

  // console.log(`${mode} environment: `);
  // console.log(environment);

  return {
    plugins: [vue(), vueDevTools()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
        '@core': fileURLToPath(new URL('./src/core', import.meta.url)),
        '@modules': fileURLToPath(new URL('./src/modules', import.meta.url)),
        '@shared': fileURLToPath(new URL('./src/shared', import.meta.url)),
        '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
        '@env': fileURLToPath(new URL('./src/environments', import.meta.url))
      }
    },
    envDir: 'src/environments',
    server: {
      port: 5000
    }
  };
});