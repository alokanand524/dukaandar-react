"use client"

import { useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Plus, Search, Filter, MoreHorizontal } from "lucide-react"

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("")

  const products = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      sku: "WBH-001",
      category: "Electronics",
      price: 99.99,
      stock: 45,
      status: "Active",
      image: "https://via.placeholder.com/40x40/f3f4f6/6b7280?text=IMG",
    },
    {
      id: 2,
      name: "Smartphone Protective Case",
      sku: "SPC-002",
      category: "Accessories",
      price: 24.99,
      stock: 120,
      status: "Active",
      image: "https://via.placeholder.com/40x40/f3f4f6/6b7280?text=IMG",
    },
    {
      id: 3,
      name: "USB-C Charging Cable",
      sku: "UCC-003",
      category: "Accessories",
      price: 15.99,
      stock: 8,
      status: "Low Stock",
      image: "https://via.placeholder.com/40x40/f3f4f6/6b7280?text=IMG",
    },
    {
      id: 4,
      name: "Portable Power Bank",
      sku: "PPB-004",
      category: "Electronics",
      price: 49.99,
      stock: 0,
      status: "Out of Stock",
      image: "https://via.placeholder.com/40x40/f3f4f6/6b7280?text=IMG",
    },
    {
      id: 5,
      name: "Wireless Mouse",
      sku: "WM-005",
      category: "Electronics",
      price: 29.99,
      stock: 67,
      status: "Active",
      image: "https://via.placeholder.com/40x40/f3f4f6/6b7280?text=IMG",
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800"
      case "Low Stock":
        return "bg-yellow-100 text-yellow-800"
      case "Out of Stock":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Products</h2>
          <p className="text-gray-500">Manage your product inventory</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Product Inventory</CardTitle>
          <CardDescription>
            A list of all products in your store including their details and stock levels.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Product</th>
                  <th className="text-left py-3 px-4">SKU</th>
                  <th className="text-left py-3 px-4">Category</th>
                  <th className="text-left py-3 px-4">Price</th>
                  <th className="text-left py-3 px-4">Stock</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-right py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">
                      <div className="flex items-center space-x-3">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-10 h-10 rounded-md object-cover"
                        />
                        <span>{product.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">{product.sku}</td>
                    <td className="py-3 px-4">{product.category}</td>
                    <td className="py-3 px-4">${product.price}</td>
                    <td className="py-3 px-4">{product.stock}</td>
                    <td className="py-3 px-4">
                      <Badge className={getStatusColor(product.status)}>{product.status}</Badge>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="relative inline-block">
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
