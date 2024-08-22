import {
  AlertOctagon,
  Store,
  Bus,
  Car,
  Clipboard,
  Club,
  CreditCard,
  MapPin,
  Network,
  WalletCards,
  Gamepad,
  Paperclip,
  TicketCheck,
  CalendarCheck2,
  CalendarSearch,
  Book,
  BookOpen,
  ClipboardCheck,
  Download,
  Globe,
  HeartHandshakeIcon,
  HandCoins,
} from "lucide-react";

export const categories: {
  [id: string]: { title_zh: string; title_en: string };
} = {
  campuslife: {
    title_zh: "校園生活",
    title_en: "Campus Life",
  },
  course: {
    title_zh: "課程資訊",
    title_en: "Courses",
  },
  apply: {
    title_zh: "申請系統",
    title_en: "School Systems",
  },
  club: {
    title_zh: "社團",
    title_en: "Clubs",
  },
  other: {
    title_zh: "其他",
    title_en: "Others",
  },
};

export const apps: {
  id: string;
  category: keyof typeof categories;
  title_zh: string;
  title_en: string;
  href: string;
  Icon: React.FC<any>;
  ais?: boolean;
  target?: string;
}[] = [
  {
    id: "courses",
    category: "course",
    title_zh: "課程查詢",
    title_en: "Course Search",
    href: "/courses",
    Icon: BookOpen,
  },
  {
    id: "venues",
    category: "course",
    title_zh: "地點相關課程",
    title_en: "Venues",
    href: "/venues",
    Icon: MapPin,
  },
  {
    id: "bus",
    category: "campuslife",
    title_zh: "公車",
    title_en: "Bus",
    href: "/bus",
    Icon: Bus,
  },
  {
    id: "shops",
    category: "campuslife",
    title_zh: "餐廳及服務",
    title_en: "Shops",
    href: "/shops",
    Icon: Store,
  },
  {
    id: "grades",
    category: "course",
    title_zh: "你的成績",
    title_en: "Your Grades",
    href: "/student/grades",
    Icon: Clipboard,
    ais: true,
  },
  {
    id: "clubs_info",
    category: "club",
    title_zh: "社團資訊",
    title_en: "Clubs Information",
    href: "https://outrageous-savory-d52.notion.site/d33567eea7814fc6b91744351eb2ba6a",
    Icon: Gamepad,
  },
  {
    id: "nthuclub",
    category: "club",
    title_zh: "清大社團管理系統",
    title_en: "Clubs Management System",
    href: "https://www.ccxp.nthu.edu.tw/ccxp/INQUIRE/SSO_LINK/nthuclub.php",
    Icon: Club,
    target: "_blank",
    ais: true,
  },
  {
    id: "leave_application",
    category: "campuslife",
    title_zh: "請假系統",
    title_en: "Leave Application",
    href: "https://www.ccxp.nthu.edu.tw/ccxp/INQUIRE/SSO_LINK/oauth_stuleave.php",
    Icon: ClipboardCheck,
    target: "_blank",
    ais: true,
  },
  {
    id: "coursereg",
    category: "course",
    title_zh: "選課系統",
    title_en: "Course Selection System",
    href: "https://www.ccxp.nthu.edu.tw/ccxp/COURSE/JH/7/7.1/7.1.3/JH713001.php",
    Icon: CalendarCheck2,
    target: "_blank",
    ais: true,
  },
  {
    id: "coursereg",
    category: "course",
    title_zh: "選課待亂數名額查詢",
    title_en: "Realtime Course Enrollment Status",
    href: "https://www.ccxp.nthu.edu.tw/ccxp/COURSE/JH/7/7.2/7.2.7/JH727001.php",
    Icon: CalendarSearch,
    ais: true,
  },
  {
    id: "eform",
    category: "apply",
    title_zh: "電子表單系統",
    title_en: "E-Form System",
    href: "https://www.ccxp.nthu.edu.tw/ccxp/INQUIRE/SSO_LINK/oauth_eform.php",
    Icon: Paperclip,
    ais: true,
  },
  {
    id: "reach",
    category: "campuslife",
    title_zh: "校園通報網",
    title_en: "Campus Defect Report",
    href: "https://www.ccxp.nthu.edu.tw/ccxp/INQUIRE/SSO_LINK/campusnotice.php",
    Icon: AlertOctagon,
    ais: true,
  },
  {
    id: "park",
    category: "apply",
    title_zh: "駐警隊車輛辦證系統",
    title_en: "Vehicle Registration System",
    href: "https://www.ccxp.nthu.edu.tw/ccxp/INQUIRE/SSO_LINK/park.php",
    Icon: Car,
    ais: true,
  },
  {
    id: "card",
    category: "apply",
    title_zh: "校園學生證掛失/管理系統",
    title_en: "Student ID Management",
    href: "https://www.ccxp.nthu.edu.tw/ccxp/INQUIRE/SSO_LINK/card.php",
    Icon: CreditCard,
    ais: true,
  },
  {
    id: "netsys",
    category: "apply",
    title_zh: "網路系統組線上服務",
    title_en: "Network System Services",
    href: "https://www.ccxp.nthu.edu.tw/ccxp/INQUIRE/netsys.php",
    Icon: Network,
    ais: true,
  },
  {
    id: "netsys",
    category: "apply",
    title_zh: "	Office365帳號申請",
    title_en: "Office 365 Account Application",
    href: "https://www.ccxp.nthu.edu.tw/ccxp/INQUIRE/SSO_LINK/oauth_office365.php",
    Icon: Network,
    ais: true,
  },
  {
    id: "netsys",
    category: "apply",
    title_zh: "	教室借用申請",
    title_en: "Classroom Renting",
    href: "https://www.ccxp.nthu.edu.tw/ccxp/INQUIRE/SSO_LINK/spacebooking.php",
    Icon: HandCoins,
    ais: true,
  },
  {
    id: "counselling",
    category: "other",
    title_zh: "	諮商輔導預約申請",
    title_en: "Counselling Appointment",
    href: "https://www.ccxp.nthu.edu.tw/ccxp/INQUIRE/SSO_LINK/counsel.php",
    Icon: HeartHandshakeIcon,
    ais: true,
  },
  {
    id: "mentorship",
    category: "other",
    title_zh: "明燈平台",
    title_en: "NTHU Mentorship Platform",
    href: "https://www.ccxp.nthu.edu.tw/ccxp/INQUIRE/SSO_LINK/strategy_goal_2.php",
    Icon: Globe,
    ais: true,
  },
];
