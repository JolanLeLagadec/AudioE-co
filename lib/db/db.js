import { PrismaClient } from '@prisma/client';

// Vérifie si l'objet global `prisma` a déjà été défini, dans ce cas, il le réutilise,
// sinon il crée une nouvelle instance de PrismaClient.
const db = global.prisma || new PrismaClient();

// Enregistre l'instance de PrismaClient dans l'objet global en mode développement,
// ce qui permet de réutiliser la même instance à travers les rechargements de module chauds (HMR).
if (process.env.NODE_ENV !== 'production') global.prisma = db;

export default db;
