// Supabase Configuration for PDFrow
// Your Supabase Project: amnbtpnuqpqlngjfybgw
// Service Key removed for security - use backend environment variables only

const SUPABASE_CONFIG = {
    url: 'https://amnbtpnuqpqlngjfybgw.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtbmJ0cG51cXBxbG5namZ5Ymd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzNDAxNDcsImV4cCI6MjA2OTkxNjE0N30.7-5k1zL1hBJyk1GXTMdm6j_sE0eSBkiCjpjDGy5iTQc'
};

// Demo configuration for development (remove in production)
const DEMO_CONFIG = {
    url: 'https://demo.supabase.co',
    anonKey: 'demo-key'
};

// Use DEMO_CONFIG for development, SUPABASE_CONFIG for production
const config = SUPABASE_CONFIG; // Now using your real Supabase project

// Initialize Supabase client
let supabase;
try {
    if (window.supabase && config.url && config.anonKey) {
        supabase = window.supabase.createClient(config.url, config.anonKey);
        console.log('✅ Supabase initialized successfully');
    } else {
        console.warn('⚠️ Supabase not available or config incomplete');
    }
} catch (error) {
    console.error('❌ Failed to initialize Supabase:', error);
}

// Export for use in other files
window.supabaseClient = supabase;
window.supabaseConfig = config;