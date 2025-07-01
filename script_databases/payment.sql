-- Création de la base de données pour le service de paiement
CREATE DATABASE payment_db;

-- Connexion à la nouvelle base de données
\c payment_db;

-- Création de la table pour tracer les paiements
CREATE TABLE Payments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    booking_id UUID NOT NULL, -- Référence à une réservation (service externe)
    external_transaction_id VARCHAR(255) UNIQUE NOT NULL, -- ID de la transaction chez Stripe
    amount DECIMAL(10, 2) NOT NULL,
    currency VARCHAR(3) NOT NULL, -- Ex: 'EUR', 'USD'
    status VARCHAR(50) NOT NULL,  -- Ex: 'SUCCEEDED', 'FAILED'
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);