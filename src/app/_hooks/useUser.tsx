import useSWR from "swr";

export function useUser() {
  const { data, error, isLoading } = useSWR('/api/user/currentUser');

  return {
    user: data,
    isLoading,
    isError: error,
  };
}
