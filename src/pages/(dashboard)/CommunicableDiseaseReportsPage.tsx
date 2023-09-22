import CommunicableDiseaseReportDetails from '@/components/communicable-disease-report/CommunicableDiseaseReportDetails';
import CommunicableDiseaseReportTable from '@/components/communicable-disease-report/CommunicableDiseaseReportTable';
import Header from '@/components/header/Header';

export default function CommunicableDiseaseReportsPage() {
  return (
    <main>
      <Header title="Dashboard" sub={'Communicable disease reports'} />
      <h2 className="mt-[40px] text-[28px] font-bold text-[#364D39]">Communicable diease reports</h2>
      <div className="p-[15px] mt-[40px] flex flex-col md:flex-row gap-[33px]">
        <CommunicableDiseaseReportTable />
        <CommunicableDiseaseReportDetails />
      </div>
    </main>
  );
}
