declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT?: string,
            MONGODB_URL: string
        }
    }
}

export {}