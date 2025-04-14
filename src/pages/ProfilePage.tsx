import { useUser } from "@/auth/auth-hooks";
import { ProtectedRoute } from "@/auth/ProtectedRoute";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { LogOut, UserCircle } from "lucide-react";

export default function ProfilePage() {
  const { user, logout } = useUser();

  return (
    <ProtectedRoute>
      <div className="container mx-auto py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Profile Card */}
            <Card className="col-span-1">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 relative">
                  {user?.picture ? (
                    <img 
                      src={user.picture} 
                      alt={user?.name || 'Profile'} 
                      className="rounded-full w-24 h-24 object-cover mx-auto"
                    />
                  ) : (
                    <div className="rounded-full w-24 h-24 bg-muted flex items-center justify-center mx-auto">
                      <UserCircle className="h-12 w-12 text-muted-foreground" />
                    </div>
                  )}
                </div>
                <CardTitle>{user?.name}</CardTitle>
                <CardDescription>{user?.email}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={() => logout()}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </CardFooter>
            </Card>
            
            {/* User Information */}
            <Card className="col-span-1 md:col-span-2">
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>Your personal information and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Email</h3>
                  <p>{user?.email}</p>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Email Verified</h3>
                  <p>{user?.email_verified ? 'Yes' : 'No'}</p>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Account Created</h3>
                  <p>{user?.updated_at ? new Date(user.updated_at).toLocaleDateString() : 'Unknown'}</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Repair History */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Repair History</CardTitle>
              <CardDescription>Your previous repair orders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6 text-muted-foreground">
                You don't have any repair history yet.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ProtectedRoute>
  );
} 