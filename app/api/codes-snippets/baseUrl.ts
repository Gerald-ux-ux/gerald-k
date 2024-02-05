type BaseUrlProps = {
  baseUrl: string | undefined;
};

export const baseUrl: BaseUrlProps = {
  baseUrl: process.env.BACKEND_URL,
};
