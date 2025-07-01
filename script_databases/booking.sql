-- Création de la base de données pour le service de réservation
CREATE DATABASE booking_db;

-- Connexion à la nouvelle base de données
\c booking_db;

-- Création de la table pour les réservations
CREATE TABLE Bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,       -- Référence à un utilisateur (service externe)
    vehicle_id UUID NOT NULL,    -- Référence à un véhicule (service externe)
    start_date TIMESTAMPTZ NOT NULL,
    end_date TIMESTAMPTZ NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    status VARCHAR(50) NOT NULL, -- Ex: 'CONFIRMED', 'CANCELLED', 'COMPLETED'
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);