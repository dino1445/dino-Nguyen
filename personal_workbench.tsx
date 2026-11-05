import React, { useState, useEffect } from 'react';
import { 
  Star, 
  Sun, 
  FileText, 
  Flame, 
  Briefcase, 
  BookOpen, 
  RotateCcw, 
  TrendingUp, 
  Search, 
  Bell, 
  Plus, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  Award, 
  Users, 
  ArrowUpRight, 
  Check, 
  Trash2, 
  FolderKanban, 
  GraduationCap,
  Moon,
  ChevronLeft,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('achievements');
  const [currentTimeStr, setCurrentTimeStr] = useState('');
  const [currentDateStr, setCurrentDateStr] = useState('');
  const [period, setPeriod] = useState('afternoon'); // morning, afternoon, evening, night
  const [lang, setLang] = useState('vi'); // 'vi', 'en', 'zh'
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // High quality Nature Background Images matching 4 time periods
  const bgImages = {
    morning: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80",
    afternoon: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80",
    evening: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
    night: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1920&q=80"
  };

  // Multi-language Dictionary
  const t = {
    vi: {
      role: "Sinh viên Marketing @ HUIT",
      navMain: "Trang làm việc",
      achievements: "Thành tựu",
      today: "Hôm nay",
      notes: "Ghi chép",
      focus: "Tiêu điểm & Thực hành",
      tasks: "Công việc",
      navPersonal: "Phát triển cá nhân",
      knowledge: "Kiến thức",
      review: "Tổng kết",
      longterm: "Dài hạn (StayHub)",
      huitFull: "Đại học Công Thương TP.HCM",
      huitDept: "Marketing & Quản trị Thương hiệu",
      searchPlaceholder: "Tìm kiếm tài liệu, dự án...",
      greetings: {
        morning: "Chào buổi sáng",
        afternoon: "Chào buổi chiều",
        evening: "Chào buổi tối",
        night: "Chào đêm muộn"
      },
      heroSub: "Hoàn thành kế hoạch nghiên cứu thị trường Tân Phú & bài thảo luận dự án StayHub hôm nay.",
      quickNotePlaceholder: "Ghi chép nhanh: Ghi lại một việc / ý tưởng dự án...",
      nextScheduleTitle: "LỊCH TRÌNH TIẾP THEO",
      nextScheduleContent: "19:30 - Lớp Việt Nam học / Họp StayHub",
      nextScheduleDesc: "Thảo luận song ngữ, 2 tiếng • Bàn giao phân tích đối thủ cạnh tranh & chiến lược Marketing số.",
      achievementsTitle: "Thành tựu học tập & Dự án",
      updatedFrom: "Cập nhật từ 13 tháng 5 đến nay",
      metricTokens: "Tổng số Token / AI Credits",
      metricTokensUnit: "triệu",
      metricTokensSub: "Đã hỗ trợ 15+ bài luận Marketing & Nghiên cứu thị trường HUIT",
      metricStreak: "Chuỗi ngày liên tục",
      metricStreakUnit: "ngày",
      metricStreakSub: "Duy trì tiến độ học tập, viết bài & phát triển dự án StayHub",
      metricDays: "Số ngày hoạt động",
      metricDaysUnit: "ngày",
      metricDaysSub: "Tính từ đầu kỳ học tại HUIT, ghi nhận hầu như mỗi ngày",
      metricInteractions: "Tương tác & Phân tích",
      metricInteractionsUnit: "lượt",
      metricInteractionsSub: "27 mô hình prompt / ChatGPT / Claude / Phân tích dữ liệu",
      todayTitle: "Hôm nay & Năng suất",
      timeRecord: "Thời gian ghi nhận thực tế",
      creationTime: "Thời gian sáng tạo hôm qua",
      collabTime: "Thời gian thảo luận nhóm",
      studyTime: "Học tập tuần này",
      hours: "giờ",
      tasksNotesFocus: "Ghi chép • Tiêu điểm • Công việc",
      tasksList: "Danh sách đáng chú ý hôm nay",
      topTasks: "Công việc quan trọng nhất",
      pinTop: "Ghim đầu",
      addTask: "Thêm công việc mới",
      focusPractice: "Tiêu điểm & Thực hành",
      focusCategory: "Dự án & Bài tập",
      microHintTitle: "Gợi ý tiêu điểm môn Vi mô:",
      microHintDesc: "Nghiên cứu Hiệu ứng mơ hồ (Ambiguity Effect) & ứng dụng trong ra quyết định mua hàng của Gen Z.",
      quickNotesTitle: "Ghi chú nhanh",
      recentUpdated: "Mới cập nhật",
      rewardThisWeek: "Thưởng bài học tuần này:",
      knowledgeSecTitle: "Tri thức • Tổng kết • Dài hạn",
      accumulated: "Tích lũy theo thời gian",
      kbTitle: "Knowledge Base",
      kbCount: "29 tài liệu",
      kbDesc: "Kho tài liệu Marketing, Case study doanh nghiệp Việt Nam, Slide giảng dạy Kinh tế Vi mô & Logistics.",
      kbSync: "Đồng bộ với AI Assistant",
      kbOpen: "Mở thư viện",
      meetingTitle: "Ghi chú Cuộc họp",
      meetingProgress: "41% hoàn thành",
      meetingDesc: "Ghi chép thảo luận nhóm dự án StayHub & bài tập môn Rủi ro Thương mại điện tử cùng Thúy Phụng, Diệu Hà.",
      meetingUpdate: "Cập nhật hôm nay",
      meetingDetail: "Chi tiết >",
      longtermTitle: "Dài hạn & Khởi nghiệp",
      longtermSub: "Dự án StayHub",
      longtermDesc: "Xây dựng nền tảng Proptech StayHub tại khu vực Tân Phú + Định hướng phát triển kênh Marketing số cá nhân.",
      longtermGoal: "Mục tiêu 2025",
      longtermRoadmap: "Lộ trình"
    },
    en: {
      role: "Marketing Student @ HUIT",
      navMain: "WORKBENCH",
      achievements: "Achievements",
      today: "Today",
      notes: "Notes",
      focus: "Focus & Practice",
      tasks: "Tasks",
      navPersonal: "PERSONAL DEVELOPMENT",
      knowledge: "Knowledge",
      review: "Review",
      longterm: "Long-term (StayHub)",
      huitFull: "Ho Chi Minh City Univ. of Industry & Trade",
      huitDept: "Commercial Marketing & Branding",
      searchPlaceholder: "Search documents, projects...",
      greetings: {
        morning: "Good morning",
        afternoon: "Good afternoon",
        evening: "Good evening",
        night: "Good night"
      },
      heroSub: "Complete Tan Phu market research plan & StayHub project discussion today.",
      quickNotePlaceholder: "Quick note: Record a task / project idea...",
      nextScheduleTitle: "UPCOMING SCHEDULE",
      nextScheduleContent: "19:30 - Vietnamese Studies / StayHub Meeting",
      nextScheduleDesc: "Bilingual discussion, 2 hours • Competitor analysis & digital marketing strategy handover.",
      achievementsTitle: "Academic & Project Achievements",
      updatedFrom: "Updated from May 13 to present",
      metricTokens: "Total Tokens / AI Credits",
      metricTokensUnit: "M",
      metricTokensSub: "Supported 15+ HUIT Marketing & Market Research essays",
      metricStreak: "Streak Days",
      metricStreakUnit: "days",
      metricStreakSub: "Maintained learning, writing & StayHub project progress",
      metricDays: "Active Days",
      metricDaysUnit: "days",
      metricDaysSub: "Counted from semester start at HUIT, logged almost daily",
      metricInteractions: "Interactions & Analysis",
      metricInteractionsUnit: "times",
      metricInteractionsSub: "27 prompt models / ChatGPT / Claude / Data Analysis",
      todayTitle: "Today & Productivity",
      timeRecord: "Actual recorded time",
      creationTime: "Creation time yesterday",
      collabTime: "Team collab time",
      studyTime: "Study time this week",
      hours: "hrs",
      tasksNotesFocus: "Notes • Focus • Tasks",
      tasksList: "Notable list today",
      topTasks: "Top Priority Tasks",
      pinTop: "Pinned",
      addTask: "Add new task",
      focusPractice: "Focus & Practice",
      focusCategory: "Projects & Assignments",
      microHintTitle: "Microeconomics Focus Hint:",
      microHintDesc: "Research Ambiguity Effect & application in Gen Z purchasing decision-making.",
      quickNotesTitle: "Quick Notes",
      recentUpdated: "Recently updated",
      rewardThisWeek: "Reward this week:",
      knowledgeSecTitle: "Knowledge • Review • Long-term",
      accumulated: "Accumulated over time",
      kbTitle: "Knowledge Base",
      kbCount: "29 docs",
      kbDesc: "Marketing repo, Vietnam business case studies, Microeconomics & Logistics lecture slides.",
      kbSync: "Synced with AI Assistant",
      kbOpen: "Open library",
      meetingTitle: "Meeting Notes",
      meetingProgress: "41% completed",
      meetingDesc: "StayHub group discussion & E-Commerce Risk Management assignment with Thuy Phung & Dieu Ha.",
      meetingUpdate: "Updated today",
      meetingDetail: "Details >",
      longtermTitle: "Long-term & Startup",
      longtermSub: "StayHub Project",
      longtermDesc: "Build StayHub Proptech platform in Tan Phu area + Personal digital marketing channel growth.",
      longtermGoal: "Goal 2025",
      longtermRoadmap: "Roadmap"
    },
    zh: {
      role: "HUIT 市场营销专业学生",
      navMain: "个人工作台",
      achievements: "个人成就",
      today: "今日概览",
      notes: "笔记记录",
      focus: "重点与实践",
      tasks: "工作任务",
      navPersonal: "个人成长",
      knowledge: "知识库",
      review: "定期复盘",
      longterm: "长期项目 (StayHub)",
      huitFull: "胡志明市工商大学 (HUIT)",
      huitDept: "商业营销与品牌管理",
      searchPlaceholder: "搜索文档、项目...",
      greetings: {
        morning: "早上好",
        afternoon: "下午好",
        evening: "晚上好",
        night: "夜深了"
      },
      heroSub: "今天完成新富郡（Tan Phu）市场调研计划及 StayHub 项目讨论。",
      quickNotePlaceholder: "快速记录：写下一件事 / 项目想法...",
      nextScheduleTitle: "接下来的日程",
      nextScheduleContent: "19:30 - 越南研究课 / StayHub 会议",
      nextScheduleDesc: "双语讨论，2小时 • 交付竞品分析与数字营销策略。",
      achievementsTitle: "学习与项目成就",
      updatedFrom: "自5月13日至今更新",
      metricTokens: "Token / AI 额度总计",
      metricTokensUnit: "亿",
      metricTokensSub: "已辅助完成 15+ 篇 HUIT 营销与市场调研论文",
      metricStreak: "连续使用天数",
      metricStreakUnit: "天",
      metricStreakSub: "持续保持学习、写作与 StayHub 项目推进",
      metricDays: "活跃天数",
      metricDaysUnit: "天",
      metricDaysSub: "自 HUIT 开学起，几乎天天在用",
      metricInteractions: "AI 会话与分析",
      metricInteractionsUnit: "次",
      metricInteractionsSub: "27 个 Prompt 模型 / ChatGPT / Claude / 数据分析",
      todayTitle: "今日与生产力",
      timeRecord: "实际记录时间",
      creationTime: "昨天的创造时间",
      collabTime: "昨天的协同时间",
      studyTime: "本周学习时间",
      hours: "小时",
      tasksNotesFocus: "记录 • 重点 • 工作",
      tasksList: "今天值得看的",
      topTasks: "最紧迫的三件事",
      pinTop: "置顶",
      addTask: "添加新任务",
      focusPractice: "热点与实践",
      focusCategory: "项目与作业",
      microHintTitle: "微观经济学重点提示：",
      microHintDesc: "研究模糊效应 (Ambiguity Effect) 及其在 Z 世代购买决策中的应用。",
      quickNotesTitle: "快速记事",
      recentUpdated: "最新更新",
      rewardThisWeek: "本周学习奖励：",
      knowledgeSecTitle: "知识 • 复盘 • 长期",
      accumulated: "慢慢攒的东西",
      kbTitle: "知识库 (Knowledge)",
      kbCount: "29 张",
      kbDesc: "营销资料库、越南企业案例研究、微观经济学与物流教学 Slide。",
      kbSync: "与 AI 共享记忆",
      kbOpen: "打开库",
      meetingTitle: "会议记录",
      meetingProgress: "41% 进度",
      meetingDesc: "与 Thuy Phung、Dieu Ha 讨论 StayHub 项目及电子商务风险管理作业。",
      meetingUpdate: "今日更新",
      meetingDetail: "详情 >",
      longtermTitle: "长期与创业",
      longtermSub: "StayHub 项目",
      longtermDesc: "在新富郡打造 Proptech 平台 StayHub + 个人数字营销渠道建设。",
      longtermGoal: "2025 目标",
      longtermRoadmap: "路线图"
    }
  };

  const currentT = t[lang];

  // Quick Notes State
  const [quickNoteInput, setQuickNoteInput] = useState('');
  const [quickNotes, setQuickNotes] = useState([
    { id: 1, text: 'Nộp bài thảo luận môn Marketing Quốc tế trước 23:00', time: '18:30', tag: 'HUIT' },
    { id: 2, text: 'Họp online cùng Thúy Phụng & Diệu Hà chốt slide CSR C.P. Việt Nam', time: '19:30', tag: 'Dự án' },
    { id: 3, text: 'Kiểm tra mô hình phân tích hành vi người tiêu dùng khu vực Tân Phú', time: 'Hôm nay', tag: 'StayHub' }
  ]);

  // Tasks State
  const [tasks, setTasks] = useState([
    { id: 1, title: '19:30 Họp nhóm Dự án StayHub & Viết bài Marketing', badge: 'Tối nay', urgent: true, completed: false },
    { id: 2, title: 'Gọi điện cho giảng viên hướng dẫn môn Rủi ro Thương mại điện tử', badge: 'Tuần này', urgent: false, completed: false },
    { id: 3, title: 'Hoàn thiện 3 bài viết truyền thông Fanpage HUIT Marketing Club', badge: 'Thứ 4 chốt', urgent: false, completed: true }
  ]);

  // Focus Items State
  const [focusItems] = useState([
    { title: 'Phân tích điểm nóng BĐS Tân Phú', count: '7 bài', note: 'Dữ liệu StayHub' },
    { title: 'Ứng dụng Blockchain trong Logistics VNA Cargo', count: 'Hoàn thành', note: 'Case study' },
    { title: 'Đàm phán xuất khẩu tôm Tài Kim Anh (Hàn Quốc)', count: 'Bản thảo 3', note: 'Mô phỏng' }
  ]);

  // Real-time clock & Vietnam Time logic
  useEffect(() => {
    const updateTimeAndGreeting = () => {
      const now = new Date();
      
      const timeOptions = {
        timeZone: 'Asia/Ho_Chi_Minh',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      
      const dateOptions = {
        timeZone: 'Asia/Ho_Chi_Minh',
        weekday: 'long',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      };

      const localeMap = { vi: 'vi-VN', en: 'en-US', zh: 'zh-CN' };
      const currentLocale = localeMap[lang] || 'vi-VN';

      const timeFormatter = new Intl.DateTimeFormat(currentLocale, timeOptions);
      const dateFormatter = new Intl.DateTimeFormat(currentLocale, dateOptions);

      setCurrentTimeStr(timeFormatter.format(now));
      setCurrentDateStr(dateFormatter.format(now));

      const vnHourStr = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Ho_Chi_Minh',
        hour: 'numeric',
        hour12: false
      }).format(now);

      const hour = parseInt(vnHourStr, 10);

      if (hour >= 5 && hour < 12) {
        setPeriod('morning');
      } else if (hour >= 12 && hour < 18) {
        setPeriod('afternoon');
      } else if (hour >= 18 && hour < 23) {
        setPeriod('evening');
      } else {
        setPeriod('night');
      }
    };

    updateTimeAndGreeting();
    const interval = setInterval(updateTimeAndGreeting, 1000);
    return () => clearInterval(interval);
  }, [lang]);

  const handleAddQuickNote = (e) => {
    e.preventDefault();
    if (!quickNoteInput.trim()) return;
    
    const newNote = {
      id: Date.now(),
      text: quickNoteInput,
      time: currentTimeStr || 'Vừa xong',
      tag: 'Ghi chú'
    };
    
    setQuickNotes([newNote, ...quickNotes]);
    setQuickNoteInput('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteQuickNote = (id) => {
    setQuickNotes(quickNotes.filter(n => n.id !== id));
  };

  const currentGreeting = currentT.greetings[period];

  return (
    <div 
      className="min-h-screen text-[#2C2523] font-sans flex flex-col md:flex-row antialiased bg-cover bg-center bg-fixed transition-all duration-1000 relative"
      style={{ backgroundImage: `url(${bgImages[period]})` }}
    >
      {/* Background Dark Overlay for depth */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] pointer-events-none"></div>

      {/* MOBILE HAMBURGER TOGGLE BUTTON */}
      <div className="md:hidden fixed top-3 left-3 z-50">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2.5 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-white/60 text-[#E07A5F]"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* LEFT SIDEBAR NAVIGATION (COLLAPSIBLE) */}
      <aside 
        className={`
          fixed md:relative z-40 h-full min-h-screen bg-white/85 backdrop-blur-xl border-r border-white/40 p-4 flex flex-col justify-between shrink-0 shadow-2xl transition-all duration-300
          ${isSidebarCollapsed ? 'md:w-20' : 'md:w-64'}
          ${isMobileMenuOpen ? 'translate-x-0 w-64' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <div>
          {/* Logo / User Header with Collapse Button */}
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-black/5">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#E07A5F] to-[#F4A261] text-white flex items-center justify-center font-black text-lg shadow-md shrink-0">
                D
              </div>
              {!isSidebarCollapsed && (
                <div className="truncate">
                  <h1 className="font-bold text-sm text-[#2C2523] tracking-tight truncate">Nguyễn Đình Dũng</h1>
                  <p className="text-[11px] text-[#6E5E52] font-medium truncate">{currentT.role}</p>
                </div>
              )}
            </div>

            {/* TOGGLE SIDEBAR BUTTON (◀ / ▶) */}
            <button 
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              className="hidden md:flex p-1.5 rounded-xl bg-[#F4EBE1] hover:bg-[#E07A5F] hover:text-white text-[#E07A5F] transition-all shadow-xs border border-[#E07A5F]/30 shrink-0"
              title={isSidebarCollapsed ? "Mở rộng thanh menu" : "Thu gọn thanh menu"}
            >
              {isSidebarCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-6">
            <div>
              {!isSidebarCollapsed && (
                <p className="px-3 text-[10px] font-extrabold text-[#8C7A6B] uppercase tracking-wider mb-2">{currentT.navMain}</p>
              )}
              <div className="space-y-1">
                {[
                  { id: 'achievements', icon: Star, label: currentT.achievements },
                  { id: 'today', icon: Sun, label: currentT.today },
                  { id: 'notes', icon: FileText, label: currentT.notes },
                  { id: 'focus', icon: Flame, label: currentT.focus },
                  { id: 'tasks', icon: Briefcase, label: currentT.tasks }
                ].map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => { setActiveTab(item.id); setIsMobileMenuOpen(false); }}
                    className={`w-full flex items-center ${isSidebarCollapsed ? 'justify-center px-2' : 'gap-3 px-3.5'} py-2.5 rounded-xl text-sm font-semibold transition-all ${activeTab === item.id ? 'bg-[#E07A5F] text-white shadow-md' : 'text-[#4A3E3D] hover:bg-white/60'}`}
                    title={isSidebarCollapsed ? item.label : ''}
                  >
                    <item.icon className="w-4 h-4 shrink-0" />
                    {!isSidebarCollapsed && <span className="truncate">{item.label}</span>}
                  </button>
                ))}
              </div>
            </div>

            <div>
              {!isSidebarCollapsed && (
                <p className="px-3 text-[10px] font-extrabold text-[#8C7A6B] uppercase tracking-wider mb-2">{currentT.navPersonal}</p>
              )}
              <div className="space-y-1">
                {[
                  { id: 'knowledge', icon: BookOpen, label: currentT.knowledge },
                  { id: 'review', icon: RotateCcw, label: currentT.review },
                  { id: 'longterm', icon: TrendingUp, label: currentT.longterm }
                ].map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => { setActiveTab(item.id); setIsMobileMenuOpen(false); }}
                    className={`w-full flex items-center ${isSidebarCollapsed ? 'justify-center px-2' : 'gap-3 px-3.5'} py-2.5 rounded-xl text-sm font-semibold transition-all ${activeTab === item.id ? 'bg-[#E07A5F] text-white shadow-md' : 'text-[#4A3E3D] hover:bg-white/60'}`}
                    title={isSidebarCollapsed ? item.label : ''}
                  >
                    <item.icon className="w-4 h-4 shrink-0" />
                    {!isSidebarCollapsed && <span className="truncate">{item.label}</span>}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>

        {/* Bottom HUIT Info Widget */}
        {!isSidebarCollapsed ? (
          <div className="mt-6 p-3 bg-[#FFF9F3]/90 rounded-2xl border border-[#E7D7C5]">
            <div className="flex items-center gap-2 mb-1 text-xs font-bold text-[#2C2523]">
              <GraduationCap className="w-4 h-4 text-[#E07A5F] shrink-0" />
              <span className="truncate">{currentT.huitFull}</span>
            </div>
            <p className="text-[10px] text-[#6E5E52] leading-tight line-clamp-2">{currentT.huitDept}</p>
          </div>
        ) : (
          <div className="mt-6 text-center">
            <GraduationCap className="w-6 h-6 text-[#E07A5F] mx-auto" />
          </div>
        )}
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full overflow-y-auto space-y-6 relative z-10">
        
        {/* TOP HEADER BAR WITH CLOCK & PROMINENT LANGUAGE SWITCHER */}
        <header className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 shadow-lg">
          
          {/* Vietnam Real-time Clock */}
          <div className="flex items-center gap-3 pl-8 md:pl-0">
            <div className="px-3 py-1.5 bg-[#E07A5F] text-white rounded-xl font-mono font-bold text-sm shadow-xs flex items-center gap-2">
              <Clock className="w-4 h-4 animate-pulse" />
              <span>{currentTimeStr || '00:00:00'}</span>
              <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded font-sans">VN (UTC+7)</span>
            </div>
            <div className="text-xs font-bold text-[#4A3E3D] capitalize">
              {currentDateStr}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between lg:justify-end gap-3">
            {/* PROMINENT LANGUAGE SWITCHER IN CENTER HEADER */}
            <div className="flex items-center bg-[#F4EBE1] border-2 border-[#E07A5F] p-1 rounded-2xl shadow-sm">
              <button
                onClick={() => setLang('vi')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-extrabold transition-all ${
                  lang === 'vi' 
                    ? 'bg-[#E07A5F] text-white shadow-sm scale-105' 
                    : 'text-[#4A3E3D] hover:bg-white/60'
                }`}
              >
                <span>🇻🇳</span>
                <span>Tiếng Việt</span>
              </button>
              <button
                onClick={() => setLang('en')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-extrabold transition-all ${
                  lang === 'en' 
                    ? 'bg-[#E07A5F] text-white shadow-sm scale-105' 
                    : 'text-[#4A3E3D] hover:bg-white/60'
                }`}
              >
                <span>🇬🇧</span>
                <span>English</span>
              </button>
              <button
                onClick={() => setLang('zh')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-extrabold transition-all ${
                  lang === 'zh' 
                    ? 'bg-[#E07A5F] text-white shadow-sm scale-105' 
                    : 'text-[#4A3E3D] hover:bg-white/60'
                }`}
              >
                <span>🇨🇳</span>
                <span>中文</span>
              </button>
            </div>

            {/* Search Bar & User */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#8C7A6B]" />
                <input 
                  type="text" 
                  placeholder={currentT.searchPlaceholder}
                  className="pl-9 pr-3 py-1.5 bg-white text-xs text-[#2C2523] placeholder-[#8C7A6B] rounded-full border border-[#E7D7C5] focus:outline-none focus:ring-2 focus:ring-[#E07A5F] w-36 sm:w-48"
                />
              </div>

              <button className="p-2 rounded-full bg-white text-[#4A3E3D] border border-[#E7D7C5] relative shadow-xs">
                <Bell className="w-4 h-4" />
                <span className="w-2 h-2 rounded-full bg-[#E07A5F] absolute top-1 right-1"></span>
              </button>

              <div className="w-8 h-8 rounded-full bg-[#2C2523] text-white font-bold flex items-center justify-center text-xs shadow-sm">
                ND
              </div>
            </div>
          </div>
        </header>

        {/* HERO BANNER & DYNAMIC GREETING SECTION */}
        <section className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/70 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center relative z-10">
            <div className="lg:col-span-2 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-[#E07A5F]/15 text-[#E07A5F]">
                  {period === 'night' || period === 'evening' ? <Moon className="w-7 h-7" /> : <Sun className="w-7 h-7" />}
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-[#2C2523] tracking-tight">
                  {currentGreeting}, Dino.
                </h2>
              </div>
              <p className="text-sm sm:text-base text-[#4A3E3D] font-medium leading-relaxed">
                {currentT.heroSub}
              </p>

              {/* Quick Note Input Form */}
              <form onSubmit={handleAddQuickNote} className="pt-2 flex items-center gap-2 max-w-xl">
                <input 
                  type="text" 
                  value={quickNoteInput}
                  onChange={(e) => setQuickNoteInput(e.target.value)}
                  placeholder={currentT.quickNotePlaceholder}
                  className="flex-1 px-4 py-2.5 text-xs sm:text-sm bg-white border border-[#E7D7C5] rounded-2xl text-[#2C2523] placeholder-[#8C7A6B] focus:outline-none focus:ring-2 focus:ring-[#E07A5F] shadow-sm"
                />
                <button 
                  type="submit"
                  className="w-10 h-10 rounded-2xl bg-[#E07A5F] hover:bg-[#d0674c] text-white flex items-center justify-center transition-all shadow-md shrink-0"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Upcoming Schedule Card */}
            <div className="bg-[#FFF9F3]/95 backdrop-blur-md p-5 rounded-2xl border border-[#E7D7C5] shadow-xs flex flex-col justify-between h-full">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#E07A5F] bg-[#E07A5F]/15 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> {currentT.nextScheduleTitle}
                </span>
                <Clock className="w-3.5 h-3.5 text-[#8C7A6B]" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#2C2523] mb-1">{currentT.nextScheduleContent}</p>
                <p className="text-xs text-[#6E5E52] leading-relaxed">
                  {currentT.nextScheduleDesc}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: ACHIEVEMENTS & METRICS */}
        <section className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-xl font-bold text-white drop-shadow-md tracking-tight flex items-center gap-2">
              <Award className="w-5 h-5 text-[#F4A261]" />
              {currentT.achievementsTitle}
            </h3>
            <span className="text-xs text-white font-medium bg-black/40 px-3 py-1 rounded-full backdrop-blur-md">{currentT.updatedFrom}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/60 shadow-md">
              <p className="text-xs font-bold text-[#6E5E52] mb-1">{currentT.metricTokens}</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-black text-[#2C2523]">14.5</span>
                <span className="text-lg font-bold text-[#E07A5F]">{currentT.metricTokensUnit}</span>
              </div>
              <p className="text-[11px] text-[#6E5E52] leading-tight">{currentT.metricTokensSub}</p>
            </div>

            <div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/60 shadow-md">
              <p className="text-xs font-bold text-[#6E5E52] mb-1">{currentT.metricStreak}</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-black text-[#2C2523]">53</span>
                <span className="text-lg font-bold text-[#E07A5F]">{currentT.metricStreakUnit}</span>
              </div>
              <p className="text-[11px] text-[#6E5E52] leading-tight">{currentT.metricStreakSub}</p>
            </div>

            <div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/60 shadow-md">
              <p className="text-xs font-bold text-[#6E5E52] mb-1">{currentT.metricDays}</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-black text-[#2C2523]">154</span>
                <span className="text-lg font-bold text-[#E07A5F]">{currentT.metricDaysUnit}</span>
              </div>
              <p className="text-[11px] text-[#6E5E52] leading-tight">{currentT.metricDaysSub}</p>
            </div>

            <div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/60 shadow-md">
              <p className="text-xs font-bold text-[#6E5E52] mb-1">{currentT.metricInteractions}</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-black text-[#2C2523]">9,244</span>
                <span className="text-lg font-bold text-[#E07A5F]">{currentT.metricInteractionsUnit}</span>
              </div>
              <p className="text-[11px] text-[#6E5E52] leading-tight">{currentT.metricInteractionsSub}</p>
            </div>
          </div>
        </section>

        {/* SECTION 2: TODAY & TASKS 3-COLUMN LAYOUT */}
        <section className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-xl font-bold text-white drop-shadow-md tracking-tight">{currentT.tasksNotesFocus}</h3>
            <span className="text-xs text-white font-medium bg-black/40 px-3 py-1 rounded-full backdrop-blur-md">{currentT.tasksList}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Column 1: Top Tasks */}
            <div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/60 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#E7D7C5]">
                  <h4 className="font-bold text-sm text-[#2C2523] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E07A5F]" />
                    {currentT.topTasks}
                  </h4>
                  <span className="text-[10px] text-[#E07A5F] bg-[#E07A5F]/15 px-2 py-0.5 rounded-full font-extrabold">{currentT.pinTop}</span>
                </div>

                <div className="space-y-3">
                  {tasks.map(task => (
                    <div 
                      key={task.id}
                      onClick={() => toggleTask(task.id)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${task.completed ? 'bg-[#F4EBE1]/70 border-[#E7D7C5] opacity-60' : 'bg-white border-[#E7D7C5] hover:border-[#E07A5F]'}`}
                    >
                      <button className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border transition-all ${task.completed ? 'bg-[#E07A5F] border-[#E07A5F] text-white' : 'border-[#8C7A6B]'}`}>
                        {task.completed && <Check className="w-3 h-3 stroke-[3]" />}
                      </button>
                      <div className="flex-1 min-w-0">
                        <p className={`text-xs font-bold leading-snug ${task.completed ? 'line-through text-[#8C7A6B]' : 'text-[#2C2523]'}`}>
                          {task.title}
                        </p>
                        <span className="text-[10px] text-[#6E5E52] font-semibold inline-block mt-1">
                          {task.badge}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="mt-4 text-xs font-bold text-[#E07A5F] hover:text-[#d0674c] flex items-center justify-center gap-1 py-2 w-full bg-white rounded-xl border border-[#E7D7C5] shadow-xs">
                <Plus className="w-3.5 h-3.5" /> {currentT.addTask}
              </button>
            </div>

            {/* Column 2: Focus & Practice */}
            <div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/60 shadow-md">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#E7D7C5]">
                <h4 className="font-bold text-sm text-[#2C2523] flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#E07A5F]" />
                  {currentT.focusPractice}
                </h4>
                <span className="text-[11px] text-[#6E5E52] font-semibold">{currentT.focusCategory}</span>
              </div>

              <div className="space-y-3">
                {focusItems.map((item, idx) => (
                  <div key={idx} className="p-3 bg-white rounded-xl border border-[#E7D7C5] flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-[#2C2523]">{item.title}</p>
                      <p className="text-[10px] text-[#6E5E52] mt-0.5">{item.note}</p>
                    </div>
                    <span className="text-[11px] font-bold text-[#E07A5F] bg-[#E07A5F]/15 px-2.5 py-1 rounded-lg">
                      {item.count}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3 bg-[#FFF9F3] rounded-xl border border-[#E7D7C5]">
                <p className="text-[11px] font-bold text-[#2C2523] mb-1">{currentT.microHintTitle}</p>
                <p className="text-[10px] text-[#6E5E52] leading-normal">
                  {currentT.microHintDesc}
                </p>
              </div>
            </div>

            {/* Column 3: Quick Notes */}
            <div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/60 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#E7D7C5]">
                  <h4 className="font-bold text-sm text-[#2C2523] flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#E07A5F]" />
                    {currentT.quickNotesTitle}
                  </h4>
                  <span className="text-[11px] text-[#6E5E52] font-semibold">{currentT.recentUpdated}</span>
                </div>

                <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                  {quickNotes.map((note) => (
                    <div key={note.id} className="group p-3 bg-white rounded-xl border border-[#E7D7C5] relative hover:border-[#E07A5F] transition-all">
                      <div className="flex items-baseline justify-between mb-1">
                        <span className="text-[10px] font-extrabold text-[#E07A5F] bg-[#E07A5F]/15 px-1.5 py-0.5 rounded">
                          {note.tag}
                        </span>
                        <span className="text-[10px] text-[#8C7A6B] font-semibold">{note.time}</span>
                      </div>
                      <p className="text-xs font-medium text-[#2C2523] leading-snug pr-4">{note.text}</p>
                      <button 
                        onClick={() => deleteQuickNote(note.id)}
                        className="opacity-0 group-hover:opacity-100 absolute top-2 right-2 text-[#8C7A6B] hover:text-red-500 transition-all"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-[#E7D7C5] flex items-center justify-between text-xs">
                <span className="text-[#6E5E52] font-semibold">{currentT.rewardThisWeek}</span>
                <span className="font-black text-[#2C2523]">2,000,000 VNĐ</span>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 3: KNOWLEDGE & LONG-TERM STRATEGY */}
        <section className="space-y-4 pt-2">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-xl font-bold text-white drop-shadow-md tracking-tight">{currentT.knowledgeSecTitle}</h3>
            <span className="text-xs text-white font-medium bg-black/40 px-3 py-1 rounded-full backdrop-blur-md">{currentT.accumulated}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/60 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-[#2C2523] flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#E07A5F]" /> {currentT.kbTitle}
                </span>
                <span className="text-[11px] text-[#6E5E52] font-semibold">{currentT.kbCount}</span>
              </div>
              <p className="text-xs text-[#6E5E52] mb-3 leading-relaxed">
                {currentT.kbDesc}
              </p>
              <div className="flex items-center justify-between text-xs pt-2 border-t border-[#E7D7C5]">
                <span className="text-[#6E5E52] font-medium">{currentT.kbSync}</span>
                <span className="font-bold text-[#E07A5F] flex items-center gap-1 cursor-pointer">{currentT.kbOpen} <ArrowUpRight className="w-3 h-3" /></span>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/60 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-[#2C2523] flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#E07A5F]" /> {currentT.meetingTitle}
                </span>
                <span className="text-[10px] text-[#E07A5F] bg-[#E07A5F]/15 px-2 py-0.5 rounded-full font-bold">{currentT.meetingProgress}</span>
              </div>
              <p className="text-xs text-[#6E5E52] mb-3 leading-relaxed">
                {currentT.meetingDesc}
              </p>
              <div className="flex items-center justify-between text-xs pt-2 border-t border-[#E7D7C5]">
                <span className="text-[#6E5E52] font-medium">{currentT.meetingUpdate}</span>
                <span className="font-bold text-[#2C2523] cursor-pointer">{currentT.meetingDetail}</span>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/60 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-[#2C2523] flex items-center gap-1.5">
                  <FolderKanban className="w-4 h-4 text-[#E07A5F]" /> {currentT.longtermTitle}
                </span>
                <span className="text-[11px] text-[#6E5E52] font-semibold">{currentT.longtermSub}</span>
              </div>
              <p className="text-xs text-[#6E5E52] mb-3 leading-relaxed">
                {currentT.longtermDesc}
              </p>
              <div className="flex items-center justify-between text-xs pt-2 border-t border-[#E7D7C5]">
                <span className="text-[#6E5E52] font-medium">{currentT.longtermGoal}</span>
                <span className="font-bold text-[#E07A5F] flex items-center gap-1 cursor-pointer">{currentT.longtermRoadmap} <ArrowUpRight className="w-3 h-3" /></span>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}