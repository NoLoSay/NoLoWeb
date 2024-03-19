import { useEffect, useState } from "react";
import { Paper } from "@mui/material";

function fetchData({ apiRoute }: { apiRoute: string }) {
  const [data, setData] = useState<any>(null);

  console.log("here")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiRoute);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiRoute]);

  console.log("data", data)
  return data;
}

export default function APITester({ apiRoute }: { apiRoute: string }) {
  const data = fetchData({ apiRoute });

  return (
    <Paper>
      <h1>API Tester</h1>
      {data && (
        <pre>{JSON.stringify(data)}</pre>
      )}
    </Paper>
  );
}
