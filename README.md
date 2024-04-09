
# NASA Astronomy Picture of the Day Viewer

This React application displays the Astronomy Picture of the Day provided by NASA's open API. It features a responsive design to showcase the daily image along with its title, explanation, and date of capture. The app utilizes Axios for API requests, demonstrating a basic pattern for fetching and displaying data in a React application.

## Features

- **Daily Astronomy Picture**: Displays the image provided by NASA along with details such as the title, description, and the date it was featured.
- **Responsive Design**: Adapts smoothly to different screen sizes, ensuring a great user experience on mobile, tablet, and desktop.
- **Error Handling**: Implements basic error handling in case the API fails to fetch the data.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v12.x or later recommended)
- npm (normally comes with Node.js)

## Installation

To get the project running on your local machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://your-repository-url.git
   cd your-project-directory
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up the NASA API key:**
   
   - Obtain an API key from [NASA API](https://api.nasa.gov).
   - Create a `.env` file in the root directory of the project.
   - Add your API key to the `.env` file as follows:
     ```
     REACT_APP_NASA_API_KEY=your_nasa_api_key_here
     ```

4. **Run the application:**
   ```bash
   npm start
   ```

   This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.

## Usage

Simply open the app in your browser, and it will automatically fetch and display the Astronomy Picture of the Day along with its relevant details. If there's an issue with fetching data, the app will display an error message.

## Contributing

Contributions to improve the app are welcome. To contribute:
- Fork the repository
- Create a new branch for your feature (`git checkout -b feature/AmazingFeature`)
- Commit your changes (`git commit -m 'Add some AmazingFeature'`)
- Push to the branch (`git push origin feature/AmazingFeature`)
- Open a new Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
