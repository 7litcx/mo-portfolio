import React, { useState, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function AnimatedBackground({
  children,
  defaultValue,
  onValueChange,
  className = '',
  transition = { type: 'spring', bounce: 0.2, duration: 0.3 },
  enableHover = false,
  activeColor = 'rgba(15, 82, 186, 0.15)'
}) {
  const [activeId, setActiveId] = useState(defaultValue ?? null);
  const uniqueId = useId();

  const handleSelect = id => {
    setActiveId(id);
    if (onValueChange) {
      onValueChange(id);
    }
  };

  return (
    <div className="relative flex items-center" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return null;

        const id = child.props['data-id'] ?? index.toString();
        const isSelected = activeId === id;

        return (
          <div
            key={id}
            style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}
            onMouseEnter={() => enableHover && handleSelect(id)}
            onMouseLeave={() => enableHover && handleSelect(defaultValue ?? null)}
            onClick={() => handleSelect(id)}
          >
            <AnimatePresence>
              {isSelected && (
                <motion.div
                  layoutId={`animated-bg-${uniqueId}`}
                  className={className}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={transition}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '12px',
                    background: activeColor,
                    border: '1px solid rgba(15, 82, 186, 0.3)',
                    zIndex: 0,
                    pointerEvents: 'none'
                  }}
                />
              )}
            </AnimatePresence>
            {React.cloneElement(child, {
              style: {
                position: 'relative',
                zIndex: 1,
                cursor: 'pointer',
                ...(child.props.style || {})
              }
            })}
          </div>
        );
      })}
    </div>
  );
}
