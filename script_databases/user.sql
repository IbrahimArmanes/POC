-- Création de la base de données pour le service utilisateur
CREATE DATABASE user_db;

-- Connexion à la nouvelle base de données
\c user_db;

-- Création d'un type ENUM pour les rôles, garantissant la cohérence des données
CREATE TYPE UserRole AS ENUM ('CLIENT', 'ADMIN');

-- Création de la table pour les utilisateurs
CREATE TABLE Users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),  -- Clé primaire unique
    email VARCHAR(255) UNIQUE NOT NULL,             -- Email unique, utilisé pour la connexion
    password_hash VARCHAR(255) NOT NULL,            -- Hash du mot de passe (JAMAIS en clair)
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    role UserRole NOT NULL DEFAULT 'CLIENT',        -- Rôle de l'utilisateur, par défaut 'CLIENT'
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);