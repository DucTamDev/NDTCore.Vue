// @shared/utils/console.utils.ts

export const logStyledMessage = (message: string, styles: Array<string>) => {
  console.log(`%c${message}`, styles.join(';'));
};

export class WelcomeMessage {
  private messages: Array<{ text: string; styles: Array<string> }>;

  constructor() {
    // Initialize messages with predefined styles and texts
    this.messages = [
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

    // Immediately call displayMessages when an instance is created
    // this.displayMessages();
  }

  // Method to log styled messages
  public displayMessages() {
    this.messages.forEach(({ text, styles }) => {
      logStyledMessage(text, styles);
    });
  }
}

export default new WelcomeMessage();
