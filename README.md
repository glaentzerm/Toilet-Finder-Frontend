🌟 Welcome to the Toilet Finder App!

The Toilet Finder App is your go-to mobile solution for finding public toilets in Brussels that match your specific needs. Whether you need accessible facilities, prefer free options, or simply want to know if a toilet is open now, our app makes it quick and easy! 🚽📱

---

🛠️ Our Process

We built the project with a clear separation between frontend and backend:
- **Frontend:** Developed with **React JS** and styled using **Tailwind CSS** for a modern, responsive look.
- **Backend:** Powered by **PostgreSQL** and connected via RESTful APIs.
- **Design Inspiration:** Check out our original Figma design for detailed layouts and ideas: [Figma Design](https://www.figma.com/design/Ee3rD56v0rZDBC2iBg7nYN/Toilet-Finder-App?node-id=0-1&p=f&t=MKPRIfIDD7xReS5z-0)

---

🛠️ Our Development Philosophy:

In essence, the Toilet Finder App focuses on simplicity and user-friendliness, making it accessible to both coding beginners and experienced developers. Our structure allows for easy addition of new features, ensuring the app can grow as needed.

---

✨ What We've Created So Far:

✅ **Interactive Map View**  
   - Users can see a selection of toilets on a map.
   - Filter options allow for refining the search based on features like accessibility, payment, and open status.

✅ **User Account System**  
   - Users can create an account and log in.
   - Profiles allow users to save their favorite toilet locations.

✅ **Simple, Mobile-First UI**  
   - Designed specifically for mobile use, with clear icons and a user-friendly interface.
   - Example of our filter options setup:
   ```jsx
   const filters = [
     { icon: "♿", name: "Accessible" },
     { icon: "💰", name: "Paid" },
     { icon: "🆓", name: "Free" },
     { icon: "🟢", name: "Open Now" },
   ];
🚧 Goals We Haven't Achieved Yet

While we're proud of our progress, some features are still on the roadmap:

    Route Planner: A feature to provide walking time estimates.
    Add Listing: Enabling users to contribute new toilet locations.
    User Reviews & Ratings: Allowing account holders to rate cleanliness, accessibility, and available amenities.
    Dark Mode: Currently, the app is light mode only.

🔄 What's Next?

We’re excited about future improvements, which include:

    🗺️ Integrating a Route Planner: To give users estimated walking times.
    👥 Enhanced User Contributions: Fully enable adding listings and leaving reviews.
    🌗 Dark Mode Support: Offering a dark mode/light mode toggle for better accessibility.

🔍 Looking for More Technical Details? 💻✨
How the Toilet Finder App Works

✅ Component-Based Design

    The app is divided into modular components such as the Map view, Filter buttons, Login/Register modals, and the sliding info card.
    This design makes it easier to maintain and extend features.

✅ Dynamic Data Flow

    Data is managed using React’s useState hook, ensuring that components update seamlessly as users interact with the app.
    Components communicate via props to pass data and trigger UI updates.

✅ API Integration

    The frontend communicates with a PostgreSQL-backed API to fetch and display real-time toilet data.
    This ensures that users receive up-to-date information on toilet availability and features.

✅ Responsive & Mobile-First UI

    Designed for mobile screens, the UI emphasizes clarity and ease of use with intuitive icons (e.g., map, menu, account).
    The layout is optimized for touch interactions, making navigation effortless.

🚀 Deployment

Our frontend is deployed on Netlify, ensuring a fast, reliable, and accessible experience for all mobile users.

Thank you for checking out the Toilet Finder App! Your feedback and contributions are always welcome. Let’s keep making public spaces more accessible! 🚽✨