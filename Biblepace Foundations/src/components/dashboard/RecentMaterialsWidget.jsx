'use client';

import React from 'react';
import Link from 'next/link';
import { FileText, ChevronRight, ArrowRight } from 'lucide-react';
import { RECENT_MATERIALS } from '@/data/curriculumData';
import styles from './SidebarWidgets.module.css';

export default function RecentMaterialsWidget() {
  return (
    <div className={styles.widgetCard}>
      <div className={styles.widgetHeader}>
        <span className={styles.widgetTitle}>Materiais recentes</span>
        <Link href="/biblioteca" className={styles.widgetActionLink}>
          <span>Ver todos</span>
          <ArrowRight size={13} />
        </Link>
      </div>

      <div className={styles.materialsList}>
        {RECENT_MATERIALS.map((item) => (
          <Link 
            key={item.id} 
            href={item.moduleId ? `/cursos/${item.moduleId}` : '/biblioteca'}
            className={styles.materialItem}
          >
            <div className={styles.materialLeft}>
              <div className={styles.materialIconBox}>
                <FileText size={18} />
              </div>
              <div className={styles.materialDetails}>
                <span className={styles.materialName} title={item.title}>
                  {item.title}
                </span>
                <span className={styles.materialMeta}>
                  {item.type} • {item.size} • {item.date}
                </span>
              </div>
            </div>
            <ChevronRight size={16} className={styles.materialChevron} />
          </Link>
        ))}
      </div>
    </div>
  );
}
