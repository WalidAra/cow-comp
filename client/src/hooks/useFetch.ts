import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";
import { API_URL, HEADER } from "@/config";

const useFetch = <T>({
  endpoint,
  feature,
  method,
  body,
  accessToken,
  includeToken = false,
  callback,
}: Fetch): { response: FetchResponse<T> | null; loading: boolean } => {
  const [response, setResponse] = useState<FetchResponse<T> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const url = `${API_URL}${
    includeToken ? "private" : "public"
  }/${feature}/${endpoint}`;

  useEffect(() => {
    const getData = async () => {
      try {
        const axiosConfig: AxiosRequestConfig = {
          method: method,
          url,
          headers: {
            "Content-Type": "application/json",
            ...(includeToken && { [HEADER]: `Bearer ${accessToken}` }),
          },
          data: body,
        };

        const res = await axios(axiosConfig);
        setResponse(res.data as FetchResponse<T>);
      } catch (error: any) {
        if (axios.isAxiosError(error)) {
          setResponse(error.response?.data as FetchResponse<T>);
        } else {
          setResponse({
            status: false,
            message: "An unexpected error occurred",
            data: null,
          } as FetchResponse<T>);
        }
      } finally {
        callback && callback();
        setLoading(false);
      }
    };

    if (
      (accessToken && includeToken === true) ||
      (includeToken === false && !accessToken)
    ) {
      getData();
    }
  }, [endpoint, feature, method, body, accessToken, url, includeToken, callback]);

  return { response, loading };
};

export default useFetch;
