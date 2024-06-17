# CaseCobra

CaseCobra is a web application built with Next.js and Tailwind CSS that allows users to upload images and create custom cases for iPhones.

## Features

- Upload images to generate custom iPhone cases.
- Select from various iPhone models (e.g., iPhone 11, iPhone 12, etc.).
- Customize the case design with uploaded images.
- Order the custom case directly through the web interface.

## Technologies Used

- **Frontend:**
  - Next.js: React framework for server-side rendering and client-side routing.
  - Tailwind CSS: Utility-first CSS framework for styling.
  - Kind Auth Next.js: Authentication library for Next.js applications.
  - Radix UI: Accessible React components for building interfaces.
  - Lucide React: SVG icon library for React applications.

- **Backend:**
  - Prisma: ORM for database access and schema management.
  - Zod: TypeScript-first schema validation library.
 
  ## Example
<img width="1505" alt="1" src="https://github.com/liam1238/casecobra/assets/74408724/ab47bbb3-88e1-42ad-ad93-28ab2c1feb53">
<img width="1498" alt="2" src="https://github.com/liam1238/casecobra/assets/74408724/82672f30-a887-4821-a850-fcc7268ff052">
<img width="1507" alt="3" src="https://github.com/liam1238/casecobra/assets/74408724/dc170148-61b3-4029-bed3-72166cb2ef05">
<img width="1053" alt="4" src="https://github.com/liam1238/casecobra/assets/74408724/a280218e-cdc7-4d3c-a6c5-9cefd864dba6">
<img width="971" alt="5" src="https://github.com/liam1238/casecobra/assets/74408724/f55feb8c-10df-4ba8-8691-2761f7e9ddc6">


## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository:**
git clone https://github.com/liam1238/casecobra.git
cd casecobra

2. **Install dependencies:**
npm install


3. **Set up the database:**
- Ensure you have a PostgreSQL database set up.
- Update the database connection string in `prisma/schema.prisma`.

4. **Run database migrations:**
npx prisma migrate dev --name init

5. **Start the development server:**
npm run dev

6. **Open your browser:**
http://localhost:3000


## Usage

- Navigate to the web application using the provided URL.
- Upload an image that you want to use for the custom iPhone case.
- Select the iPhone model for which you want to create the case.
- Customize the case design as per your preference.
- Complete the order process to get your custom iPhone case delivered.

## Contributing

We welcome contributions to CaseCobra! To contribute, follow these steps:

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/NewFeature`.
3. Commit your changes: `git commit -am 'Add new feature'`.
4. Push to the branch: `git push origin feature/NewFeature`.
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

