import React from 'react';
import { motion } from 'framer-motion';
import { Download, Smartphone, Store, ShieldCheck, FileDown, Settings, CheckCircle2 } from 'lucide-react';

function App() {
  const downloadCustomerApp = () => {
    // In a real app, this would be a real URL
    window.open('#customer-apk', '_self');
  };

  const downloadSellerApp = () => {
    // In a real app, this would be a real URL
    window.open('#seller-apk', '_self');
  };

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-primary/20 selection:text-primary">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-orange-400/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 blur-[120px]"></div>
      </div>

      <main className="container mx-auto px-4 py-12 md:py-24 max-w-5xl">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-xl shadow-orange-100 mb-8">
            <span className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Shar Mu
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            ဒေါင်းလုဒ်လုပ်ရန်
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
              Application များ
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Shar Mu App ကို ယခုပဲ ဒေါင်းလုဒ်ဆွဲပြီး အကောင်းဆုံး ဝန်ဆောင်မှုများကို ရယူလိုက်ပါ။
          </p>
        </motion.div>

        {/* Download Cards Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {/* Customer App Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative bg-white/60 backdrop-blur-xl border border-white/40 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 transition-transform duration-300 shadow-inner">
              <Smartphone size={40} strokeWidth={1.5} />
            </div>
            
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Shar Mu Customer</h2>
            <p className="text-slate-600 mb-8">ဝယ်ယူသူများအတွက် အထူးထုတ်လုပ်ထားသော App</p>
            
            <button 
              onClick={downloadCustomerApp}
              className="mt-auto relative w-full inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600 shadow-lg shadow-orange-500/30 overflow-hidden group/btn"
            >
              <span className="absolute inset-0 w-full h-full -ml-[100%] bg-white/[0.08] transition-all duration-300 group-hover/btn:ml-0"></span>
              <Download className="mr-2 h-5 w-5" />
              Download APK
            </button>
          </motion.div>

          {/* Seller App Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative bg-white/60 backdrop-blur-xl border border-white/40 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300 shadow-inner">
              <Store size={40} strokeWidth={1.5} />
            </div>
            
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Shar Mu Seller</h2>
            <p className="text-slate-600 mb-8">ရောင်းချသူများအတွက် စီမံခန့်ခွဲရန် App</p>
            
            <button 
              onClick={downloadSellerApp}
              className="mt-auto relative w-full inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 shadow-lg shadow-blue-500/30 overflow-hidden group/btn"
            >
              <span className="absolute inset-0 w-full h-full -ml-[100%] bg-white/[0.08] transition-all duration-300 group-hover/btn:ml-0"></span>
              <Download className="mr-2 h-5 w-5" />
              Download APK
            </button>
          </motion.div>
        </div>

        {/* Installation Steps Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100 relative overflow-hidden"
        >
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>

          <div className="relative text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4 inline-flex items-center justify-center">
              <ShieldCheck className="mr-3 text-orange-500 h-8 w-8" />
              ဘယ်လို Install လုပ်မလဲ?
            </h3>
            <p className="text-slate-500">Android ဖုန်းများတွင် App ထည့်သွင်းရန် အဆင့်များ</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
             {/* Connecting line for desktop */}
             <div className="hidden md:block absolute top-[45px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-slate-200 via-orange-200 to-slate-200 z-0"></div>

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-slate-50 mb-6 text-orange-500 relative group">
                <div className="absolute -inset-2 bg-orange-100 rounded-full scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                <FileDown size={32} />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">၁။ ဒေါင်းလုဒ်ဆွဲပါ</h4>
              <p className="text-slate-600 leading-relaxed">
                အထက်ပါ Download ခလုတ်ကို နှိပ်၍ APK ဖိုင်ကို သင့်ဖုန်းထဲသို့ ဒေါင်းလုဒ်ဆွဲပါ။
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-slate-50 mb-6 text-orange-500 relative group">
                <div className="absolute -inset-2 bg-orange-100 rounded-full scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                <Settings size={32} />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">၂။ ခွင့်ပြုချက်ပေးပါ</h4>
              <p className="text-slate-600 leading-relaxed">
                Settings &gt; Security သို့သွားပြီး <b>"Unknown Sources"</b> ကို ဖွင့်ပေးပါ။ Browser မှ ဒေါင်းလုဒ်ဆွဲခြင်းကို ခွင့်ပြုပါ။
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-slate-50 mb-6 text-orange-500 relative group">
                <div className="absolute -inset-2 bg-orange-100 rounded-full scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                <CheckCircle2 size={32} />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">၃။ အင်စတောလုပ်ပါ</h4>
              <p className="text-slate-600 leading-relaxed">
                ဒေါင်းလုဒ်ဆွဲထားသော ဖိုင်ကိုဖွင့်ပြီး Install ကိုနှိပ်ပါ။ ပြီးပါက App ကို စတင်အသုံးပြုနိုင်ပါပြီ။
              </p>
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="mt-12 py-8 text-center text-slate-500 border-t border-slate-200/60 bg-white/50 backdrop-blur-sm">
        <p>© {new Date().getFullYear()} Shar Mu. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
