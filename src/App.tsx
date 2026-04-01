import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import BusinessIntelligenceSuite from "./pages/solutions/BusinessIntelligenceSuite";
import FinancialControlSuite from "./pages/solutions/FinancialControlSuite";
import LaborWorkforceSuite from "./pages/solutions/LaborWorkforceSuite";
import OperationsAutomationSuite from "./pages/solutions/OperationsAutomationSuite";
import ReconciliationPage from "./pages/solutions/ReconciliationPage";
import InnrlyPay from "./pages/solutions/InnrlyPay";
import TimeclockPage from "./pages/solutions/TimeclockPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Security from "./pages/Security";
import CookiePolicy from "./pages/CookiePolicy";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Integrations from "./pages/Integrations";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";
import PreviewGallery from "./pages/PreviewGallery";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions/business-intelligence" element={<BusinessIntelligenceSuite />} />
          <Route path="/solutions/financial-control" element={<FinancialControlSuite />} />
          <Route path="/solutions/labor-workforce" element={<LaborWorkforceSuite />} />
          <Route path="/solutions/operations-automation" element={<OperationsAutomationSuite />} />
          <Route path="/solutions/reconciliation" element={<ReconciliationPage />} />
          <Route path="/solutions/innrly-pay" element={<InnrlyPay />} />
          <Route path="/solutions/timeclock" element={<TimeclockPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/security" element={<Security />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/preview-images" element={<PreviewGallery />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
