"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = exports.PrismaClient = void 0;
var client_1 = require("./generated/client");
Object.defineProperty(exports, "PrismaClient", { enumerable: true, get: function () { return client_1.PrismaClient; } });
const pg_1 = require("pg");
const adapter_pg_1 = require("@prisma/adapter-pg");
const client_2 = require("./generated/client");
const globalForPrisma = globalThis;
function createClient() {
    const pool = new pg_1.Pool({ connectionString: process.env.DATABASE_URL });
    const adapter = new adapter_pg_1.PrismaPg(pool);
    return new client_2.PrismaClient({
        adapter,
        log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
    });
}
exports.prisma = globalForPrisma.prisma ?? createClient();
if (process.env.NODE_ENV !== "production")
    globalForPrisma.prisma = exports.prisma;
