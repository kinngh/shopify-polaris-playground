import { useEffect, useRef, useState } from "react";

const paths = {
  home: "m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm5 11v-7h8v7",
  orders: "M5 4h14l3 12v4H2v-4Zm-3 12h6l2 3h4l2-3h6",
  products: "M3 4h9l9 9-8 8-10-10Zm4 4h.01",
  customers: "M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 21v-3a8 8 0 0 1 16 0v3Z",
  growth: "M3 19a9 9 0 1 1 18 0M12 16l5-7M7 17v2m10-2v2",
  discounts:
    "m12 2 3 3 4 1 1 4 2 3-3 3-1 4-4 1-3 1-3-3-4-1-1-4-1-3 3-3 1-4 4-1Zm-4 14 8-8M8 8h.01M16 16h.01",
  content: "M3 3h18v15H3Zm0 20h18M3 14l5-5 5 5 4-4 4 4",
  markets:
    "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM3 12h18M12 3a18 18 0 0 1 0 18 18 18 0 0 1 0-18Z",
  finance: "m2 8 10-6 10 6ZM4 11v7m5-7v7m6-7v7m5-7v7M2 21h20",
  analytics: "M3 10h3v11H3Zm7-7h3v18h-3Zm7 4h3v14h-3Z",
  store:
    "M3 10v11h18V10M2 10l2-7h16l2 7M2 10q3 5 6 0 4 5 8 0 3 5 6 0M8 21v-7h8v7",
  apps: "M3 3h7v7H3Zm11 0h7v7h-7ZM3 14h7v7H3Zm11 0h7v7h-7Z",
  settings:
    "m9 3 .6-1h4.8l.6 1 .5 2 1.7 1 2-.5 1.2 2.1 1.2 2.1-1.5 1.5v2l1.5 1.5-2.4 4.2-2-.5-1.7 1-.5 2-.6 1H9.6L9 21l-.5-2-1.7-1-2 .5-2.4-4.2L4 12.8v-2L2.4 9.3l2.4-4.2 2 .5 1.7-1Zm6 9a3 3 0 1 0-6 0 3 3 0 0 0 6 0",
  search: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-2 5 6 6",
  sidebar: "M3 3h18v18H3Zm12 0v18",
  bell: "M5 9a7 7 0 0 1 14 0v6l2 3H3l2-3Zm4 12h6",
  chevron: "m9 6 6 6-6 6",
  pos: "M5 3h14l2 18H3ZM8 7V6a4 4 0 0 1 8 0v1m-2 5h-3a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3m2-8v10",
  agentic: "M8 3h8v5H8ZM3 16h7v5H3Zm11 0h7v5h-7ZM12 8v4m-6 4v-4h12v4",
  checkout: "m14 2-9 12h6l-1 8 9-12h-6Z",
};

function Icon({ name, ...props }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d={paths[name] || paths.apps} />
    </svg>
  );
}

const navigation = [
  {
    items: [
      ["Home", "home"],
      ["Orders", "orders", "24"],
      ["Products", "products"],
      ["Customers", "customers"],
      ["Growth", "growth"],
      ["Discounts", "discounts"],
      ["Content", "content"],
      ["Markets", "markets"],
      ["Finance", "finance"],
      ["Analytics", "analytics"],
    ],
  },
  {
    title: "Sales channels",
    items: [
      ["Online Store", "store"],
      ["Point of Sale", "pos"],
      ["Agentic", "agentic"],
      ["Checkout Links", "checkout"],
    ],
  },
  { title: "Apps", items: [["Playground", "apps"]] },
];

