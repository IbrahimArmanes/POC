-- Création de la base de données pour le service de notification
CREATE DATABASE notification_db;

-- Connexion à la nouvelle base de données
\c notification_db;

-- Création de la table pour l'historique des notifications
CREATE TABLE NotificationLogs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    recipient_email VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL, -- Ex: 'BOOKING_CONFIRMATION', 'PASSWORD_RESET'
    status VARCHAR(50) NOT NULL, -- Ex: 'SENT', 'FAILED'
    sent_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    context_id UUID -- ID de l'entité concernée (ex: booking_id, user_id)
);