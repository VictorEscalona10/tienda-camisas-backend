import { configDotenv } from "dotenv";

configDotenv()

const config = {
    DATABASE_URL: process.env.DATABASE_URL,
    PORT: process.env.PORT || 3000,
    JWT_SECRET: process.env.JWT_SECRET
}

export default config