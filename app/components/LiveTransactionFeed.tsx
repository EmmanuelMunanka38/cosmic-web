const transactions = [
  { name: "Kariakoo Market", amount: "-Tsh 45,000", status: "Imekamilika" },
  { name: "Juma Hamisi", amount: "+Tsh 120,000", status: "Imepokelewa" },
  { name: "Cosmic Airtime", amount: "-Tsh 5,000", status: "Imekamilika" }
];

export default function LiveTransactionFeed() {
  return (
    <div className="space-y-3">
      <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">Miamala ya Hivi Karibuni</p>
      {transactions.map((tx, i) => (
        <div key={i} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-white/5 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center font-bold text-[10px]">TZ</div>
            <div>
              <p className="text-[11px] font-bold text-slate-900 dark:text-white">{tx.name}</p>
              <p className="text-[9px] text-slate-400">{tx.status}</p>
            </div>
          </div>
          <p className={`text-[11px] font-black ${tx.amount.startsWith('+') ? 'text-blue-600' : 'text-slate-900 dark:text-white'}`}>{tx.amount}</p>
        </div>
      ))}
    </div>
  );
}