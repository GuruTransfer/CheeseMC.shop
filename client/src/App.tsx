import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import TutorialPage from "@/pages/TutorialPage";
import NotFound from "@/pages/not-found";

// GitHub Pages sử dụng pattern khác so với routing thông thường
// Tạo handler cho base path trong GitHub Pages (/CheeseMC.shop)
const useBasePath = () => {
  // hook tiêu chuẩn từ wouter
  const [location, setLocation] = useLocation();

  // Kiểm tra nếu đang chạy trong GitHub Pages
  const isGitHubPages = location.includes('/CheeseMC.shop');
  
  return {
    location,
    setLocation,
    basePath: isGitHubPages ? '/CheeseMC.shop' : '',
  };
};

function Router() {
  const { basePath } = useBasePath();
  
  return (
    <Switch>
      <Route path={`${basePath}/`} component={TutorialPage} />
      <Route path={`${basePath}`} component={TutorialPage} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
