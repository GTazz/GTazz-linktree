# GTazz Linktree

<details>
<summary>🌎 Linguagem</summary>
<br>
  
* 🇺🇸 [en](../README.md)
* 🇧🇷 pt-BR (Current)

</details>
<br>

Meu linktree pessoal moderno e responsivo criado com React e Vite. Inclui troca automática de tema, suporte multilíngue e funcionalidade de copiar para área de transferência.

## ✨ Funcionalidades

- **Tema Automático**: Troca automaticamente entre modo claro/escuro baseado na configuração do sistema
- **Suporte Multilíngue**: Detecta automaticamente inglês ou português através das configurações do navegador
- **Copiar com Um Clique**: Clique no email/telefone para copiar automaticamente, com notificação de confirmação
- **Efeitos Interativos**: Efeitos de hover suaves e animações fluidas
- **Design Responsivo**: Funciona perfeitamente em qualquer dispositivo

```
Sem botões manuais de idioma e tema?
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

_Escolhi detecção automática para manter a interface limpa e minimalista._

## 🚀 Como executar

```bash
npm install
npm run dev
```

## 🛠️ Componentes Principais

O projeto utiliza hooks React customizados para troca automática de tema e idioma, além de componentes interativos do React Bits:

### Utils Customizados

```jsx
import useLanguage from "./utils/MultiLanguage";
import useTheme from "./utils/Theme";

function App() {
  const langTexts = useLanguage();
  const themeColors = useTheme();
  // ...
}
```

### Efeito de Fundo Balatro

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

### Links Sociais com GlareHover

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

### Funcionalidade de Copiar

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

### Notificação Toast

```jsx
import NotificationToast from "./components/NotificationToast";

function App() {
  return (
    <>
      {/* Seu conteúdo */}
      <NotificationToast />
    </>
  );
}
```

### Detecção Automática de Tema

```javascript
// Theme.js - Detecta automaticamente a preferência do sistema
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

### Detecção Automática de Idioma

```javascript
// MultiLanguage.js - Detecta automaticamente o idioma do navegador
const getLanguagePreference = () => {
  let userLang = navigator.language || navigator.userLanguage;
  return LANGUAGES[userLang.split("-")[0]] || LANGUAGES.en;
};
```

## 🎨 Tecnologias Utilizadas

- **React** - Framework para interface de usuário
- **Vite** - Ferramenta de build e desenvolvimento
- **CSS Variables** - Sistema de temas dinâmicos
- **Navigator API** - Funcionalidade de área de transferência

### Componentes Interativos

- **Balatro** - Efeito de fundo gradiente animado (React Bits)
- **GlareHover** - Efeito de brilho interativo nos links sociais (React Bits)
- **NotificationToast** - Sistema de notificação para feedback de cópia (IA Claude Sonnet 4)

_Agradecimentos ao [React Bits](https://reactbits.dev) pelos excelentes componentes interativos!_

## 📄 Licença

Livre para uso e modificação em projetos pessoais.

---

_Sinta-se livre para fazer fork e personalizar este linktree para seu próprio uso!_
