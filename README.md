# Discord Bot 1500

## Documentation

### Overview
The Discord Bot 1500 is a powerful tool designed to enhance your Discord server's functionality. It automates tasks, engages users, and provides custom commands tailored to your server's needs.

### Setup Instructions

1. **Prerequisites**  
   Ensure you have the following installed:
   - [Node.js](https://nodejs.org/) (v14 or higher)
   - npm (Node package manager)

2. **Clone the Repository**  
   Run the following command to clone the repository:
   ```bash
   git clone https://github.com/dontcare-dev/discord-bot-1500.git
   cd discord-bot-1500
   ```

3. **Install Dependencies**  
   Use npm to install the required packages:
   ```bash
   npm install
   ```

4. **Create a Discord Bot Application**  
   - Go to the [Discord Developer Portal](https://discord.com/developers/applications).
   - Click on "New Application".
   - Name your application and save the changes.
   - Under the bot tab, click "Add Bot".
   - Copy the bot token as you'll need it for the configuration.

5. **Configuration**  
   Create a `.env` file in the root directory of the project and add the following:
   ```plaintext
   DISCORD_TOKEN=YOUR_BOT_TOKEN
   ```
   Replace `YOUR_BOT_TOKEN` with the token you copied from the Discord Developer Portal.

### Usage

1. **Run the Bot**  
   Start the bot with the following command:
   ```bash
   npm start
   ```

2. **Commands**  
   The bot supports a variety of commands:
   - `!hello`: The bot responds with a friendly greeting.
   - `!help`: Lists all the commands and how to use them.
   - `!ping`: Responds with "Pong!"
   
### Contributing

We welcome contributions! Feel free to open issues or submit pull requests. Make sure to follow the contribution guidelines.

### License

This project is licensed under the MIT License.

### Contact
For further questions, please contact the project maintainer: dontcare-dev@example.com

---  
*Last updated on 2026-02-18.*