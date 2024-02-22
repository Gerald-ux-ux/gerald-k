"use server"

import { errorMessage } from "@/lib/secrete";


export async function getCodeSnippets (): Promise<any[]> {
    try {

    } catch (error) {
    return error?.response?.data || errorMessage;
    }
}
