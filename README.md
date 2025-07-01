# Chat Support Client POC - "Your Car Your Way"

Une Proof of Concept (POC) pour une application de chat en temps réel développée pour "Your Car Your Way".

## Stack Technique

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

## Prérequis

Avant d'installer l'application, assurez-vous d'avoir :

- **Node.js** (version 18 ou supérieure)
- **npm** (inclus avec Node.js)
- **Java JDK 17** ou supérieur
- **Maven 3.6+**
- **Git** pour cloner le repository

## Installation

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


