import { createClient } from "@supabase/supabase-js";

let supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

// Ensure the URL is valid to prevent fatal browser crashes
if (supabaseUrl && !supabaseUrl.startsWith("http")) {
  supabaseUrl = `https://${supabaseUrl}`;
}

const finalUrl = supabaseUrl || "https://placeholder.supabase.co";

export const supabase = createClient(finalUrl, supabaseAnonKey || "placeholder");