export default function AdminShell({ children }) {
  const [active, setActive] = useState("Playground");
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [query, setQuery] = useState("");
  const [popover, setPopover] = useState(null);
  const searchRef = useRef(null);
  const popoverRef = useRef(null);
  const toggleRef = useRef(null);
  const mainRef = useRef(null);
  useEffect(() => {
    const media = window.matchMedia("(max-width: 640px)");
    const updateLayout = () => {
      setIsMobile(media.matches);
      setCollapsed(media.matches);
    };
    updateLayout();
    media.addEventListener("change", updateLayout);
    return () => media.removeEventListener("change", updateLayout);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.defaultPrevented) return;
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCollapsed(false);
        requestAnimationFrame(() => searchRef.current?.focus());
      }
      if (event.key === "Escape" && event.target.closest?.(".admin-sidebar")) {
        setPopover(null);
        setQuery("");
        if (isMobile) {
          setCollapsed(true);
          toggleRef.current?.focus();
        }
      }
    };
    const onPointerDown = (event) => {
      if (!popoverRef.current?.contains(event.target)) setPopover(null);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isMobile]);

  // Navigation is a visual preview; keep the user's page mounted while selecting items.
  const select = (label) => {
    setActive(label);
    setQuery("");
    setPopover(null);
    if (isMobile) {
      setCollapsed(true);
      requestAnimationFrame(() => mainRef.current?.focus());
    }
  };
  const matches = navigation
    .flatMap((group) => group.items)
    .filter(([label]) => label.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className={`admin-shell${collapsed ? " is-collapsed" : ""}`}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      {isMobile && !collapsed && (
        <button
          className="sidebar-backdrop"
          aria-label="Close navigation"
          onClick={() => {
            setCollapsed(true);
            toggleRef.current?.focus();
          }}
        />
      )}
      <aside className="admin-sidebar" aria-label="Admin sidebar">
        <div className="sidebar-brand">
          <button
            className="brand-link"
            aria-label="Open playground"
            onClick={() => select("Playground")}
          >
            <img
              src="/shopify-glyph.svg"
              alt="Shopify"
              width="24"
              height="28"
            />
          </button>
          <button
            ref={toggleRef}
            className="icon-button sidebar-toggle"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            aria-controls="sidebar-body"
            aria-expanded={!collapsed}
            onClick={() => {
              setCollapsed(!collapsed);
              setPopover(null);
            }}
          >
            <Icon name="sidebar" />
          </button>
        </div>
        <div id="sidebar-body" className="sidebar-body">
          <div className="sidebar-search">
            <Icon name="search" />
            <input
              ref={searchRef}
              aria-label="Search navigation"
              placeholder="Search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <kbd>⌘K</kbd>
          </div>
          <nav aria-label="Main navigation">
            {(query
              ? [{ title: "Search results", items: matches }]
              : navigation
            ).map((group, index) => (
              <div className="nav-group" key={group.title || index}>
                {group.title && (
                  <div className="nav-group-title">
                    {group.title}
                    {!query && <Icon name="chevron" width="12" height="12" />}
                  </div>
                )}
                {group.items.map(([label, icon, badge]) => (
                  <button
                    key={label}
                    className={`nav-item${active === label ? " is-active" : ""}`}
                    aria-current={active === label ? "page" : undefined}
                    onClick={() => select(label)}
                  >
                    <Icon name={icon} />
                    <span>{label}</span>
                    {badge && <span className="nav-badge">{badge}</span>}
                  </button>
                ))}
                {query && !matches.length && (
                  <p className="search-empty" role="status">
                    No matching pages
                  </p>
                )}
              </div>
            ))}
          </nav>
          <div className="sidebar-footer" ref={popoverRef}>
            <button
              className={`nav-item${active === "Settings" ? " is-active" : ""}`}
              onClick={() => select("Settings")}
              aria-current={active === "Settings" ? "page" : undefined}
            >
              <Icon name="settings" />
              <span>Settings</span>
            </button>
            <div className="store-row">
              <button
                className="store-switcher"
                onClick={() => setPopover(popover === "store" ? null : "store")}
                aria-expanded={popover === "store"}
              >
                <span className="store-avatar">PS</span>
                <span className="store-name">Playground Store</span>
                <span className="dev-badge">dev</span>
              </button>
              <button
                className="icon-button"
                aria-label="Notifications"
                aria-expanded={popover === "notifications"}
                onClick={() =>
                  setPopover(
                    popover === "notifications" ? null : "notifications"
                  )
                }
              >
                <Icon name="bell" />
              </button>
            </div>
            {popover && (
              <div className="sidebar-popover">
                <strong>
                  {popover === "store" ? "Playground Store" : "Notifications"}
                </strong>
                <p>
                  {popover === "store"
                    ? "Your local UI development workspace."
                    : "You’re all caught up."}
                </p>
              </div>
            )}
          </div>
        </div>
      </aside>
      <main
        ref={mainRef}
        id="main-content"
        className="admin-workspace"
        tabIndex="-1"
        inert={isMobile && !collapsed}
      >
        {children}
      </main>
    </div>
  );
}
