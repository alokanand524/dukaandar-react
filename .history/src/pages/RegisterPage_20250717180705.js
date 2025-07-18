"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Store, Check, X, Crown, Zap } from "lucide-react"

export default function RegisterPage() {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [showRegistrationForm, setShowRegistrationForm] = useState(false)

  const plans = [
    {
      id: "basic",
      name: "Basic",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 100 products",
        "Basic analytics",
        "Email support",
        "Mobile app access",
        "Basic customization",
        "1 staff account",
      ],
      limitations: ["Limited integrations", "Basic reporting only"],
      popular: false,
      color: "border-gray-200",
    },
    {
      id: "professional",
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 1,000 products",
        "Advanced analytics",
        "Priority support",
        "Mobile app access",
        "Full customization",
        "5 staff accounts",
        "Inventory management",
        "Customer segmentation",
        "Marketing tools",
      ],
      limitations: [],
      popular: true,
      color: "border-blue-500",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large-scale operations",
      features: [
        "Unlimited products",
        "Enterprise analytics",
        "24/7 phone support",
        "Mobile app access",
        "White-label solution",
        "Unlimited staff accounts",
        "Advanced inventory",
        "Multi-location support",
        "API access",
        "Custom integrations",
        "Dedicated account manager",
      ],
      limitations: [],
      popular: false,
      color: "border-purple-500",
    },
  ]

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId)
    setShowRegistrationForm(true)
  }

  if (showRegistrationForm) {
    const plan = plans.find((p) => p.id === selectedPlan)

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 pt-8">
            <Link to="/" className="inline-flex items-center justify-center mb-4">
              <Store className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">VendorHub</span>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Create Your Account</h1>
            <p className="text-gray-600 mt-2">
              You've selected the <span className="font-semibold text-blue-600">{plan?.name}</span> plan
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Registration Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Account Information</CardTitle>
                  <CardDescription>Fill in your details to get started with your 14-day free trial</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Your Company Ltd." required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="Create a strong password" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input id="confirmPassword" type="password" placeholder="Confirm your password" required />
                  </div>

                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="terms" className="mt-1" required />
                    <Label htmlFor="terms" className="text-sm leading-5">
                      I agree to the{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </a>
                    </Label>
                  </div>

                  <Link to="/dashboard">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">Start My Free Trial</Button>
                  </Link>

                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      Already have an account?{" "}
                      <Link to="/login" className="text-blue-600 hover:underline font-medium">
                        Sign in
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Plan Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {selectedPlan === "enterprise" && <Crown className="h-5 w-5 text-purple-600" />}
                    {selectedPlan === "professional" && <Zap className="h-5 w-5 text-blue-600" />}
                    {selectedPlan === "basic" && <Store className="h-5 w-5 text-gray-600" />}
                    {plan?.name} Plan
                  </CardTitle>
                  <CardDescription>
                    <span className="text-2xl font-bold text-gray-900">{plan?.price}</span>
                    <span className="text-gray-600">{plan?.period}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                      <p className="text-sm font-medium text-green-800">14-Day Free Trial</p>
                      <p className="text-xs text-green-600">No credit card required</p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">What's included:</h4>
                      <ul className="space-y-1">
                        {plan?.features.slice(0, 5).map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-xs">
                            <Check className="h-3 w-3 text-green-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                        {plan && plan.features.length > 5 && (
                          <li className="text-xs text-gray-500">+{plan.features.length - 5} more features</li>
                        )}
                      </ul>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-transparent"
                      onClick={() => setShowRegistrationForm(false)}
                    >
                      Change Plan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <Link to="/" className="flex items-center justify-center">
          <Store className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">VendorHub</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4">
          <Link to="/login">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </Link>
        </nav>
      </header>

      <main className="py-12">
        <div className="container px-4 md:px-6 mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">Choose Your Perfect Plan</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start with a 14-day free trial. No credit card required. Cancel anytime.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto mb-16">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className={`relative ${plan.color} ${
                  plan.popular ? "ring-2 ring-blue-500 scale-105" : ""
                } hover:shadow-lg transition-all`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    {plan.id === "enterprise" && <Crown className="h-8 w-8 text-purple-600" />}
                    {plan.id === "professional" && <Zap className="h-8 w-8 text-blue-600" />}
                    {plan.id === "basic" && <Store className="h-8 w-8 text-gray-600" />}
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}

                    {plan.limitations.map((limitation, index) => (
                      <div key={index} className="flex items-center gap-3 opacity-60">
                        <X className="h-4 w-4 text-gray-400 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{limitation}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full mt-6 ${
                      plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-900 hover:bg-gray-800"
                    }`}
                    onClick={() => handlePlanSelect(plan.id)}
                  >
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
