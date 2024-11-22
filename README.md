
# Task Management App with Login

  

## Project Structure

```
src/
├── components/
│   ├── Login.js
│   ├── TaskManager.js
│   ├── TaskForm.js
│   ├── TaskList.js
│   ├── TaskFilters.js
│   └── ErrorMessage.js
├── context/
│   ├── AuthContext.js
│   └── TaskContext.js
├── utils/
│   ├── localStorageUtils.js
│   └── validationUtils.js
├── App.js
├── index.js
├── styles/
│   └── App.css
└── assets/
    └── logo.png
```

## Installation and Usage

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/NiyaRakhewar/task-management-app.git
   cd task-management-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   npm start
   ```

4. **Access the App**:
   Open [http://localhost:3000](http://localhost:3000) in your web browser.


## How to Use

1. **Login or Register**:
   - Enter your username and password.
   - If you don't have an account, register to create one.

2. **Manage Tasks**:
   - Add tasks using the input field.
   - Edit or delete tasks from the task list.
   - Mark tasks as completed, which changes their appearance.

3. **Filters**:
   - Use the filters to view all tasks, completed tasks, or incomplete tasks.

4. **Logout**:
   - Click the logout button to end the session.

