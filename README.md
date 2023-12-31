# Instagram-like Scrollable App

## Overview
The Instagram-like Scrollable App is a web application that provides users with a platform to explore and view a collection of photos from the Unsplash API. With a focus on delivering an exceptional user experience, the app is designed to be device-optimized and responsive, catering to various screen sizes and devices.

The app incorporates state-of-the-art technologies, including React.js and Redux for efficient state management. React Router dynamically handles routing, making navigation seamless and intuitive. The Unsplash API serves as the source of photo data, providing users with a vast array of images to explore.

To enhance user customization, the app includes a dark mode feature, allowing users to switch between light and dark themes based on their preferences. Additionally, API response caching is implemented to reduce unnecessary API calls and improve app performance.

## Features
- Collect and display photos and profiles  from the Unsplash API.
- Device-optimized layout and responsive design for various screen sizes.
- Dynamic routing configuration for smooth navigation.
- State management using Redux for a centralized and predictable state.
- API response caching for improved performance.
- Dark mode feature for enhanced user customization.
- follow / unfollow option 

## Technologies Used
- Next.js
- JavaScript (ES6+)
- React.js
- Redux (Redux Toolkit for state management)
- React Router for dynamic routing
- Unsplash API for photo data
- Native CSS for design
- LocalStorage for caching API response
- Media queries for responsive design
- Dark mode using CSS variables

## Getting Started
1. Clone the project from the repository.
2. Install the necessary dependencies using `npm install`.
3. Run the development server with `npm start`.
4. Access the app in your web browser at `http://localhost:3000`.

## Folder Structure

- **public**: Contains the index.html file with necessary libraries.
- **src**: Main source folder.
  - **assets**: Images and media resources.
  - **common**: Reusable components.
    - **ErrorShown**: Displays error messages.
    - **Header**: Navigation header and search bar.
    - **Loader**: Loading animation for images.
    - **styles**: Common CSS classes.
    - **GridView** & **ListView**: View options for photos.
    - **ProfileInfo**, **ProfilePhotos**, and **SuggestedProfiles**: Profile-related components.
  - **constants**: Constants used in the application.
  - **pages**: Different pages of the app.
  - **store**: Redux actions, reducers, and the store for state management.


## Flow Chart
![WhatsApp Image 2023-07-31 at 18 19 02](https://github.com/arajeet-arj/Assignment/assets/103362957/82bf5460-b73a-45e8-b900-03b3e968ba28)

## Screenshots

- Two modes of operation with dark-mode/ light-mode features infinite scrolling  
![1](https://github.com/arajeet-arj/Assignment/assets/103362957/715b5e50-5712-440d-9333-e2195472ff25)

- Offers two types of grid viewing in profile photos  
![3](https://github.com/arajeet-arj/Assignment/assets/103362957/845e52bc-a874-4796-9ffa-e8a07ac8f538)

 - Adjustible according to screensize 
![3](https://github.com/arajeet-arj/Assignment/assets/103362957/a808014b-cbdb-4bf0-8310-4279d320f8bb)


## Conclusion
The Instagram-like Scrollable App showcases a seamless user experience, efficient state management, and responsive design. It leverages Redux for state management, optimizes API calls with caching, and includes a dark mode feature for user customization.
