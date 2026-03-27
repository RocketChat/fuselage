// Re-export fuselage base + fuselage-ui for convenience
export * from '@rocket.chat/fuselage';
export { MetricCard, StatusCard, InfoPanel } from '@rocket.chat/fuselage-ui';

// Export admin-specific components
export { default as AdminPageHeader, type AdminPageHeaderProps } from './components/AdminPageHeader.js';
export { default as AdminDashboard, type AdminDashboardProps } from './components/AdminDashboard.js';
