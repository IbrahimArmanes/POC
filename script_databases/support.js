
const supportDb = db.getSiblingDB('support_db');

supportDb.createCollection("conversations", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: [ "userId", "status", "createdAt", "messages" ],
         properties: {
            userId: {
               bsonType: "string",
               description: "ID de l'utilisateur qui a initié la conversation (référence externe)"
            },
            status: {
               enum: [ "OPEN", "CLOSED", "PENDING_USER_REPLY" ],
               description: "Statut actuel de la conversation"
            },
            subject: {
               bsonType: "string",
               description: "Sujet de la conversation (optionnel)"
            },
            createdAt: {
               bsonType: "date",
               description: "Date de création de la conversation"
            },
            updatedAt: {
                bsonType: "date",
                description: "Date de la dernière mise à jour"
            },
            messages: {
               bsonType: "array",
               description: "Liste des messages de la conversation",
               items: {
                  bsonType: "object",
                  required: ["sender", "content", "timestamp"],
                  properties: {
                     sender: {
                        enum: ["USER", "AGENT"],
                        description: "Qui a envoyé le message"
                     },
                     content: {
                        bsonType: "string",
                        description: "Contenu du message"
                     },
                     timestamp: {
                        bsonType: "date",
                        description: "Date d'envoi du message"
                     }
                  }
               }
            }
         }
      }
   }
});
