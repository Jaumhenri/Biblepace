import React from 'react';
import TopBanners from '@/components/dashboard/TopBanners';
import TrailSection from '@/components/dashboard/TrailSection';
import PaceWidget from '@/components/dashboard/PaceWidget';
import RecentMaterialsWidget from '@/components/dashboard/RecentMaterialsWidget';
import styles from '@/components/dashboard/DashboardHeader.module.css';

export default function HomePage() {
  return (
    <div>
      <TopBanners />

      <div className={styles.dashboardMainLayout}>
        <TrailSection />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <PaceWidget />
          <RecentMaterialsWidget />
        </div>
      </div>
    </div>
  );
}
