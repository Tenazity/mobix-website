import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    trailerType: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      business: '',
      trailerType: '',
      budget: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      subtitle: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@mobix.com',
      subtitle: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: '123 Industrial Way',
      subtitle: 'Manufacturing District, City, State 12345'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday',
      subtitle: '9:00 AM - 6:00 PM EST'
    }
  ];

  const trailerTypes = [
    'Street Food Trailer',
    'BBQ Trailer',
    'Coffee Cart',
    'Taco Truck',
    'Dessert Trailer',
    'Custom Build',
    'Not Sure Yet'
  ];

  const budgetRanges = [
    'Under $30,000',
    '$30,000 - $40,000',
    '$40,000 - $50,000',
    '$50,000 - $60,000',
    'Over $60,000',
    'Custom Quote Needed'
  ];

  return (
    <div className="min-h-screen py-24">
      {/* Header */}
      <section className="container mx-auto px-6 mb-16">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get In <span className="text-gradient-orange">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your food business journey? We're here to help you every step of the way. 
            Let's discuss your vision and create the perfect trailer for your needs.
          </p>
        </motion.div>
      </section>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card p-8 h-fit">
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      <p className="text-foreground mb-1">{info.details}</p>
                      <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <motion.div 
                className="mt-8 h-48 bg-muted rounded-lg flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">Visit us at our facility</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-8">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="transition-all duration-300 focus:shadow-glow"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="transition-all duration-300 focus:shadow-glow"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                      className="transition-all duration-300 focus:shadow-glow"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <label className="block text-sm font-medium mb-2">Business Name</label>
                    <Input
                      type="text"
                      name="business"
                      value={formData.business}
                      onChange={handleInputChange}
                      placeholder="Your business name"
                      className="transition-all duration-300 focus:shadow-glow"
                    />
                  </motion.div>
                </div>

                {/* Business Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <label className="block text-sm font-medium mb-2">Trailer Type</label>
                    <select
                      name="trailerType"
                      value={formData.trailerType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300"
                    >
                      <option value="">Select trailer type</option>
                      {trailerTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  >
                    <label className="block text-sm font-medium mb-2">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map(range => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </motion.div>
                </div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project, requirements, and any specific features you need..."
                    rows={5}
                    required
                    className="transition-all duration-300 focus:shadow-glow"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.section 
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-gradient-orange">Questions</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our trailers and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "How long does it take to build a custom trailer?",
                answer: "Typically 8-12 weeks from design approval to delivery, depending on complexity and current order volume."
              },
              {
                question: "Do you offer financing options?",
                answer: "Yes, we partner with multiple lenders to offer competitive financing options for qualified buyers."
              },
              {
                question: "What warranty do you provide?",
                answer: "All our trailers come with a 2-year comprehensive warranty covering construction and components."
              },
              {
                question: "Can I visit your facility?",
                answer: "Absolutely! We encourage customers to visit and see our build process. Please schedule an appointment first."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold mb-3 flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Contact;