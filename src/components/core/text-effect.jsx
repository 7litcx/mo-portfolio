import React from 'react';
import { motion } from 'framer-motion';

const defaultContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const defaultItemPresets = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0 },
  },
  slide: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 15, stiffness: 200 } },
    exit: { opacity: 0, y: -20 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.6 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.6 },
  },
  blur: {
    hidden: { opacity: 0, filter: 'blur(8px)' },
    visible: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.4 } },
    exit: { opacity: 0, filter: 'blur(8px)' },
  },
};

export function TextEffect({
  children,
  per = 'word',
  as: Component = 'p',
  preset = 'slide',
  variants,
  className = '',
  style,
  ...props
}) {
  if (typeof children !== 'string') {
    return <Component className={className} style={style} {...props}>{children}</Component>;
  }

  const MotionComponent = motion[Component] || motion.p;
  const itemVariants = variants || defaultItemPresets[preset] || defaultItemPresets.slide;

  let segments = [];
  if (per === 'char') {
    segments = Array.from(children);
  } else if (per === 'word') {
    segments = children.split(' ');
  } else {
    segments = [children];
  }

  return (
    <MotionComponent
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={defaultContainerVariants}
      className={className}
      style={{ display: 'inline-block', ...style }}
      {...props}
    >
      {segments.map((segment, idx) => (
        <motion.span
          key={idx}
          variants={itemVariants}
          style={{
            display: 'inline-block',
            whiteSpace: 'pre',
            ...(per === 'word' && idx < segments.length - 1 ? { marginRight: '0.25em' } : {}),
          }}
        >
          {segment}
        </motion.span>
      ))}
    </MotionComponent>
  );
}
