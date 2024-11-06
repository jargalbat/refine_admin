import { createClient } from "@refinedev/supabase";

const SUPABASE_URL = "https://aushmxjpwjshmxjmbinr.supabase.co";
// const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
// const SUPABASE_URL = "https://iwdfzvfqbtokqetmbmbp.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1c2hteGpwd2pzaG14am1iaW5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2OTc5MzEsImV4cCI6MjA0NjI3MzkzMX0.shal3JWuSNd1iZbTnLKVnv85ZMKLsdkvhuE4CphyMDo";
// const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
// const SUPABASE_KEY =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMDU2NzAxMCwiZXhwIjoxOTQ2MTQzMDEwfQ._gr6kXGkQBi9BM9dx5vKaNKYj_DJN1xlkarprGpM_fU";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});
