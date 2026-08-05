import { useState } from 'react';
import { Play, CheckCircle, Server, Database, Shield, Zap, Terminal, RefreshCw } from 'lucide-react';
import StarBorder from './ReactBits/StarBorder';
import SpecularButton from './ReactBits/SpecularButton';

export default function ArchitecturePlayground({ t }) {
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [logs, setLogs] = useState([]);

  const currentPreset = t.architecture.presets[activePresetIndex];

  const runSimulation = () => {
    setIsSimulating(true);
    setLogs([]);

    const traceSteps = [
      `[CLIENT] Initiating connection to gateway via HTTPS TLS 1.3...`,
      `[GATEWAY] Inspecting headers & validating Rate Limiter (Quota: OK)...`,
      `[AUTH] Decoding bearer token & checking Redis blacklist cache (Latency: 1.2ms)...`,
      `[SERVICE] Routing request payload to Kubernetes Worker pod node-8x...`,
      `[DATABASE] Executing query on PostgreSQL Read Replica (Index Scan: 4.8ms)...`,
      `[RESPONSE] Payload assembled & returned 200 OK with gzip compression.`
    ];

    traceSteps.forEach((step, index) => {
      setTimeout(() => {
        setLogs(prev => [...prev, step]);
        if (index === traceSteps.length - 1) {
          setIsSimulating(false);
        }
      }, (index + 1) * 600);
    });
  };

  return (
    <section id="architecture" className="section-container">
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2
          className="gradient-text"
          style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '800', marginBottom: '12px' }}
        >
          {t.architecture.title}
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '16px', maxWidth: '640px', margin: '0 auto' }}>
          {t.architecture.subtitle}
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '32px',
          alignItems: 'start'
        }}
        className="arch-grid"
      >
        {/* Left Column: Preset Selector Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0F52BA' }}>
            {t.architecture.selectFlow}
          </h3>

          {t.architecture.presets.map((preset, idx) => (
            <div
              key={preset.id}
              onClick={() => {
                setActivePresetIndex(idx);
                setLogs([]);
              }}
              style={{
                padding: '20px',
                borderRadius: '16px',
                background: activePresetIndex === idx ? 'rgba(15, 82, 186, 0.15)' : 'var(--bg-card)',
                border: activePresetIndex === idx ? '1px solid #0F52BA' : '1px solid var(--border-color)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                {idx === 0 && <Shield size={20} color="#0F52BA" />}
                {idx === 1 && <Zap size={20} color="#FFBD2E" />}
                {idx === 2 && <Database size={20} color="#A6C5D7" />}
                <span style={{ fontWeight: '700', fontSize: '16px', color: 'var(--text-primary)' }}>
                  {preset.name}
                </span>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {preset.desc}
              </p>
            </div>
          ))}

          {/* Trigger Button using SpecularButton */}
          <div style={{ marginTop: '12px' }}>
            <SpecularButton
              size="lg"
              radius={18}
              tint="#0F52BA"
              tintOpacity={0.2}
              blur={8}
              textColor="var(--text-primary)"
              lineColor="#A6C5D7"
              baseColor="#0F52BA"
              intensity={1.2}
              shineSize={12}
              shineFade={40}
              speed={0.4}
              followMouse
              proximity={250}
              onClick={runSimulation}
              disabled={isSimulating}
              style={{ width: '100%' }}
            >
              {isSimulating ? <RefreshCw size={18} className="animate-spin" /> : <Play size={18} />}
              <span>{isSimulating ? t.architecture.simulating : t.architecture.runSim}</span>
            </SpecularButton>
          </div>
        </div>

        {/* Right Column: Console Log Tracer */}
        <div
          className="glass-panel"
          style={{
            padding: '24px',
            borderRadius: '20px',
            minHeight: '380px',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '14px',
              marginBottom: '16px',
              borderBottom: '1px solid var(--border-color)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Terminal size={18} color="#0F52BA" />
              <span style={{ fontSize: '14px', fontWeight: '700', fontFamily: 'var(--font-code)' }}>
                {t.architecture.simulationConsole}
              </span>
            </div>
            <span
              style={{
                fontSize: '11px',
                padding: '4px 10px',
                borderRadius: '9999px',
                background: isSimulating ? 'rgba(255, 189, 46, 0.2)' : 'rgba(39, 201, 63, 0.2)',
                color: isSimulating ? '#FFBD2E' : '#27C93F',
                fontWeight: '700'
              }}
            >
              {isSimulating ? 'ACTIVE' : 'IDLE'}
            </span>
          </div>

          {/* Log Output Area */}
          <div
            style={{
              flex: 1,
              fontFamily: 'var(--font-code)',
              fontSize: '13px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              overflowY: 'auto'
            }}
          >
            <div style={{ color: 'var(--text-muted)', fontSize: '12px' }}>
              // Preset Loaded: {currentPreset.name}
            </div>

            {logs.length === 0 && !isSimulating && (
              <div style={{ color: 'var(--text-muted)', marginTop: '40px', textAlign: 'center' }}>
                Press "Trigger Request Simulation" to inspect architectural trace logs.
              </div>
            )}

            {logs.map((log, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  color: '#A6C5D7',
                  animation: 'fadeIn 0.3s ease'
                }}
              >
                <CheckCircle size={16} color="#0F52BA" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{log}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 868px) {
          .arch-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
