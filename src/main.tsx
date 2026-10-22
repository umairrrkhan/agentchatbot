import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Bell,
  BookOpen,
  Bot,
  CalendarDays,
  Check,
  CheckCheck,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Command,
  Ellipsis,
  LayoutDashboard,
  MessagesSquare,
  Moon,
  Plus,
  Search,
  Send,
  Settings2,
  Sparkles,
  Users,
  X,
  Zap,
} from "lucide-react";
import "./style.css";

type Conversation = {
  id: number;
  name: string;
  initials: string;
  color: string;
  message: string;
  time: string;
  channel: string;
  status: string;
  messages: { text: string; own: boolean }[];
};
type Booking = {
  id: number;
  name: string;
  initials: string;
  service: string;
  date: string;
  time: string;
  status: string;
};
const initialConversations: Conversation[] = [
  {
    id: 1,
    name: "Olivia Rhye",
    initials: "OR",
    color: "pink",
    message: "Perfect, thank you so much! 🌸",
    time: "2 min ago",
    channel: "Website",
    status: "Resolved",
    messages: [
      {
        text: "Hi! Do you have availability for a consultation tomorrow?",
        own: false,
      },
      {
        text: "Absolutely, Olivia! We have 10:00 AM and 2:30 PM available. Which works best for you?",
        own: true,
      },
      { text: "2:30 PM would be lovely.", own: false },
      {
        text: "You’re all set for 2:30 PM tomorrow. A confirmation has been sent to your email.",
        own: true,
      },
      { text: "Perfect, thank you so much! 🌸", own: false },
    ],
  },
  {
    id: 2,
    name: "Phoenix Baker",
    initials: "PB",
    color: "purple",
    message: "Can I reschedule my appointment?",
    time: "8 min ago",
    channel: "WhatsApp",
    status: "AI handling",
    messages: [
      { text: "Can I reschedule my appointment?", own: false },
      {
        text: "Of course! I can help you find another time. What day works for you?",
        own: true,
      },
    ],
  },
  {
    id: 3,
    name: "Lana Steiner",
    initials: "LS",
    color: "orange",
    message: "What are your opening hours?",
    time: "12 min ago",
    channel: "Instagram",
    status: "AI handling",
    messages: [
      { text: "What are your opening hours?", own: false },
      {
        text: "We’re open Monday to Friday, 9 AM–6 PM, and Saturday, 10 AM–4 PM. How can I help?",
        own: true,
      },
    ],
  },
  {
    id: 4,
    name: "Demi Wilkinson",
    initials: "DW",
    color: "green",
    message: "I’d love to know more about your plans.",
    time: "24 min ago",
    channel: "Website",
    status: "Needs attention",
    messages: [{ text: "I’d love to know more about your plans.", own: false }],
  },
];
const initialBookings: Booking[] = [
  {
    id: 1,
    name: "Olivia Rhye",
    initials: "OR",
    service: "Discovery call",
    date: "2026-10-22",
    time: "10:00",
    status: "Confirmed",
  },
  {
    id: 2,
    name: "Drew Cano",
    initials: "DC",
    service: "Product consultation",
    date: "2026-10-22",
    time: "11:30",
    status: "Confirmed",
  },
  {
    id: 3,
    name: "Natali Craig",
    initials: "NC",
    service: "Onboarding session",
    date: "2026-10-22",
    time: "14:00",
    status: "Pending",
  },
];
function useSaved<T>(key: string, initial: T) {
  const [value, set] = useState<T>(() => {
    try {
      return JSON.parse(localStorage.getItem(key) || "null") ?? initial;
    } catch {
      return initial;
    }
  });
  return [
    value,
    (next: T) => {
      set(next);
      try {
        localStorage.setItem(key, JSON.stringify(next));
      } catch {
        /* Keep the demo usable when browser storage is unavailable. */
      }
    },
  ] as const;
}
/** Original botanical illustration; vector artwork stays sharp at every size. */
function Blossom({ className = "" }: { className?: string }) {
  const blooms = [
    [466, 45, 0.85],
    [425, 77, 1],
    [403, 121, 0.7],
    [365, 104, 0.95],
    [338, 149, 1.15],
    [290, 180, 0.8],
    [272, 135, 0.65],
    [244, 203, 1],
    [213, 236, 0.7],
    [164, 244, 0.85],
    [112, 218, 0.65],
    [367, 210, 0.9],
    [393, 244, 0.65],
    [430, 177, 0.8],
    [468, 201, 0.65],
    [304, 261, 0.75],
    [326, 298, 0.8],
    [252, 301, 0.65],
    [192, 280, 0.7],
  ];
  return (
    <svg
      className={className}
      viewBox="0 0 540 360"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="branch-ink"
          x1="500"
          y1="300"
          x2="190"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9a7770" />
          <stop offset="1" stopColor="#c7a497" />
        </linearGradient>
        <radialGradient id="petal-wash" cx=".45" cy=".1" r=".95">
          <stop stopColor="#fffafc" />
          <stop offset=".52" stopColor="#fbd9e2" />
          <stop offset="1" stopColor="#e695ae" />
        </radialGradient>
        <radialGradient id="flower-heart">
          <stop stopColor="#de7898" />
          <stop offset="1" stopColor="#f9cedb" stopOpacity="0" />
        </radialGradient>
        <filter id="bloom-shadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow
            dx="0"
            dy="2"
            stdDeviation="2"
            floodColor="#c591a0"
            floodOpacity=".16"
          />
        </filter>
        <g id="sakura-bloom">
          {[0, 72, 144, 216, 288].map((angle, i) => (
            <g
              key={angle}
              transform={`rotate(${angle}) scale(${i % 2 ? ".91 1" : "1 1"})`}
            >
              <path
                d="M0 3C-5-2-15-7-16-17C-17-28-8-32-2-27L0-24L3-28C12-32 20-22 14-12C11-6 4-1 0 3Z"
                fill="url(#petal-wash)"
                stroke="#eeb9ca"
                strokeWidth=".5"
              />
              <path
                d="M0 1C-2-7-4-14-2-21"
                stroke="#de9fb5"
                strokeWidth=".55"
                opacity=".5"
              />
            </g>
          ))}
          <circle r="12" fill="url(#flower-heart)" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
            <g key={a} transform={`rotate(${a})`}>
              <path d="M0 0L2-8" stroke="#c98592" strokeWidth=".65" />
              <circle cx="2" cy="-8" r="1.2" fill="#bfa06b" />
            </g>
          ))}
          <circle r="2.3" fill="#dba4a2" />
        </g>
      </defs>
      <g stroke="url(#branch-ink)" strokeLinecap="round">
        <path
          d="M547 354C487 320 431 291 394 259C352 221 348 183 338 151C329 116 369 86 425 77L472 43"
          strokeWidth="4"
        />
        <path
          d="M394 259C334 254 300 235 245 205C196 182 160 207 111 217M339 153C305 151 292 146 271 134M354 189C388 195 407 183 429 177L470 201M335 238C317 249 311 276 327 300M301 233C276 247 268 276 252 300M226 198L212 236L164 244M250 205C273 200 282 185 290 180M374 226L367 210M209 236L193 280M425 77L464 45M378 110L365 104M401 89L403 121"
          strokeWidth="1.8"
        />
      </g>
      <g fill="#bdc5a5" opacity=".55">
        <path d="M309 244Q281 225 288 214Q312 217 309 244Z" />
        <path d="M405 275Q417 248 430 254Q433 270 405 275Z" />
        <path d="M204 207Q179 192 182 182Q203 184 204 207Z" />
      </g>
      <g filter="url(#bloom-shadow)">
        {blooms.map(([x, y, scale], i) => (
          <g
            key={i}
            transform={`translate(${x} ${y}) rotate(${i * 31}) scale(${scale})`}
          >
            <use href="#sakura-bloom" />
          </g>
        ))}
      </g>
      <g fill="#e4a0b8">
        <ellipse
          cx="451"
          cy="107"
          rx="5"
          ry="9"
          transform="rotate(35 451 107)"
        />
        <ellipse
          cx="234"
          cy="155"
          rx="4"
          ry="8"
          transform="rotate(-22 234 155)"
        />
        <ellipse
          cx="144"
          cy="265"
          rx="4"
          ry="7"
          transform="rotate(24 144 265)"
        />
      </g>
    </svg>
  );
}
function App() {
  const [timezone, setTimezone] = useSaved("ac-v1-timezone", "Asia/Kolkata");
  const [page, setPage] = useState("Overview");
  const [conversations, setConversations] = useSaved(
    "ac-v1-conversations",
    initialConversations,
  );
  const [bookings, setBookings] = useSaved("ac-v1-bookings", initialBookings);
  const [agents, setAgents] = useSaved("ac-v1-agents", [
    {
      name: "Sakura",
      role: "Customer support",
      active: true,
      resolved: 842,
      color: "pink",
    },
    {
      name: "Luna",
      role: "Bookings & scheduling",
      active: true,
      resolved: 386,
      color: "purple",
    },
    {
      name: "Atlas",
      role: "Sales & inquiries",
      active: true,
      resolved: 256,
      color: "blue",
    },
  ]);
  const [modal, setModal] = useState<
    "agent" | "booking" | "notifications" | "help" | null
  >(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [query, setQuery] = useState("");
  const [reply, setReply] = useState("");
  const [toast, setToast] = useState("");
  const [period, setPeriod] = useState("Last 7 days");
  const [filter, setFilter] = useState("All");
  const [workspace, setWorkspace] = useSaved(
    "ac-v1-workspace",
    "Sakura Studio",
  );
  const notify = (text: string) => {
    setToast(text);
    window.setTimeout(() => setToast(""), 3500);
  };
  const navigate = (name: string) => {
    setPage(name);
    setQuery("");
    setSelected(null);
  };
  const selectedConversation = conversations.find((c) => c.id === selected);
  const filtered = conversations.filter(
    (c) =>
      (c.name + " " + c.message).toLowerCase().includes(query.toLowerCase()) &&
      (filter === "All" || c.status === filter),
  );
  const dialogOpen = Boolean(modal || selectedConversation);
  React.useEffect(() => {
    if (!dialogOpen) return;
    const previous = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const frame = requestAnimationFrame(() =>
      document
        .querySelector<HTMLElement>(
          ".modal input, .modal button, .modal select",
        )
        ?.focus(),
    );
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModal(null);
        setSelected(null);
      }
      if (event.key === "Tab") {
        const items = [
          ...document.querySelectorAll<HTMLElement>(
            ".modal button:not(:disabled), .modal input, .modal select, .modal textarea",
          ),
        ];
        const first = items[0],
          last = items.at(-1);
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previous?.focus();
    };
  }, [dialogOpen]);
  const sendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reply.trim() || !selectedConversation) return;
    setConversations(
      conversations.map((c) =>
        c.id === selected
          ? {
              ...c,
              message: reply,
              time: "Just now",
              messages: [...c.messages, { text: reply, own: true }],
            }
          : c,
      ),
    );
    setReply("");
  };
  const nav = [
    { name: "Overview", icon: LayoutDashboard },
    {
      name: "Conversations",
      icon: MessagesSquare,
      count: conversations.length,
    },
    { name: "AI Agents", icon: Bot },
    { name: "Bookings", icon: CalendarDays },
    { name: "Customers", icon: Users },
    { name: "Knowledge base", icon: BookOpen },
    { name: "Analytics", icon: Activity },
  ];
  const conversationList = (
    <div className="conversation-list">
      {filtered.length ? (
        filtered.map((c) => (
          <button
            className="conversation"
            key={c.id}
            onClick={() => setSelected(c.id)}
          >
            <span className={`avatar ${c.color}`}>
              {c.initials}
              <i />
            </span>
            <span className="conversation-copy">
              <strong>
                {c.name} <small>{c.time}</small>
              </strong>
              <span>{c.message}</span>
              <em>
                <span className="channel-dot" />
                {c.channel}
              </em>
            </span>
            <span
              className={`badge ${c.status === "Resolved" ? "green" : c.status === "Needs attention" ? "amber" : "lavender"}`}
            >
              {c.status === "AI handling" && <Sparkles size={10} />} {c.status}
            </span>
            <ChevronRight size={15} className="muted" />
          </button>
        ))
      ) : (
        <div className="empty">No conversations match your search.</div>
      )}
    </div>
  );
  const bookingsList = (
    <div className="booking-list">
      {bookings
        .filter((b) => b.status !== "Cancelled")
        .map((b, i) => (
          <div className="booking-row" key={b.id}>
            <div className={`booking-icon ${i % 2 ? "purple" : "pink"}`}>
              <CalendarDays size={17} />
            </div>
            <div>
              <strong>{b.name}</strong>
              <span>{b.service}</span>
            </div>
            <div className="booking-time">
              <strong>
                {new Date(`${b.date}T${b.time}`).toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "2-digit",
                })}
              </strong>
              <span>
                {b.date === "2026-10-22" ? "Today" : b.date}{" "}
                <b
                  className={
                    b.status === "Confirmed" ? "green-text" : "amber-text"
                  }
                >
                  • {b.status}
                </b>
              </span>
            </div>
            {page === "Bookings" && (
              <button
                className="icon-button"
                aria-label={`Cancel booking for ${b.name}`}
                onClick={() => {
                  setBookings(
                    bookings.map((x) =>
                      x.id === b.id ? { ...x, status: "Cancelled" } : x,
                    ),
                  );
                  notify("Booking cancelled");
                }}
              >
                <X size={15} />
              </button>
            )}
          </div>
        ))}
    </div>
  );
  return (
    <div className="app">
      <aside className="sidebar">
        <a
          className="brand"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate("Overview");
          }}
        >
          <span className="brand-mark">
            <Command size={22} />
          </span>
          agent<span className="brand-light">chatbot</span>
          <span className="brand-dot">✦</span>
        </a>
        <button className="workspace" onClick={() => navigate("Settings")}>
          <span className="workspace-icon">✿</span>
          <span>
            <strong>{workspace}</strong>
            <small>
              Pro workspace <span>PRO</span>
            </small>
          </span>
          <ChevronDown size={14} />
        </button>
        <div className="nav-label">WORKSPACE</div>
        <nav>
          {nav.map((n) => (
            <button
              className={page === n.name ? "active" : ""}
              aria-label={n.name}
              aria-current={page === n.name ? "page" : undefined}
              key={n.name}
              onClick={() => navigate(n.name)}
            >
              <n.icon size={18} />
              <span>{n.name}</span>
              {n.count && <small>{n.count}</small>}
              {n.name === "AI Agents" && <i className="live-dot" />}
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="usage-card">
            <div>
              <Sparkles size={14} />
              <strong>A little AI. A lot of possibility.</strong>
            </div>
            <p>
              You’ve used 1,484 of 5,000
              <br />
              conversations this month.
            </p>
            <div className="usage-track">
              <i />
            </div>
            <button
              onClick={() => {
                navigate("Analytics");
                notify("Your Pro workspace has 3,516 conversations remaining");
              }}
            >
              View usage <ArrowUpRight size={13} />
            </button>
          </div>
          <button
            className={`bottom-nav ${page === "Settings" ? "active" : ""}`}
            onClick={() => navigate("Settings")}
          >
            <Settings2 size={17} />
            Settings
          </button>
          <button className="bottom-nav" onClick={() => setModal("help")}>
            <CircleHelp size={17} />
            Help & getting started
            <ArrowUpRight size={13} />
          </button>
          <div className="profile">
            <span className="avatar profile-avatar">UK</span>
            <span>
              <strong>Umair Khan</strong>
              <small>Workspace admin</small>
            </span>
            <button
              className="icon-button"
              aria-label="Profile settings"
              onClick={() => navigate("Settings")}
            >
              <Ellipsis size={19} />
            </button>
          </div>
        </div>
      </aside>
      <div className="main-shell">
        <header>
          <div className="breadcrumb">
            Workspace <ChevronRight size={13} />
            <span>{page}</span>
          </div>
          <div className="header-right">
            <span className="system-status">
              <i />
              All systems operational
            </span>
            <span className="header-divider" />
            <button
              className="icon-button notification-button"
              aria-label="Notifications"
              onClick={() => setModal("notifications")}
            >
              <Bell size={18} />
              <i />
            </button>
            <span className="avatar mini">UK</span>
          </div>
        </header>
        <main>
          <div className="page-title">
            <div>
              <div className="eyebrow">
                <span /> YOUR WORKSPACE, IN HARMONY
              </div>
              <h1>
                {page === "Overview" ? "Your day, a little lighter." : page}
                <span className="title-symbol">
                  {page === "Overview" ? "☾" : "✧"}
                </span>
              </h1>
              <p>
                {page === "Overview"
                  ? "A thoughtful space for your team, your customers, and you."
                  : page === "Conversations"
                    ? "Every conversation, thoughtfully taken care of."
                    : page === "AI Agents"
                      ? "Your always-on team, with a human touch."
                      : page === "Bookings"
                        ? "Make room for your next great conversation."
                        : page === "Knowledge base"
                          ? "Give your agents the knowledge to be helpful."
                          : page === "Settings"
                            ? "Make this space your own."
                            : "A thoughtful view of your growing business."}
              </p>
            </div>
            <div className="page-actions">
              <span className="date-label">Thursday, October 22</span>
              <button className="primary" onClick={() => setModal("agent")}>
                <Plus size={16} /> Create agent
              </button>
            </div>
          </div>
          {page === "Overview" && (
            <>
              <section className="hero" aria-label="A little more human">
                <div className="hero-copy">
                  <span className="hero-label">
                    <span className="hero-line" /> INTELLIGENCE, WITH A SOFTER
                    SIDE
                  </span>
                  <h2>
                    A little less busy.
                    <br />A little more <em>human.</em>
                  </h2>
                  <p>
                    Let your AI team tend to the everyday.
                    <br />
                    Make space for the moments that matter.
                  </p>
                  <button onClick={() => navigate("AI Agents")}>
                    Meet your AI team{" "}
                    <span>
                      <ArrowUpRight size={16} />
                    </span>
                  </button>
                  <div className="hero-edition">
                    <span>01 — THE ART OF DOING LESS</span>
                    <span>暮らしに、余白を。</span>
                  </div>
                </div>
                <div className="hero-art" aria-hidden="true">
                  <div className="art-halo" />
                  <div className="orbit orbit-one" />
                  <div className="orbit orbit-two" />
                  <div className="moon">
                    <div className="moon-crater" />
                    <span className="moon-glint" />
                  </div>
                  <Blossom className="sakura" />
                  <span className="star star-one">✧</span>
                  <span className="star star-two">✦</span>
                  <span className="floating-petal petal-one" />
                  <span className="floating-petal petal-two" />
                  <span className="floating-petal petal-three" />
                  <div className="glass-note">
                    <span className="note-icon">
                      <Sparkles size={16} />
                    </span>
                    <div>
                      <strong>In good hands.</strong>
                      <small>
                        {agents.filter((a) => a.active).length} agents, quietly
                        taking care.
                      </small>
                    </div>
                    <span className="live-dot" />
                  </div>
                  <span className="art-caption">
                    A LITTLE MOONLIGHT. A LITTLE POSSIBILITY.
                  </span>
                </div>
              </section>
              <div className="section-bar">
                <h3>
                  A look at your day <span>Peace of mind, by the numbers.</span>
                </h3>
                <label className="period">
                  <CalendarDays size={13} />
                  <select
                    aria-label="Analytics date range"
                    value={period}
                    onChange={(e) => setPeriod(e.target.value)}
                  >
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Today</option>
                  </select>
                </label>
              </div>
              <div className="stats-grid">
                {[
                  {
                    label: "Total conversations",
                    value:
                      period === "Today"
                        ? "218"
                        : period === "Last 30 days"
                          ? "6,328"
                          : "1,484",
                    growth: "18.6",
                    icon: MessagesSquare,
                    color: "pink",
                    points:
                      "0,35 15,30 25,34 40,20 52,24 65,10 78,17 90,6 105,12 120,0",
                  },
                  {
                    label: "AI resolution rate",
                    value: "94.2%",
                    growth: "6.4",
                    icon: Sparkles,
                    color: "purple",
                    points:
                      "0,32 17,34 30,20 43,25 58,14 70,16 84,6 100,12 120,0",
                  },
                  {
                    label: "Bookings made",
                    value: String(
                      (period === "Today" ? 3 : 128) + bookings.length - 3,
                    ),
                    growth: "24.8",
                    icon: CalendarDays,
                    color: "blue",
                    points:
                      "0,34 16,28 30,31 45,19 60,27 75,12 90,16 106,2 120,5",
                  },
                  {
                    label: "Avg. response time",
                    value: "1.2s",
                    growth: "32.1",
                    icon: Zap,
                    color: "orange",
                    points:
                      "0,4 15,12 30,6 45,20 60,17 75,30 90,24 106,38 120,35",
                  },
                ].map((s) => (
                  <article className="stat-card" key={s.label}>
                    <div className="stat-label">
                      {s.label}
                      <span className={`stat-icon ${s.color}`}>
                        <s.icon size={15} />
                      </span>
                    </div>
                    <div className="stat-main">
                      <strong>{s.value}</strong>
                      <svg viewBox="0 0 120 44" aria-hidden="true">
                        <polyline
                          points={s.points}
                          fill="none"
                          stroke={
                            s.color === "pink"
                              ? "#c9809e"
                              : s.color === "purple"
                                ? "#a29ac6"
                                : s.color === "blue"
                                  ? "#8dabc1"
                                  : "#b6a181"
                          }
                          strokeWidth="1.7"
                        />
                      </svg>
                    </div>
                    <div className="stat-footer">
                      <span>
                        <ArrowUpRight size={12} />
                        {s.growth}%
                      </span>{" "}
                      vs. previous period
                    </div>
                  </article>
                ))}
              </div>
              <div className="content-grid">
                <section className="panel conversations-panel">
                  <div className="panel-heading">
                    <h3>
                      Recent conversations <span className="count">4</span>
                    </h3>
                    <button
                      className="text-button"
                      onClick={() => navigate("Conversations")}
                    >
                      View all <ArrowUpRight size={14} />
                    </button>
                  </div>
                  {conversationList}
                  <div className="panel-footer">
                    <span className="live-dot" /> Your agents are making every
                    conversation count.
                    <Sparkles size={13} />
                  </div>
                </section>
                <section className="panel">
                  <div className="panel-heading">
                    <h3>Upcoming bookings</h3>
                    <button
                      className="icon-button"
                      aria-label="View bookings"
                      onClick={() => navigate("Bookings")}
                    >
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                  <div className="booking-date">
                    <span>THU</span>
                    <strong>22</strong>
                    <div>
                      October 2026
                      <small>
                        {
                          bookings.filter((b) => b.status !== "Cancelled")
                            .length
                        }{" "}
                        appointments scheduled
                      </small>
                    </div>
                    <button
                      className="icon-button"
                      aria-label="Create booking"
                      onClick={() => setModal("booking")}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  {bookingsList}
                  <button
                    className="calendar-link"
                    onClick={() => navigate("Bookings")}
                  >
                    Open calendar <ArrowRight size={14} />
                  </button>
                </section>
              </div>
              <section className="panel agents-panel">
                <div className="panel-heading">
                  <h3>
                    Your AI team{" "}
                    <span className="subheading">
                      A small team. A big difference.
                    </span>
                  </h3>
                  <button
                    className="text-button"
                    onClick={() => navigate("AI Agents")}
                  >
                    Manage agents <ArrowUpRight size={14} />
                  </button>
                </div>
                <div className="agent-grid">
                  {agents.slice(0, 3).map((a) => (
                    <button
                      className="agent-summary"
                      key={a.name}
                      onClick={() => navigate("AI Agents")}
                    >
                      <span className={`agent-avatar ${a.color}`}>
                        {a.name === "Sakura" ? (
                          <span>✿</span>
                        ) : a.name === "Luna" ? (
                          <Moon size={22} />
                        ) : (
                          <Command size={22} />
                        )}
                      </span>
                      <span>
                        <strong>
                          {a.name}
                          <span className="agent-status">
                            <i className={a.active ? "live-dot" : "off-dot"} />
                            {a.active ? "Online" : "Paused"}
                          </span>
                        </strong>
                        <small>{a.role}</small>
                        <em>{a.resolved} conversations resolved</em>
                      </span>
                      <ChevronRight size={14} />
                    </button>
                  ))}
                </div>
              </section>
            </>
          )}
          {page === "Conversations" && (
            <section className="panel full-panel">
              <div className="list-toolbar">
                <label className="search-box">
                  <Search size={16} />
                  <input
                    placeholder="Search conversations…"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </label>
                <select
                  aria-label="Filter conversation status"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  {["All", "AI handling", "Needs attention", "Resolved"].map(
                    (x) => (
                      <option key={x}>{x}</option>
                    ),
                  )}
                </select>
              </div>
              {conversationList}
            </section>
          )}
          {page === "Bookings" && (
            <section className="panel full-panel">
              <div className="panel-heading">
                <h3>
                  Your schedule{" "}
                  <span className="count">
                    {bookings.filter((b) => b.status !== "Cancelled").length}
                  </span>
                </h3>
                <button className="primary" onClick={() => setModal("booking")}>
                  <Plus size={15} />
                  New booking
                </button>
              </div>
              {bookingsList}
              {!bookings.filter((b) => b.status !== "Cancelled").length && (
                <div className="empty">
                  Your calendar is clear. Create a booking to get started.
                </div>
              )}
            </section>
          )}
          {page === "AI Agents" && (
            <div className="agent-detail-grid">
              {agents.map((a, i) => (
                <section className="panel agent-detail" key={a.name}>
                  <span className={`agent-avatar ${a.color}`}>
                    <Bot size={25} />
                  </span>
                  <span className="badge lavender">
                    {a.active ? "Active" : "Paused"}
                  </span>
                  <h2>{a.name}</h2>
                  <p>{a.role}</p>
                  <div className="agent-description">
                    {i === 0
                      ? "Answers common questions and helps your customers feel heard."
                      : i === 1
                        ? "Finds the right time and keeps every appointment organized."
                        : "Turns curious visitors into your next happy customers."}
                  </div>
                  <div className="agent-metric">
                    <strong>{a.resolved}</strong> conversations resolved
                  </div>
                  <button
                    className={a.active ? "secondary" : "primary"}
                    onClick={() => {
                      setAgents(
                        agents.map((x, j) =>
                          j === i ? { ...x, active: !x.active } : x,
                        ),
                      );
                      notify(`${a.name} ${a.active ? "paused" : "activated"}`);
                    }}
                  >
                    {a.active ? "Pause agent" : "Activate agent"}
                  </button>
                </section>
              ))}
            </div>
          )}
          {page === "Customers" && (
            <section className="panel">
              <div className="panel-heading">
                <h3>Your people</h3>
                <span className="muted">4 customers</span>
              </div>
              {conversations.map((c) => (
                <button
                  className="customer-row"
                  key={c.id}
                  onClick={() => setSelected(c.id)}
                >
                  <span className={`avatar ${c.color}`}>{c.initials}</span>
                  <strong>{c.name}</strong>
                  <span>{c.channel}</span>
                  <span className="badge lavender">
                    View conversation <ArrowUpRight size={12} />
                  </span>
                </button>
              ))}
            </section>
          )}
          {page === "Knowledge base" && <Knowledge notify={notify} />}
          {page === "Analytics" && (
            <section className="panel analytics">
              <div className="panel-heading">
                <h3>Conversations over time</h3>
                <span className="badge green">↑ 18.6% this week</span>
              </div>
              <div className="bar-chart">
                {[48, 62, 51, 76, 65, 86, 96].map((v, i) => (
                  <div key={i}>
                    <span>{[132, 176, 148, 218, 186, 276, 348][i]}</span>
                    <i style={{ height: v + "%" }} />
                    <small>
                      {["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"][i]}
                    </small>
                  </div>
                ))}
              </div>
              <div className="analytics-total">
                <strong>1,484</strong>
                <span>conversations this week</span>
                <strong>94.2%</strong>
                <span>resolved by your AI team</span>
              </div>
            </section>
          )}
          {page === "Settings" && (
            <section className="panel settings-panel">
              <h3>Workspace details</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  notify("Workspace settings saved");
                }}
              >
                <label>
                  Workspace name
                  <input
                    required
                    value={workspace}
                    onChange={(e) => setWorkspace(e.target.value)}
                  />
                </label>
                <label>
                  Workspace timezone
                  <select
                    value={timezone}
                    onChange={(e) => setTimezone(e.target.value)}
                  >
                    <option>Asia/Kolkata</option>
                    <option>Europe/London</option>
                    <option>America/New_York</option>
                    <option>UTC</option>
                  </select>
                </label>
                <button className="primary">
                  Save changes <Check size={15} />
                </button>
              </form>
              <p className="muted">
                Interactive demo · Changes are saved in this browser.
              </p>
            </section>
          )}
          <footer>
            <span>
              <span className="footer-flower">✿</span> Thoughtfully automated.
              Beautifully human.
            </span>
            <span>
              <span className="live-dot" />
              Demo workspace <span className="footer-separator">·</span> Made
              for meaningful connections
            </span>
          </footer>
        </main>
      </div>
      {selectedConversation && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <section
            role="dialog"
            aria-modal="true"
            aria-label={`Conversation with ${selectedConversation.name}`}
            className="modal chat-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-heading">
              <span className={`avatar ${selectedConversation.color}`}>
                {selectedConversation.initials}
              </span>
              <div>
                <h3>{selectedConversation.name}</h3>
                <span>{selectedConversation.channel} · Demo conversation</span>
              </div>
              <button
                className="icon-button"
                aria-label="Close conversation"
                onClick={() => setSelected(null)}
              >
                <X size={19} />
              </button>
            </div>
            <div className="messages">
              {selectedConversation.messages.map((m, i) => (
                <div className={`message ${m.own ? "own" : ""}`} key={i}>
                  {m.own && (
                    <small>
                      <Sparkles size={11} /> Sakura · Your team
                    </small>
                  )}
                  {m.text}
                </div>
              ))}
            </div>
            <button
              className="resolve-button"
              onClick={() => {
                setConversations(
                  conversations.map((c) =>
                    c.id === selected
                      ? {
                          ...c,
                          status:
                            c.status === "Resolved"
                              ? "Needs attention"
                              : "Resolved",
                        }
                      : c,
                  ),
                );
                notify(
                  selectedConversation.status === "Resolved"
                    ? "Conversation reopened"
                    : "Conversation resolved",
                );
              }}
            >
              <CheckCheck size={15} />
              {selectedConversation.status === "Resolved"
                ? "Reopen conversation"
                : "Mark as resolved"}
            </button>
            <form className="reply-form" onSubmit={sendReply}>
              <input
                autoFocus
                aria-label="Reply"
                placeholder="Write a thoughtful reply…"
                value={reply}
                onChange={(e) => setReply(e.target.value)}
              />
              <button
                className="primary"
                aria-label="Send reply"
                disabled={!reply.trim()}
              >
                <Send size={17} />
              </button>
            </form>
          </section>
        </div>
      )}
      {modal && (
        <div className="modal-overlay" onClick={() => setModal(null)}>
          <section
            role="dialog"
            aria-modal="true"
            aria-label={
              modal === "agent"
                ? "Create agent"
                : modal === "booking"
                  ? "Create booking"
                  : modal === "notifications"
                    ? "Notifications"
                    : "Help"
            }
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-heading">
              <h2>
                {modal === "agent"
                  ? "Meet your next teammate"
                  : modal === "booking"
                    ? "Make a new booking"
                    : modal === "notifications"
                      ? "You’re all caught up"
                      : "A calmer way to work"}
              </h2>
              <button
                className="icon-button"
                aria-label="Close modal"
                onClick={() => setModal(null)}
              >
                <X size={20} />
              </button>
            </div>
            {modal === "agent" && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const f = new FormData(e.currentTarget);
                  const name = String(f.get("name")).trim();
                  if (
                    !name ||
                    agents.some(
                      (a) => a.name.toLowerCase() === name.toLowerCase(),
                    )
                  ) {
                    notify("Please choose a unique agent name");
                    return;
                  }
                  setAgents([
                    ...agents,
                    {
                      name,
                      role: String(f.get("role")),
                      active: true,
                      resolved: 0,
                      color: "purple",
                    },
                  ]);
                  setModal(null);
                  navigate("AI Agents");
                  notify(`${name} has joined your team`);
                }}
              >
                <p>Give your agent a name and a purpose.</p>
                <label>
                  Agent name
                  <input
                    autoFocus
                    name="name"
                    placeholder="e.g. Hana"
                    required
                    maxLength={30}
                  />
                </label>
                <label>
                  Specialty
                  <select name="role">
                    <option>Customer support</option>
                    <option>Bookings & scheduling</option>
                    <option>Sales & inquiries</option>
                  </select>
                </label>
                <p className="form-note">
                  Demo agents help you explore the workspace. Live AI and
                  messaging channels are not connected.
                </p>
                <button className="primary">
                  Create agent <Sparkles size={15} />
                </button>
              </form>
            )}
            {modal === "booking" && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const f = new FormData(e.currentTarget);
                  const name = String(f.get("name")).trim();
                  if (!name) return;
                  setBookings([
                    ...bookings,
                    {
                      id: Date.now(),
                      name,
                      initials: name
                        .split(" ")
                        .map((x) => x[0])
                        .join("")
                        .slice(0, 2),
                      service: String(f.get("service")),
                      date: String(f.get("date")),
                      time: String(f.get("time")),
                      status: "Confirmed",
                    },
                  ]);
                  setModal(null);
                  notify("Booking created successfully");
                }}
              >
                <label>
                  Customer name
                  <input
                    autoFocus
                    name="name"
                    placeholder="Full name"
                    required
                  />
                </label>
                <label>
                  Service
                  <select name="service">
                    <option>Discovery call</option>
                    <option>Product consultation</option>
                    <option>Onboarding session</option>
                  </select>
                </label>
                <div className="form-grid">
                  <label>
                    Date
                    <input
                      name="date"
                      type="date"
                      defaultValue="2026-10-22"
                      required
                    />
                  </label>
                  <label>
                    Time
                    <input
                      name="time"
                      type="time"
                      defaultValue="10:00"
                      required
                    />
                  </label>
                </div>
                <button className="primary">
                  Confirm booking <Check size={15} />
                </button>
              </form>
            )}
            {modal === "notifications" && (
              <div className="notification-content">
                <span className="agent-avatar pink">
                  <CheckCheck size={25} />
                </span>
                <h3>Everything is in a good place.</h3>
                <p>
                  Your AI team has handled 94.2% of conversations this week. You
                  have{" "}
                  {
                    conversations.filter((c) => c.status === "Needs attention")
                      .length
                  }{" "}
                  conversation needing attention.
                </p>
                <button
                  className="secondary"
                  onClick={() => {
                    setModal(null);
                    navigate("Conversations");
                    setFilter("Needs attention");
                  }}
                >
                  Review conversations <ArrowRight size={15} />
                </button>
              </div>
            )}
            {modal === "help" && (
              <div className="help-content">
                <p>Welcome to your interactive Agent Chatbot demo.</p>
                <p>
                  <b>1. Meet your team</b>
                  <br />
                  Create agents and explore their specialties.
                </p>
                <p>
                  <b>2. Join a conversation</b>
                  <br />
                  Open a customer thread, send a reply, or resolve it.
                </p>
                <p>
                  <b>3. Keep your calendar blooming</b>
                  <br />
                  Create and manage customer bookings.
                </p>
                <div className="form-note">
                  This workspace uses sample data and browser storage. Live AI,
                  external channels, and calendar sync are not connected.
                </div>
              </div>
            )}
          </section>
        </div>
      )}
      {toast && (
        <div className="toast" role="status">
          <Check size={16} />
          {toast}
        </div>
      )}
    </div>
  );
}
function Knowledge({ notify }: { notify: (s: string) => void }) {
  const [docs, setDocs] = useSaved("ac-v1-docs", [
    {
      title: "Business hours & contact",
      content: "Monday–Friday: 9 AM–6 PM. Saturday: 10 AM–4 PM.",
    },
    {
      title: "Services & appointments",
      content:
        "Discovery calls, product consultations, and onboarding sessions.",
    },
    {
      title: "Rescheduling policy",
      content:
        "Customers can reschedule up to 24 hours before their appointment.",
    },
  ]);
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="panel knowledge">
      <div className="panel-heading">
        <h3>Your agent’s library</h3>
        <span className="badge lavender">{docs.length} sources</span>
      </div>
      {docs.map((d, i) => (
        <div className="knowledge-item" key={i}>
          <button onClick={() => setOpen(open === i ? null : i)}>
            <BookOpen size={18} />
            <strong>{d.title}</strong>
            <ChevronDown size={15} />
          </button>
          {open === i && (
            <textarea
              aria-label={d.title}
              value={d.content}
              onChange={(e) =>
                setDocs(
                  docs.map((x, j) =>
                    i === j ? { ...x, content: e.target.value } : x,
                  ),
                )
              }
            />
          )}
        </div>
      ))}
      <button
        className="secondary"
        onClick={() => {
          setDocs([
            ...docs,
            { title: `New knowledge source ${docs.length + 1}`, content: "" },
          ]);
          setOpen(docs.length);
          notify("Knowledge source added");
        }}
      >
        <Plus size={15} />
        Add knowledge source
      </button>
      <p className="form-note">
        Sources are saved locally for this demo. Connect a live agent to use
        them in automated responses.
      </p>
    </section>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
