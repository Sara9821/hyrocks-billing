import { createClient } from "@supabase/supabase-js";

// Your Hyrocks Supabase project. The publishable key is safe to ship in the app.
export const SUPABASE_URL = "https://hzzgbpcwaisnghrfxmxn.supabase.co";
export const SUPABASE_KEY = "sb_publishable_HX3BLA76ho6I5nIxG1CqWQ_dn-dj3uS";

export const sb = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { persistSession: false },
});

// Call a database function. Throws on error so callers can show a message.
export async function rpc(fn, args) {
  const { data, error } = await sb.rpc(fn, args);
  if (error) throw new Error(error.message || "Request failed");
  return data;
}
