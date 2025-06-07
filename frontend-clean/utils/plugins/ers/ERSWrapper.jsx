import React from 'react';

export default function ERSWrapper({ type = 'hover', label = 'ERSWrapped', children }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.setAttribute('data-ers-track', type);
    el.setAttribute('data-ers-label', label);
  }, [type, label]);

  return <div ref={ref}>{children}</div>;
}