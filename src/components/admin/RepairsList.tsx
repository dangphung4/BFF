import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

type RepairStatus = "pending" | "in_progress" | "completed" | "cancelled";

interface Repair {
  id: string;
  customerName: string;
  itemDescription: string;
  dateReceived: string;
  estimatedCompletion: string;
  status: RepairStatus;
  progress: number;
}

// Demo data
const initialRepairs: Repair[] = [
  {
    id: "REP-1234",
    customerName: "John Doe",
    itemDescription: "Brown Leather Oxford Shoes",
    dateReceived: "2024-04-05",
    estimatedCompletion: "2024-04-12",
    status: "in_progress",
    progress: 65,
  },
  {
    id: "REP-1235",
    customerName: "Jane Smith",
    itemDescription: "Black Leather Handbag",
    dateReceived: "2024-04-06",
    estimatedCompletion: "2024-04-14",
    status: "pending",
    progress: 0,
  },
  {
    id: "REP-1236",
    customerName: "Mike Johnson",
    itemDescription: "Leather Boots - Sole Replacement",
    dateReceived: "2024-04-02",
    estimatedCompletion: "2024-04-10",
    status: "completed",
    progress: 100,
  },
  {
    id: "REP-1237",
    customerName: "Sarah Williams",
    itemDescription: "Suede Jacket - Tear Repair",
    dateReceived: "2024-04-07",
    estimatedCompletion: "2024-04-21",
    status: "in_progress",
    progress: 30,
  },
  {
    id: "REP-1238",
    customerName: "David Brown",
    itemDescription: "Briefcase Handle Repair",
    dateReceived: "2024-04-08",
    estimatedCompletion: "2024-04-15",
    status: "pending",
    progress: 0,
  },
];

// Helper function to get badge color based on status
const getStatusBadge = (status: RepairStatus) => {
  switch (status) {
    case "pending":
      return <Badge variant="outline">Pending</Badge>;
    case "in_progress":
      return <Badge variant="secondary">In Progress</Badge>;
    case "completed":
      return <Badge variant="default">Completed</Badge>;
    case "cancelled":
      return <Badge variant="destructive">Cancelled</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

export const RepairsList = () => {
  const [repairs, setRepairs] = useState<Repair[]>(initialRepairs);
  const [filter, setFilter] = useState<string>("all");

  // Filter repairs based on status
  const filteredRepairs = filter === "all" 
    ? repairs 
    : repairs.filter(repair => repair.status === filter);

  // Update repair status and progress
  const updateRepairStatus = (id: string, status: RepairStatus, progress: number) => {
    setRepairs(repairs.map(repair => 
      repair.id === id ? { ...repair, status, progress } : repair
    ));
  };

  // Mark repair as complete
  const completeRepair = (id: string) => {
    updateRepairStatus(id, "completed", 100);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <span className="text-sm">Filter by status:</span>
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Repairs</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="in_progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead className="hidden md:table-cell">Item</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRepairs.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-10 text-muted-foreground">
                  No repairs found
                </TableCell>
              </TableRow>
            ) : (
              filteredRepairs.map((repair) => (
                <TableRow key={repair.id}>
                  <TableCell className="font-medium">{repair.id}</TableCell>
                  <TableCell>{repair.customerName}</TableCell>
                  <TableCell className="hidden md:table-cell">{repair.itemDescription}</TableCell>
                  <TableCell className="hidden md:table-cell">{new Date(repair.dateReceived).toLocaleDateString()}</TableCell>
                  <TableCell>{getStatusBadge(repair.status)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={repair.progress} className="w-[60px] md:w-[100px]" />
                      <span className="text-xs">{repair.progress}%</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                          <Link to={`/admin/repairs/${repair.id}`}>
                            View Details
                          </Link>
                        </DropdownMenuItem>
                        {repair.status === "in_progress" && (
                          <DropdownMenuItem onClick={() => completeRepair(repair.id)}>
                            Mark Complete
                          </DropdownMenuItem>
                        )}
                        {repair.status === "pending" && (
                          <DropdownMenuItem onClick={() => updateRepairStatus(repair.id, "in_progress", 10)}>
                            Start Repair
                          </DropdownMenuItem>
                        )}
                        {(repair.status === "pending" || repair.status === "in_progress") && (
                          <DropdownMenuItem onClick={() => updateRepairStatus(repair.id, "cancelled", 0)}>
                            Cancel Repair
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}; 