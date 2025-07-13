import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface MetricCardProps {
  icon: LucideIcon;
  title: string;
  value: string | number;
  unit?: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  color: string;
  loading?: boolean;
  onClick?: () => void;
  index?: number;
}

export function MetricCard({
  icon: Icon,
  title,
  value,
  unit,
  change,
  changeType = 'neutral',
  color,
  loading = false,
  onClick,
  index = 0
}: MetricCardProps) {
  const changeColors = {
    positive: 'text-green-600',
    negative: 'text-red-600',
    neutral: 'text-gray-600'
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1
      }
    }
  };

  const iconVariants = {
    hover: { 
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.2 }
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-6 animate-pulse">
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 ${color} rounded-lg`}></div>
          <div className="w-16 h-4 bg-gray-200 rounded"></div>
        </div>
        <div className="w-20 h-8 bg-gray-200 rounded mb-2"></div>
        <div className="w-16 h-4 bg-gray-200 rounded"></div>
      </div>
    );
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      onClick={onClick}
      className={`bg-white rounded-xl shadow-sm p-6 transition-all duration-300 ${
        onClick ? 'cursor-pointer hover:shadow-lg' : ''
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <motion.div 
          variants={iconVariants}
          whileHover="hover"
          className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center`}
        >
          <Icon className="h-6 w-6" />
        </motion.div>
        {change && (
          <motion.span 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className={`text-xs font-medium ${changeColors[changeType]}`}
          >
            {change}
          </motion.span>
        )}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-2xl font-bold text-gray-900 mb-1"
      >
        {value}
        {unit && (
          <span className="text-sm text-gray-500 font-normal ml-1">
            {unit}
          </span>
        )}
      </motion.div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-sm text-gray-600"
      >
        {title}
      </motion.p>
    </motion.div>
  );
}