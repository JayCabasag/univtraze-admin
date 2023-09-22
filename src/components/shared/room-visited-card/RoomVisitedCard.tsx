import chevronRightSVG from '@assets/chevron-right.svg';

export default function RoomVisitedCard() {
  return (
    <div className="cursor-pointer rounded-[10px] p-[10px] bg-gradient-to-b from-[#5C7AE8] to-[#294CCC] hover:bg-gradient-to-b ">
      <h1 className="text-white text-[16px] font-bold">401</h1>
      <span className="text-[#3DDBE5] text-[12px]">04-13-2022</span>
      <div className="mt-[21px] relative flex justify-between">
        <span className="text-[#3DDBE5] text-[12px]">09 : 18 pm</span>
        <div className="absolute -top-[16px] left-auto right-0 flex items-center justify-center bg-[#294CCC] border-4 border-white rounded-full h-[28px] w-[28px]">
          <img src={chevronRightSVG} className="h-[18px] w-[18px]" alt="chevron-left" />
        </div>
      </div>
    </div>
  );
}
