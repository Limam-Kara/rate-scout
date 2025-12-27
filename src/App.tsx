import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Components from "./pages/Components";
import Aboutus from "./pages/aboutus";
import Feedback from "./pages/feedback";
import NotFound from "./pages/NotFound";
import Privacy_policy from "./pages/Privacy_policy";
import Terms_of_service from "./pages/terms_of_service";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/components" element={<Components />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/privacy-policy" element={<Privacy_policy />} />
          <Route path="/terms-of-service" element={<Terms_of_service />} />


          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
