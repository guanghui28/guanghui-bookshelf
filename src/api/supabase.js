import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://upgqlbnenvgngltzvuez.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwZ3FsYm5lbnZnbmdsdHp2dWV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM4Njg4NjksImV4cCI6MjAyOTQ0NDg2OX0.DukQ7OqmQ8_VSAmz25CIJop8G-rNRZ_2XOycz-E_Sb8";

const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase, supabaseUrl };
