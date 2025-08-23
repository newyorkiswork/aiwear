"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react'

export type Language = 'en' | 'es' | 'fr'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.shop': 'Shop',
    'nav.cart': 'Cart',
    'nav.search': 'Search',
    'nav.wishlist': 'Wishlist',
    'nav.account': 'Account',
    
    // Homepage
    'hero.title': 'Discover Your Perfect Style',
    'hero.subtitle': 'Premium fashion and clothing for every occasion. From casual wear to elegant outfits.',
    'hero.shopNow': 'Shop Now',
    'hero.viewDeals': 'View Deals',
    'categories.title': 'Shop by Category',
    'newsletter.title': 'Join Our Newsletter',
    'newsletter.subtitle': 'Subscribe to get special offers, free giveaways, and fashion tips.',
    'newsletter.placeholder': 'Enter your email',
    'newsletter.subscribe': 'Subscribe',
    'newsletter.terms': 'By subscribing, you agree to our Terms of Service and Privacy Policy.',
    
    // Why Choose Us
    'why.title': 'Why Choose A.I Wear',
    'why.shipping.title': 'Free Shipping',
    'why.shipping.desc': 'On orders over $50. Get your fashion items delivered to your doorstep.',
    'why.quality.title': 'Quality Guarantee',
    'why.quality.desc': 'All our clothing is carefully selected for quality and style.',
    'why.support.title': '24/7 Support',
    'why.support.desc': 'Our customer service team is available around the clock to help you.',
    'why.payment.title': 'Secure Payment',
    'why.payment.desc': 'Multiple secure payment options for your convenience and safety.',
    
    // Categories
    'category.shirts': 'Shirts',
    'category.crewnecks': 'Crewnecks',
    'category.hoodies': 'Hoodies',
    'category.sweatpants': 'Sweatpants',
    'category.socks': 'Socks',
    'category.bucketHats': 'Bucket Hats',
    'category.snapbacks': 'Snapbacks',
    
    // Footer
    'footer.tagline': 'Your one-stop destination for premium fashion. Quality clothing for every style.',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookies Policy',
    
    // Shop Page
    'shop.title': 'Shop',
    'shop.filters': 'Filters',
    'shop.clearAll': 'Clear all',
    'shop.categories': 'Categories',
    'shop.priceRange': 'Price Range',
    'shop.brands': 'Brands',
    'shop.ratings': 'Ratings',
    'shop.sortBy': 'Sort by',
    'shop.results': 'results',
    'shop.noProducts': 'No products found',
    'shop.addToCart': 'Add to Cart',
    'shop.addToWishlist': 'Add to Wishlist',
    'shop.quickView': 'Quick view',
    'shop.featured': 'Featured',
    'shop.priceLowToHigh': 'Price: Low to High',
    'shop.priceHighToLow': 'Price: High to Low',
    'shop.newestArrivals': 'Newest Arrivals',
    'shop.products': 'products',
    'shop.noProductsFound': 'No products found',
    'shop.adjustFilters': 'Try adjusting your filters to find what you\'re looking for.',
    'shop.clearAllFilters': 'Clear all filters',
    'shop.narrowSearch': 'Narrow down your product search',
    
    // Cart Page
    'cart.title': 'Shopping Cart',
    'cart.empty.title': 'Your cart is empty',
    'cart.empty.description': "Looks like you haven't added any products to your cart yet.",
    'cart.continueShopping': 'Continue Shopping',
    'cart.product': 'Product',
    'cart.price': 'Price',
    'cart.quantity': 'Quantity',
    'cart.subtotal': 'Subtotal',
    'cart.remove': 'Remove',
    'cart.orderSummary': 'Order Summary',
    'cart.subtotal.label': 'Subtotal',
    'cart.shipping': 'Shipping',
    'cart.tax': 'Tax',
    'cart.total': 'Total',
    'cart.checkout': 'Proceed to Checkout',
    'cart.clearCart': 'Clear Cart',
    
    // Checkout
    'checkout.title': 'Checkout',
    'checkout.description': 'Complete your purchase securely',
    'checkout.backToCart': 'Back to Cart',
    'checkout.empty.title': 'No items to checkout',
    'checkout.empty.description': 'Add some products to your cart first.',
    'checkout.continueShopping': 'Continue Shopping',
    'checkout.orderSummary': 'Order Summary',
    'checkout.quantity': 'Quantity',
    'checkout.subtotal': 'Subtotal',
    'checkout.shipping': 'Shipping',
    'checkout.free': 'FREE',
    'checkout.tax': 'Tax',
    'checkout.total': 'Total',
    'checkout.payment': 'Payment',
    'checkout.securePayment': 'Secure payment processing',
    'checkout.payNow': 'Pay Now',
    'checkout.processing': 'Processing...',
    'checkout.terms': 'By clicking Pay Now, you agree to our terms of service',
    'checkout.security.title': 'Secure Payment',
    'checkout.security.description': 'Your payment information is encrypted and secure. We never store your card details.',
    
    // Checkout Success
    'checkout.success.title': 'Payment Successful!',
    'checkout.success.description': 'Thank you for your purchase. Your order has been confirmed and is being processed.',
    'checkout.success.orderDetails': 'Order Details',
    'checkout.success.orderNumber': 'Order Number',
    'checkout.success.status': 'Status',
    'checkout.success.confirmed': 'Confirmed',
    'checkout.success.whatsNext': 'What\'s Next?',
    'checkout.success.email.title': 'Email Confirmation',
    'checkout.success.email.description': 'You\'ll receive an email confirmation with your order details and receipt.',
    'checkout.success.shipping.title': 'Shipping & Delivery',
    'checkout.success.shipping.description': 'Your order will be shipped within 1-2 business days. You\'ll receive tracking information via email.',
    'checkout.success.continueShopping': 'Continue Shopping',
    'checkout.success.backToHome': 'Back to Home',
    
    // Product Page
    'product.backToShop': 'Back to Shop',
    'product.notFound.title': 'Product Not Found',
    'product.notFound.description': 'The product you\'re looking for doesn\'t exist.',
    'product.size': 'Size',
    'product.color': 'Color',
    'product.quantity': 'Quantity',
    'product.addToCart': 'Add to Cart',
    'product.addToWishlist': 'Add to Wishlist',
    'product.features': 'Features',
    'product.shipping.title': 'Shipping & Returns',
    'product.shipping.free': 'Free shipping on orders over $50',
    'product.shipping.standard': 'Standard shipping: $5.99',
    'product.returns.title': 'Returns',
    'product.returns.description': '30-day return policy. Return for free.',
    'product.exchange.title': 'Exchanges',
    'product.exchange.description': 'Easy size and color exchanges.',
    
    // Search Page
    'search.title': 'Search Products',
    'search.placeholder': 'Search for clothing, accessories...',
    'search.results': 'results found',
    'search.noResults': 'No results found',
    
    // Wishlist Page
    'wishlist.title': 'My Wishlist',
    'wishlist.empty.title': 'Your wishlist is empty',
    'wishlist.empty.description': 'Start adding items you love to your wishlist',
    'wishlist.startShopping': 'Start Shopping',
    'wishlist.inStock': 'In Stock',
    'wishlist.outOfStock': 'Out of Stock',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.shop': 'Tienda',
    'nav.cart': 'Carrito',
    'nav.search': 'Buscar',
    'nav.wishlist': 'Lista de Deseos',
    'nav.account': 'Cuenta',
    
    // Homepage
    'hero.title': 'Descubre Tu Estilo Perfecto',
    'hero.subtitle': 'Moda premium y ropa para cada ocasión. Desde ropa casual hasta atuendos elegantes.',
    'hero.shopNow': 'Comprar Ahora',
    'hero.viewDeals': 'Ver Ofertas',
    'categories.title': 'Comprar por Categoría',
    'newsletter.title': 'Únete a Nuestro Boletín',
    'newsletter.subtitle': 'Suscríbete para recibir ofertas especiales, regalos gratis y consejos de moda.',
    'newsletter.placeholder': 'Ingresa tu email',
    'newsletter.subscribe': 'Suscribirse',
    'newsletter.terms': 'Al suscribirte, aceptas nuestros Términos de Servicio y Política de Privacidad.',
    
    // Why Choose Us
    'why.title': 'Por Qué Elegir A.I Wear',
    'why.shipping.title': 'Envío Gratis',
    'why.shipping.desc': 'En pedidos superiores a $50. Recibe tus artículos de moda en tu puerta.',
    'why.quality.title': 'Garantía de Calidad',
    'why.quality.desc': 'Toda nuestra ropa es cuidadosamente seleccionada por calidad y estilo.',
    'why.support.title': 'Soporte 24/7',
    'why.support.desc': 'Nuestro equipo de atención al cliente está disponible las 24 horas para ayudarte.',
    'why.payment.title': 'Pago Seguro',
    'why.payment.desc': 'Múltiples opciones de pago seguro para tu conveniencia y seguridad.',
    
    // Categories
    'category.shirts': 'Camisetas',
    'category.crewnecks': 'Sudaderas',
    'category.hoodies': 'Capuchas',
    'category.sweatpants': 'Pantalones Deportivos',
    'category.socks': 'Calcetines',
    'category.bucketHats': 'Gorras de Cubo',
    'category.snapbacks': 'Gorras Snapback',
    
    // Footer
    'footer.tagline': 'Tu destino único para moda premium. Ropa de calidad para cada estilo.',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    'footer.cookies': 'Política de Cookies',
    
    // Shop Page
    'shop.title': 'Tienda',
    'shop.filters': 'Filtros',
    'shop.clearAll': 'Limpiar todo',
    'shop.categories': 'Categorías',
    'shop.priceRange': 'Rango de Precio',
    'shop.brands': 'Marcas',
    'shop.ratings': 'Calificaciones',
    'shop.sortBy': 'Ordenar por',
    'shop.results': 'resultados',
    'shop.noProducts': 'No se encontraron productos',
    'shop.addToCart': 'Agregar al Carrito',
    'shop.addToWishlist': 'Agregar a Lista de Deseos',
    'shop.quickView': 'Vista rápida',
    'shop.featured': 'Destacados',
    'shop.priceLowToHigh': 'Precio: Bajo a Alto',
    'shop.priceHighToLow': 'Precio: Alto a Bajo',
    'shop.newestArrivals': 'Nuevas Llegadas',
    'shop.products': 'productos',
    'shop.noProductsFound': 'No se encontraron productos',
    'shop.adjustFilters': 'Intenta ajustar tus filtros para encontrar lo que buscas.',
    'shop.clearAllFilters': 'Limpiar todos los filtros',
    'shop.narrowSearch': 'Reduce tu búsqueda de productos',
    
    // Cart Page
    'cart.title': 'Carrito de Compras',
    'cart.empty.title': 'Tu carrito está vacío',
    'cart.empty.description': 'Parece que aún no has agregado ningún producto a tu carrito.',
    'cart.continueShopping': 'Continuar Comprando',
    'cart.product': 'Producto',
    'cart.price': 'Precio',
    'cart.quantity': 'Cantidad',
    'cart.subtotal': 'Subtotal',
    'cart.remove': 'Eliminar',
    'cart.orderSummary': 'Resumen del Pedido',
    'cart.subtotal.label': 'Subtotal',
    'cart.shipping': 'Envío',
    'cart.tax': 'Impuesto',
    'cart.total': 'Total',
    'cart.checkout': 'Proceder al Pago',
    'cart.clearCart': 'Limpiar Carrito',
    
    // Checkout
    'checkout.title': 'Pago',
    'checkout.description': 'Complete su compra de forma segura',
    'checkout.backToCart': 'Volver al Carrito',
    'checkout.empty.title': 'No hay artículos para pagar',
    'checkout.empty.description': 'Agregue algunos productos a su carrito primero.',
    'checkout.continueShopping': 'Continuar Comprando',
    'checkout.orderSummary': 'Resumen del Pedido',
    'checkout.quantity': 'Cantidad',
    'checkout.subtotal': 'Subtotal',
    'checkout.shipping': 'Envío',
    'checkout.free': 'GRATIS',
    'checkout.tax': 'Impuestos',
    'checkout.total': 'Total',
    'checkout.payment': 'Pago',
    'checkout.securePayment': 'Procesamiento de pago seguro',
    'checkout.payNow': 'Pagar Ahora',
    'checkout.processing': 'Procesando...',
    'checkout.terms': 'Al hacer clic en Pagar Ahora, acepta nuestros términos de servicio',
    'checkout.security.title': 'Pago Seguro',
    'checkout.security.description': 'Su información de pago está encriptada y segura. Nunca almacenamos los detalles de su tarjeta.',
    
    // Checkout Success
    'checkout.success.title': '¡Pago Exitoso!',
    'checkout.success.description': 'Gracias por su compra. Su pedido ha sido confirmado y está siendo procesado.',
    'checkout.success.orderDetails': 'Detalles del Pedido',
    'checkout.success.orderNumber': 'Número de Pedido',
    'checkout.success.status': 'Estado',
    'checkout.success.confirmed': 'Confirmado',
    'checkout.success.whatsNext': '¿Qué Sigue?',
    'checkout.success.email.title': 'Confirmación por Email',
    'checkout.success.email.description': 'Recibirá una confirmación por email con los detalles de su pedido y recibo.',
    'checkout.success.shipping.title': 'Envío y Entrega',
    'checkout.success.shipping.description': 'Su pedido será enviado en 1-2 días hábiles. Recibirá información de seguimiento por email.',
    'checkout.success.continueShopping': 'Continuar Comprando',
    'checkout.success.backToHome': 'Volver al Inicio',
    
    // Product Page
    'product.backToShop': 'Volver a la Tienda',
    'product.notFound.title': 'Producto No Encontrado',
    'product.notFound.description': 'El producto que buscas no existe.',
    'product.size': 'Talla',
    'product.color': 'Color',
    'product.quantity': 'Cantidad',
    'product.addToCart': 'Agregar al Carrito',
    'product.addToWishlist': 'Agregar a Lista de Deseos',
    'product.features': 'Características',
    'product.shipping.title': 'Envío y Devoluciones',
    'product.shipping.free': 'Envío gratis en pedidos superiores a $50',
    'product.shipping.standard': 'Envío estándar: $5.99',
    'product.returns.title': 'Devoluciones',
    'product.returns.description': 'Política de devolución de 30 días. Devolución gratuita.',
    'product.exchange.title': 'Cambios',
    'product.exchange.description': 'Cambios fáciles de talla y color.',
    
    // Product Page
    'product.backToShop': 'Volver a la Tienda',
    'product.notFound.title': 'Producto No Encontrado',
    'product.notFound.description': 'El producto que buscas no existe.',
    'product.size': 'Talla',
    'product.color': 'Color',
    'product.quantity': 'Cantidad',
    'product.addToCart': 'Agregar al Carrito',
    'product.addToWishlist': 'Agregar a Lista de Deseos',
    'product.features': 'Características',
    'product.shipping.title': 'Envío y Devoluciones',
    'product.shipping.free': 'Envío gratis en pedidos superiores a $50',
    'product.shipping.standard': 'Envío estándar: $5.99',
    'product.returns.title': 'Devoluciones',
    'product.returns.description': 'Política de devolución de 30 días. Devolución gratuita.',
    'product.exchange.title': 'Cambios',
    'product.exchange.description': 'Cambios fáciles de talla y color.',
    
    // Search Page
    'search.title': 'Buscar Productos',
    'search.placeholder': 'Buscar ropa, accesorios...',
    'search.results': 'resultados encontrados',
    'search.noResults': 'No se encontraron resultados',
    
    // Wishlist Page
    'wishlist.title': 'Mi Lista de Deseos',
    'wishlist.empty.title': 'Tu lista de deseos está vacía',
    'wishlist.empty.description': 'Comienza a agregar artículos que te gusten a tu lista de deseos',
    'wishlist.startShopping': 'Comenzar a Comprar',
    'wishlist.inStock': 'En Stock',
    'wishlist.outOfStock': 'Sin Stock',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.shop': 'Boutique',
    'nav.cart': 'Panier',
    'nav.search': 'Rechercher',
    'nav.wishlist': 'Liste de Souhaits',
    'nav.account': 'Compte',
    
    // Homepage
    'hero.title': 'Découvrez Votre Style Parfait',
    'hero.subtitle': 'Mode premium et vêtements pour chaque occasion. Du décontracté aux tenues élégantes.',
    'hero.shopNow': 'Acheter Maintenant',
    'hero.viewDeals': 'Voir les Offres',
    'categories.title': 'Acheter par Catégorie',
    'newsletter.title': 'Rejoignez Notre Newsletter',
    'newsletter.subtitle': 'Abonnez-vous pour recevoir des offres spéciales, des cadeaux gratuits et des conseils de mode.',
    'newsletter.placeholder': 'Entrez votre email',
    'newsletter.subscribe': 'S\'abonner',
    'newsletter.terms': 'En vous abonnant, vous acceptez nos Conditions de Service et Politique de Confidentialité.',
    
    // Why Choose Us
    'why.title': 'Pourquoi Choisir A.I Wear',
    'why.shipping.title': 'Livraison Gratuite',
    'why.shipping.desc': 'Sur les commandes de plus de 50€. Recevez vos articles de mode à votre porte.',
    'why.quality.title': 'Garantie Qualité',
    'why.quality.desc': 'Tous nos vêtements sont soigneusement sélectionnés pour la qualité et le style.',
    'why.support.title': 'Support 24/7',
    'why.support.desc': 'Notre équipe de service client est disponible 24h/24 pour vous aider.',
    'why.payment.title': 'Paiement Sécurisé',
    'why.payment.desc': 'Plusieurs options de paiement sécurisé pour votre commodité et sécurité.',
    
    // Categories
    'category.shirts': 'T-shirts',
    'category.crewnecks': 'Pulls',
    'category.hoodies': 'Hoodies',
    'category.sweatpants': 'Joggings',
    'category.socks': 'Chaussettes',
    'category.bucketHats': 'Chapeaux Bucket',
    'category.snapbacks': 'Casquettes Snapback',
    
    // Footer
    'footer.tagline': 'Votre destination unique pour la mode premium. Vêtements de qualité pour chaque style.',
    'footer.rights': 'Tous droits réservés.',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions de Service',
    'footer.cookies': 'Politique des Cookies',
    
    // Shop Page
    'shop.title': 'Boutique',
    'shop.filters': 'Filtres',
    'shop.clearAll': 'Tout effacer',
    'shop.categories': 'Catégories',
    'shop.priceRange': 'Fourchette de Prix',
    'shop.brands': 'Marques',
    'shop.ratings': 'Évaluations',
    'shop.sortBy': 'Trier par',
    'shop.results': 'résultats',
    'shop.noProducts': 'Aucun produit trouvé',
    'shop.addToCart': 'Ajouter au Panier',
    'shop.addToWishlist': 'Ajouter à la Liste de Souhaits',
    'shop.quickView': 'Aperçu rapide',
    'shop.featured': 'En Vedette',
    'shop.priceLowToHigh': 'Prix: Bas à Élevé',
    'shop.priceHighToLow': 'Prix: Élevé à Bas',
    'shop.newestArrivals': 'Nouvelles Arrivées',
    'shop.products': 'produits',
    'shop.noProductsFound': 'Aucun produit trouvé',
    'shop.adjustFilters': 'Essayez d\'ajuster vos filtres pour trouver ce que vous cherchez.',
    'shop.clearAllFilters': 'Effacer tous les filtres',
    
    // Cart Page
    'cart.title': 'Panier d\'Achats',
    'cart.empty.title': 'Votre panier est vide',
    'cart.empty.description': 'Il semble que vous n\'ayez pas encore ajouté de produits à votre panier.',
    'cart.continueShopping': 'Continuer les Achats',
    'cart.product': 'Produit',
    'cart.price': 'Prix',
    'cart.quantity': 'Quantité',
    'cart.subtotal': 'Sous-total',
    'cart.remove': 'Supprimer',
    'cart.orderSummary': 'Résumé de la Commande',
    'cart.subtotal.label': 'Sous-total',
    'cart.shipping': 'Livraison',
    'cart.tax': 'Taxe',
    'cart.total': 'Total',
    'cart.checkout': 'Procéder au Paiement',
    'cart.clearCart': 'Vider le Panier',
    
    // Checkout
    'checkout.title': 'Paiement',
    'checkout.description': 'Complétez votre achat en toute sécurité',
    'checkout.backToCart': 'Retour au Panier',
    'checkout.empty.title': 'Aucun article à payer',
    'checkout.empty.description': 'Ajoutez d\'abord quelques produits à votre panier.',
    'checkout.continueShopping': 'Continuer les Achats',
    'checkout.orderSummary': 'Résumé de la Commande',
    'checkout.quantity': 'Quantité',
    'checkout.subtotal': 'Sous-total',
    'checkout.shipping': 'Livraison',
    'checkout.free': 'GRATUIT',
    'checkout.tax': 'Taxes',
    'checkout.total': 'Total',
    'checkout.payment': 'Paiement',
    'checkout.securePayment': 'Traitement de paiement sécurisé',
    'checkout.payNow': 'Payer Maintenant',
    'checkout.processing': 'Traitement...',
    'checkout.terms': 'En cliquant sur Payer Maintenant, vous acceptez nos conditions de service',
    'checkout.security.title': 'Paiement Sécurisé',
    'checkout.security.description': 'Vos informations de paiement sont chiffrées et sécurisées. Nous ne stockons jamais les détails de votre carte.',
    
    // Checkout Success
    'checkout.success.title': 'Paiement Réussi !',
    'checkout.success.description': 'Merci pour votre achat. Votre commande a été confirmée et est en cours de traitement.',
    'checkout.success.orderDetails': 'Détails de la Commande',
    'checkout.success.orderNumber': 'Numéro de Commande',
    'checkout.success.status': 'Statut',
    'checkout.success.confirmed': 'Confirmé',
    'checkout.success.whatsNext': 'Et Maintenant ?',
    'checkout.success.email.title': 'Confirmation par Email',
    'checkout.success.email.description': 'Vous recevrez une confirmation par email avec les détails de votre commande et le reçu.',
    'checkout.success.shipping.title': 'Livraison et Expédition',
    'checkout.success.shipping.description': 'Votre commande sera expédiée dans les 1-2 jours ouvrables. Vous recevrez les informations de suivi par email.',
    'checkout.success.continueShopping': 'Continuer les Achats',
    'checkout.success.backToHome': 'Retour à l\'Accueil',
    
    // Product Page
    'product.backToShop': 'Retour à la Boutique',
    'product.notFound.title': 'Produit Non Trouvé',
    'product.notFound.description': 'Le produit que vous recherchez n\'existe pas.',
    'product.size': 'Taille',
    'product.color': 'Couleur',
    'product.quantity': 'Quantité',
    'product.addToCart': 'Ajouter au Panier',
    'product.addToWishlist': 'Ajouter à la Liste de Souhaits',
    'product.features': 'Caractéristiques',
    'product.shipping.title': 'Livraison et Retours',
    'product.shipping.free': 'Livraison gratuite pour les commandes de plus de 50$',
    'product.shipping.standard': 'Livraison standard: 5,99$',
    'product.returns.title': 'Retours',
    'product.returns.description': 'Politique de retour de 30 jours. Retour gratuit.',
    'product.exchange.title': 'Échanges',
    'product.exchange.description': 'Échanges faciles de taille et de couleur.',
    
    // Search Page
    'search.title': 'Rechercher des Produits',
    'search.placeholder': 'Rechercher des vêtements, accessoires...',
    'search.results': 'résultats trouvés',
    'search.noResults': 'Aucun résultat trouvé',
    
    // Wishlist Page
    'wishlist.title': 'Ma Liste de Souhaits',
    'wishlist.empty.title': 'Votre liste de souhaits est vide',
    'wishlist.empty.description': 'Commencez à ajouter des articles que vous aimez à votre liste de souhaits',
    'wishlist.startShopping': 'Commencer les Achats',
    'wishlist.inStock': 'En Stock',
    'wishlist.outOfStock': 'Rupture de Stock',
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language')
      return (saved as Language) || 'en'
    }
    return 'en'
  })

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang)
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
