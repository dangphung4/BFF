import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Users, Package, DollarSign } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

const StatCard = ({ title, value, description, icon, trend }: StatCardProps) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <div className="h-8 w-8 text-primary">{icon}</div>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground">{description}</p>
      {trend && (
        <div className={`flex items-center mt-1 text-xs ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
          <span>{trend.isPositive ? '+' : ''}{trend.value}%</span>
          <span className="ml-1">from last month</span>
        </div>
      )}
    </CardContent>
  </Card>
);

export const AdminStats = () => {
  // In a real app, these would come from your API
  const stats = [
    {
      title: "Active Repairs",
      value: 12,
      description: "Repairs in progress",
      icon: <Wrench />,
      trend: { value: 15, isPositive: true }
    },
    {
      title: "Customers",
      value: 245,
      description: "Total customers",
      icon: <Users />,
      trend: { value: 5, isPositive: true }
    },
    {
      title: "Products",
      value: 46,
      description: "In inventory",
      icon: <Package />,
      trend: { value: 3, isPositive: false }
    },
    {
      title: "Revenue",
      value: "$12,421",
      description: "Last 30 days",
      icon: <DollarSign />,
      trend: { value: 7, isPositive: true }
    },
  ];

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          description={stat.description}
          icon={stat.icon}
          trend={stat.trend}
        />
      ))}
    </div>
  );
}; 