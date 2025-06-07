import '../styles/globals.css';
import '../styles/z-layer.css';
import '../styles/fog.css'; // 🌀 ← this line enables visual fog overlays

import Layout from '../components/PageShell';
import Nav from '../components/Nav';
import { ThemeProvider } from '../context/ThemeContext';

import { useEffect } from 'react';
import { initERS } from '../utils/plugins/ers/index';
import { triggerFog, pulseSigil } from '../utils/plugins/ers/fogEngine';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    initERS({
      endpoint: '/api/classify',
      onFeedback: ({ emotion, fog }) => {
        console.log('🪞 ERS feedback:', { emotion, fog });
        triggerFog(fog);         // ← Injects animated symbolic fog
        pulseSigil(emotion);     // ← Placeholder for emotion-based sigil pulse
      }
    });
  }, []);

  const getLayout = Component.getLayout || ((page) => (
    <ThemeProvider>
      <Layout>
        <Nav />
        {page}
      </Layout>
    </ThemeProvider>
  ));

  return getLayout(<Component {...pageProps} />);
}
