import RoomVisitedCard from '../shared/room-visited-card/RoomVisitedCard';

export default function CommunicableDiseaseReportDetails() {
  return (
    <div className="w-full max-w-[424px] bg-white p-[20px] rounded-[20px]">
      <div className="flex w-full justify-between items-center">
        <h2 className="text-[28px] font-bold text-[#364D39]">Full details</h2>
        <button className="bg-[#F5E3E1] text-[#CC3429] py-[16px] px-[20px] rounded-[10px]">Notify</button>
      </div>
      <div className="">
        <p className="text-[#364D39] font-normal">John Doe Molina</p>
        <span className="text-[#CD3328] text-[12px] font-normal">John Doe Molina</span>
      </div>

      <div className="mt-[30px] text-[16px] font-bold">
        <h2>Room visited</h2>
        <div className="mt-[10px] gap-[10px] grid grid-cols-2">
          <RoomVisitedCard />
          <RoomVisitedCard />
          <RoomVisitedCard />
          <RoomVisitedCard />
        </div>
      </div>
      <div>
        <button className="w-full h-[44px] mt-[20px] text-white text-[16px] font-bold shadow-md rounded-[10px] bg-gradient-to-b from-[#6BF27F] to-[#28cd41]">
          Overview
        </button>
      </div>
    </div>
  );
}
