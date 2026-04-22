import { Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function Login() {
  return (
    <div className="min-h-screen w-full bg-[#28282B] flex items-center justify-center px-4">
      <Card className="w-full max-w-md shadow-xl border border-white/10 bg-[#1f1f23]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-semibold text-white">Welcome back</CardTitle>
          <p className="text-sm text-gray-400">Enter your credentials to continue</p>
        </CardHeader>

        <CardContent>
          <form className="flex flex-col gap-4">
            <div className="space-y-1">
              <Label htmlFor="email" className="text-sm text-gray-300">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="email"
                  placeholder="your@email.com"
                  required
                  id="email"
                  className="pl-10 bg-[#2a2a2e] border border-white/10 focus:border-white/30"
                />
              </div>
            </div>

            <div className="space-y-1">
              <Label htmlFor="password" className="text-sm text-gray-300">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="password"
                  placeholder="••••••••"
                  required
                  id="password"
                  className="pl-10 bg-[#2a2a2e] border border-white/10 focus:border-white/30"
                />
              </div>
            </div>

            <Button className="mt-2 w-full">Sign In</Button>

            <div className="flex items-center gap-2 my-2">
              <Separator className="flex-1 bg-white/10" />
              <span className="text-xs text-gray-400">OR</span>
              <Separator className="flex-1 bg-white/10" />
            </div>

            <Button variant="outline" className="w-full">
              Sign in with Google
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
