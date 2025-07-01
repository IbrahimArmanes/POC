# Chat Support Client POC - "Your Car Your Way"

Une Proof of Concept (POC) pour une application de chat en temps réel développée pour "Your Car Your Way".

## 🚀 Stack Technique

### Frontend
- **Angular 19** - Framework JavaScript moderne
- **Angular Material** - Composants UI Material Design
- **TypeScript** - Langage de programmation typé
- **RxJS** - Programmation réactive pour la gestion d'état
- **SCSS** - Préprocesseur CSS

### Backend
- **Spring Boot 3.5.3** - Framework Java pour applications web
- **Java 17** - Version LTS du langage Java
- **Spring Web** - Module pour créer des API REST
- **Maven** - Gestionnaire de dépendances et build

### Architecture
- **API REST** - Communication via HTTP/JSON
- **Polling** - Récupération des messages toutes les 2 secondes
- **CORS** - Configuration pour permettre les appels cross-origin
- **Stockage en mémoire** - Messages stockés temporairement

## 📋 Prérequis

Avant d'installer l'application, assurez-vous d'avoir :

- **Node.js** (version 18 ou supérieure)
- **npm** (inclus avec Node.js)
- **Java JDK 17** ou supérieur
- **Maven 3.6+**
- **Git** pour cloner le repository

## 🛠️ Installation

### 1. Cloner le repository

```bash
git clone <url-du-repository>
cd POC
```

### 2. Installation et démarrage du Backend (Spring Boot)

```bash
# Naviguer vers le dossier backend
cd back

# Compiler et démarrer l'application
mvn spring-boot:run
```

Le backend sera accessible sur `http://localhost:8080`

**Endpoints disponibles :**
- `GET /api/messages` - Récupérer tous les messages
- `POST /api/messages` - Créer un nouveau message (CHAT/JOIN/LEAVE)

### 3. Installation et démarrage du Frontend (Angular)

Dans un nouveau terminal :

```bash
# Naviguer vers le dossier frontend
cd front

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm start
```

Le frontend sera accessible sur `http://localhost:4200`

## 🎯 Utilisation

1. **Ouvrir l'application** dans votre navigateur à l'adresse `http://localhost:4200`
2. **Saisir votre nom** dans le champ prévu à cet effet
3. **Cliquer sur "Join Chat"** pour rejoindre la conversation
4. **Taper vos messages** dans le champ de saisie en bas
5. **Appuyer sur Entrée ou cliquer sur "Send"** pour envoyer

## 🏗️ Architecture de l'Application

```
┌─────────────────┐     HTTP/JSON     ┌──────────────────┐
│   Frontend      │ ◄──────────────► │    Backend       │
│   Angular 19    │    (Polling)     │   Spring Boot    │
│   localhost:4200│                  │   localhost:8080 │
└─────────────────┘                  └──────────────────┘
         │                                      │
         ▼                                      ▼
┌─────────────────┐                  ┌──────────────────┐
│   Chat UI       │                  │   REST API       │
│   Components    │                  │   /api/messages  │
└─────────────────┘                  └──────────────────┘
```

## 📝 Fonctionnalités

### ✅ Implémentées
- ✅ Interface utilisateur responsive
- ✅ Saisie du nom d'utilisateur
- ✅ Envoi et réception de messages
- ✅ Messages système (JOIN/LEAVE)
- ✅ API REST conforme aux standards
- ✅ Gestion des erreurs de connexion
- ✅ Indicateur de statut de connexion

### 🔄 Améliorations Possibles
- ⏳ WebSockets pour la communication temps réel
- ⏳ Persistance des données (base de données)
- ⏳ Authentification des utilisateurs
- ⏳ Salles de chat multiples
- ⏳ Historique des messages
- ⏳ Notifications push

## 🔧 Configuration de Développement

### Variables d'Environnement

**Frontend (Angular)**
```typescript
// src/app/chat.service.ts
private readonly apiUrl = 'http://localhost:8080/api';
```

**Backend (Spring Boot)**
```java
// application.properties
server.port=8080
```

### Scripts Disponibles

**Frontend**
```bash
npm start          # Démarrer en mode développement
npm run build      # Build de production
npm test           # Lancer les tests
```

**Backend**
```bash
mvn spring-boot:run    # Démarrer l'application
mvn test              # Lancer les tests
mvn clean package     # Créer le JAR de production
```

## 🐛 Résolution de Problèmes

### Erreur CORS
Si vous rencontrez des erreurs CORS, vérifiez que :
- Le backend est démarré sur le port 8080
- La configuration `@CrossOrigin` est présente dans le contrôleur

### Port déjà utilisé
Si le port 4200 ou 8080 est occupé :
```bash
# Frontend - changer le port
ng serve --port 4201

# Backend - modifier application.properties
server.port=8081
```

### Problème de saisie
Si la saisie ne fonctionne pas, vérifiez que `FormsModule` est bien importé.

## 📄 Structure du Projet

```
POC/
├── front/                 # Application Angular
│   ├── src/
│   │   ├── app/
│   │   │   ├── chat/     # Composant de chat
│   │   │   └── chat.service.ts
│   │   └── main.ts
│   └── package.json
├── back/                  # Application Spring Boot
│   ├── src/main/java/com/example/chat/
│   │   ├── ChatRestController.java
│   │   ├── ChatService.java
│   │   ├── ChatMessage.java
│   │   └── ChatBackendApplication.java
│   └── pom.xml
└── README.md
```

## 👥 Contribution

Cette POC a été développée pour démontrer les capacités de communication en temps réel pour "Your Car Your Way".

---

**Version :** 0.0.1-SNAPSHOT  
**Dernière mise à jour :** 7 janvier 2025
