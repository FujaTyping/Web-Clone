# QuickBoard
https://quickboard-one.vercel.app/

# Requirement
📘 Project Challenge: QuickBoard – Real-Time Notes Dashboard

📄 Description
**QuickBoard** is a responsive single-page web app that allows users to add, edit, and delete notes in real-time. All data interactions happen through a backend API, and the entire experience is designed to work directly on the landing page.

---

✅ Frontend Requirements (Landing Page Only)

Your landing page must include the following sections:

1. 🚀 Navigation Bar
- Sticky or fixed at the top
- Includes:
  - App name/logo: **QuickBoard**
  - Menu links: `Home`, `Features`, `Testimonials`, `Contact`
  - (Optional) Dark mode toggle

---

2. 🖼️ Hero Section
- Title: **“Capture Your Ideas Instantly”**
- Subtitle: “Create, manage, and edit your quick notes in real time.”
- CTA Button: Scrolls to the Notes section

---

3. 🔧 Features Section
Show at least 3 features using cards or icons:
- 📝 Fast note-taking
- ⚡ Real-time editing
- 🎯 Simple and distraction-free interface

Use a responsive grid or flex layout.

---

4. 💬 Testimonials Section
Display 2–3 user testimonials with:
- Name
- Role (e.g., "High School Student", "Developer")
- Short quote (1–2 sentences)
- (Optional) Avatar or user image

**Example:**
```json
{
  "name": "Siraphop Sukchu",
  "role": "10th Grade SMT Student",
  "feedback": "QuickBoard helps me jot down ideas during class so I don’t forget them. Super easy to use!"
}
```

---

5. ✏️ Notes Interaction Section (Connected to Backend API)
- Form to add a new note (title + content)
- Display list/grid of notes
- Each note includes:
  - Title
  - Content
  - Edit button
  - Delete button
- Real-time updates from the backend
- Display loading spinners and error/success messages

---

6. 🦶 Footer
- “Made with ❤️ by [Your Name]”
- GitHub / Contact links
- Current year and school (optional)

---

🗂️ Backend API Requirements

Use **NestJS** or **Express** to create a simple RESTful backend.

📦 Endpoints

```http
GET    /api/notes        → Get all notes
POST   /api/notes        → Add a new note
PUT    /api/notes/:id    → Edit a note
DELETE /api/notes/:id    → Delete a note
```

🧾 Note Data Structure
```json
{
  "id": "a1b2",
  "title": "Idea for Science Fair",
  "content": "Use Arduino to measure room temp.",
  "timestamp": "2025-05-07T15:00:00Z"
}
```

---

🏆 Bonus Features (Optional)
- Modals for add/edit actions
- Draggable notes (like sticky notes)
- Save notes in localStorage
- Dark mode switch
- Responsive animations (e.g., Framer Motion)

---

🎯 Goal
Build a clean, responsive single-page web app where everything from UI to API works seamlessly. No page routing, no login system — just a great full-stack practice project.
