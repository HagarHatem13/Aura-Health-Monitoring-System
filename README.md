Aura Health — Smart Wireless Health Monitoring System

A modern health-monitoring web application designed to work with a wireless embedded health-monitoring device.

Aura Health provides real-time heart-rate visualization, monitoring zones, health data history, device connectivity information, and a dedicated relaxation experience.

✨ Features

* ❤️ Real-time heart-rate monitoring
* 📊 Heart-rate analytics and visualization
* 🟢 Low / Normal / High heart-rate zones
* 📡 Wireless device connection status
* 🔋 Device battery and signal monitoring
* 📈 Heart-rate history and trends
* 🧘 Relaxation and breathing exercises
* 🎵 Ambient relaxation audio
* 💬 Interactive wellbeing experience
* 📱 Responsive design for desktop, tablet, and mobile
* 🌐 Modern premium health-tech UI/UX

🛠️ Technologies

* React
* TypeScript
* Vite
* Tailwind CSS
* Recharts
* Lucide Icons
* pnpm

 🚀 Getting Started

Prerequisites

Make sure you have installed:

* Node.js
* pnpm

Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/aura-health-monitoring-system.git
```

Navigate to the project:

```bash
cd aura-health-monitoring-system
```

Install the dependencies:

```bash
pnpm install
```

 Run the Development Server

Start the project with:

```bash
pnpm dev
```

The development server will start and provide a local URL, usually:

```text
http://localhost:5173
```

Open the URL in your browser to view the application.

📁 Project Concept

The system is designed around the following architecture:

```text
Heart Rate Sensor
        ↓
Microcontroller
        ↓
Wireless Communication
        ↓
Aura Health Web Application
        ↓
Real-Time Monitoring & Visualization
        ↓
Wellbeing / Relaxation Experience
```

The current web application can use simulated data during development and can later be connected to the physical embedded device through Bluetooth/BLE, Wi-Fi, WebSockets, MQTT, or another communication layer.

 🔌 Hardware Integration

The web application is designed to eventually communicate with a physical health-monitoring device.

The device can provide:

* Heart-rate measurements
* Device connection status
* Battery information
* Wireless signal information
* Measurement timestamps

The frontend should be kept independent from the hardware communication layer so that the data source can be replaced without redesigning the user interface.

 📊 Heart Rate Monitoring

The application categorizes readings into three configurable monitoring zones:

| Zone   | Description                         |
| ------ | ----------------------------------- |
| Low    | Reading below the configured range  |
| Normal | Reading within the configured range |
| High   | Reading above the configured range  |

These zones are intended for monitoring and visualization and are **not medical diagnoses**.

 🧘 Relaxation Experience

Aura Health includes a dedicated relaxation experience designed to help users take a moment away from the monitoring dashboard.

It includes:

* Guided breathing
* Breathing animation
* Relaxation timer
* Ambient sounds
* Interactive wellbeing prompts

The relaxation features are intended for general wellbeing and do not provide medical treatment or diagnosis.

 📱 Responsive Design

Aura Health is designed to provide a consistent experience across:

* Desktop
* Laptop
* Tablet
* Mobile

🔮 Future Improvements

Planned improvements may include:

* Real Bluetooth/BLE integration
* Physical heart-rate sensor integration
* Real-time WebSocket communication
* Cloud data synchronization
* User authentication
* Persistent health history
* Advanced analytics
* Device management
* Notifications
* Multiple connected devices

 👩‍💻 Development

Start the development server:

```bash
pnpm dev
```

Install new dependencies:

```bash
pnpm add <package-name>
```

Create a production build:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

📄 License

This project is developed as a health-monitoring and embedded-systems project.
