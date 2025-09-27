import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Zap, Users, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  features: string[];
  specs: {
    dimensions: string;
    capacity: string;
    power: string;
    weight: string;
  };
}

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products: Product[] = [
    {
      id: 1,
      name: 'Street Gourmet Pro',
      category: 'Street Food',
      price: '$45,000',
      image: '/api/placeholder/400/300',
      description: 'Perfect for street food entrepreneurs looking to make a mark in the urban food scene.',
      features: ['Fully equipped kitchen', 'Point of sale system', 'LED menu boards', 'Storage compartments'],
      specs: {
        dimensions: '16ft x 8ft',
        capacity: '4-6 staff',
        power: '220V electrical system',
        weight: '3,500 lbs'
      }
    },
    {
      id: 2,
      name: 'BBQ Master Deluxe',
      category: 'BBQ',
      price: '$52,000',
      image: '/api/placeholder/400/300',
      description: 'Premium BBQ trailer with commercial-grade smokers and grilling equipment.',
      features: ['Commercial smoker', 'Dual grilling stations', 'Temperature controls', 'Ventilation system'],
      specs: {
        dimensions: '20ft x 8ft',
        capacity: '6-8 staff',
        power: '240V electrical system',
        weight: '4,200 lbs'
      }
    },
    {
      id: 3,
      name: 'Coffee Cart Elite',
      category: 'Coffee',
      price: '$28,000',
      image: '/api/placeholder/400/300',
      description: 'Compact yet feature-rich coffee trailer for the mobile caffeine entrepreneur.',
      features: ['Espresso machine', 'Grinder station', 'Refrigeration unit', 'Cup dispensers'],
      specs: {
        dimensions: '12ft x 6ft',
        capacity: '2-3 staff',
        power: '120V electrical system',
        weight: '2,800 lbs'
      }
    },
    {
      id: 4,
      name: 'Custom Build Special',
      category: 'Custom',
      price: 'Starting at $35,000',
      image: '/api/placeholder/400/300',
      description: 'Fully customizable trailer built to your exact specifications and business needs.',
      features: ['Custom layout', 'Your choice of equipment', 'Branding integration', 'Flexible sizing'],
      specs: {
        dimensions: 'Customizable',
        capacity: 'Your choice',
        power: 'As required',
        weight: 'Varies'
      }
    },
    {
      id: 5,
      name: 'Taco Truck Supreme',
      category: 'Mexican',
      price: '$48,000',
      image: '/api/placeholder/400/300',
      description: 'Authentic Mexican food trailer with specialized equipment for tacos, burritos, and more.',
      features: ['Tortilla warmer', 'Comal griddle', 'Salsa stations', 'Refrigerated prep area'],
      specs: {
        dimensions: '18ft x 8ft',
        capacity: '5-7 staff',
        power: '220V electrical system',
        weight: '3,800 lbs'
      }
    },
    {
      id: 6,
      name: 'Dessert Dream Mobile',
      category: 'Dessert',
      price: '$38,000',
      image: '/api/placeholder/400/300',
      description: 'Sweet success on wheels with specialized equipment for desserts and treats.',
      features: ['Soft serve machine', 'Display freezers', 'Warming ovens', 'Topping stations'],
      specs: {
        dimensions: '14ft x 7ft',
        capacity: '3-4 staff',
        power: '220V electrical system',
        weight: '3,200 lbs'
      }
    }
  ];

  const categories = ['All', 'Street Food', 'BBQ', 'Coffee', 'Mexican', 'Dessert', 'Custom'];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient-orange">Trailer</span> Collection
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover premium food trailers designed for success. Each trailer is crafted 
            with attention to detail and built for the modern food entrepreneur.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "hero" : "ghost"}
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8 }}
                className="glass-card overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="aspect-video bg-muted overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                    <span className="text-2xl font-bold text-gradient-orange">
                      {product.price}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {product.specs.capacity}
                      </div>
                      <div className="flex items-center">
                        <Zap className="h-4 w-4 mr-1" />
                        {product.specs.dimensions}
                      </div>
                    </div>
                    
                    <ExternalLink className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-20 glass-card p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Something <span className="text-gradient-orange">Custom</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every business is unique. Let us design and build a trailer that perfectly 
            matches your vision and requirements.
          </p>
          <Button variant="hero" size="lg">
            Start Custom Design
          </Button>
        </motion.div>
      </div>

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="w-full aspect-video object-cover rounded-lg"
                  />
                </div>
                
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {selectedProduct.category}
                    </span>
                    <span className="text-3xl font-bold text-gradient-orange">
                      {selectedProduct.price}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-4">{selectedProduct.name}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {selectedProduct.description}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProduct.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-3">Specifications</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm text-muted-foreground">Dimensions</span>
                        <p className="font-medium">{selectedProduct.specs.dimensions}</p>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Capacity</span>
                        <p className="font-medium">{selectedProduct.specs.capacity}</p>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Power</span>
                        <p className="font-medium">{selectedProduct.specs.power}</p>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Weight</span>
                        <p className="font-medium">{selectedProduct.specs.weight}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button variant="hero" className="flex-1">
                      Get Quote
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Schedule Viewing
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Products;