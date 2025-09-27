import { motion } from 'framer-motion';
import { Award, Users, Truck, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Truck, number: '500+', label: 'Trailers Built' },
    { icon: Users, number: '300+', label: 'Happy Customers' },
    { icon: Award, number: '15+', label: 'Years Experience' },
    { icon: Heart, number: '99%', label: 'Customer Satisfaction' },
  ];

  const timeline = [
    {
      year: '2009',
      title: 'The Beginning',
      description: 'Founded MOBIX with a vision to revolutionize the food trailer industry with quality craftsmanship.'
    },
    {
      year: '2012',
      title: 'First Major Contract',
      description: 'Secured our first large-scale order for a regional food festival, establishing our reputation.'
    },
    {
      year: '2015',
      title: 'Innovation Focus',
      description: 'Introduced custom design services and eco-friendly materials in our construction process.'
    },
    {
      year: '2018',
      title: 'National Expansion',
      description: 'Expanded operations nationwide, serving customers from coast to coast.'
    },
    {
      year: '2021',
      title: 'Technology Integration',
      description: 'Launched smart trailer features including IoT monitoring and energy-efficient systems.'
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description: 'Recognized as the leading food trailer manufacturer with over 500 successful builds.'
    }
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'We never compromise on materials or craftsmanship. Every trailer is built to last.',
      icon: Award
    },
    {
      title: 'Customer Success',
      description: 'Your success is our success. We provide ongoing support beyond the sale.',
      icon: Users
    },
    {
      title: 'Innovation',
      description: 'Constantly improving our designs with the latest technology and trends.',
      icon: Truck
    }
  ];

  return (
    <div className="min-h-screen py-24">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-24">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient-orange">MOBIX</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over 15 years, we've been crafting premium food trailers that turn 
            culinary dreams into thriving businesses. Our commitment to quality and 
            innovation has made us the trusted choice for food entrepreneurs nationwide.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center glass-card p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl mx-auto mb-4 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <stat.icon className="h-8 w-8 text-primary-foreground" />
              </motion.div>
              <div className="text-3xl font-bold text-gradient-orange mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Mission & Values */}
      <section className="bg-card/50 py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient-orange">Mission</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              To empower food entrepreneurs with premium, reliable, and innovative food trailers 
              that serve as the foundation for their success. We believe that great food deserves 
              a great mobile kitchen, and we're here to make that happen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="glass-card p-8 text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <value.icon className="h-8 w-8 text-primary-foreground" />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient-orange">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to industry leadership, here's how we've grown over the years.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="flex flex-col md:flex-row items-start md:items-center mb-12 last:mb-0"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 mb-4 md:mb-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-glow">
                    {item.year}
                  </div>
                </div>
                
                <div className="md:ml-8 glass-card p-6 flex-1">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Join Our 
              <br />
              <span className="text-gradient-orange">Success Story?</span>
            </h2>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's build something amazing together. Your dream food business starts with the perfect trailer.
            </p>
            <motion.button 
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-glow transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;