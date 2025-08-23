"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, Filter, Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const searchResults: any[] = []

  return (
    <div className="container px-4 py-6 md:px-6">
      <div className="space-y-6">
        {/* Search Header */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold tracking-tight">Search Products</h1>
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for clothing, accessories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {searchResults.length} results found
          </p>
          <div className="flex gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("grid")}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Search Results */}
        <div className={viewMode === "grid" ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" : "space-y-4"}>
          {searchResults.map((product) => (
            <Card key={product.id} className="group">
              <CardContent className="p-4">
                <div className={viewMode === "list" ? "flex gap-4" : "space-y-4"}>
                  <div className={`relative overflow-hidden rounded-lg ${viewMode === "list" ? "w-24 h-24 flex-shrink-0" : "aspect-square"}`}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <Badge variant="outline" className="w-fit">
                      {product.category}
                    </Badge>
                    <h3 className="font-medium">{product.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground line-through">${product.price.toFixed(2)}</span>
                      <span className="font-medium text-primary">${product.offerPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm text-muted-foreground">★</span>
                      <span className="text-sm text-muted-foreground">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
