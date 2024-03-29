"use client";
import { useState, useEffect } from "react";
import { getCodeSnippets } from "../actions/action";
import { CodeSnippets } from "@/app/types/typings";
import { Snippet } from "../types/snippets";

export function useFetchSnippets() {
  const [snippets, setSnippets] = useState<Snippet[]>([]);
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
