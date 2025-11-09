import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
    'https://xewylsthvseftqindxex.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhld3lsc3RodnNlZnRxaW5keGV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2NTc2MTYsImV4cCI6MjA3ODIzMzYxNn0.6qeGcsm3OyN2h6GmjO7DVueyMhZeldLoRvC9nSDJz5s',
)
