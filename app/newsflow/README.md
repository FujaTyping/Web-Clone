# Newsflow
https://newsflow-beige.vercel.app/

# Requirement
🔧 Project Title: NewsFlow - Your Daily News Feed
📝 Description:

Build a responsive frontend interface for a news/blog platform where users can read, add, edit, and delete news articles. The goal is to practice creating a dynamic UI and integrating it with a mock backend (such as using a local JSON server or mock API).
✅ Requirements:
1. Pages / Routes (API)

    /news — Home page that displays a list of news posts (title, short description, date)

    /news/add — Add new news post

    /news/delete — Edit an existing news post

2. News Structure

Each news article should have:

    id: unique identifier

    title: string

    description: short summary

    content: full article text

    date: published date (can auto-generate)

3. Frontend Features

	3.1. Navigation Bar (Navbar) **Aum

	    Logo on the left

	    Navigation links (Home, Add News, Pricing, Contact)

	    Mobile responsive (hamburger menu)

	3.2. Hero Section **Aum

	    Eye-catching headline like: "Stay Informed. Stay Ahead."

	    Subtitle with 1–2 lines describing the platform

	    Primary CTA Button: "Read News" or "Get Started"

	    Optional secondary CTA: "Add Your First Post"

	    Background image or gradient

	3.3. Features Section **Kungfu

	    Grid (3–4 columns) with features like:

		📰 Easy News Posting

		🛠️ Edit Anytime

		📱 Fully Responsive

		🔍 Fast Search

	    Each feature has an icon, title, and short description

	3.4. Call to Action (CTA) Section **Kun

	    Highlighted section encouraging user action

	    Example:

		“Join hundreds of readers and writers sharing the latest news every day.”

		CTA Button: "Start Writing Now"

		Style with background color to stand out

	3.5. Testimonials Section **Kun

	    2–3 user feedback cards

	    Each card includes:

		User name

		Avatar or placeholder icon

		Short quote (e.g., “This platform makes sharing news so easy!”)

		Optional rating (stars)

	3.6. Pricing Section (optional/mock for practice) **Kungfu

	    2–3 pricing cards:

		Free Plan – Post & read news

		Pro Plan – Schedule posts, advanced analytics

		Team Plan – Multiple collaborators

	    Each card includes:

		Price (e.g., $0/mo, $5/mo)

		Features list

		Select plan button

	3.7. News List Section **Kungfu

	    Main blog cards showing recent news:

		Title, short desc, date, “Read more” button

	3.8. Footer Section **Kun

	    Logo or site name

	    Navigation or quick links

	    Social media icons

	    © Year + Your name or team name

4. Optional Enhancements

    Toast notifications on success/error (e.g., post added, deleted)

    Use localStorage or a mock API (e.g., JSON Server) for storing data

    Dark/light theme switch

    Search bar to filter news titles