export default function DeviceMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto border-slate-200 dark:border-slate-800 bg-slate-200 dark:bg-slate-800 border-[8px] rounded-[3rem] h-[600px] w-[300px] shadow-2xl transition-colors overflow-hidden">
      <div className="w-full h-full bg-white dark:bg-slate-950 transition-colors">
        {children}
      </div>
    </div>
  );
}