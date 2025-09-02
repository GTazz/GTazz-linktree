# GTazz Linktree

A modern, responsive personal linktree built with React and Vite. Features automatic theme switching, multilingual support, and interactive copy-to-clipboard functionality.

## ✨ Features

- **Auto Theme Detection**: Automatically switches between light/dark mode based on system preference
- **Multilingual Support**: English and Portuguese language detection based on browser settings
- **Copy to Clipboard**: Click email/phone to copy with notification feedback
- **Interactive Effects**: Glare hover effects and smooth animations
- **Responsive Design**: Works perfectly on all devices

```
No language and theme manual switches?
——————————————————————————————————————
⠀⣞⢽⢪⢣⢣⢣⢫⡺⡵⣝⡮⣗⢷⢽⢽⢽⣮⡷⡽⣜⣜⢮⢺⣜⢷⢽⢝⡽⣝
⠸⡸⠜⠕⠕⠁⢁⢇⢏⢽⢺⣪⡳⡝⣎⣏⢯⢞⡿⣟⣷⣳⢯⡷⣽⢽⢯⣳⣫⠇
⠀⠀⢀⢀⢄⢬⢪⡪⡎⣆⡈⠚⠜⠕⠇⠗⠝⢕⢯⢫⣞⣯⣿⣻⡽⣏⢗⣗⠏⠀
⠀⠪⡪⡪⣪⢪⢺⢸⢢⢓⢆⢤⢀⠀⠀⠀⠀⠈⢊⢞⡾⣿⡯⣏⢮⠷⠁⠀⠀
⠀⠀⠀⠈⠊⠆⡃⠕⢕⢇⢇⢇⢇⢇⢏⢎⢎⢆⢄⠀⢑⣽⣿⢝⠲⠉⠀⠀⠀⠀
⠀⠀⠀⠀⠀⡿⠂⠠⠀⡇⢇⠕⢈⣀⠀⠁⠡⠣⡣⡫⣂⣿⠯⢪⠰⠂⠀⠀⠀⠀
⠀⠀⠀⠀⡦⡙⡂⢀⢤⢣⠣⡈⣾⡃⠠⠄⠀⡄⢱⣌⣶⢏⢊⠂⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢝⡲⣜⡮⡏⢎⢌⢂⠙⠢⠐⢀⢘⢵⣽⣿⡿⠁⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠨⣺⡺⡕⡕⡱⡑⡆⡕⡅⡕⡜⡼⢽⡻⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣼⣳⣫⣾⣵⣗⡵⡱⡡⢣⢑⢕⢜⢕⡝⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣴⣿⣾⣿⣿⣿⡿⡽⡑⢌⠪⡢⡣⣣⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⡟⡾⣿⢿⢿⢵⣽⣾⣼⣘⢸⢸⣞⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠁⠇⠡⠩⡫⢿⣝⡻⡮⣒⢽⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
—————————————————————————————
```

_I chose automatic detection for a cleaner, minimalistic user interface._

## 🚀 Quick Start

```bash
npm install
npm run dev
```

## 🛠️ Key Components

The project uses custom React hooks for automatic theme and language switching, plus interactive components from React Bits:

### Custom Utils

```jsx
import useLanguage from "./utils/MultiLanguage";
import useTheme from "./utils/Theme";

function App() {
  const langTexts = useLanguage();
  const themeColors = useTheme();
  // ...
}
```

### Balatro Background Effect

```jsx
import Balatro from "./components/Balatro";

<Balatro
  isRotate={false}
  mouseInteraction={false}
  pixelFilter={2000}
  color1={themeColors.balatro1}
  color2={themeColors.balatro2}
  color3={themeColors.balatro1}
/>;
```

### GlareHover Social Links

```jsx
import GlareHover from "./components/GlareHover";

<a
  className="linkedin"
  href="https://linkedin.com/in/gabriel-tazz/"
  target="_blank"
>
  <section>
    <svg>...</svg>
    <p>LinkedIn</p>
  </section>
  <GlareHover />
</a>;
```

### Copy-to-Clipboard Feature

```jsx
<span
  className="clickable-text"
  onClick={() =>
    window.copyToClipboard("contact@gtazz.dev", "email", langTexts)
  }
  title={langTexts.clickToCopy}
>
  contact@gtazz.dev
</span>
```

### Notification Toast

```jsx
import NotificationToast from "./components/NotificationToast";

function App() {
  return (
    <>
      {/* Your content */}
      <NotificationToast />
    </>
  );
}
```

### Automatic Theme Detection

```javascript
// Theme.js - Auto-detects system preference
const useTheme = () => {
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    darkModeMediaQuery.addEventListener("change", handleThemeChange);
  }, []);

  return themeColors;
};
```

### Automatic Language Detection

```javascript
// MultiLanguage.js - Auto-detects browser language
const getLanguagePreference = () => {
  let userLang = navigator.language || navigator.userLanguage;
  return LANGUAGES[userLang.split("-")[0]] || LANGUAGES.en;
};
```

## 🎨 Tech Stack

- **React** - UI framework
- **Vite** - Build tool
- **CSS Variables** - Dynamic theming
- **Navigator API** - Clipboard functionality

### Interactive Components

- **Balatro** - Animated gradient background effect (React Bits)
- **GlareHover** - Interactive hover glare effect on social links (React Bits)
- **NotificationToast** - Copy feedback notification system (AI Claude Sonnet 4)

_Special thanks to [React Bits](https://reactbits.dev) for the amazing interactive components!_

## 📄 License

Free to use and modify for personal projects.

---

_Feel free to fork and customize this linktree for your own use!_
