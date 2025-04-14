import { ProtectedRoute } from "@/auth/ProtectedRoute";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AdminStats } from "@/components/admin/AdminStats";
import { RepairsList } from "@/components/admin/RepairsList";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function AdminDashboardPage() {
  return (
    <ProtectedRoute adminOnly>
      <div className="container mx-auto py-10 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <div className="flex gap-2">
            <Button asChild>
              <Link to="/admin/repairs/new">
                <Plus className="h-4 w-4 mr-2" /> 
                New Repair
              </Link>
            </Button>
          </div>
        </div>

        <AdminStats />

        <Tabs defaultValue="repairs" className="mt-6">
          <TabsList>
            <TabsTrigger value="repairs">Repairs</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
          </TabsList>
          
          <TabsContent value="repairs" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Repair Orders</CardTitle>
                <CardDescription>
                  Manage and track all repair orders
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RepairsList />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="customers" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Customers</CardTitle>
                <CardDescription>
                  Manage your customer database
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center py-10 text-muted-foreground">
                Customer management coming soon
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="products" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Products</CardTitle>
                <CardDescription>
                  Manage your product inventory
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center py-10 text-muted-foreground">
                Product management coming soon
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ProtectedRoute>
  );
} 