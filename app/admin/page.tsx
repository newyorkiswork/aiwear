"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  Search, 
  Filter, 
  Eye, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Package,
  Truck,
  CheckSquare
} from "lucide-react"
import { getOrders, updateOrderStatus, updatePaymentStatus, initializeSampleOrders, type Order } from "@/lib/order-management"

export default function AdminPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  useEffect(() => {
    // Initialize sample orders if none exist
    initializeSampleOrders()
    setOrders(getOrders())
  }, [])

  const refreshOrders = () => {
    setOrders(getOrders())
  }

  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customerEmail.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesStatus = statusFilter === "all" || order.orderStatus === statusFilter
    
    return matchesSearch && matchesStatus
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "processing":
        return <Package className="h-4 w-4 text-blue-500" />
      case "shipped":
        return <Truck className="h-4 w-4 text-purple-500" />
      case "delivered":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      default:
        return <AlertCircle className="h-4 w-4 text-red-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      pending: "outline",
      processing: "secondary",
      shipped: "default",
      delivered: "default"
    }
    
    return (
      <Badge variant={variants[status] || "outline"} className="flex items-center gap-1">
        {getStatusIcon(status)}
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    )
  }

  const getPaymentStatusBadge = (status: string) => {
    return (
      <Badge variant={status === "paid" ? "default" : "destructive"}>
        {status === "paid" ? "Paid" : "Pending"}
      </Badge>
    )
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage orders and track inventory</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={refreshOrders}>
              <CheckSquare className="h-4 w-4 mr-2" />
              Refresh Orders
            </Button>
            <Button variant="outline">
              <CheckSquare className="h-4 w-4 mr-2" />
              Export Orders
            </Button>
            <Button>
              <Package className="h-4 w-4 mr-2" />
              Add Product
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Orders</p>
                  <p className="text-2xl font-bold">{orders.length}</p>
                </div>
                <Package className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Pending</p>
                  <p className="text-2xl font-bold">
                    {orders.filter(o => o.orderStatus === "pending").length}
                  </p>
                </div>
                <Clock className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Processing</p>
                  <p className="text-2xl font-bold">
                    {orders.filter(o => o.orderStatus === "processing").length}
                  </p>
                </div>
                <Package className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Shipped</p>
                  <p className="text-2xl font-bold">
                    {orders.filter(o => o.orderStatus === "shipped").length}
                  </p>
                </div>
                <Truck className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search orders by ID, customer name, or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8"
                />
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border rounded-md"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Orders Table */}
        <Card>
          <CardHeader>
            <CardTitle>Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredOrders.map((order) => (
                <div key={order.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <h3 className="font-medium">{order.id}</h3>
                      {getStatusBadge(order.orderStatus)}
                      {getPaymentStatusBadge(order.paymentStatus)}
                    </div>
                                         <div className="flex items-center gap-2">
                       <Button variant="outline" size="sm">
                         <Eye className="h-4 w-4 mr-2" />
                         View Details
                       </Button>
                       <select
                         value={order.orderStatus}
                         onChange={(e) => {
                           updateOrderStatus(order.orderNumber, e.target.value as Order['orderStatus'])
                           refreshOrders()
                         }}
                         className="px-2 py-1 text-sm border rounded"
                       >
                         <option value="pending">Pending</option>
                         <option value="processing">Processing</option>
                         <option value="shipped">Shipped</option>
                         <option value="delivered">Delivered</option>
                       </select>
                     </div>
                  </div>
                  
                                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                     <div>
                       <p className="font-medium">Order Info</p>
                       <p className="font-bold text-primary">{order.orderNumber}</p>
                       <p className="text-muted-foreground">{order.orderDate}</p>
                       <p className="text-xs bg-yellow-100 px-2 py-1 rounded mt-1">
                         Memo: {order.memo}
                       </p>
                     </div>
                     <div>
                       <p className="font-medium">Customer</p>
                       <p>{order.customerName}</p>
                       <p className="text-muted-foreground">{order.customerEmail}</p>
                       <p className="text-muted-foreground">{order.customerPhone}</p>
                     </div>
                     <div>
                       <p className="font-medium">Items</p>
                       {order.items.map((item, index) => (
                         <p key={index} className="text-muted-foreground">
                           {item.quantity}x {item.name} ({item.size}, {item.color})
                         </p>
                       ))}
                     </div>
                     <div>
                       <p className="font-medium">Payment</p>
                       <p className="capitalize">{order.paymentMethod}</p>
                       <p className="text-muted-foreground">${order.total.toFixed(2)}</p>
                       <p className="text-muted-foreground">{order.shippingAddress}</p>
                     </div>
                   </div>
                </div>
              ))}
              
              {filteredOrders.length === 0 && (
                <div className="text-center py-8">
                  <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No orders found</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
