# Yulgang Website (ENGLISH)
**Website URL:** [https://yulgang-web.vercel.app/](https://yulgang-web.vercel.app/)
![Yulgang Website Banner](banner.png)

## Introduction

Yulgang Website is a modern web application built with Next.js, Next-auth, Drizzle ORM, and MySQL. It serves as the official homepage for Yulgang, an online game loved by many gamers around the world. This repository contains the source code and configurations for the website.

### Completed Features:

- **Interactive and Responsive UI**: The website offers a visually appealing and user-friendly interface that adapts seamlessly to different devices and screen sizes.

- **Authentication and User Management**: Users can create accounts, log in, and enjoy personalized experiences with Next-auth providing secure authentication.

- **Game Information**: Provides detailed information about Yulgang, including character classes, game updates, events, and more.

- **Community Forums**: Engage with other players in lively discussions on the community forums, fostering a sense of camaraderie among Yulgang enthusiasts.

- **News and Announcements**: Keep players informed about the latest game news, updates, and announcements to enhance their gaming experience.

- **Character Page**: A dedicated page to showcase detailed information about every character in Yulgang. Players can explore stats, skills, and equipment for each character class.

- **Item Showcase**: Provides an in-depth catalog of in-game items, their properties, and uses, enabling players to strategize their gameplay effectively.

- **Buff Information**: Gives players insights into different buffs available in the game, their effects, and how to obtain them for enhancing character performance.

- **Login** : (Using HKPro ID, all passwords are 123456).

- **Ranking**: View detailed character information, various types of pills, remaining time, information about equipped items, and more.


### Features in Progress:

- Admin Dashboard:
  - News Management.
  - Adding items to NPCs.
  - Managing and changing skills.
  - Managing item drops.
  - Adding NPCs and Monsters with an intuitive interface. Clicking on a random point generates surrounding monsters.
  - Managing item logs. Monitor how any item was obtained from which monster, its enhancement process, trades, etc.
  - Managing character logs. View activity details of any specific character.

## Technologies Used

- Next.js
- Drizzle ORM
- MySql

## Database

The demo web database is extracted from HKPro. The current database is running on MySql, which was migrated from the original MSSQL database. If you intend to use this for production, you will need to create a separate model for MSSQL.

## Join and Contribute

The project will continue to be developed and improved through contributions from the community. If you are a developer, you can access the [GitHub repository](https://github.com/1l4e/yulgang-web) to view the source code and contribute your ideas or participate in the development.

Thank you for your support and contributions!
![Yulgang Character Showcase](banner2.png)
## Tech Stack

- **Next.js**: A powerful React framework for building server-rendered and static websites, providing a seamless development experience.

- **Next-auth**: A simple authentication library for Next.js that supports various authentication providers for secure user login and sessions.

- **Drizzle ORM**: An intuitive and efficient ORM (Object-Relational Mapping) that simplifies database interactions and enhances data management.

- **MySQL**: A robust and widely-used open-source relational database system for storing and retrieving game-related data.

## Getting Started

### Prerequisites

- Node.js and npm installed on your system.
- Nginx to Serve Next.js App
- MySQL database server set up.
- The Mysql database used for this web is a migrated version from MSSQL on the real server. You can use MSSQL instead of Mysql to run in production.

### Installation

1. Clone the repository to your local machine.

```bash
git clone https://github.com/1l4e/yulgang-web.git
```

2. Navigate to the project directory.

```bash
cd yulgang-web
```

3. Install dependencies.

```bash
npm install
```

4. Create a `.env` file and configure the required environment variables.

```
DATABASE_URL=mysql://your_username:your_password@localhost:3306/yulgang_db
DATABASE_USERNAME=your_username
DATABASE_HOST=localhost
DATABASE_PASSWORD=your_password
DATABASE=yulgang_db
NEXTAUTH_SECRET=
PUBLIC_HOME=
```

5. Run the development server.

```bash
npm run dev
```

6. Open your web browser and visit `http://localhost:3000` to see the Yulgang Website in action!

## Contributing

We welcome contributions to enhance and improve the Yulgang Website. If you find any bugs, have feature suggestions, or want to contribute code, please follow our [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to explore, test, and contribute to the Yulgang Website! We hope this project enriches the Yulgang gaming community and provides an enjoyable experience for players worldwide. If you have any questions or feedback, don't hesitate to contact us. Happy gaming!
