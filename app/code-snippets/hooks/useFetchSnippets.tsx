"use client";
import { useState, useEffect } from "react";
import { getCodeSnippets } from "../actions/action";
import { CodeSnippets } from "@/app/types/typings";

export function useFetchSnippets() {
  const [snippets, setSnippets] = useState<CodeSnippets[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSnippets() {
      try {
        const data = await getCodeSnippets();
        setSnippets(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchSnippets();
  }, []);

  return { snippets, loading, error };
}
