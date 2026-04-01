# 🍥 NarutoDex

> A React Native (Expo) encyclopedia app for the Naruto universe — explore Characters, Kara, Akatsuki, and Tailed Beasts.

---

## 📱 Overview

**NarutoDex** is a mobile application built with **Expo** and **TypeScript** that serves as a complete reference guide for the Naruto anime/manga universe. Using a dedicated Naruto API, the app fetches and displays detailed information across four major categories.

---

## ✨ Features

- 📖 Browse **Characters**, **Kara**, **Akatsuki**, and **Tailed Beasts**
- 🎬 Video playback powered by **expo-video**
- 🗂️ **Drawer + Stack Navigation** for smooth and intuitive app flow
- 🎨 Custom icons for each section
- ⚡ Fast and typed data fetching with **Axios** + **TypeScript**
- 📦 Clean folder structure following Expo best practices

---

## 🧭 Navigation Structure

The app uses a combination of **Drawer Navigation** and **Stack Navigation**:

```
Drawer Navigator
├── Characters       →  Stack (List → Detail)
├── Akatsuki         →  Stack (List → Detail)
├── Kara             →  Stack (List → Detail)
└── Tailed Beasts    →  Stack (List → Detail)
```

Each drawer item has its own icon and leads to a stack that handles list and detail screens.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [Expo](https://expo.dev/) | App framework & build tooling |
| [React Native](https://reactnative.dev/) | Core UI framework |
| [TypeScript](https://www.typescriptlang.org/) | Type safety across the codebase |
| [React Navigation](https://reactnavigation.org/) | Drawer + Stack navigation |
| [Axios](https://axios-http.com/) | HTTP client for API requests |
| [expo-video](https://docs.expo.dev/versions/latest/sdk/video/) | Video playback |

---

## 📂 Project Structure

```
NarutoDex/
├── app/
│   ├── (drawer)/
│   │   ├── characters/
│   │   │   ├── index.tsx        # Characters list screen
│   │   │   └── [id].tsx         # Character detail screen
│   │   ├── akatsuki/
│   │   ├── kara/
│   │   └── tailed-beasts/
│   └── _layout.tsx              # Root layout with navigation setup
├── components/                  # Reusable UI components
├── services/
│   └── api.ts                   # Axios instance & API calls
├── types/                       # TypeScript interfaces & types
├── assets/                      # Images, icons, fonts
└── app.json                     # Expo app configuration
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Android/iOS emulator or the **Expo Go** app on your phone

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/NarutoDex.git
cd NarutoDex

# 2. Install dependencies
npm install

# 3. Start the development server
npx expo start
```

Scan the QR code with **Expo Go** (Android) or the **Camera app** (iOS) to run the app on your device.

---

## 🌐 API

This app uses the **[Naruto API](https://narutodb.xyz/)** to fetch all data.

| Endpoint | Data |
|---|---|
| `/character` | All Naruto characters |
| `/akatsuki` | Akatsuki members |
| `/kara` | Kara members |
| `/tailedBeast` | All Tailed Beasts |

All requests are handled via a centralized Axios instance in `services/api.ts`.

---

## 📸 Screens

| Screen | Description |
|---|---|
| **Characters** | Full list of Naruto universe characters |
| **Akatsuki** | Members of the Akatsuki organization |
| **Kara** | Members of the Kara organization |
| **Tailed Beasts** | All Bijuu from the Naruto universe |
| **Detail View** | Deep-dive into any individual entry |

---

## 📄 License

This project is for educational and personal use only. All Naruto characters, names, and related content are the property of **Masashi Kishimoto** and **Shueisha**.

---

Made with ❤️ and 🍥 by **Ved Pandey**