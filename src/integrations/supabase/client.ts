// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://xexzvwsjnlvhscwdphjr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhleHp2d3Nqbmx2aHNjd2RwaGpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzMzU1MTksImV4cCI6MjA2MDkxMTUxOX0.yG2zCkZPIuyGz6QpTqxL248bM7GBJ6KpfGReS9OaA-0";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);