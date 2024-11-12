# LinkedIn-AutoConnect-Extension

A Chrome extension to automate sending LinkedIn connection requests.
```bash
LinkedInAutoConnect
├── manifest.json
├── popup.html
├── popup.js
├── content.js
├── styles.css
└── README.md
```
1. manifest.json - file defines the extension’s configuration and permissions.
2. popup.html - file defines the UI of the extension.
3. popup.js - file manages the popup UI, controls the start and stop buttons, and sends commands to the content script.
4. content.js - file runs in the context of the web page, automating the process of sending connection requests on LinkedIn by clicking buttons on the page.
5. styles.css - file contains the CSS for styling the popup UI.

## Installation and Setup

1. **Clone this repository**:
   ```bash
   git clone https://github.com/yourusername/LinkedIn-AutoConnect-Extension.git
   ```

2. **Load the extension in Chrome**:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable "Developer mode" in the top-right corner.
   - Click "Load unpacked" and select the `LinkedIn-AutoConnect-Extension` folder.

3. **Run the extension**:
   - Click on the LinkedIn AutoConnect icon in the toolbar.
   - Press the "Start" button to begin sending requests, and "Stop" to halt.

## How It Works

The extension finds LinkedIn "Connect" buttons on the page and clicks them in sequence.

## 3. Architecture and Design

1. **Manifest**:
   - We use `manifest_version: 3` for compatibility with the latest Chrome API.
   - Permissions (`scripting`, `tabs`) are added to interact with LinkedIn’s webpage and control button states.
   
2. **Popup UI (popup.html)**:
   - The UI includes `Start` and `Stop` buttons to control the automation and provide feedback on the status.
   - Minimal CSS styling keeps the interface clear and easy to interact with.

3. **Logic Separation**:
   - Popup interactions (start/stop) are isolated in `popup.js`.
   - `content.js` contains the logic for finding and clicking "Connect" buttons.

