# Ticket2Grow - Android Application Project

This is the complete, standalone Android application project for **Ticket2Grow**.

## 📱 Project Specifications
- **App Name:** Ticket2Grow
- **Package Name:** `com.ticket2grow.app`
- **Min SDK:** Android 7.0 (API 24)
- **Target SDK:** Android 14 (API 34)
- **Launcher Icon:** Custom adaptive Ticket2Grow emblem & logo
- **Engine:** Hardware-accelerated WebView + Web Audio API Engine

---

## 🛠️ How to Build Your APK

### Option A: Using Android Studio (Recommended)
1. Open **Android Studio**.
2. Click **File ➔ Open** and select this directory: `c:\Users\saran\Downloads\spoty\Ticket2Grow-Android`.
3. Wait for Gradle sync to complete.
4. Click **Build ➔ Build Bundle(s) / APK(s) ➔ Build APK(s)**.
5. Once built, click **Locate** to get your `app-debug.apk` file and transfer it to your phone!

### Option B: Command Line (Gradle)
If you have Java & Android SDK installed:
```powershell
cd c:\Users\saran\Downloads\spoty\Ticket2Grow-Android
gradlew assembleDebug
```
The output APK will be generated at:
`app/build/outputs/apk/debug/app-debug.apk`
