import { useState } from "react";

interface RecordVideoController {
  error: string;
}

interface RecordVideoControllerProps {
  navigate: any;
}

export default function RecordVideoController({
  navigate,
}: RecordVideoControllerProps): RecordVideoController {
  const [error, setError] = useState<string>("");

  return {
    error,
  };
}
