import { Link, useLocation } from "react-router-dom"
import {
  BarChart3,
  Package,
  ShoppingCart,
  Users,
  Receipt,
  Store,
  CreditCard,
  UserCheck,
  Bell,
  HelpCircle,
  LogOut,
} from "lucide-react"

export default function Sidebar() {
  const location = useLocation()

  const navigation = [
    {
      title: "Overview",
      items: [
        { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
        { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
      ],
    },
    {
      title: "Store Management",
      items: [
        { name: "Products", href: "/dashboard/products", icon: Package },
        { name: "Orders", href: "/dashboard/orders", icon: ShoppingCart },
        { name: "Customers", href: "/dashboard/customers", icon: Users },
        { name: "Inventory", href: "/dashboard/inventory", icon: Package },
      ],
    },
    {
      title: "Financial",
      items: [
        { name: "Billing", href: "/dashboard/billing", icon: Receipt },
        { name: "Payments", href: "/dashboard/payments", icon: CreditCard },
      ],
    },
    {
      title: "Settings",
      items: [
        { name: "Store Settings", href: "/dashboard/settings", icon: Store },
        { name: "Staff", href: "/dashboard/staff", icon: UserCheck },
        { name: "Notifications", href: "/dashboard/notifications", icon: Bell },
      ],
    },
  ]

  return (
    <div className="bg-white w-64 min-h-screen shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-2 px-6 py-4 border-b">
        <Store className="h-8 w-8 text-blue-600" />
        <div>
          <h2 className="text-lg font-semibold">VendorHub</h2>
          <p className="text-sm text-gray-500">My Store Dashboard</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-6">
        {navigation.map((section) => (
          <div key={section.title} className="mb-6">
            <h3 className="px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">{section.title}</h3>
            <div className="space-y-1">
              {section.items.map((item) => {
                const isActive = location.pathname === item.href
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center px-6 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 w-64 border-t bg-white">
        <div className="space-y-1 p-2">
          <button className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md">
            <HelpCircle className="mr-3 h-5 w-5" />
            Help & Support
          </button>
          <button className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md">
            <LogOut className="mr-3 h-5 w-5" />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  )
}
