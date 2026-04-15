# 📱 Social App (React Native)

A scalable, production-ready React Native boilerplate built with **TypeScript**, **Zustand**, and a clean **navigation architecture**.
Includes reusable components, global state management, CI/CD enforcement, and modern best practices.

---

## 🚀 Features

* ⚛️ React Native 0.74+
* 🧠 Zustand (lightweight global state management)
* 🧭 Fully typed Navigation (Auth + Main + Tabs)
* 🔐 Authentication flow (Login / Register)
* 🌍 Environment configuration (`.env`)
* 🎨 Centralized theme system (colors)
* 🧩 Reusable UI components:

  * Button
  * Input (with validation + search)
  * Header
  * Loader
  * Toast (global)
  * Bottom Sheet (global)
* ⚡ CI/CD pipeline (blocks inline styles)
* 📁 Scalable folder structure (industry standard)

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Button/
│   ├── Input/
│   ├── Header/
│   ├── Loader/
│   ├── Toast/
│   ├── BottomSheet/
│
├── navigation/
│   ├── types.ts
│   ├── AppNavigator.tsx
│   ├── AuthStack.tsx
│   ├── MainStack.tsx
│   ├── BottomTabs.tsx
│
├── screens/
│   ├── auth/
│   ├── home/
│   ├── profile/
│   ├── settings/
│
├── store/
│   ├── useAuthStore.ts
│   ├── useToastStore.ts
│   ├── useBottomSheetStore.ts
│
├── services/
│   └── api.ts
│
├── theme/
│   └── colors.ts
│
├── types/
│   └── env.d.ts
```

---

## ⚙️ Installation

```bash
# Clone repo
git clone https://github.com/syed-hammad23/social-app.git

# Install dependencies
npm install

# Start Metro
npx react-native start

# Run Android
npx react-native run-android
```

---

## 🌍 Environment Setup

Create a `.env` file in root:

```env
API_URL=https://your-api.com/api
APP_NAME=SocialApp
```

---

## 🧠 State Management (Zustand)

Global state is handled using Zustand:

* `useAuthStore` → authentication
* `useToastStore` → global toast notifications
* `useBottomSheetStore` → global bottom sheet

---

## 🧭 Navigation Architecture

* **AuthStack** → Login / Register
* **MainStack** → Protected screens
* **BottomTabs** → Home / Profile / Settings

All navigation is fully typed via:

```
src/navigation/types.ts
```

---

## 🎨 UI System

Reusable components:

* **Button** → loading + disabled states
* **Input** → validation + search support
* **Header** → back + actions
* **Loader** → inline + fullscreen
* **Toast** → global notifications
* **BottomSheet** → global modal system

---

## 🍞 Toast Usage

```ts
import { useToastStore } from "@store/useToastStore";

useToastStore.getState().showToast("Success!", "success");
```

---

## 📦 Bottom Sheet Usage

```ts
import { useBottomSheetStore } from "@store/useBottomSheetStore";

useBottomSheetStore.getState().openSheet(
  <View>
    <Text>Hello Bottom Sheet</Text>
  </View>
);
```

---

## 🚫 CI/CD Rules

GitHub Actions workflow enforces:

* ❌ No inline styles allowed (`style={{ ... }}`)
* ✅ Must use `StyleSheet.create()`

If violated:

* Build fails
* PR merge is blocked

---

## 🧪 Scripts

```bash
npm start
npm run android
npm run ios
```

---

## 🧠 Best Practices Followed

* TypeScript strict mode
* Centralized theme system
* Clean architecture (separation of concerns)
* No inline styles (CI enforced)
* Global UI state management
* Reusable component design

---

## 🔮 Future Improvements

* ESLint + Prettier integration
* Dark mode support
* API error handling middleware
* Push notifications (FCM)
* Unit & E2E testing (Jest + Detox)
* CI/CD build & deploy pipeline

---

## 👨‍💻 Author

**Syed Hammad**
GitHub: https://github.com/syed-hammad23

