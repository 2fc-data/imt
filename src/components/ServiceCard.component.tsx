import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  index?: number;
}

export const ServiceCard = ({ title, description, index = 0 }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    className="group bg-card rounded-lg border border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
  >
    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
      {title}
    </h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
  </motion.div>
);
