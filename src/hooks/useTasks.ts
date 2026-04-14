import { useQuery } from "@tanstack/react-query"; // Import the useQuery hook from React Query to manage data fetching and caching.
import { fetchTasks } from "@/lib/api/tasks"; 

export const useTasks = () => { // Define a custom hook called useTasks that will be used to fetch and manage the state of tasks in the application.
  return useQuery({
    queryKey: ["tasks"], // Define a unique key for this query, which helps React Query manage caching and refetching. In this case, the key is "tasks".
    queryFn: fetchTasks, // Specify the function that will be called to fetch the data. This function should return a promise that resolves to the data you want to fetch. In this case, it's the fetchTasks function that makes an API call to retrieve tasks.
  });
};