declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_HYGRAPH_PROJECT_API: string;
      HYGRAPH_PROD_AUTH_TOKEN: string;
      HYGRAPH_DEV_AUTH_TOKEN: string;
      HYGRAPH_PREVIEW_SECRET: string;
    }
  }
}

export {};
