# Dependencies

| Dependencies | Version          |
|--------------|------------------|
| NodeJS       | >=v18.0.0 <=v22.x.x |
| Strapi       | v5.8.1           |

# Installation Steps

Follow the steps below to set up the project:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/keval-7span/strapi-localization.git
   cd strapi-localization
   ```

2. **Install NPM Packages**
   ```bash
   npm install
   ```

3. **Create an Environment File**
   ```bash
   cp .env.example .env
   ```

4. **Create a New Database**
   - Set up a new database in MySQL.

5. **Update Environment Variables**
   - Open the `.env` file and add your database credentials (e.g., username, password, host, etc.).

6. **Build the Admin Panel**
   ```bash
   npm run build
   ```

7. **Start the Application**
   ```bash
   npm run start
   ```

8. **Access the Strapi Admin Panel**
   - Open your browser and navigate to `http://localhost:1337/admin`.
   - Register a new account to gain access to the admin panel.

# Enable Internationalization (i18n)

To enable and configure internationalization:

1. Navigate to **Settings** in the admin panel.
2. Open the **Internationalization** tab.
3. Click on the **Add New Locale** button.
4. Choose your preferred locale from the dropdown update the display name if needed and select anyone as the default locale.

# Automation

The project includes an automation feature for internationalization:

- When an article is created in the default locale, the lifecycle hook automatically creates entries for all other configured locales.

---

### Additional Information

- Ensure that your NodeJS version is compatible with the specified range.
- Make sure MySQL is running before starting the application.
- For troubleshooting, refer to the official Strapi documentation at [Strapi Docs](https://docs.strapi.io/).

---
