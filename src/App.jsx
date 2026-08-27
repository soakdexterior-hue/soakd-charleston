import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';

import SiteLayout from './components/layout/SiteLayout';
import Home from './pages/Home';
import WindowCleaning from './pages/WindowCleaning';
import PressureWashing from './pages/PressureWashing';
import SoftWashing from './pages/SoftWashing';
import GutterCleaning from './pages/GutterCleaning';
import RoofWashing from './pages/RoofWashing';
import About from './pages/About';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Services from './pages/Services';
import ServiceAreas from './pages/ServiceAreas';
import FAQ from './pages/FAQ';
import Legal from './pages/Legal';
import SearchConsole from './pages/SearchConsole';
import TemplatePreview from './pages/TemplatePreview';
import SeoPage from './pages/SeoPage';
import { seoPages } from '@/data/seo-pages';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Navigate to="/" replace />} />
        <Route path="/window-cleaning" element={<WindowCleaning />} />
        <Route path="/pressure-washing" element={<PressureWashing />} />
        <Route path="/soft-washing" element={<SoftWashing />} />
        <Route path="/gutter-cleaning" element={<GutterCleaning />} />
        <Route path="/roof-washing" element={<RoofWashing />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-areas" element={<ServiceAreas />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/search-console" element={<SearchConsole />} />

        {/* SEO template pages — county, city, location service and primary
            service — generated from the registry in src/data/seo-pages. Adding
            a page there routes it automatically; no route is written by hand. */}
        {seoPages.map((entry) => (
          <Route key={entry.path} path={entry.path} element={<SeoPage entry={entry} />} />
        ))}

        {/* Internal harness for reviewing the SEO template — noindexed, not sitemapped. */}
        <Route path="/template-preview" element={<TemplatePreview />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClientInstance}>
          <Router>
            <AuthenticatedApp />
          </Router>
          <Toaster />
        </QueryClientProvider>
      </AuthProvider>
    </HelmetProvider>
  )
}

export default App