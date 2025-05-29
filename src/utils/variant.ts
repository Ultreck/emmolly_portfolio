export const fadeIn = (direction = 'up', type = 'tween', delay = 0, duration = 1.2) => {
  return {
    hidden: {
      ...(direction === 'up' && { y: 80 }),
      ...(direction === 'down' && { y: -80 }),
      ...(direction === 'left' && { x: 80 }),
      ...(direction === 'right' && { x: -80 }),
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: ['spring', 'tween', 'inertia'].includes(type) ? type : 'tween',
        delay,
        duration,
        ease: type === 'tween' ? [0.25, 0.1, 0.25, 1] : undefined,
        bounce: type === 'spring' ? 0.25 : undefined,
        ...(type === 'inertia' && { power: 0.2, timeConstant: 400 }),
      },
    },
    exit: { // Optional exit animation
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };
};

export const fadeOut = (direction = null, type = 'tween', delay = 0, duration = 0.8) => {
  return {
    show: {
      ...(direction === 'up' && { y: 0 }),
      ...(direction === 'down' && { y: 0 }),
      ...(direction === 'left' && { x: 0 }),
      ...(direction === 'right' && { x: 0 }),
      opacity: 1,
    },
    hidden: {
      ...(direction === 'up' && { y: -80 }),
      ...(direction === 'down' && { y: 80 }),
      ...(direction === 'left' && { x: -80 }),
      ...(direction === 'right' && { x: 80 }),
      opacity: 0,
      transition: {
        type,
        delay,
        duration,
        ease: type === 'tween' ? [0.25, 0.1, 0.25, 1] : undefined
      }
    }
  };
};


export const scaleIn = (type = 'spring', delay = 0, duration = 1) => {
  return {
    hidden: { scale: 0.8, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ...(type === 'spring' && { bounce: 0.4 })
      }
    }
  };
};



export const slide = (
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
  type: 'spring' | 'tween' | 'inertia' = 'tween',
  delay: number = 0,
  duration: number = 0.6,
  distance: number = 50
) => {
  return {
    // Slide in from specified direction
    slideIn: {
      hidden: {
        ...(direction === 'up' && { y: distance }),
        ...(direction === 'down' && { y: -distance }),
        ...(direction === 'left' && { x: distance }),
        ...(direction === 'right' && { x: -distance }),
        opacity: 0,
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: ['spring', 'tween', 'inertia'].includes(type) ? type : 'tween',
          delay,
          duration,
          ease: type === 'tween' ? [0.25, 0.1, 0.25, 1] : undefined,
          bounce: type === 'spring' ? 0.25 : undefined,
          ...(type === 'inertia' && { power: 0.2, timeConstant: 400 }),
        },
      },
    },
    // Slide out to specified direction
    slideOut: {
      show: {
        y: 0,
        x: 0,
        opacity: 1,
      },
      hidden: {
        ...(direction === 'up' && { y: -distance }),
        ...(direction === 'down' && { y: distance }),
        ...(direction === 'left' && { x: -distance }),
        ...(direction === 'right' && { x: distance }),
        opacity: 0,
        transition: {
          type: ['spring', 'tween', 'inertia'].includes(type) ? type : 'tween',
          delay,
          duration,
          ease: type === 'tween' ? [0.25, 0.1, 0.25, 1] : undefined,
        },
      },
    },
    // Quick slide out (for exit animations)
    exit: {
      ...(direction === 'up' && { y: -distance }),
      ...(direction === 'down' && { y: distance }),
      ...(direction === 'left' && { x: -distance }),
      ...(direction === 'right' && { x: distance }),
      opacity: 0,
      transition: {
        duration: duration * 0.6, // Faster exit
        ease: 'easeIn',
      },
    },
  };
};