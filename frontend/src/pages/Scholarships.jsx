import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import PageContainer from '../components/layout/PageContainer';
import SectionHeader from '../components/common/SectionHeader';
import SchemeGrid from '../components/schemes/SchemeGrid';
import { fetchSchemes } from '../services/api';

const Scholarships = () => {
  const [scholarships, setScholarships] = useState([]);
  const [search, setSearch] = useState('');
  const [educationLevel, setEducationLevel] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadScholarships = async () => {
      try {
        setLoading(true);
        const res = await fetchSchemes({
          schemeType: 'Scholarship',
          search,
          educationLevel: educationLevel !== 'all' ? educationLevel : undefined,
          limit: 30,
        });
        if (res.success) {
          setScholarships(res.data);
        }
      } catch (err) {
        console.error('Failed to fetch scholarships:', err);
      } finally {
        setLoading(false);
      }
    };

    loadScholarships();
  }, [search, educationLevel]);

  return (
    <div className="section">
      <PageContainer>
        <SectionHeader
          eyebrow="Academic Financial Aid"
          title="National Scholarships"
          subtitle="Explore government tuition fee concessions, merit grants, and maintenance allowances for school and university students."
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
              placeholder="Search by scholarship title, course, or department..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="glass-input"
              style={{ width: '100%', paddingLeft: '2.4rem' }}
            />
          </div>

          <div style={{ width: '220px' }}>
            <select
              value={educationLevel}
              onChange={(e) => setEducationLevel(e.target.value)}
              className="glass-select"
              style={{ width: '100%' }}
            >
              <option value="all">All Education Levels</option>
              <option value="Class 9-10">Class 9 - 10</option>
              <option value="Class 11-12">Class 11 - 12 (Higher Secondary)</option>
              <option value="Undergraduate">Undergraduate (UG)</option>
              <option value="Postgraduate">Postgraduate (PG)</option>
              <option value="Diploma / Polytechnic">Diploma / Polytechnic</option>
            </select>
          </div>
        </div>

        <SchemeGrid
          schemes={scholarships}
          loading={loading}
          emptyTitle="No scholarships found"
          emptyDescription="Try clearing your search query or choosing another education level."
        />
      </PageContainer>
    </div>
  );
};

export default Scholarships;
