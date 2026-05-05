# 🚀 Next.js My Profile — CI/CD + Docker

## 👤 About Me

Hi! I'm **Tionusa Catur Pamungkas**, a student passionate about building scalable systems that integrate:

* 🌐 Web Development (Next.js)
* ☁️ Cloud Computing (AWS)
* 📡 Internet of Things (IoT)
* 📊 Big Data (Hadoop)

---

## 🎯 Project Overview

This project is a **Student Profile Web Application** built with **Next.js**, enhanced with:

* ✅ Modern UI/UX
* ✅ Docker containerization (multi-stage build)
* ✅ Optimized production build using **standalone mode**
* ✅ CI/CD pipeline using GitHub Actions
* ✅ Automated Docker image deployment to Docker Hub

---

## 🛠️ Tech Stack

* **Framework:** Next.js
* **Language:** TypeScript / JavaScript
* **Containerization:** Docker
* **CI/CD:** GitHub Actions
* **Cloud Ready:** Docker Hub

---

## 🐳 Docker Setup

### Build Image

```bash
docker build -t tionusa/my-profile:latest .
```

### Run Container

```bash
docker run -p 3000:3000 tionusa/my-profile:latest
```

### Access App

```
http://localhost:3000
```

---

## ⚙️ CI/CD Workflow

This project implements a complete CI/CD pipeline:

### 🔹 Continuous Integration (CI)

Triggered on Pull Request:

* Install dependencies
* Build Next.js app
* Validate code before merge

### 🔹 Continuous Deployment (CD)

Triggered on push to `main`:

* Build Docker image
* Push image to Docker Hub

---

## 🌿 Git Workflow

This project follows **feature branch workflow**:

```bash
feature/* → Pull Request → CI Check → Merge → Deploy
```

---

## 📦 Docker Hub

Image available at:
👉 https://hub.docker.com/r/tionusa/my-profile

---

## 📚 Learning Outcomes

Through this project, I learned:

* Implementing CI/CD pipelines using GitHub Actions
* Docker multi-stage builds & optimization
* Next.js production deployment strategies
* Using standalone output for efficient builds

---

## 📬 Contact

* 📧 Email: [ctionusa6@gmail.com](mailto:ctionusa6@gmail.com)
* 💼 LinkedIn: https://www.linkedin.com/in/tncp/
* 🐙 GitHub: https://github.com/TNCP06

---

## ⭐ Final Notes

This project is part of a coursework assignment focusing on:

> IoT, Cloud Computing, Big Data, and Modern Web Development Integration

---

💡 *Built with passion for learning and real-world engineering practices.*