export interface Product {
  id: string
  name: string
  price: number
  category: string
  subcategory?: string
  brand: "tokens" | "data"
  rating: number
  reviews: number
  description: string
  slug: string
  image?: string
  sizes: string[]
  colors: string[]
  features: string[]
  inStock: boolean
}

export const allProducts: Product[] = [
  // AI Runs on Tokens - Classic Tee Variations
  {
    id: "tokens-tee-black",
    name: "AI Runs on Tokens - Classic Tee (Black)",
    price: 19.99,
    category: "shirts",
    subcategory: "classic-tees",
    brand: "tokens",
    rating: 4.8,
    reviews: 124,
    description: "Premium cotton t-shirt featuring the AI Runs on Tokens design in Black. Perfect for blockchain enthusiasts and tech lovers.",
    slug: "tokens-classic-tee-black",
    image: "/tokens-tee-black.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black"],
    features: [
      "100% Premium Cotton",
      "Comfortable fit",
      "Machine washable",
      "Available in multiple sizes"
    ],
    inStock: true
  },
  {
    id: "tokens-tee-white",
    name: "AI Runs on Tokens - Classic Tee (White)",
    price: 19.99,
    category: "shirts",
    subcategory: "classic-tees",
    brand: "tokens",
    rating: 4.7,
    reviews: 98,
    description: "Premium cotton t-shirt featuring the AI Runs on Tokens design in White. Ideal for crypto trading sessions.",
    slug: "tokens-classic-tee-white",
    image: "/tokens-tee-card.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["White"],
    features: [
      "100% Premium Cotton",
      "Comfortable fit",
      "Machine washable",
      "Available in multiple sizes"
    ],
    inStock: true
  },
  {
    id: "tokens-tee-green",
    name: "AI Runs on Tokens - Classic Tee (Green)",
    price: 19.99,
    category: "shirts",
    subcategory: "classic-tees",
    brand: "tokens",
    rating: 4.9,
    reviews: 156,
    description: "Premium cotton t-shirt featuring the AI Runs on Tokens design in Green. For the ultimate blockchain believer.",
    slug: "tokens-classic-tee-green",
    image: "/tokens-tee-green.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Green"],
    features: [
      "100% Premium Cotton",
      "Comfortable fit",
      "Machine washable",
      "Available in multiple sizes"
    ],
    inStock: true
  },
  {
    id: "tokens-tee-blue",
    name: "AI Runs on Tokens - Classic Tee (Blue)",
    price: 19.99,
    category: "shirts",
    subcategory: "classic-tees",
    brand: "tokens",
    rating: 4.6,
    reviews: 87,
    description: "Premium cotton t-shirt featuring the AI Runs on Tokens design in Blue. Perfect for DeFi enthusiasts.",
    slug: "tokens-classic-tee-blue",
    image: "/tokens-tee-blue.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Blue"],
    features: [
      "100% Premium Cotton",
      "Comfortable fit",
      "Machine washable",
      "Available in multiple sizes"
    ],
    inStock: true
  },
  {
    id: "tokens-tee-navy",
    name: "AI Runs on Tokens - Classic Tee (Navy)",
    price: 19.99,
    category: "shirts",
    subcategory: "classic-tees",
    brand: "tokens",
    rating: 4.8,
    reviews: 134,
    description: "Premium cotton t-shirt featuring the AI Runs on Tokens design in Navy. For NFT collectors and creators.",
    slug: "tokens-classic-tee-navy",
    image: "/tokens-tee-blue.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Navy"],
    features: [
      "100% Premium Cotton",
      "Comfortable fit",
      "Machine washable",
      "Available in multiple sizes"
    ],
    inStock: true
  },
  {
    id: "tokens-tee-orange",
    name: "AI Runs on Tokens - Classic Tee (Orange)",
    price: 19.99,
    category: "shirts",
    subcategory: "classic-tees",
    brand: "tokens",
    rating: 4.7,
    reviews: 112,
    description: "Premium cotton t-shirt featuring the AI Runs on Tokens design in Orange. For smart contract developers.",
    slug: "tokens-classic-tee-orange",
    image: "/tokens-tee-orange.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Orange"],
    features: [
      "100% Premium Cotton",
      "Comfortable fit",
      "Machine washable",
      "Available in multiple sizes"
    ],
    inStock: true
  },

  {
    id: "tokens-tee-dunkin",
    name: "AI Runs on Tokens - Classic Tee (Dunkin)",
    price: 19.99,
    category: "shirts",
    subcategory: "classic-tees",
    brand: "tokens",
    rating: 4.8,
    reviews: 145,
    description: "Premium cotton t-shirt featuring the AI Runs on Tokens design in Dunkin style. For coffee-loving crypto enthusiasts.",
    slug: "tokens-classic-tee-dunkin",
    image: "/tokens-tee-dunkin.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Dunkin Style"],
    features: [
      "100% Premium Cotton",
      "Comfortable fit",
      "Machine washable",
      "Available in multiple sizes"
    ],
    inStock: true
  },
  {
    id: "tokens-tee-google",
    name: "AI Runs on Tokens - Classic Tee (Google)",
    price: 19.99,
    category: "shirts",
    subcategory: "classic-tees",
    brand: "tokens",
    rating: 4.9,
    reviews: 167,
    description: "Premium cotton t-shirt featuring the AI Runs on Tokens design in Google style. For tech-savvy blockchain believers.",
    slug: "tokens-classic-tee-google",
    image: "/tokens-tee-google.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Google Style"],
    features: [
      "100% Premium Cotton",
      "Comfortable fit",
      "Machine washable",
      "Available in multiple sizes"
    ],
    inStock: true
  },
  {
    id: "tokens-classic-tee-starbucks",
    name: "AI Runs on Tokens - Classic Tee (Starbucks)",
    price: 19.99,
    category: "shirts",
    subcategory: "classic-tees",
    brand: "tokens",
    rating: 4.9,
    reviews: 134,
    description: "Premium cotton t-shirt featuring the AI Runs on Tokens design in Starbucks style. Perfect for coffee lovers and tech enthusiasts.",
    slug: "tokens-classic-tee-starbucks",
    image: "/tokens starbucks.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Starbucks"],
    features: [
      "100% Premium Cotton",
      "Comfortable fit",
      "Machine washable",
      "Available in multiple sizes"
    ],
    inStock: true
  },

  // AI Runs on Tokens - Other Products
  // AI Runs on Tokens - Crewneck Variations
  {
    id: "tokens-crewneck-black",
    name: "AI Runs on Tokens - Crewneck Sweatshirt (Black)",
    price: 29.99,
    category: "crewnecks",
    subcategory: "classic-crewnecks",
    brand: "tokens",
    rating: 4.9,
    reviews: 89,
    description: "Comfortable crewneck sweatshirt with AI Runs on Tokens branding in Black. Perfect for cooler weather and casual wear.",
    slug: "tokens-crewneck-black",
    image: "/blackc.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black"],
    features: [
      "Premium cotton blend",
      "Ribbed cuffs and hem",
      "Comfortable fit",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "tokens-crewneck-white",
    name: "AI Runs on Tokens - Crewneck Sweatshirt (White)",
    price: 29.99,
    category: "crewnecks",
    subcategory: "classic-crewnecks",
    brand: "tokens",
    rating: 4.8,
    reviews: 76,
    description: "Comfortable crewneck sweatshirt with AI Runs on Tokens branding in White. Perfect for cooler weather and casual wear.",
    slug: "tokens-crewneck-white",
    image: "/whitec.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["White"],
    features: [
      "Premium cotton blend",
      "Ribbed cuffs and hem",
      "Comfortable fit",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "tokens-crewneck-green",
    name: "AI Runs on Tokens - Crewneck Sweatshirt (Green)",
    price: 29.99,
    category: "crewnecks",
    subcategory: "classic-crewnecks",
    brand: "tokens",
    rating: 4.9,
    reviews: 92,
    description: "Comfortable crewneck sweatshirt with AI Runs on Tokens branding in Green. Perfect for cooler weather and casual wear.",
    slug: "tokens-crewneck-green",
    image: "/greenc.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Green"],
    features: [
      "Premium cotton blend",
      "Ribbed cuffs and hem",
      "Comfortable fit",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "tokens-crewneck-blue",
    name: "AI Runs on Tokens - Crewneck Sweatshirt (Blue)",
    price: 29.99,
    category: "crewnecks",
    subcategory: "classic-crewnecks",
    brand: "tokens",
    rating: 4.7,
    reviews: 68,
    description: "Comfortable crewneck sweatshirt with AI Runs on Tokens branding in Blue. Perfect for cooler weather and casual wear.",
    slug: "tokens-crewneck-blue",
    image: "/bluec.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Blue"],
    features: [
      "Premium cotton blend",
      "Ribbed cuffs and hem",
      "Comfortable fit",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "tokens-crewneck-navy",
    name: "AI Runs on Tokens - Crewneck Sweatshirt (Navy)",
    price: 29.99,
    category: "crewnecks",
    subcategory: "classic-crewnecks",
    brand: "tokens",
    rating: 4.8,
    reviews: 81,
    description: "Comfortable crewneck sweatshirt with AI Runs on Tokens branding in Navy. Perfect for cooler weather and casual wear.",
    slug: "tokens-crewneck-navy",
    image: "/navyc.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Navy"],
    features: [
      "Premium cotton blend",
      "Ribbed cuffs and hem",
      "Comfortable fit",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "tokens-crewneck-orange",
    name: "AI Runs on Tokens - Crewneck Sweatshirt (Orange)",
    price: 29.99,
    category: "crewnecks",
    subcategory: "classic-crewnecks",
    brand: "tokens",
    rating: 4.6,
    reviews: 54,
    description: "Comfortable crewneck sweatshirt with AI Runs on Tokens branding in Orange. Perfect for cooler weather and casual wear.",
    slug: "tokens-crewneck-orange",
    image: "/orangec.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Orange"],
    features: [
      "Premium cotton blend",
      "Ribbed cuffs and hem",
      "Comfortable fit",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "tokens-crewneck-dunkin",
    name: "AI Runs on Tokens - Crewneck Sweatshirt (Dunkin)",
    price: 29.99,
    category: "crewnecks",
    subcategory: "classic-crewnecks",
    brand: "tokens",
    rating: 4.8,
    reviews: 73,
    description: "Comfortable crewneck sweatshirt with AI Runs on Tokens branding in Dunkin style. Perfect for cooler weather and casual wear.",
    slug: "tokens-crewneck-dunkin",
    image: "/dunkinc.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Dunkin Style"],
    features: [
      "Premium cotton blend",
      "Ribbed cuffs and hem",
      "Comfortable fit",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "tokens-crewneck-google",
    name: "AI Runs on Tokens - Crewneck Sweatshirt (Google)",
    price: 29.99,
    category: "crewnecks",
    subcategory: "classic-crewnecks",
    brand: "tokens",
    rating: 4.9,
    reviews: 67,
    description: "Comfortable crewneck sweatshirt with AI Runs on Tokens branding in Google style. Perfect for cooler weather and casual wear.",
    slug: "tokens-crewneck-google",
    image: "/googlec.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Google Style"],
    features: [
      "Premium cotton blend",
      "Ribbed cuffs and hem",
      "Comfortable fit",
      "Machine washable"
    ],
    inStock: true
  },
  // AI Runs on Tokens - Hoodie Variations
  {
    id: "tokens-hoodie-black",
    name: "AI Runs on Tokens - Hoodie (Black)",
    price: 39.99,
    category: "hoodies",
    subcategory: "classic-hoodies",
    brand: "tokens",
    rating: 4.7,
    reviews: 156,
    description: "Warm and cozy hoodie perfect for any season. Features the iconic AI Runs on Tokens design in Black.",
    slug: "tokens-hoodie-black",
    image: "/black.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black"],
    features: [
      "Fleece-lined hood",
      "Kangaroo pocket",
      "Drawstring closure",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "tokens-hoodie-white",
    name: "AI Runs on Tokens - Hoodie (White)",
    price: 39.99,
    category: "hoodies",
    subcategory: "classic-hoodies",
    brand: "tokens",
    rating: 4.6,
    reviews: 134,
    description: "Warm and cozy hoodie perfect for any season. Features the iconic AI Runs on Tokens design in White.",
    slug: "tokens-hoodie-white",
    image: "/white.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["White"],
    features: [
      "Fleece-lined hood",
      "Kangaroo pocket",
      "Drawstring closure",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "tokens-hoodie-green",
    name: "AI Runs on Tokens - Hoodie (Green)",
    price: 39.99,
    category: "hoodies",
    subcategory: "classic-hoodies",
    brand: "tokens",
    rating: 4.8,
    reviews: 142,
    description: "Warm and cozy hoodie perfect for any season. Features the iconic AI Runs on Tokens design in Green.",
    slug: "tokens-hoodie-green",
    image: "/green.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Green"],
    features: [
      "Fleece-lined hood",
      "Kangaroo pocket",
      "Drawstring closure",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "tokens-hoodie-blue",
    name: "AI Runs on Tokens - Hoodie (Blue)",
    price: 39.99,
    category: "hoodies",
    subcategory: "classic-hoodies",
    brand: "tokens",
    rating: 4.5,
    reviews: 98,
    description: "Warm and cozy hoodie perfect for any season. Features the iconic AI Runs on Tokens design in Blue.",
    slug: "tokens-hoodie-blue",
    image: "/blue.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Blue"],
    features: [
      "Fleece-lined hood",
      "Kangaroo pocket",
      "Drawstring closure",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "tokens-hoodie-navy",
    name: "AI Runs on Tokens - Hoodie (Navy)",
    price: 39.99,
    category: "hoodies",
    subcategory: "classic-hoodies",
    brand: "tokens",
    rating: 4.7,
    reviews: 118,
    description: "Warm and cozy hoodie perfect for any season. Features the iconic AI Runs on Tokens design in Navy.",
    slug: "tokens-hoodie-navy",
    image: "/navy.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Navy"],
    features: [
      "Fleece-lined hood",
      "Kangaroo pocket",
      "Drawstring closure",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "tokens-hoodie-orange",
    name: "AI Runs on Tokens - Hoodie (Orange)",
    price: 39.99,
    category: "hoodies",
    subcategory: "classic-hoodies",
    brand: "tokens",
    rating: 4.4,
    reviews: 76,
    description: "Warm and cozy hoodie perfect for any season. Features the iconic AI Runs on Tokens design in Orange.",
    slug: "tokens-hoodie-orange",
    image: "/orange.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Orange"],
    features: [
      "Fleece-lined hood",
      "Kangaroo pocket",
      "Drawstring closure",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "tokens-hoodie-dunkin",
    name: "AI Runs on Tokens - Hoodie (Dunkin)",
    price: 39.99,
    category: "hoodies",
    subcategory: "classic-hoodies",
    brand: "tokens",
    rating: 4.6,
    reviews: 89,
    description: "Warm and cozy hoodie perfect for any season. Features the iconic AI Runs on Tokens design in Dunkin style.",
    slug: "tokens-hoodie-dunkin",
    image: "/dunkin.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Dunkin Style"],
    features: [
      "Fleece-lined hood",
      "Kangaroo pocket",
      "Drawstring closure",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "tokens-hoodie-google",
    name: "AI Runs on Tokens - Hoodie (Google)",
    price: 39.99,
    category: "hoodies",
    subcategory: "classic-hoodies",
    brand: "tokens",
    rating: 4.8,
    reviews: 103,
    description: "Warm and cozy hoodie perfect for any season. Features the iconic AI Runs on Tokens design in Google style.",
    slug: "tokens-hoodie-google",
    image: "/google.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Google Style"],
    features: [
      "Fleece-lined hood",
      "Kangaroo pocket",
      "Drawstring closure",
      "Machine washable"
    ],
    inStock: true
  },
  // AI Runs on Tokens - Sweatpants Variations
  {
    id: "tokens-sweatpants-black",
    name: "AI Runs on Tokens - Sweatpants (Black)",
    price: 34.99,
    category: "sweatpants",
    subcategory: "classic-sweatpants",
    brand: "tokens",
    rating: 4.6,
    reviews: 67,
    description: "Comfortable sweatpants with AI Runs on Tokens design in Black. Perfect for lounging and casual wear.",
    slug: "tokens-sweatpants-black",
    image: "/sblack.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black"],
    features: [
      "Elastic waistband",
      "Drawstring closure",
      "Side pockets",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "tokens-sweatpants-white",
    name: "AI Runs on Tokens - Sweatpants (White)",
    price: 34.99,
    category: "sweatpants",
    subcategory: "classic-sweatpants",
    brand: "tokens",
    rating: 4.5,
    reviews: 54,
    description: "Comfortable sweatpants with AI Runs on Tokens design in White. Perfect for lounging and casual wear.",
    slug: "tokens-sweatpants-white",
    image: "/swhite.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["White"],
    features: [
      "Elastic waistband",
      "Drawstring closure",
      "Side pockets",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "tokens-sweatpants-green",
    name: "AI Runs on Tokens - Sweatpants (Green)",
    price: 34.99,
    category: "sweatpants",
    subcategory: "classic-sweatpants",
    brand: "tokens",
    rating: 4.7,
    reviews: 72,
    description: "Comfortable sweatpants with AI Runs on Tokens design in Green. Perfect for lounging and casual wear.",
    slug: "tokens-sweatpants-green",
    image: "/sgreen.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Green"],
    features: [
      "Elastic waistband",
      "Drawstring closure",
      "Side pockets",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "tokens-sweatpants-blue",
    name: "AI Runs on Tokens - Sweatpants (Blue)",
    price: 34.99,
    category: "sweatpants",
    subcategory: "classic-sweatpants",
    brand: "tokens",
    rating: 4.4,
    reviews: 48,
    description: "Comfortable sweatpants with AI Runs on Tokens design in Blue. Perfect for lounging and casual wear.",
    slug: "tokens-sweatpants-blue",
    image: "/sblue.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Blue"],
    features: [
      "Elastic waistband",
      "Drawstring closure",
      "Side pockets",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "tokens-sweatpants-navy",
    name: "AI Runs on Tokens - Sweatpants (Navy)",
    price: 34.99,
    category: "sweatpants",
    subcategory: "classic-sweatpants",
    brand: "tokens",
    rating: 4.6,
    reviews: 61,
    description: "Comfortable sweatpants with AI Runs on Tokens design in Navy. Perfect for lounging and casual wear.",
    slug: "tokens-sweatpants-navy",
    image: "/snavy.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Navy"],
    features: [
      "Elastic waistband",
      "Drawstring closure",
      "Side pockets",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "tokens-sweatpants-orange",
    name: "AI Runs on Tokens - Sweatpants (Orange)",
    price: 34.99,
    category: "sweatpants",
    subcategory: "classic-sweatpants",
    brand: "tokens",
    rating: 4.3,
    reviews: 39,
    description: "Comfortable sweatpants with AI Runs on Tokens design in Orange. Perfect for lounging and casual wear.",
    slug: "tokens-sweatpants-orange",
    image: "/sorange.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Orange"],
    features: [
      "Elastic waistband",
      "Drawstring closure",
      "Side pockets",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "tokens-sweatpants-dunkin",
    name: "AI Runs on Tokens - Sweatpants (Dunkin)",
    price: 34.99,
    category: "sweatpants",
    subcategory: "classic-sweatpants",
    brand: "tokens",
    rating: 4.5,
    reviews: 52,
    description: "Comfortable sweatpants with AI Runs on Tokens design in Dunkin style. Perfect for lounging and casual wear.",
    slug: "tokens-sweatpants-dunkin",
    image: "/sdunkin.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Dunkin Style"],
    features: [
      "Elastic waistband",
      "Drawstring closure",
      "Side pockets",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "tokens-sweatpants-google",
    name: "AI Runs on Tokens - Sweatpants (Google)",
    price: 34.99,
    category: "sweatpants",
    subcategory: "classic-sweatpants",
    brand: "tokens",
    rating: 4.7,
    reviews: 58,
    description: "Comfortable sweatpants with AI Runs on Tokens design in Google style. Perfect for lounging and casual wear.",
    slug: "tokens-sweatpants-google",
    image: "/sgoogle.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Google Style"],
    features: [
      "Elastic waistband",
      "Drawstring closure",
      "Side pockets",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "tokens-socks",
    name: "AI Runs on Tokens - Premium Socks",
    price: 14.99,
    category: "socks",
    brand: "tokens",
    rating: 4.7,
    reviews: 203,
    description: "Comfortable socks with AI Runs on Tokens design. Perfect for everyday wear.",
    slug: "tokens-socks",
    image: "/socks.png",
    sizes: ["S", "M", "L"],
    colors: ["White", "Black", "Navy", "Gray"],
    features: [
      "Cotton blend",
      "Cushioned sole",
      "Elastic arch support",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "tokens-snapback",
    name: "AI Runs on Tokens - Snapback Hat",
    price: 29.99,
    category: "snapbacks",
    brand: "tokens",
    rating: 4.9,
    reviews: 98,
    description: "Classic snapback hat with AI Runs on Tokens branding. Perfect for casual wear and street style.",
    slug: "tokens-snapback",
    image: "/token snapback.png",
    sizes: ["One Size"],
    colors: ["White", "Black", "Navy", "Gray"],
    features: [
      "Structured crown",
      "Snap closure",
      "Curved brim",
      "Hand washable"
    ],
    inStock: true
  },
  {
    id: "tokens-bucket-hat",
    name: "AI Runs on Tokens - Bucket Hat",
    price: 29.99,
    category: "bucketHats",
    brand: "tokens",
    rating: 4.8,
    reviews: 156,
    description: "Stylish bucket hat perfect for any occasion. Features the AI Runs on Tokens design.",
    slug: "tokens-bucket-hat",
    image: "/bucket hat.png",
    sizes: ["One Size"],
    colors: ["White", "Black", "Navy", "Gray"],
    features: [
      "100% Cotton",
      "Adjustable fit",
      "Sun protection",
      "Hand washable"
    ],
    inStock: true
  },


  // AI Runs on Data - All Products
  {
    id: "data-tee-white",
    name: "AI Runs on Data - Classic Tee (White)",
    price: 19.99,
    category: "shirts",
    subcategory: "classic-tees",
    brand: "data",
    rating: 4.8,
    reviews: 124,
    description: "Premium cotton t-shirt featuring the AI Runs on Data design in White. Perfect for data scientists and analysts.",
    slug: "data-classic-tee-white",
    image: "/dwhite.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Navy"],
    features: [
      "100% Premium Cotton",
      "Comfortable fit",
      "Machine washable",
      "Available in multiple sizes"
    ],
    inStock: true
  },
  {
    id: "data-tee-black",
    name: "AI Runs on Data - Classic Tee (Black)",
    price: 19.99,
    category: "shirts",
    subcategory: "classic-tees",
    brand: "data",
    rating: 4.7,
    reviews: 98,
    description: "Premium cotton t-shirt featuring the AI Runs on Data design in Black. Ideal for machine learning engineers.",
    slug: "data-classic-tee-black",
    image: "/dblack.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Gray"],
    features: [
      "100% Premium Cotton",
      "Comfortable fit",
      "Machine washable",
      "Available in multiple sizes"
    ],
    inStock: true
  },
  {
    id: "data-tee-green",
    name: "AI Runs on Data - Classic Tee (Green)",
    price: 19.99,
    category: "shirts",
    subcategory: "classic-tees",
    brand: "data",
    rating: 4.9,
    reviews: 156,
    description: "Premium cotton t-shirt featuring the AI Runs on Data design in Green. For the ultimate data enthusiast.",
    slug: "data-classic-tee-green",
    image: "/dgreen.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Navy", "Gray"],
    features: [
      "100% Premium Cotton",
      "Comfortable fit",
      "Machine washable",
      "Available in multiple sizes"
    ],
    inStock: true
  },
  {
    id: "data-tee-blue",
    name: "AI Runs on Data - Classic Tee (Blue)",
    price: 19.99,
    category: "shirts",
    subcategory: "classic-tees",
    brand: "data",
    rating: 4.6,
    reviews: 87,
    description: "Premium cotton t-shirt featuring the AI Runs on Data design in Blue. Perfect for AI researchers.",
    slug: "data-classic-tee-blue",
    image: "/dblue.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Blue"],
    features: [
      "100% Premium Cotton",
      "Comfortable fit",
      "Machine washable",
      "Available in multiple sizes"
    ],
    inStock: true
  },
  {
    id: "data-tee-navy",
    name: "AI Runs on Data - Classic Tee (Navy)",
    price: 19.99,
    category: "shirts",
    subcategory: "classic-tees",
    brand: "data",
    rating: 4.8,
    reviews: 134,
    description: "Premium cotton t-shirt featuring the AI Runs on Data design in Navy. For big data specialists.",
    slug: "data-classic-tee-navy",
    image: "/dnavy.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Navy"],
    features: [
      "100% Premium Cotton",
      "Comfortable fit",
      "Machine washable",
      "Available in multiple sizes"
    ],
    inStock: true
  },
  {
    id: "data-tee-orange",
    name: "AI Runs on Data - Classic Tee (Orange)",
    price: 19.99,
    category: "shirts",
    subcategory: "classic-tees",
    brand: "data",
    rating: 4.7,
    reviews: 112,
    description: "Premium cotton t-shirt featuring the AI Runs on Data design in Orange. For deep learning practitioners.",
    slug: "data-classic-tee-orange",
    image: "/dorange.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Orange"],
    features: [
      "100% Premium Cotton",
      "Comfortable fit",
      "Machine washable",
      "Available in multiple sizes"
    ],
    inStock: true
  },
  {
    id: "data-tee-dunkin",
    name: "AI Runs on Data - Classic Tee (Dunkin)",
    price: 19.99,
    category: "shirts",
    subcategory: "classic-tees",
    brand: "data",
    rating: 4.9,
    reviews: 178,
    description: "Premium cotton t-shirt featuring the AI Runs on Data design in Dunkin style. For the ultimate data maximalist.",
    slug: "data-classic-tee-dunkin",
    image: "/d-dunkin.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Dunkin"],
    features: [
      "100% Premium Cotton",
      "Comfortable fit",
      "Machine washable",
      "Available in multiple sizes"
    ],
    inStock: true
  },
  {
    id: "data-tee-google",
    name: "AI Runs on Data - Classic Tee (Google)",
    price: 19.99,
    category: "shirts",
    subcategory: "classic-tees",
    brand: "data",
    rating: 4.9,
    reviews: 134,
    description: "Premium cotton t-shirt featuring the AI Runs on Data design in Google style. Perfect for data enthusiasts.",
    slug: "data-classic-tee-google",
    image: "/dgoogle.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Google"],
    features: [
      "100% Premium Cotton",
      "Comfortable fit",
      "Machine washable",
      "Available in multiple sizes"
    ],
    inStock: true
  },
  {
    id: "data-classic-tee-starbucks",
    name: "AI Runs on Data - Classic Tee (Starbucks)",
    price: 19.99,
    category: "shirts",
    subcategory: "classic-tees",
    brand: "data",
    rating: 4.9,
    reviews: 134,
    description: "Premium cotton t-shirt featuring the AI Runs on Data design in Starbucks style. Perfect for coffee lovers and data enthusiasts.",
    slug: "data-classic-tee-starbucks",
    image: "/dstarbucks.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Starbucks"],
    features: [
      "100% Premium Cotton",
      "Comfortable fit",
      "Machine washable",
      "Available in multiple sizes"
    ],
    inStock: true
  },

  // AI Runs on Data - Other Products
  // AI Runs on Data - Crewneck Variations
  {
    id: "data-crewneck-black",
    name: "AI Runs on Data - Crewneck Sweatshirt (Black)",
    price: 29.99,
    category: "crewnecks",
    subcategory: "classic-crewnecks",
    brand: "data",
    rating: 4.9,
    reviews: 89,
    description: "Comfortable crewneck sweatshirt with AI Runs on Data branding in Black. Perfect for cooler weather and casual wear.",
    slug: "data-crewneck-black",
    image: "/dcblack.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black"],
    features: [
      "Premium cotton blend",
      "Ribbed cuffs and hem",
      "Comfortable fit",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "data-crewneck-white",
    name: "AI Runs on Data - Crewneck Sweatshirt (White)",
    price: 29.99,
    category: "crewnecks",
    subcategory: "classic-crewnecks",
    brand: "data",
    rating: 4.8,
    reviews: 76,
    description: "Comfortable crewneck sweatshirt with AI Runs on Data branding in White. Perfect for cooler weather and casual wear.",
    slug: "data-crewneck-white",
    image: "/dcwhite.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["White"],
    features: [
      "Premium cotton blend",
      "Ribbed cuffs and hem",
      "Comfortable fit",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "data-crewneck-green",
    name: "AI Runs on Data - Crewneck Sweatshirt (Green)",
    price: 29.99,
    category: "crewnecks",
    subcategory: "classic-crewnecks",
    brand: "data",
    rating: 4.9,
    reviews: 92,
    description: "Comfortable crewneck sweatshirt with AI Runs on Data branding in Green. Perfect for cooler weather and casual wear.",
    slug: "data-crewneck-green",
    image: "/dcgreen.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Green"],
    features: [
      "Premium cotton blend",
      "Ribbed cuffs and hem",
      "Comfortable fit",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "data-crewneck-blue",
    name: "AI Runs on Data - Crewneck Sweatshirt (Blue)",
    price: 29.99,
    category: "crewnecks",
    subcategory: "classic-crewnecks",
    brand: "data",
    rating: 4.7,
    reviews: 68,
    description: "Comfortable crewneck sweatshirt with AI Runs on Data branding in Blue. Perfect for cooler weather and casual wear.",
    slug: "data-crewneck-blue",
    image: "/dcblue.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Blue"],
    features: [
      "Premium cotton blend",
      "Ribbed cuffs and hem",
      "Comfortable fit",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "data-crewneck-navy",
    name: "AI Runs on Data - Crewneck Sweatshirt (Navy)",
    price: 29.99,
    category: "crewnecks",
    subcategory: "classic-crewnecks",
    brand: "data",
    rating: 4.8,
    reviews: 81,
    description: "Comfortable crewneck sweatshirt with AI Runs on Data branding in Navy. Perfect for cooler weather and casual wear.",
    slug: "data-crewneck-navy",
    image: "/dcnavy.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Navy"],
    features: [
      "Premium cotton blend",
      "Ribbed cuffs and hem",
      "Comfortable fit",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "data-crewneck-orange",
    name: "AI Runs on Data - Crewneck Sweatshirt (Orange)",
    price: 29.99,
    category: "crewnecks",
    subcategory: "classic-crewnecks",
    brand: "data",
    rating: 4.6,
    reviews: 54,
    description: "Comfortable crewneck sweatshirt with AI Runs on Data branding in Orange. Perfect for cooler weather and casual wear.",
    slug: "data-crewneck-orange",
    image: "/dcorange.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Orange"],
    features: [
      "Premium cotton blend",
      "Ribbed cuffs and hem",
      "Comfortable fit",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "data-crewneck-dunkin",
    name: "AI Runs on Data - Crewneck Sweatshirt (Dunkin)",
    price: 29.99,
    category: "crewnecks",
    subcategory: "classic-crewnecks",
    brand: "data",
    rating: 4.8,
    reviews: 73,
    description: "Comfortable crewneck sweatshirt with AI Runs on Data branding in Dunkin style. Perfect for cooler weather and casual wear.",
    slug: "data-crewneck-dunkin",
    image: "/dcdunkin.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Dunkin Style"],
    features: [
      "Premium cotton blend",
      "Ribbed cuffs and hem",
      "Comfortable fit",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "data-crewneck-google",
    name: "AI Runs on Data - Crewneck Sweatshirt (Google)",
    price: 29.99,
    category: "crewnecks",
    subcategory: "classic-crewnecks",
    brand: "data",
    rating: 4.9,
    reviews: 67,
    description: "Comfortable crewneck sweatshirt with AI Runs on Data branding in Google style. Perfect for cooler weather and casual wear.",
    slug: "data-crewneck-google",
    image: "/dcgoogle.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Google Style"],
    features: [
      "Premium cotton blend",
      "Ribbed cuffs and hem",
      "Comfortable fit",
      "Machine washable"
    ],
    inStock: true
  },
  // AI Runs on Data - Hoodie Variations
  {
    id: "data-hoodie-black",
    name: "AI Runs on Data - Hoodie (Black)",
    price: 39.99,
    category: "hoodies",
    subcategory: "classic-hoodies",
    brand: "data",
    rating: 4.7,
    reviews: 156,
    description: "Warm and cozy hoodie perfect for any season. Features the iconic AI Runs on Data design in Black.",
    slug: "data-hoodie-black",
    image: "/dhblack.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black"],
    features: [
      "Fleece-lined hood",
      "Kangaroo pocket",
      "Drawstring closure",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "data-hoodie-white",
    name: "AI Runs on Data - Hoodie (White)",
    price: 39.99,
    category: "hoodies",
    subcategory: "classic-hoodies",
    brand: "data",
    rating: 4.6,
    reviews: 134,
    description: "Warm and cozy hoodie perfect for any season. Features the iconic AI Runs on Data design in White.",
    slug: "data-hoodie-white",
    image: "/dhwhite.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["White"],
    features: [
      "Fleece-lined hood",
      "Kangaroo pocket",
      "Drawstring closure",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "data-hoodie-green",
    name: "AI Runs on Data - Hoodie (Green)",
    price: 39.99,
    category: "hoodies",
    subcategory: "classic-hoodies",
    brand: "data",
    rating: 4.8,
    reviews: 142,
    description: "Warm and cozy hoodie perfect for any season. Features the iconic AI Runs on Data design in Green.",
    slug: "data-hoodie-green",
    image: "/dhgreen.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Green"],
    features: [
      "Fleece-lined hood",
      "Kangaroo pocket",
      "Drawstring closure",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "data-hoodie-blue",
    name: "AI Runs on Data - Hoodie (Blue)",
    price: 39.99,
    category: "hoodies",
    subcategory: "classic-hoodies",
    brand: "data",
    rating: 4.5,
    reviews: 98,
    description: "Warm and cozy hoodie perfect for any season. Features the iconic AI Runs on Data design in Blue.",
    slug: "data-hoodie-blue",
    image: "/dhblue.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Blue"],
    features: [
      "Fleece-lined hood",
      "Kangaroo pocket",
      "Drawstring closure",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "data-hoodie-navy",
    name: "AI Runs on Data - Hoodie (Navy)",
    price: 39.99,
    category: "hoodies",
    subcategory: "classic-hoodies",
    brand: "data",
    rating: 4.7,
    reviews: 118,
    description: "Warm and cozy hoodie perfect for any season. Features the iconic AI Runs on Data design in Navy.",
    slug: "data-hoodie-navy",
    image: "/dhnavy.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Navy"],
    features: [
      "Fleece-lined hood",
      "Kangaroo pocket",
      "Drawstring closure",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "data-hoodie-orange",
    name: "AI Runs on Data - Hoodie (Orange)",
    price: 39.99,
    category: "hoodies",
    subcategory: "classic-hoodies",
    brand: "data",
    rating: 4.4,
    reviews: 76,
    description: "Warm and cozy hoodie perfect for any season. Features the iconic AI Runs on Data design in Orange.",
    slug: "data-hoodie-orange",
    image: "/dhorange.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Orange"],
    features: [
      "Fleece-lined hood",
      "Kangaroo pocket",
      "Drawstring closure",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "data-hoodie-dunkin",
    name: "AI Runs on Data - Hoodie (Dunkin)",
    price: 39.99,
    category: "hoodies",
    subcategory: "classic-hoodies",
    brand: "data",
    rating: 4.6,
    reviews: 89,
    description: "Warm and cozy hoodie perfect for any season. Features the iconic AI Runs on Data design in Dunkin style.",
    slug: "data-hoodie-dunkin",
    image: "/dhdunkin.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Dunkin Style"],
    features: [
      "Fleece-lined hood",
      "Kangaroo pocket",
      "Drawstring closure",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "data-hoodie-google",
    name: "AI Runs on Data - Hoodie (Google)",
    price: 39.99,
    category: "hoodies",
    subcategory: "classic-hoodies",
    brand: "data",
    rating: 4.8,
    reviews: 103,
    description: "Warm and cozy hoodie perfect for any season. Features the iconic AI Runs on Data design in Google style.",
    slug: "data-hoodie-google",
    image: "/dhgoogle.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Google Style"],
    features: [
      "Fleece-lined hood",
      "Kangaroo pocket",
      "Drawstring closure",
      "Machine washable"
    ],
    inStock: true
  },
  // AI Runs on Data - Sweatpants Variations
  {
    id: "data-sweatpants-black",
    name: "AI Runs on Data - Sweatpants (Black)",
    price: 34.99,
    category: "sweatpants",
    subcategory: "classic-sweatpants",
    brand: "data",
    rating: 4.6,
    reviews: 67,
    description: "Comfortable sweatpants with AI Runs on Data design in Black. Perfect for lounging and casual wear.",
    slug: "data-sweatpants-black",
    image: "/dsblack.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black"],
    features: [
      "Elastic waistband",
      "Drawstring closure",
      "Side pockets",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "data-sweatpants-white",
    name: "AI Runs on Data - Sweatpants (White)",
    price: 34.99,
    category: "sweatpants",
    subcategory: "classic-sweatpants",
    brand: "data",
    rating: 4.5,
    reviews: 54,
    description: "Comfortable sweatpants with AI Runs on Data design in White. Perfect for lounging and casual wear.",
    slug: "data-sweatpants-white",
    image: "/dswhite.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["White"],
    features: [
      "Elastic waistband",
      "Drawstring closure",
      "Side pockets",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "data-sweatpants-green",
    name: "AI Runs on Data - Sweatpants (Green)",
    price: 34.99,
    category: "sweatpants",
    subcategory: "classic-sweatpants",
    brand: "data",
    rating: 4.7,
    reviews: 72,
    description: "Comfortable sweatpants with AI Runs on Data design in Green. Perfect for lounging and casual wear.",
    slug: "data-sweatpants-green",
    image: "/dsgreen.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Green"],
    features: [
      "Elastic waistband",
      "Drawstring closure",
      "Side pockets",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "data-sweatpants-blue",
    name: "AI Runs on Data - Sweatpants (Blue)",
    price: 34.99,
    category: "sweatpants",
    subcategory: "classic-sweatpants",
    brand: "data",
    rating: 4.4,
    reviews: 48,
    description: "Comfortable sweatpants with AI Runs on Data design in Blue. Perfect for lounging and casual wear.",
    slug: "data-sweatpants-blue",
    image: "/dsblue.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Blue"],
    features: [
      "Elastic waistband",
      "Drawstring closure",
      "Side pockets",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "data-sweatpants-navy",
    name: "AI Runs on Data - Sweatpants (Navy)",
    price: 34.99,
    category: "sweatpants",
    subcategory: "classic-sweatpants",
    brand: "data",
    rating: 4.6,
    reviews: 61,
    description: "Comfortable sweatpants with AI Runs on Data design in Navy. Perfect for lounging and casual wear.",
    slug: "data-sweatpants-navy",
    image: "/dsblue.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Navy"],
    features: [
      "Elastic waistband",
      "Drawstring closure",
      "Side pockets",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "data-sweatpants-orange",
    name: "AI Runs on Data - Sweatpants (Orange)",
    price: 34.99,
    category: "sweatpants",
    subcategory: "classic-sweatpants",
    brand: "data",
    rating: 4.3,
    reviews: 39,
    description: "Comfortable sweatpants with AI Runs on Data design in Orange. Perfect for lounging and casual wear.",
    slug: "data-sweatpants-orange",
    image: "/dsorange.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Orange"],
    features: [
      "Elastic waistband",
      "Drawstring closure",
      "Side pockets",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "data-sweatpants-dunkin",
    name: "AI Runs on Data - Sweatpants (Dunkin)",
    price: 34.99,
    category: "sweatpants",
    subcategory: "classic-sweatpants",
    brand: "data",
    rating: 4.5,
    reviews: 52,
    description: "Comfortable sweatpants with AI Runs on Data design in Dunkin style. Perfect for lounging and casual wear.",
    slug: "data-sweatpants-dunkin",
    image: "/dsdunkin.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Dunkin Style"],
    features: [
      "Elastic waistband",
      "Drawstring closure",
      "Side pockets",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "data-sweatpants-google",
    name: "AI Runs on Data - Sweatpants (Google)",
    price: 34.99,
    category: "sweatpants",
    subcategory: "classic-sweatpants",
    brand: "data",
    rating: 4.7,
    reviews: 58,
    description: "Comfortable sweatpants with AI Runs on Data design in Google style. Perfect for lounging and casual wear.",
    slug: "data-sweatpants-google",
    image: "/dsgoogle.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Google Style"],
    features: [
      "Elastic waistband",
      "Drawstring closure",
      "Side pockets",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "data-socks",
    name: "AI Runs on Data - Premium Socks",
    price: 14.99,
    category: "socks",
    brand: "data",
    rating: 4.7,
    reviews: 203,
    description: "Comfortable socks with AI Runs on Data design. Perfect for everyday wear.",
    slug: "data-socks",
    image: "/data socks.png",
    sizes: ["S", "M", "L"],
    colors: ["White", "Black", "Navy", "Gray"],
    features: [
      "Cotton blend",
      "Cushioned sole",
      "Elastic arch support",
      "Machine washable"
    ],
    inStock: true
  },
  {
    id: "data-snapback",
    name: "AI Runs on Data - Snapback Hat",
    price: 29.99,
    category: "snapbacks",
    brand: "data",
    rating: 4.9,
    reviews: 98,
    description: "Classic snapback hat with AI Runs on Data branding. Perfect for casual wear and street style.",
    slug: "data-snapback",
    image: "/data snapback.png",
    sizes: ["One Size"],
    colors: ["White", "Black", "Navy", "Gray"],
    features: [
      "Structured crown",
      "Snap closure",
      "Curved brim",
      "Hand washable"
    ],
    inStock: true
  },
  {
    id: "data-bucket-hat",
    name: "AI Runs on Data - Bucket Hat",
    price: 29.99,
    category: "bucketHats",
    brand: "data",
    rating: 4.8,
    reviews: 156,
    description: "Stylish bucket hat perfect for any occasion. Features the AI Runs on Data design.",
    slug: "data-bucket-hat",
    image: "/data hat.png",
    sizes: ["One Size"],
    colors: ["White", "Black", "Navy", "Gray"],
    features: [
      "100% Cotton",
      "Adjustable fit",
      "Sun protection",
      "Hand washable"
    ],
    inStock: true
  }
]

export const getProductsByBrand = (brand: "tokens" | "data") => {
  return allProducts.filter(product => product.brand === brand)
}

export const getProductsByCategory = (category: string) => {
  return allProducts.filter(product => product.category === category)
}

export const getProductBySlug = (slug: string) => {
  return allProducts.find(product => product.slug === slug)
}

export const getProductsBySubcategory = (subcategory: string) => {
  return allProducts.filter(product => product.subcategory === subcategory)
}
