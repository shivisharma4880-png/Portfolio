import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import TelehealthCaseStudyPage from './pages/TelehealthCaseStudyPage';
import SmartApplyCaseStudyPage from './pages/SmartApplyCaseStudyPage';
import Ki8CaseStudyPage from './pages/Ki8CaseStudyPage';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/telehealth" element={<TelehealthCaseStudyPage />} />
        <Route path="/projects/smart-apply" element={<SmartApplyCaseStudyPage />} />
        <Route path="/projects/ki8-io" element={<Ki8CaseStudyPage />} />
      </Routes>
    </>
  );
}
