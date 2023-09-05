# Italian Food Restaurant

This is a web application for an Italian food restaurant built using Next.js, Tailwind CSS, Module CSS, Redux, NextAuth.js, and Redux Persist. The application allows users to browse meals, add them to the cart, remove them from the cart, and sign in with Google using NextAuth.js. The project is fully responsive, providing an optimal viewing experience across different devices.

## Features

- Browse Meals: Users can explore a variety of Italian meals available on the menu.
- Add to Cart: Users can add their desired meals to the cart for ordering.
- Remove from Cart: Users can remove meals from the cart if they change their mind.
- Sign in with Google: Users can sign in to the application using their Google account.
- Redux State Management: The application utilizes Redux for managing application state.
- Persistent Cart: The cart state is persisted using Redux Persist, ensuring that the items remain in the cart even after refreshing the page.
- Responsive Design: The application is designed to adapt to different screen sizes, ensuring a seamless experience on desktop, tablet, and mobile devices.

## Getting Started

To get started with the project, follow the instructions below:

1. Clone the repository:
   ```
   git clone [https://github.com/your-username/italian-food-restaurant.git ↗](https://github.com/your-username/italian-food-restaurant.git)
   ```

2. Navigate to the project directory:
   `````
   cd italian-food-restaurant
   ```

3. Install the dependencies:
   ````
   npm install
   ````

4. Set up environment variables:
   - Create a `.env.local` file in the root of the project.
   - Add the following environment variables to the file:

     ```
     NEXTAUTH_GOOGLE_CLIENT_ID=your-google-client-id
     NEXTAUTH_GOOGLE_CLIENT_SECRET=your-google-client-secret
     ```

     Replace `your-google-client-id` and `your-google-client-secret` with your actual Google client ID and secret.

5. Start the development server:
   ````
   npm run dev
   ````

6. Open your web browser and visit `http://localhost:3000` to access the application.

## Technologies Used

The project utilizes the following technologies:

- Next.js: A React framework for building server-side rendered and static websites.
- Tailwind CSS: A utility-first CSS framework for quickly building responsive user interfaces.
- Module CSS: A CSS module system for modular and scoped CSS styles.
- Redux: A predictable state container for managing application state.
- NextAuth.js: An authentication library for Next.js applications.
- Redux Persist: A library for persisting Redux state in the browser.
- Google Sign-In: Utilized for authentication using Google accounts.

## Deployment

The application is deployed on Vercel and can be accessed at [https://italian-restaurant-seven.vercel.app/](https://italian-restaurant-seven.vercel.app/).

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
