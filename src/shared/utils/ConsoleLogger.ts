const WelcomeMessage: ReadonlyArray<{ text: string; styles: string[] }> = [
  {
    text: 'Welcome to NDTCore.Vue!',
    styles: ['font-size: 24px', 'font-family: monospace', 'font-weight: bold', 'color: green']
  },
  {
    text: 'Hi 👋! Welcome to NDTCore.Vue website! This is a browser feature intended for developers.',
    styles: [
      'font-size: 12px',
      'font-family: monospace',
      'background: white',
      'color: blue',
      'border: 1px dashed'
    ]
  }
];

export class ConsoleLogger {
  private messages: ReadonlyArray<{ text: string; styles: string[] }>;

  private static instance: ConsoleLogger | null = null; // Singleton Instance

  private constructor() {
    this.messages = WelcomeMessage;
  }

  // Singleton Getter to ensure only one instance exists
  public static getInstance(): ConsoleLogger {
    if (!this.instance) {
      this.instance = new ConsoleLogger();
    }
    return this.instance;
  }

  // Display styled messages in the console
  public displayWelcomeMessage(): void {
    this.messages.forEach(({ text, styles }) => {
      console.log(`%c${text}`, styles.join(';'));
    });
  }
}

// Export Singleton Instance
export default ConsoleLogger.getInstance();
