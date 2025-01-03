import type { App } from 'vue';

// Helper function to log styled messages
export const logStyledMessage = (message: string, styles: Array<string>) => {
  console.log(`%c${message}`, styles.join(';'));
};

export const getConsoleWidth = () => {
  return window.innerWidth; // Gets the window's width
};

const WelcomeMessagePlugin = {
  install(app: App) {
    const messages = [
      {
        text: 'Welcome to NDTCore.Vue!',
        styles: [
          'font-size: 24px',
          'font-family: monospace',
          'font-weight: bold',
          'color: green',
          'text-align: center'
        ]
      },
      {
        text: 'Hi 👋! Welcome to NDTCore.Vue website! This is a browser feature intended for developers.',
        styles: [
          'font-size: 12px',
          'font-family: monospace',
          'background: white',
          'color: blue',
          'border: 1px dashed',
          'text-align: center'
        ]
      }
    ];

    // Hiển thị thông điệp tự động khi plugin được cài đặt
    messages.forEach(({ text, styles }) => logStyledMessage(text, styles));
  }
};

export default WelcomeMessagePlugin;
