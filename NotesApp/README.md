# Notes App

## Description

The Notes App is a simple application for creating, editing, and managing notes. It provides a user-friendly interface for adding and deleting notes, which are stored in `localStorage` for persistence. This project demonstrates the use of JavaScript to manipulate the DOM, handle events, and manage browser storage.


You can try the live demo of the Quiz App project [here](https://simple-quizzz.netlify.app/).


![Example Screenshot](./notesApp.gif.jpg)
## Features

- **Create Notes:** Click the "Create Notes" button to add a new note.
- **Edit Notes:** Notes are editable directly within the application.
- **Delete Notes:** Remove individual notes by clicking the delete icon.
- **Persistent Storage:** Notes are stored in `localStorage` and persist across page reloads.
- **Line Break Handling:** Enter key inserts a line break within notes.

## Usage

1. **Create a Note:**
   - Click the "Create Notes" button to add a new note.
   - The new note is created as a `contenteditable` element.

2. **Edit a Note:**
   - Click inside the note to edit its content.

3. **Delete a Note:**
   - Click the delete icon (🗑️) to remove a note.

4. **Storage Management:**
   - Notes are saved in `localStorage` and are automatically loaded when the application starts.

## Code Explanation

- **`index.html`**: Contains the HTML structure of the application.
- **`style.css`**: Styles the application, including the layout and design of notes and buttons.
- **`script.js`**: Implements the functionality to create, edit, delete, and store notes.
