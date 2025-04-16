
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuthContext";
import { Lock } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(password);
    if (!success) {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 max-w-md mx-auto">
      <div className="flex flex-col items-center">
        <Lock className="h-8 w-8 text-[#1E3A8A] dark:text-[#A3BFFA] mb-2" />
        <h2 className="text-2xl font-bold text-[#1E3A8A] dark:text-[#A3BFFA] font-quantico">
          Admin Access
        </h2>
        <p className="text-[#4B5EAA] dark:text-[#D6E0FA] text-sm mt-2 text-center">
          Enter the password to access the admin panel
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 w-full">
        <div className="space-y-2">
          <Input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-[#1E3A8A] dark:border-[#A3BFFA] focus:ring-blue-500"
          />
        </div>

        {error && (
          <Alert variant="destructive" className="py-2">
            <AlertDescription>
              Incorrect password, please try again
            </AlertDescription>
          </Alert>
        )}

        <Button
          type="submit"
          className="w-full bg-[#1E3A8A] hover:bg-blue-800 text-white dark:bg-[#A3BFFA] dark:text-gray-900 dark:hover:bg-blue-400"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
