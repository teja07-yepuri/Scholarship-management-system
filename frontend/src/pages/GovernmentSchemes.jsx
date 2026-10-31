import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import PageContainer from '../components/layout/PageContainer';
import SectionHeader from '../components/common/SectionHeader';
import SchemeGrid from '../components/schemes/SchemeGrid';
import { fetchSchemes } from '../services/api';

const GovernmentSchemes = () => {
  const [schemes, setSchemes] = useState([]);
  const [search, setSearch] = useState('');
  const [governmentLevel, setGovernmentLevel] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadWelfareSchemes = async () => {
      try {
        setLoading(true);
        const res = await fetchSchemes({
          schemeType: 'Welfare Scheme',
          search,
          governmentLevel: governmentLevel !== 'all' ? governmentLevel : undefined,
          limit: 30,
        });
        if (res.success) {
          setSchemes(res.data);
        }
      } catch (err) {
        console.error('Failed to fetch welfare schemes:', err);
      } finally {
        setLoading(false);
      }
    };

    loadWelfareSchemes();
  }, [search, governmentLevel]);

  return (
    <div className="section">
      <PageContainer>
        <SectionHeader
          eyebrow="Social Welfare & Direct Benefits"
          title="Government Schemes"
          subtitle="Explore central and state programs providing financial support, subsidized credit, crop insurance, and pensions."
        />

        {/* Filter controls */}
        <div
          className="glass-panel"
          style={{
            padding: 'var(--space-4)',
            display: 'flex',
            gap: 'var(--space-3)',
            flexWrap: 'wrap',
            alignItems: 'center',
            marginBottom: 'var(--space-6)',
          }}
        >
          <div style={{ flex: 1, minWidth: '220px', position: 'relative' }}>
            <Search size={16} color="var(--color-primary-blue)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Search by welfare scheme name, department, or sector..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="glass-input"
              style={{ width: '100%', paddingLeft: '2.4rem' }}
            />
          </div>

          <div style={{ width: '220px' }}>
            <select
              value={governmentLevel}
              onChange={(e) => setGovernmentLevel(e.target.value)}
              className="glass-select"
              style={{ width: '100%' }}
            >
              <option value="all">All Jurisdictions</option>
              <option value="Central Government">Central Government</option>
              <option value="State Government">State Government</option>
            </select>
          </div>
        </div>

        <SchemeGrid
          schemes={schemes}
          loading={loading}
          emptyTitle="No welfare schemes found"
          emptyDescription="Try clearing your search term or selecting another jurisdiction."
        />
      </PageContainer>
    </div>
  );
};

export default GovernmentSchemes;
