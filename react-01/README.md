Here are your notes for today's React learning session:  

---

## **📌 Day 1: Introduction to React**  

### **1️⃣ What is React? Why Use It?**  
✅ **React** is a **JavaScript library** for building **user interfaces (UI)**.  
✅ It was developed by **Facebook (Meta)** and is now widely used for front-end development.  
✅ React is based on a **component-based architecture**, making UI development modular and efficient.  

### **🔹 Why Use React?**  
- **Component-Based:** Reusable UI components.  
- **Virtual DOM:** Faster updates and better performance.  
- **Declarative UI:** Code is easier to read and maintain.  
- **Unidirectional Data Flow:** Predictable state management.  
- **Rich Ecosystem:** Supports libraries like Redux, React Router, and more.  

---

### **2️⃣ Setting Up a React Project**  

🔹 **Method 1: Using Vite (Recommended)**  
Vite is a fast build tool for modern frontend projects.  

```sh
# Install Vite globally (optional)
npm create vite@latest my-react-app -- --template react

# Navigate to project folder
cd my-react-app

# Install dependencies
npm install

# Start development server
npm run dev
```

🔹 **Method 2: Using Create React App (CRA)**  
```sh
npx create-react-app my-app
cd my-app
npm start
```

📌 **Vite is faster and more optimized than CRA**, making it the preferred choice.

---

### **3️⃣ JSX: Writing HTML Inside JavaScript**  
JSX (JavaScript XML) allows you to write HTML-like code inside JavaScript.  

**Example of JSX:**  
```jsx
function App() {
  const name = "Pravin Kale";
  return <h1>Hello, {name}!</h1>;
}
```
✅ JSX **must have a single parent element**  
✅ Use `{}` to embed JavaScript expressions  

---

### **4️⃣ What is a Component?**  
A **component** in React is a reusable UI block. It can be:  
✔️ **Functional Component** (Preferred)  
✔️ **Class Component** (Older approach)  

🔹 **Example: Functional Component**  
```jsx
function Card() {
  return <div className="card">This is a card component</div>;
}
export default Card;
```

🔹 **Using a Component in `App.jsx`**  
```jsx
import Card from './Card';

function App() {
  return (
    <div>
      <Card />
    </div>
  );
}
export default App;
```

---

### **✅ Summary**  
📌 **React** is a JavaScript library for building UI.  
📌 Use **Vite** for a fast React setup.  
📌 **JSX** allows writing HTML inside JavaScript.  
📌 **Components** are reusable building blocks in React.  

