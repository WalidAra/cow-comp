type Fetch = {
  accessToken?: string;
  feature: "auth" | "cows" | "births" | "medical" | "dailyProduction";
  endpoint: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: object;
  includeToken?: boolean;
  callback?: () => void;
};

type FetchResponse<T> = {
  status: boolean;
  message: string;
  data: T;
};

type accessToken = {
  accessToken: string;
};

type Admin = {
  id: string;
  email: string;
  password: string;
  role: "admin";
  name: string;
};
