-- Création de la base de données pour le service catalogue
CREATE DATABASE catalog_db;

-- Connexion à la nouvelle base de données
\c catalog_db;

-- Création de la table pour les agences
CREATE TABLE Agencies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    address TEXT
);

-- Création de la table pour les véhicules
CREATE TABLE Vehicles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    agency_id UUID NOT NULL, -- Référence à une agence dans cette même base
    acriss_code VARCHAR(4) NOT NULL, -- Code standard pour la catégorie de véhicule
    make VARCHAR(100) NOT NULL,      -- Marque (ex: Renault)
    model VARCHAR(100) NOT NULL,     -- Modèle (ex: Clio)
    daily_rate DECIMAL(10, 2) NOT NULL,
    
    FOREIGN KEY (agency_id) REFERENCES Agencies(id)
);