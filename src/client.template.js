window.__ModuleLoader__.load({
  id: "dsh-theme-ganyu",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

    const React = require("react");
    const ReactDOM = require("react-dom/client");
    const PLUGIN_ID = "dsh-theme-ganyu";
    const IMAGE = "data:image/webp;base64,__GANYU_IMAGE_BASE64__";
    // Civilization emblem from the Ganyu civ6 mod: a silver ring around a lotus.
    const CIV_ICON = "data:image/png;base64,__CIV_ICON_40__";
    // The lotus from that same emblem, cut out for the selected nav row.
    const LOTUS = "data:image/png;base64,__LOTUS_64__";

    // Frost-blue alias layer for the light palette. The registered theme resolves
    // to `light`, so the dark column only exists to satisfy snapshot stability.
    const TOKENS = {
      "--dsw-alias-bg-base": "rgba(226, 245, 255, 0.34)",
      "--dsw-alias-bg-document-preview": "rgba(234, 248, 255, 0.72)",
      "--dsw-alias-bg-document-selection": "rgba(97, 181, 238, 0.32)",
      "--dsw-alias-label-document-preview": "#285b7d",
      "--dsw-alias-bg-layer-1": "rgba(255, 255, 255, 0.66)",
      "--dsw-alias-bg-layer-2": "rgba(247, 253, 255, 0.70)",
      "--dsw-alias-bg-layer-3": "rgba(255, 255, 255, 0.78)",
      "--dsw-alias-bg-mask-1": "rgba(13, 45, 68, 0.30)",
      "--dsw-alias-bg-mask-2": "rgba(13, 45, 68, 0.16)",
      "--dsw-alias-bg-mask-3": "rgba(8, 33, 52, 0.52)",
      "--dsw-alias-bg-mask-photo": "rgba(8, 33, 52, 0.86)",
      "--dsw-alias-bg-mask-drop": "rgba(247, 252, 255, 0.72)",
      "--dsw-alias-bg-module-platform": "rgba(215, 240, 255, 0.62)",
      "--dsw-alias-bg-multi-select": "rgba(207, 236, 255, 0.64)",
      "--dsw-alias-bg-overlay": "rgba(246, 252, 255, 0.88)",
      "--dsw-alias-bg-skeleton": "rgba(81, 143, 184, 0.10)",
      "--dsw-alias-border-inverted": "rgba(255, 255, 255, 0.18)",
      "--dsw-alias-border-inverted2": "rgba(255, 255, 255, 0.26)",
      "--dsw-alias-border-l1": "rgba(68, 132, 176, 0.13)",
      "--dsw-alias-border-l2": "rgba(68, 132, 176, 0.19)",
      "--dsw-alias-border-l2-darkmode-thin": "rgba(68, 132, 176, 0.19)",
      "--dsw-alias-border-l3": "rgba(68, 132, 176, 0.25)",
      "--dsw-alias-border-l4": "rgba(68, 132, 176, 0.32)",
      "--dsw-alias-brand-primary": "#3f86c4",
      "--dsw-alias-brand-primary-invert": "#ffffff",
      "--dsw-alias-brand-primary-new-colorprimary-new-color": "#4b98d6",
      "--dsw-alias-brand-text": "#2b6087",
      "--dsw-alias-button-contrast-fill": "#2b6087",
      "--dsw-alias-button-elevated-fill": "rgba(255, 255, 255, 0.82)",
      "--dsw-alias-button-floating-fill": "rgba(255, 255, 255, 0.88)",
      "--dsw-alias-button-floating-hover": "rgba(222, 242, 255, 0.94)",
      "--dsw-alias-button-ghost-active-border": "rgba(88, 157, 203, 0.46)",
      "--dsw-alias-button-ghost-active-fill": "rgba(190, 227, 250, 0.48)",
      "--dsw-alias-button-ghost-active-hover": "rgba(176, 219, 247, 0.58)",
      "--dsw-alias-button-info-fill": "#4b98d6",
      "--dsw-alias-button-info-hover": "#63a9e1",
      "--dsw-alias-button-primary-dimmed": "rgba(177, 219, 247, 0.58)",
      "--dsw-alias-button-primary-fill": "#3f86c4",
      "--dsw-alias-button-primary-hover": "#2f74ae",
      "--dsw-alias-button-tool-bar-fill": "rgba(43, 96, 135, 0.66)",
      "--dsw-alias-button-tool-bar-fill-invisible": "rgba(34, 75, 106, 0.42)",
      "--dsw-alias-button-tool-bar-hover": "rgba(34, 84, 122, 0.76)",
      "--dsw-alias-interactive-bg-active": "rgba(74, 141, 187, 0.18)",
      "--dsw-alias-interactive-bg-hover": "rgba(88, 159, 207, 0.12)",
      "--dsw-alias-interactive-bg-hover-accent": "rgba(88, 159, 207, 0.18)",
      "--dsw-alias-interactive-bg-hover-danger": "rgba(214, 76, 90, 0.08)",
      "--dsw-alias-interactive-bg-hover-solid": "rgba(206, 236, 255, 0.60)",
      "--dsw-alias-label-caption": "#7d9fb4",
      "--dsw-alias-label-deep-diving": "#2d77b6",
      "--dsw-alias-label-deep-diving-shimmer": "#8fcdf4",
      "--dsw-alias-label-dimmed": "rgba(20, 58, 86, 0.28)",
      "--dsw-alias-label-primary": "#143a56",
      "--dsw-alias-label-primary-bluish": "#1d5d8f",
      "--dsw-alias-label-primary-dimmed": "#2b5270",
      "--dsw-alias-label-primary-foreground": "#ffffff",
      "--dsw-alias-label-primary-inverted": "#ffffff",
      "--dsw-alias-label-secondary": "#446b86",
      "--dsw-alias-label-shimmer": "rgba(255, 255, 255, 0.55)",
      "--dsw-alias-label-tertiary": "#66899f",
      "--dsw-alias-link": "#2f7fbe",
      "--dsw-alias-markdown-citation": "rgba(210, 238, 255, 0.72)",
      "--dsw-alias-markdown-code-block": "rgba(241, 250, 255, 0.80)",
      "--dsw-alias-markdown-code-block-banner": "rgba(230, 246, 255, 0.86)",
      "--dsw-alias-markdown-code-segment-selected": "rgba(255, 255, 255, 0.92)",
      "--dsw-alias-markdown-code-segment-unselected": "rgba(224, 243, 255, 0.72)",
      "--dsw-alias-markdown-inline-code": "rgba(219, 241, 255, 0.78)",
      "--dsw-alias-markdown-placeholder": "rgba(199, 232, 252, 0.78)",
      "--dsw-alias-markdown-tag": "rgba(207, 237, 255, 0.76)",
      "--dsw-alias-menu-group-header-fill": "rgba(241, 251, 255, 0.94)",
      "--dsw-alias-menu-icon": "#3c6885",
      "--dsw-alias-scrollbar-bg-l1": "#b9dcf0",
      "--dsw-alias-scrollbar-bg-l2": "#a7d2ea",
      "--dsw-alias-scrollbar-hover-l1": "#93c8e7",
      "--dsw-alias-scrollbar-hover-l2": "#83bedf",
      "--dsw-alias-settings-card-fill": "rgba(252, 255, 255, 0.64)",
      "--dsw-alias-settings-card-stroke": "rgba(68, 132, 176, 0.28)",
      "--dsw-alias-state-business-primary": "#4a95d2",
      "--dsw-alias-state-business-tertiary": "rgba(191, 228, 252, 0.62)",
      "--dsw-alias-state-error-primary": "#d45161",
      "--dsw-alias-state-error-secondary": "#e47a86",
      "--dsw-alias-state-idle-primary": "#b9d7e8",
      "--dsw-alias-state-success-primary": "#2fa876",
      "--dsw-alias-state-success-secondary": "#5dca9a",
      "--dsw-alias-state-success-tertiary": "rgba(196, 242, 225, 0.65)",
      "--dsw-alias-state-warn-label": "#b07824",
      "--dsw-alias-state-warn-primary": "#e1a23c",
      "--dsw-alias-state-warn-secondary": "#edbd6a",
      "--dsw-alias-state-warn-tertiary": "rgba(255, 238, 203, 0.72)",
      "--dsw-alias-switch-thumb": "#ffffff",
      "--dsw-alias-toast-bg": "rgba(31, 76, 107, 0.94)",
      "--dsw-alias-toast-label": "#ffffff",
      "--dsw-alias-tooltip-bg": "rgba(27, 67, 96, 0.94)",
      "--dsw-alias-tooltip-key-bg": "rgba(255, 255, 255, 0.20)",
      "--dsw-alias-turn-trigger-bg": "rgba(237, 249, 255, 0.71)",
      "--dsw-alias-turn-trigger-bg-hover": "rgba(219, 241, 255, 0.82)",
      "--dsw-menu-surface-fill": "rgba(246, 252, 255, 0.84)",
      "--dsw-specific-bubble": "rgba(197, 231, 253, 0.76)",
      "--dsw-specific-bubble-highlight": "rgba(167, 216, 249, 0.58)",
      "--dsw-specific-input-major": "rgba(252, 255, 255, 0.76)",
      "--dsw-specific-login-input": "rgba(255, 255, 255, 0.72)",
      "--dsw-specific-menu": "rgba(246, 252, 255, 0.84)",
      "--dsw-specific-selector": "rgba(214, 241, 255, 0.76)",
      "--dsw-specific-sidebar-fill": "rgba(214, 240, 255, 0.42)",
      "--dsw-specific-sidebar-nav-item-active": "rgba(184, 224, 250, 0.45)",
      "--dsw-specific-sidebar-nav-item-active-accent": "rgba(154, 209, 246, 0.42)",
      "--dsw-specific-sidebar-nav-item-hover": "rgba(208, 236, 255, 0.48)",
      "--dsw-specific-tip": "rgba(214, 241, 255, 0.68)"
    };

    const CSS = `
      :root {
        --ganyu-bg-blur: 8px;
        --ganyu-bg-blur-pct: 40%;
        --ganyu-ink: #143a56;
        --ganyu-ice: #7bc4ee;
        --ganyu-snow: rgba(255, 255, 255, 0.85);
      }

      html {
        background: #dff3ff !important;
      }

      body {
        background: #dff3ff !important;
        color: var(--dsw-alias-label-primary, #143a56);
        --dsw-focus-ring-color: #62b4ec;
      }

      /* Frosted Ganyu backdrop: a fixed, softly veiled art layer under the app. */
      body::before {
        content: "";
        position: fixed;
        inset: -6vmax;
        z-index: 0;
        pointer-events: none;
        background-image: url("${IMAGE}");
        background-repeat: no-repeat;
        background-position: 72% 42%;
        background-size: cover;
        filter: blur(var(--ganyu-bg-blur)) saturate(1.14) contrast(1.10);
        transform: scale(1.04);
        opacity: 0.96;
      }

      body::after {
        content: "";
        position: fixed;
        inset: 0;
        z-index: 0;
        pointer-events: none;
        background:
          radial-gradient(1200px 760px at 14% 10%, rgba(255, 255, 255, 0.30), transparent 68%),
          radial-gradient(900px 700px at 88% 88%, rgba(113, 190, 240, 0.14), transparent 70%),
          linear-gradient(102deg, rgba(207, 240, 255, 0.34) 0%, rgba(184, 228, 255, 0.22) 42%, rgba(151, 208, 247, 0.08) 100%);
      }

      #root {
        position: relative;
        z-index: 1;
        background: transparent !important;
      }

      /* Layout glass. The selectors are intentionally prefix-based so the
         theme still finds the frame across hashed CSS-module generations. */
      [class*="_frame"] {
        background: transparent !important;
      }

      [class*="_sidebarCol"] {
        background:
          linear-gradient(180deg, rgba(224, 246, 255, 0.34), rgba(175, 222, 250, 0.20)) !important;
        border-right-color: rgba(84, 150, 194, 0.24) !important;
      }

      [class*="_centerCol"] {
        background:
          linear-gradient(180deg, rgba(245, 253, 255, 0.24), rgba(211, 240, 255, 0.14)) !important;
      }

      [data-windows-titlebar] [class*="_frame"] {
        background: transparent !important;
      }

      [data-windows-titlebar] [class*="_frame_"]::before {
        background: rgba(226, 246, 255, 0.52) !important;
        backdrop-filter: blur(22px) saturate(130%);
        -webkit-backdrop-filter: blur(22px) saturate(130%);
      }

      [data-windows-titlebar] [class*="_centerCol"] {
        border-top-left-radius: 18px !important;
      }

      /* Chat surface: a light frost wash keeps long transcripts readable while
         the art remains visible through the surrounding chrome. */
      [class*="Dc7zOa_root"],
      [class*="_transcript"] {
        background:
          linear-gradient(180deg, rgba(250, 254, 255, 0.26), rgba(238, 250, 255, 0.18)) !important;
      }

      [class*="Dc7zOa_header"] {
        border-bottom-color: rgba(84, 150, 194, 0.22) !important;
        backdrop-filter: blur(18px) saturate(125%);
        -webkit-backdrop-filter: blur(18px) saturate(125%);
      }

      [class*="cJsG2q_bubble"] {
        border: 1px solid rgba(255, 255, 255, 0.62);
        box-shadow:
          0 2px 10px rgba(48, 107, 148, 0.07),
          inset 0 1px 0 rgba(255, 255, 255, 0.55);
      }

      [class*="RlGAzG_card"] {
        backdrop-filter: blur(26px) saturate(142%);
        -webkit-backdrop-filter: blur(26px) saturate(142%);
        box-shadow:
          0 12px 38px rgba(44, 108, 152, 0.12),
          inset 0 1px 0 rgba(255, 255, 255, 0.70) !important;
      }

      [class*="_brandName"] {
        color: #2b6f9f !important;
        font-weight: 500 !important;
        letter-spacing: 0.08em;
        text-shadow: 0 0 18px rgba(158, 220, 255, 0.55);
      }

      [class*="_brandMark"] {
        filter: drop-shadow(0 0 7px rgba(125, 196, 238, 0.42));
      }

      /* Icy chips, tags, and inline code get a faint rim rather than a flat fill. */
      [class*="_previewBadge"] {
        border-color: rgba(102, 176, 224, 0.30) !important;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.55);
      }

      ::selection {
        background: rgba(105, 186, 240, 0.34) !important;
        color: #0f324d;
      }

      /* Sidebar billing meter, seated above the account/settings footer. */
      .ganyu-bill {
        box-sizing: border-box;
        width: 100%;
        margin: 2px 0 6px;
        padding: 9px 10px 8px;
        border: 0.5px solid rgba(255, 255, 255, 0.72);
        border-radius: 14px;
        background: linear-gradient(148deg, rgba(255, 255, 255, 0.62), rgba(184, 226, 252, 0.30));
        box-shadow:
          inset 0 1px 0 rgba(255, 255, 255, 0.82),
          0 5px 16px rgba(52, 116, 158, 0.08);
        color: #143a56;
        font: inherit;
        font-size: 13.5px;
        line-height: 1.4;
        text-align: left;
        cursor: pointer;
        user-select: none;
        transition: background 0.15s ease, transform 0.15s ease;
      }

      .ganyu-bill:hover {
        background: linear-gradient(148deg, rgba(255, 255, 255, 0.78), rgba(174, 222, 251, 0.36));
      }

      .ganyu-bill:active {
        transform: translateY(1px);
      }

      .ganyu-bill:focus-visible {
        outline: 2px solid rgba(98, 180, 236, 0.72);
        outline-offset: 2px;
      }

      /* Two cards in one footer entry: token breakdown above, billing below. */
      .ganyu-footer-stack {
        display: flex;
        flex-direction: column;
        width: 100%;
        min-width: 0;
      }

      .ganyu-bill--tokens {
        margin-bottom: 6px;
      }

      .ganyu-bill--tokens .ganyu-bill__row {
        padding: 1px 0;
      }

      /* Day total sits a step stronger than the per-conversation rows. */
      .ganyu-bill__row--total {
        padding: 2px 0 4px;
        margin-bottom: 2px;
        border-bottom: 0.5px solid rgba(48, 104, 143, 0.22);
      }

      .ganyu-bill__row--total .ganyu-bill__value {
        font-size: 14.5px;
      }

      /* Collapsed = a single row: title, day figure, chevron. */
      .ganyu-bill--compact {
        padding: 7px 10px;
      }

      .ganyu-bill--compact .ganyu-bill__head {
        margin-bottom: 0;
      }

      .ganyu-bill__headline {
        margin-left: auto;
        color: #1d5d8f;
        font-size: 14px;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
        letter-spacing: 0.01em;
      }

      .ganyu-bill__headline--cost {
        color: #2f7fbe;
      }

      .ganyu-bill__headline + .ganyu-bill__chevron {
        margin-left: 6px;
      }

      /* Collapsed cards show totals; the chevron marks them expandable. */
      .ganyu-bill__chevron {
        flex: none;
        color: #7d9fb4;
        font-size: 13px;
        line-height: 1;
        transition: transform 0.18s ease;
        transform: rotate(-90deg);
      }

      .ganyu-bill__chevron[data-open="true"] {
        transform: rotate(0deg);
        color: #3f86c4;
      }

      .ganyu-bill--open {
        background: linear-gradient(148deg, rgba(255, 255, 255, 0.76), rgba(178, 224, 252, 0.34));
      }

      .ganyu-token-detail {
        margin-top: 5px;
        padding-top: 5px;
        border-top: 0.5px solid rgba(48, 104, 143, 0.20);
        cursor: default;
      }

      .ganyu-token-item__cost {
        text-align: right;
        color: #2f7fbe;
        font-variant-numeric: tabular-nums;
        font-weight: 600;
      }

      @media (prefers-reduced-motion: reduce) {
        .ganyu-bill__chevron { transition: none; }
      }

      /* Full-width sub-row that toggles the per-conversation list. */
      .ganyu-detail-toggle {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        height: 24px;
        margin: 8px 0 6px;
        border-radius: 8px;
        border: 0.5px solid rgba(48, 104, 143, 0.24);
        background: rgba(255, 255, 255, 0.45);
        color: #4d7085;
        font-size: 12px;
        cursor: pointer;
        user-select: none;
        transition: background 0.14s ease, color 0.14s ease;
      }

      .ganyu-detail-toggle:hover {
        background: rgba(98, 180, 236, 0.18);
        color: #1d5d8f;
      }

      .ganyu-detail-toggle--on {
        background: rgba(98, 180, 236, 0.14);
        color: #12496e;
        border-color: rgba(63, 134, 196, 0.42);
      }

      .ganyu-detail-toggle:focus-visible {
        outline: 2px solid rgba(98, 180, 236, 0.72);
        outline-offset: 1px;
      }

      .ganyu-detail-toggle__chevron {
        transition: transform 0.16s ease;
        transform: rotate(-90deg);
      }

      .ganyu-detail-toggle__chevron[data-open="true"] {
        transform: rotate(0deg);
      }

      /* Metric chooser: pick what the conversation rows show and rank by. */
      .ganyu-metric-row {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        margin: 0 0 5px;
      }

      .ganyu-metric {
        flex: none;
        padding: 2px 7px;
        border-radius: 999px;
        border: 0.5px solid rgba(48, 104, 143, 0.28);
        background: rgba(255, 255, 255, 0.55);
        color: #4d7085;
        font-size: 12px;
        line-height: 1.5;
        cursor: pointer;
        user-select: none;
        transition: background 0.14s ease, color 0.14s ease, border-color 0.14s ease;
      }

      .ganyu-metric:hover {
        background: rgba(98, 180, 236, 0.16);
        border-color: rgba(63, 134, 196, 0.48);
        color: #1d5d8f;
      }

      .ganyu-metric--on {
        background: linear-gradient(180deg, #4a95d2, #35729f);
        border-color: transparent;
        color: #ffffff;
        font-weight: 600;
      }

      .ganyu-metric:focus-visible {
        outline: 2px solid rgba(98, 180, 236, 0.72);
        outline-offset: 1px;
      }

      .ganyu-token-item__metric {
        text-align: right;
        color: #1d5d8f;
        font-variant-numeric: tabular-nums;
        font-weight: 600;
      }

      /* Per-conversation ledger: name | cached | output. */
      .ganyu-token-cols,
      .ganyu-token-item {
        display: grid;
        grid-template-columns: minmax(0, 1fr) var(--ganyu-value-col);
        align-items: center;
        gap: 8px;
      }

      .ganyu-token-cols {
        padding: 2px 0 3px;
        color: #7d9fb4;
        font-size: 11.5px;
        letter-spacing: 0.06em;
      }

      .ganyu-token-cols > span:not(:first-child) {
        text-align: right;
      }

      .ganyu-token-list {
        display: flex;
        flex-direction: column;
        gap: 1px;
      }

      .ganyu-token-item {
        padding: 1px 0;
        font-size: 13px;
        line-height: 1.45;
      }

      .ganyu-token-item__name {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #2f5468;
      }

      .ganyu-token-item__hit,
      .ganyu-token-item__out {
        text-align: right;
        color: #1d5d8f;
        font-variant-numeric: tabular-nums;
        font-weight: 600;
      }

      .ganyu-token-item__out {
        color: #2f7fbe;
      }

      .ganyu-token-empty,
      .ganyu-token-more {
        padding: 2px 0;
        color: #7d9fb4;
        font-size: 12.5px;
      }

      .ganyu-bill__head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        margin-bottom: 5px;
        color: #5b7f97;
        font-size: 10.5px;
        line-height: 1.2;
        letter-spacing: 0.12em;
      }

      .ganyu-bill__title {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        font-weight: 600;
      }

      .ganyu-bill__dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #7fc7ee;
        box-shadow: 0 0 0 3px rgba(127, 199, 238, 0.16);
      }

      .ganyu-bill__dot[data-state='loading'] {
        background: #e0b15a;
        box-shadow: 0 0 0 3px rgba(224, 177, 90, 0.15);
        animation: ganyu-bill-pulse 1.2s ease-in-out infinite;
      }

      .ganyu-bill__dot[data-state='error'] {
        background: #d45161;
        box-shadow: 0 0 0 3px rgba(212, 81, 97, 0.14);
      }

      /* Every row in a card is its own grid, so an auto width would resolve per
         row and never line up. A shared fixed width gives all rows the same
         right edge: summary figures, headers and conversation values. */
      .ganyu-bill {
        --ganyu-value-col: 62px;
      }

      .ganyu-bill__row {
        display: grid;
        grid-template-columns: minmax(0, 1fr) var(--ganyu-value-col);
        align-items: baseline;
        gap: 8px;
        padding: 1px 0;
      }

      .ganyu-bill__row > .ganyu-bill__value {
        justify-self: end;
        text-align: right;
      }

      .ganyu-bill__label {
        color: #66899f;
        font-size: 12.5px;
      }

      .ganyu-bill__value {
        color: #1d5d8f;
        font-variant-numeric: tabular-nums;
        font-weight: 600;
        letter-spacing: 0.01em;
      }

      .ganyu-bill__value--cost {
        color: #2f7fbe;
      }

      .ganyu-bill__value--muted {
        color: #7d9fb4;
        font-weight: 500;
      }

      .ganyu-bill--rail {
        width: 36px;
        height: 36px;
        margin: 2px 0 6px;
        padding: 0;
        border-radius: 50%;
        display: grid;
        place-items: center;
        color: #1d5d8f;
        font-size: 12px;
        font-weight: 600;
      }

      @keyframes ganyu-bill-pulse {
        0%, 100% { opacity: 0.45; }
        50% { opacity: 1; }
      }

      /* The footer action slot is a flex row, so every registration shares one
         line and squeezes its neighbours. The billing meter takes the full row. */
      [class*="footerActions"] {
        flex-direction: column;
        align-items: stretch;
        gap: 0;
      }

      [class*="footerActions"] > * {
        width: 100%;
        min-width: 0;
      }

      /* Ganyu's Qingxin lotus left of the settings title. The title is a direct
         child of the panel (rendered above the nav), not inside it. */
      /* The lotus is ice-blue on a pale header, so it sits on its own deep
         navy disc: that is the backdrop it was designed for, and it keeps the
         mark legible instead of washing out. */
      [data-shortcut-modal="settings"] > [class*="navTitle"]::before {
        content: "";
        display: inline-block;
        width: 26px;
        height: 26px;
        margin-right: 9px;
        vertical-align: -8px;
        border-radius: 50%;
        background:
          url("${LOTUS}") center / 19px 19px no-repeat,
          radial-gradient(circle at 50% 42%, #1d5d8f 0%, #103a5c 62%, #0a2740 100%);
        box-shadow:
          0 0 0 1px rgba(126, 200, 255, 0.55),
          0 0 8px rgba(126, 200, 255, 0.30),
          0 1px 6px rgba(10, 39, 64, 0.35);
      }

      /* ---- Sidebar session list polish -------------------------------------
         Visual only: rows, current row, timestamps and hover affordances.
         Class names are stable hashed modules from dsh-client-ui-workspace
         (sessionRow / selected / time / meta / rowQuickActions). */

      /* Resting row: quiet. Both hover and selection LIFT the row off the list
         (translate + shadow), so the pointer and the current conversation read
         as the same gesture at two intensities. The row must be a stacking
         context for its shadow to sit above the neighbours. */
      [class*="sessionRow"] {
        position: relative;
        z-index: 0;
        border-radius: 9px;
        transition:
          background 0.14s ease,
          box-shadow 0.16s ease,
          transform 0.16s ease,
          color 0.13s ease;
        will-change: transform;
      }

      /* Hover: tint + gentle lift. */
      [class*="sessionRow"]:hover {
        background: rgba(98, 180, 236, 0.16) !important;
        box-shadow:
          0 2px 8px rgba(38, 96, 138, 0.13),
          0 0 0 0.5px rgba(126, 190, 232, 0.36);
        transform: translateY(-1px);
        z-index: 2;
      }

      /* Selected: the spine is drawn with ::before at the row's true left edge,
         because DSH gives each row a large padding-inline-start; an inset
         box-shadow would sit inside that padding and look detached. The pseudo
         element lives outside the padding box, so it hugs the sidebar edge. */
      [class*="sessionRow"][class*="selected"] {
        border-inline-start-color: transparent !important;
        background: linear-gradient(90deg, rgba(96, 178, 235, 0.34), rgba(96, 178, 235, 0.12)) !important;
        box-shadow:
          0 3px 12px rgba(38, 96, 138, 0.20),
          0 0 0 0.5px rgba(108, 178, 226, 0.50);
        transform: translateY(-1px);
        z-index: 3;
      }

      [class*="sessionRow"][class*="selected"]::before {
        content: "";
        position: absolute;
        left: 0;
        top: 5px;
        bottom: 5px;
        width: 3px;
        border-radius: 0 3px 3px 0;
        background: #2f80bd;
        box-shadow: 0 0 8px rgba(47, 128, 189, 0.5);
      }

      /* Selected and hovered: lift a touch more so the state stays legible. */
      [class*="sessionRow"][class*="selected"]:hover {
        background: linear-gradient(90deg, rgba(98, 180, 236, 0.36), rgba(98, 180, 236, 0.14)) !important;
        box-shadow:
          0 5px 16px rgba(38, 96, 138, 0.24),
          0 0 0 0.5px rgba(96, 170, 220, 0.62);
        transform: translateY(-2px);
      }

      [class*="sessionRow"][class*="selected"]:hover::before {
        background: #26719f;
        width: 4px;
        box-shadow: 0 0 10px rgba(38, 113, 159, 0.62);
      }

      [class*="sessionRow"][class*="selected"] [class*="title"] {
        color: #0c3350 !important;
        font-weight: 700;
        letter-spacing: 0.01em;
      }

      /* Hover also nudges the title, so the two states differ by more than tint. */
      [class*="sessionRow"]:hover [class*="title"] {
        font-weight: 600;
        color: #164a6e !important;
      }

      /* Timestamps: right-aligned, tabular so the ragged "2小时 / 6天" column
         stops wobbling between rows. */
      [class*="sessionRow"] [class*="time"] {
        margin-left: auto;
        color: #8aa7b9 !important;
        font-size: 11px !important;
        font-variant-numeric: tabular-nums;
        letter-spacing: 0.01em;
        white-space: nowrap;
      }

      [class*="sessionRow"][class*="selected"] [class*="time"] {
        color: #5b8fb0 !important;
      }

      /* Hover actions fade in instead of occupying permanent width. */
      [class*="sessionRow"] [class*="rowQuickActions"],
      [class*="sessionRow"] [class*="rowActions"] {
        opacity: 0;
        transition: opacity 0.13s ease;
      }

      [class*="sessionRow"]:hover [class*="rowQuickActions"],
      [class*="sessionRow"]:hover [class*="rowActions"],
      [class*="sessionRow"][class*="selected"] [class*="rowQuickActions"],
      [class*="sessionRow"]:focus-within [class*="rowQuickActions"],
      [class*="sessionRow"]:focus-within [class*="rowActions"] {
        opacity: 1;
      }

      /* Group headings ("工作区" and each workspace name) step back so the
         conversations themselves carry the weight. */
      [class*="groupSection"] > *:first-child,
      [class*="groupHeader"],
      [class*="sectionTitle"] {
        color: #7d9fb4 !important;
        font-size: 11px !important;
        font-weight: 500 !important;
        letter-spacing: 0.08em;
      }

      /* Thin, quiet scrollbar for the list area specifically. */
      [class*="listArea"],
      [class*="GAkraW_list"] {
        --dsh-scrollbar-thumb: rgba(110, 165, 200, 0.34);
        --dsh-scrollbar-thumb-hover: rgba(90, 150, 190, 0.50);
        scrollbar-width: thin;
      }

      @media (prefers-reduced-motion: reduce) {
        [class*="sessionRow"],
        [class*="sessionRow"] [class*="rowQuickActions"],
        [class*="sessionRow"] [class*="rowActions"] {
          transition: none;
        }

        [class*="sessionRow"]:hover,
        [class*="sessionRow"][class*="selected"],
        [class*="sessionRow"][class*="selected"]:hover {
          transform: none;
        }
      }

      /* ---- 凝霜书签 (bookmark shelf) ---------------------------------------
         A header button that keeps file PATHS. The shelf floats over the
         conversation so the header row keeps its height. */
      .ganyu-mark {
        position: relative;
        display: inline-flex;
        align-items: center;
      }

      .ganyu-mark__trigger {
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        gap: 5px;
        height: 28px;
        padding: 0 11px;
        border: 0.5px solid rgba(120, 186, 230, 0.42);
        border-radius: 9px;
        background: linear-gradient(148deg, rgba(255, 255, 255, 0.62), rgba(190, 228, 252, 0.34));
        color: #1d5d8f;
        font: inherit;
        font-size: 12px;
        line-height: 1;
        cursor: pointer;
        transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
      }

      .ganyu-mark__trigger:hover,
      .ganyu-mark__trigger--on {
        background: linear-gradient(148deg, rgba(255, 255, 255, 0.86), rgba(174, 222, 251, 0.52));
        border-color: rgba(96, 170, 220, 0.68);
        color: #12496e;
      }

      .ganyu-mark__trigger:focus-visible {
        outline: 2px solid rgba(98, 180, 236, 0.72);
        outline-offset: 2px;
      }

      .ganyu-mark__label {
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.02em;
        white-space: nowrap;
      }

      .ganyu-mark__glyph {
        font-size: 12px;
        color: #4b9ad4;
      }

      .ganyu-mark__count {
        min-width: 15px;
        height: 15px;
        padding: 0 4px;
        border-radius: 999px;
        background: #3f86c4;
        color: #fff;
        font-size: 10px;
        font-weight: 700;
        line-height: 15px;
        text-align: center;
        font-variant-numeric: tabular-nums;
      }

      /* ❄ on a presented-file card in the conversation.
         The card is a flex row: [body ...][actions]. The ❄ is injected as a
         SIBLING just before the card's own action group, so it lines up to the
         LEFT of "open" instead of floating over it. No absolute positioning,
         hence no chance of covering the card's own controls. */
      .ganyu-card-mark {
        flex: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 3px;
        height: 26px;
        padding: 0 10px;
        margin-right: 6px;
        border: 0.5px solid rgba(96, 170, 220, 0.46);
        border-radius: 9px;
        background: rgba(255, 255, 255, 0.9);
        color: #3f86c4;
        font-family: inherit;
        font-size: 12px;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        /* Always visible: hiding it left a gap on the card's right side AND made
           its own hit area unreliable (it was pointer-events:none until hover,
           so the first click could land on the card instead). */
        opacity: 1;
        pointer-events: auto;
        /* The card's preview button is an absolutely-positioned overlay covering
           the whole card (inset: 0). Without a stacking context of its own the ❄
           sits UNDER it and never receives a click, which is why pressing did
           nothing. Lift it above that overlay. */
        position: relative;
        z-index: 3;
        transition:
          background 0.15s ease,
          border-color 0.15s ease,
          color 0.15s ease,
          transform 110ms cubic-bezier(.4, 0, .2, 1),
          box-shadow 0.15s ease;
      }

      .ganyu-card-mark:hover {
        background: rgba(98, 180, 236, 0.24);
        border-color: rgba(63, 134, 196, 0.62);
        color: #12496e;
      }

      /* Pressed state must beat the hover rule, hence the explicit order. */
      .ganyu-card-mark:active,
      .ganyu-card-mark.ganyu-card-mark--done:active {
        transform: scale(0.92);
        background: rgba(98, 180, 236, 0.34);
        box-shadow: inset 0 1px 4px rgba(28, 78, 112, 0.28);
      }

      .ganyu-card-mark:focus-visible {
        outline: 2px solid rgba(98, 180, 236, 0.72);
        outline-offset: 1px;
      }

      /* The ❄ glyph itself ticks when the bookmark lands. */
      .ganyu-card-mark__label {
        font-size: 11.5px;
        font-weight: 600;
        letter-spacing: 0.02em;
      }

      .ganyu-card-mark__glyph {
        display: inline-block;
        font-size: 12px;
      }

      .ganyu-card-mark--done .ganyu-card-mark__glyph {
        animation: ganyu-card-tick 480ms cubic-bezier(.34, 1.56, .64, 1);
      }

      /* Variants for the three places a file can appear. */
      .ganyu-card-mark--image {
        position: absolute;
        top: 6px;
        right: 6px;
        z-index: 3;
        height: 24px;
        padding: 0 8px;
        font-size: 11px;
        background: rgba(255, 255, 255, 0.92);
        box-shadow: 0 2px 8px rgba(38, 96, 138, 0.18);
      }

      .ganyu-card-mark--attachment {
        margin-left: 6px;
        height: 24px;
        padding: 0 8px;
        min-width: 62px;
        justify-content: center;
        font-size: 11px;
      }

      /* An inline ❄ after a markdown file link: compact, no pill chrome. */
      .ganyu-card-mark--link {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        min-width: 18px;
        height: 18px;
        padding: 0;
        margin-left: 3px;
        vertical-align: middle;
        border-radius: 5px;
        border: 0.5px solid rgba(96, 170, 220, 0.4);
        background: rgba(255, 255, 255, 0.7);
        font-size: 10px;
        line-height: 1;
      }

      .ganyu-card-mark--link .ganyu-card-mark__label {
        display: none;
      }

      /* Image + its ❄ form one inline unit, so the pill sits beside the picture
         instead of drifting to the end of the row. */
      /* "已收" must beat every variant background.
         The earlier rule was defined BEFORE .--image / .--attachment / .--link,
         so an equal-specificity later rule (the white variant fill) overrode it
         and a kept bookmark looked plain white. This block sits after all of
         them and is doubly qualified for good measure. */
      .ganyu-card-mark.ganyu-card-mark--done,
      .ganyu-card-mark--image.ganyu-card-mark--done,
      .ganyu-card-mark--attachment.ganyu-card-mark--done,
      .ganyu-card-mark--link.ganyu-card-mark--done,
      .ganyu-img-wrap > .ganyu-card-mark--done {
        background: linear-gradient(180deg, #4a95d2, #35729f);
        border-color: transparent;
        color: #ffffff;
        box-shadow: 0 1px 4px rgba(38, 96, 138, 0.28);
      }

      .ganyu-card-mark.ganyu-card-mark--done:hover,
      .ganyu-card-mark--image.ganyu-card-mark--done:hover,
      .ganyu-card-mark--attachment.ganyu-card-mark--done:hover,
      .ganyu-card-mark--link.ganyu-card-mark--done:hover {
        background: linear-gradient(180deg, #3f86c4, #2c6289);
        border-color: transparent;
        color: #ffffff;
      }

      .ganyu-card-mark--done .ganyu-card-mark__glyph {
        color: #e8f5ff;
      }

      /* The picture and its ❄ are one block-level unit.
         An inline-flex wrapper stretched to the row's full height, which is
         why a wide picture showed an empty clickable band to its right before
         the pill. A block wrapper sized by the picture itself removes that band. */
      .ganyu-img-wrap {
        /* Shrink to the picture. Without an explicit fit-content width the
           inline-block accepts the row's full width, so a wide picture left a
           dead strip to its right and the pill sat at the far edge of that
           strip instead of next to the image. */
        display: inline-block;
        /* Width/height are written inline from the measured bitmap box; this is
           only the pre-measure fallback. */
        width: fit-content;
        max-width: 100%;
        position: relative;
        vertical-align: top;
        line-height: 0;
        overflow: visible;
      }

      .ganyu-img-wrap > img,
      .ganyu-img-wrap > button,
      .ganyu-img-wrap > a {
        display: block;
        max-width: 100%;
      }

      /* Just OUTSIDE the picture's top-right corner.
         This used to leave a gap because the wrapper's width was whatever the
         message row gave it. The wrapper is now pinned to the measured bitmap box,
         so a left:100% offset lands exactly on the picture's right edge.
         The pill is a sibling of the zoom button, never a child, so clicking it
         cannot open the lightbox. */
      .ganyu-img-wrap > .ganyu-card-mark--image {
        position: absolute;
        top: 6px;
        left: 100%;
        margin-left: 6px;
        z-index: 3;
        min-width: 62px;
        justify-content: center;
        flex: none;
      }

      .ganyu-img-wrap:hover > .ganyu-card-mark--image {
        background: rgba(98, 180, 236, 0.24);
      }

      .ganyu-mark__chips {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        margin: 0 0 8px;
      }

      .ganyu-mark__chip {
        flex: none;
        padding: 2px 9px;
        border-radius: 999px;
        border: 0.5px solid rgba(48, 104, 143, 0.26);
        background: rgba(255, 255, 255, 0.52);
        color: #4d7085;
        font-size: 11.5px;
        line-height: 1.6;
        cursor: pointer;
        user-select: none;
      }

      .ganyu-mark__chip:hover {
        background: rgba(98, 180, 236, 0.16);
        color: #1d5d8f;
      }

      .ganyu-mark__chip--on {
        background: linear-gradient(180deg, #4a95d2, #35729f);
        border-color: transparent;
        color: #fff;
        font-weight: 600;
      }

      .ganyu-mark__row2 {
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .ganyu-mark__row2 > .ganyu-mark__input {
        flex: 1 1 0;
        min-width: 60px;
      }

      .ganyu-mark__select,
      .ganyu-mark__move {
        box-sizing: border-box;
        height: 30px;
        padding: 0 6px;
        border: 0.5px solid rgba(48, 104, 143, 0.34);
        border-radius: 9px;
        background: rgba(255, 255, 255, 0.94);
        color: #143a56;
        font: inherit;
        font-size: 12px;
        cursor: pointer;
      }

      .ganyu-mark__move {
        height: 23px;
        font-size: 10.5px;
        max-width: 84px;
      }

      .ganyu-mark__ghost {
        flex: none;
        height: 30px;
        padding: 0 10px;
        white-space: nowrap;
        border: 0.5px solid rgba(48, 104, 143, 0.34);
        border-radius: 9px;
        background: rgba(255, 255, 255, 0.7);
        color: #1d5d8f;
        font: inherit;
        font-size: 12px;
        cursor: pointer;
      }

      .ganyu-mark__ghost:hover {
        background: rgba(98, 180, 236, 0.18);
        border-color: rgba(63, 134, 196, 0.5);
      }

      .ganyu-mark__groups {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-top: 8px;
      }

      .ganyu-mark__grouphead {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 0 2px 4px;
      }

      .ganyu-mark__groupname {
        color: #12496e;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.04em;
      }

      .ganyu-mark__groupcount {
        min-width: 14px;
        height: 14px;
        padding: 0 4px;
        border-radius: 999px;
        background: rgba(98, 180, 236, 0.22);
        color: #1d5d8f;
        font-size: 10px;
        font-weight: 600;
        line-height: 14px;
        text-align: center;
      }

      .ganyu-mark__groupdel {
        margin-left: auto;
        width: 18px;
        height: 18px;
        padding: 0;
        border: 0;
        border-radius: 6px;
        background: transparent;
        color: #a8bcc9;
        font-size: 12px;
        line-height: 18px;
        cursor: pointer;
      }

      .ganyu-mark__groupdel:hover {
        background: rgba(212, 81, 97, 0.14);
        color: #a83a4c;
      }

      .ganyu-mark__groupempty {
        padding: 2px 4px 4px;
        color: #a8bcc9;
        font-size: 11.5px;
      }

      .ganyu-mark__panel {
        position: absolute;
        top: calc(100% + 6px);
        right: 0;
        z-index: 60;
        width: 360px;
        max-width: calc(100vw - 32px);
        max-height: 420px;
        overflow-y: auto;
        padding: 12px;
        border: 0.5px solid rgba(255, 255, 255, 0.78);
        border-radius: 14px;
        background: linear-gradient(160deg, rgba(250, 254, 255, 0.97), rgba(226, 245, 255, 0.95));
        box-shadow:
          inset 0 1px 0 rgba(255, 255, 255, 0.9),
          0 12px 38px rgba(44, 108, 152, 0.20);
        color: #143a56;
        font-size: 12.5px;
        text-align: left;
        cursor: default;
      }

      .ganyu-mark__head {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 8px;
        margin-bottom: 8px;
      }

      .ganyu-mark__title {
        font-size: 13.5px;
        font-weight: 700;
        color: #12496e;
        letter-spacing: 0.02em;
      }

      .ganyu-mark__hint {
        color: #7d9fb4;
        font-size: 11px;
      }

      .ganyu-mark__form {
        display: flex;
        flex-direction: column;
        gap: 6px;
        padding-bottom: 10px;
        border-bottom: 0.5px solid rgba(48, 104, 143, 0.20);
      }

      .ganyu-mark__input {
        box-sizing: border-box;
        width: 100%;
        height: 30px;
        padding: 0 9px;
        border: 0.5px solid rgba(48, 104, 143, 0.34);
        border-radius: 9px;
        background: rgba(255, 255, 255, 0.94);
        color: #143a56;
        font: inherit;
        font-size: 12.5px;
      }

      .ganyu-mark__input::placeholder {
        color: #9ab4c6;
      }

      .ganyu-mark__input:focus {
        outline: none;
        border-color: #3f86c4;
        box-shadow: 0 0 0 2px rgba(98, 180, 236, 0.22);
      }

      .ganyu-mark__add {
        flex: none;
        align-self: flex-end;
        height: 30px;
        padding: 0 14px;
        white-space: nowrap;
        border: 0;
        border-radius: 9px;
        background: linear-gradient(180deg, #4a95d2, #35729f);
        color: #fff;
        font: inherit;
        font-size: 12.5px;
        font-weight: 600;
        cursor: pointer;
      }

      .ganyu-mark__add:hover {
        background: linear-gradient(180deg, #59a3dc, #3d7daa);
      }

      .ganyu-mark__notice {
        margin-top: 8px;
        padding: 5px 8px;
        border-radius: 8px;
        background: rgba(98, 180, 236, 0.16);
        color: #1d5d8f;
        font-size: 11.5px;
      }

      .ganyu-mark__empty {
        padding: 14px 2px 6px;
        color: #7d9fb4;
        font-size: 12px;
        line-height: 1.6;
      }

      .ganyu-mark__list {
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding-top: 8px;
      }

      .ganyu-mark__item {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 7px 8px;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.62);
        border: 0.5px solid rgba(48, 104, 143, 0.14);
      }

      .ganyu-mark__item:hover {
        background: rgba(255, 255, 255, 0.88);
        border-color: rgba(96, 170, 220, 0.44);
      }

      .ganyu-mark__meta {
        display: flex;
        flex-direction: column;
        gap: 1px;
        min-width: 0;
        flex: 1 1 auto;
      }

      .ganyu-mark__name {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #12496e;
        font-size: 12.5px;
        font-weight: 600;
      }

      .ganyu-mark__from {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #8aa7b9;
        font-size: 10.5px;
        font-style: italic;
      }

      .ganyu-mark__pathrow {
        display: flex;
        align-items: baseline;
        gap: 6px;
        min-width: 0;
      }

      .ganyu-mark__pathrow .ganyu-mark__time {
        flex: none;
        margin-left: auto;
      }

      .ganyu-mark__path {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #7d9fb4;
        font-size: 10.5px;
      }

      .ganyu-mark__time {
        color: #9ab4c6;
        font-size: 10px;
      }

      .ganyu-mark__acts {
        display: flex;
        align-items: center;
        gap: 3px;
        flex: none;
      }

      .ganyu-mark__act {
        height: 23px;
        padding: 0 7px;
        border: 0.5px solid rgba(48, 104, 143, 0.28);
        border-radius: 7px;
        background: rgba(255, 255, 255, 0.7);
        color: #1d5d8f;
        font: inherit;
        font-size: 11px;
        cursor: pointer;
      }

      .ganyu-mark__act:hover {
        background: rgba(98, 180, 236, 0.20);
        border-color: rgba(63, 134, 196, 0.55);
        color: #12496e;
      }

      /* The 打开 button needs a felt press of its own: it is the main action and
         a miss here reads as "the click did nothing". */
      .ganyu-mark__act:active {
        transform: scale(0.90);
        background: rgba(74, 149, 210, 0.30);
        box-shadow: inset 0 1px 4px rgba(28, 78, 112, 0.28);
      }

      .ganyu-mark__act--busy {
        opacity: 0.65;
        cursor: progress;
      }

      .ganyu-mark__act--fix {
        color: #b0631f;
        border-color: rgba(196, 122, 46, 0.44);
      }

      .ganyu-mark__act--fix:hover {
        background: rgba(224, 148, 62, 0.16);
        border-color: rgba(176, 99, 31, 0.6);
        color: #8a4a10;
      }

      .ganyu-mark__act--danger {
        color: #a83a4c;
      }

      .ganyu-mark__act--danger:hover {
        background: rgba(212, 81, 97, 0.14);
        border-color: rgba(179, 56, 74, 0.42);
        color: #8f2436;
      }

      /* Small Settings icon inside the account row, right of the name/phone. */
      .ganyu-settings-icon-holder {
        display: inline-flex;
        align-items: center;
        flex: none;
        margin-left: auto;
      }

      .ganyu-settings-icon {
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        padding: 0;
        border: 0.5px solid transparent;
        border-radius: 7px;
        background: transparent;
        color: #5b7f97;
        cursor: pointer;
        transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
      }

      .ganyu-settings-icon:hover {
        background: rgba(98, 180, 236, 0.18);
        border-color: rgba(120, 190, 235, 0.42);
        color: #12496e;
      }

      .ganyu-settings-icon:active {
        background: rgba(98, 180, 236, 0.28);
      }

      .ganyu-settings-icon:focus-visible {
        outline: 2px solid rgba(98, 180, 236, 0.72);
        outline-offset: 1px;
      }

      /* The deep settings nav needs the pet row's mark in ice white. */
      [data-shortcut-modal="settings"] > nav [class*="navIcon"] svg {
        color: #e8f6ff !important;
        opacity: 0.94;
      }

      /* dsh-pet ships a DOM patch for older shells that hides the real icon and
         paints a mask through its own ::before. On this release the proper slot
         exists, so the slot icon wins: keep the wrapper visible, drop the mask. */
      [data-shortcut-modal="settings"] nav [data-dsh-pet-nav] [class*="navIcon"] {
        display: flex !important;
      }

      [data-shortcut-modal="settings"] nav [data-dsh-pet-nav]::before {
        content: none !important;
        display: none !important;
      }

      @media (prefers-reduced-motion: reduce) {
        .ganyu-bill, .ganyu-bill__dot[data-state='loading'] { transition: none; animation: none; }
      }

      /* A tiny calligraphic signature in the corner, kept behind the app layer. */
      #root::after {
        content: "甘雨 · 霜华";
        position: fixed;
        right: 24px;
        bottom: 13px;
        z-index: 2;
        pointer-events: none;
        color: rgba(44, 111, 159, 0.36);
        font-family: "华文楷体", "楷体", "STKaiti", serif;
        font-size: 12px;
        line-height: 1;
        letter-spacing: 0.30em;
        text-shadow: 0 0 14px rgba(255, 255, 255, 0.78);
      }

      /* Settings must stay readable: the live page underneath is hidden by an
         opaque frost panel and a darker, unblurred mask. The data attribute is
         the stable hook owned by the settings modal, unlike hashed classes. */
      div[role="presentation"]:has(> [data-shortcut-modal="settings"]) > [aria-hidden="true"] {
        background: rgba(17, 51, 74, 0.42) !important;
        backdrop-filter: none !important;
        -webkit-backdrop-filter: none !important;
      }

      [data-shortcut-modal="settings"] {
        background:
          radial-gradient(820px 460px at 8% 0%, #ffffff 0%, rgba(255, 255, 255, 0) 62%),
          linear-gradient(158deg, #f8fdff 0%, #e9f7ff 52%, #d9efff 100%) !important;
        border: 1px solid rgba(255, 255, 255, 0.78);
        box-shadow:
          0 28px 90px rgba(22, 68, 99, 0.26),
          inset 0 1px 0 rgba(255, 255, 255, 0.92) !important;
        backdrop-filter: none !important;
        -webkit-backdrop-filter: none !important;
      }

      /* The settings nav is a deep Liyue ink bar: the light-blue-on-light-blue
         pairing washed the labels out, so this bar carries the contrast instead.
         Text, icons, hover and the current row all flip to ice-white. */
      [data-shortcut-modal="settings"] > nav {
        background: linear-gradient(175deg, #16466a 0%, #0f3450 58%, #0a2740 100%) !important;
        border-right: 0.5px solid rgba(255, 255, 255, 0.14);
        box-shadow: inset -1px 0 0 rgba(255, 255, 255, 0.06);
      }

      [data-shortcut-modal="settings"] > nav [class*="_navTitle"] {
        color: #f2fbff !important;
        text-shadow: 0 1px 10px rgba(0, 0, 0, 0.35);
      }

      [data-shortcut-modal="settings"] > nav [class*="_navCell"] {
        color: rgba(226, 244, 255, 0.80) !important;
      }

      [data-shortcut-modal="settings"] > nav [class*="_navCell"] svg {
        color: inherit !important;
      }

      [data-shortcut-modal="settings"] > nav [class*="_navCell"]:hover {
        background: rgba(255, 255, 255, 0.12) !important;
        color: #ffffff !important;
      }

      [data-shortcut-modal="settings"] > nav [class*="_navCell"][aria-current="true"] {
        background: linear-gradient(90deg, rgba(126, 200, 255, 0.30), rgba(126, 200, 255, 0.08)) !important;
        color: #ffffff !important;
        box-shadow: inset 2px 0 0 #8ed2ff;
      }

      [data-shortcut-modal="settings"] > div {
        background: linear-gradient(180deg, rgba(252, 255, 255, 0.97), rgba(240, 250, 255, 0.94)) !important;
      }

      /* Raise the content-side contrast: descriptions, select rims and card
         edges were the parts that vanished on the pale background. */
      [data-shortcut-modal="settings"] {
        --dsw-alias-label-secondary: #2f5468;
        --dsw-alias-label-tertiary: #436b83;
        --dsw-alias-label-caption: #5a7f96;
        --dsw-alias-border-l1: rgba(48, 104, 143, 0.24);
        --dsw-alias-border-l2: rgba(48, 104, 143, 0.32);
        --dsw-alias-border-l3: rgba(48, 104, 143, 0.42);
        --dsw-alias-border-l4: rgba(48, 104, 143, 0.55);
      }

      [data-shortcut-modal="settings"] [class*="_rowCard"],
      [data-shortcut-modal="settings"] [class*="_card"] {
        background: rgba(255, 255, 255, 0.94) !important;
        border-color: rgba(48, 104, 143, 0.30) !important;
      }

      /* Legacy alias names some third-party plugins reference although the
         design system never defines them. Without a value they fall back to
         the plugin's own dark palette, which paints grey blocks onto the frost
         UI. Mapping them onto real semantic tokens fixes every such plugin. */
      body {
        --dsw-alias-text: var(--dsw-alias-label-primary);
        --dsw-alias-text-muted: var(--dsw-alias-label-tertiary);
        --dsw-alias-border: var(--dsw-alias-border-l3);
        --dsw-alias-border-default: var(--dsw-alias-border-l3);
        --dsw-alias-border-subtle: var(--dsw-alias-border-l1);
        --dsw-alias-bg-elevated: var(--dsw-alias-bg-layer-2);
        --dsw-alias-brand-primary-soft: var(--dsw-alias-state-business-tertiary);
      }

      /* Voice-synthesis settings (dsh-voice-say) additionally hard-codes its
         dark fills, so the aliases above need an explicit repaint. */
      [data-vs-root] {
        color: #1b4059 !important;
      }

      [data-vs-card] {
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.88), rgba(240, 250, 255, 0.82)) !important;
        border-color: rgba(48, 104, 143, 0.26) !important;
        box-shadow: 0 2px 12px rgba(45, 105, 143, 0.06);
      }

      [data-vs-muted],
      [data-vs-k],
      [data-vs-fold] {
        color: #4d7085 !important;
      }

      [data-vs-ta],
      [data-vs-in] {
        background: rgba(255, 255, 255, 0.94) !important;
        border-color: rgba(48, 104, 143, 0.32) !important;
        color: #143a56 !important;
        box-shadow: inset 0 1px 2px rgba(45, 105, 143, 0.06);
      }

      [data-vs-ta]:focus,
      [data-vs-in]:focus {
        border-color: #3f86c4 !important;
        box-shadow: 0 0 0 2px rgba(98, 180, 236, 0.22);
      }

      [data-vs-btn] {
        background: rgba(255, 255, 255, 0.70) !important;
        border-color: rgba(48, 104, 143, 0.34) !important;
        color: #1d5d8f !important;
      }

      [data-vs-btn]:hover:not(:disabled) {
        background: rgba(98, 180, 236, 0.16) !important;
        border-color: rgba(63, 134, 196, 0.55) !important;
        color: #12496e !important;
      }

      [data-vs-btn][data-vs-primary] {
        background: linear-gradient(180deg, #4a95d2, #35729f) !important;
        border-color: transparent !important;
        color: #ffffff !important;
      }

      [data-vs-btn][data-vs-primary]:hover:not(:disabled) {
        background: linear-gradient(180deg, #59a3dc, #3d7daa) !important;
      }

      [data-vs-btn][data-vs-on] {
        background: rgba(98, 180, 236, 0.22) !important;
        border-color: #3f86c4 !important;
        color: #12496e !important;
      }

      [data-vs-btn][data-vs-danger] {
        border-color: rgba(179, 56, 74, 0.40) !important;
        color: #a83a4c !important;
      }

      [data-vs-tag] {
        background: rgba(255, 255, 255, 0.66) !important;
        border-color: rgba(48, 104, 143, 0.30) !important;
        color: #1b4059 !important;
      }

      [data-vs-tag]:hover {
        background: rgba(98, 180, 236, 0.14) !important;
      }

      [data-vs-tag][data-vs-on] {
        background: rgba(98, 180, 236, 0.24) !important;
        border-color: #3f86c4 !important;
        color: #10456a !important;
      }

      [data-vs-item] {
        background: rgba(226, 245, 255, 0.55) !important;
      }

      [data-vs-item][data-vs-def] {
        background: rgba(98, 180, 236, 0.22) !important;
      }

      [data-vs-say] {
        color: #2f5468 !important;
        border-left-color: rgba(63, 134, 196, 0.55) !important;
      }

      [data-vs-note] {
        color: #46687d !important;
        border-left-color: rgba(63, 134, 196, 0.55) !important;
      }

      [data-vs-err] {
        color: #a83a4c !important;
      }

      [data-vs-badge][data-vs-ok] {
        color: #146b4b !important;
        border-color: rgba(20, 107, 75, 0.40) !important;
        background: rgba(20, 107, 75, 0.10) !important;
      }

      [data-vs-badge][data-vs-warn] {
        color: #8a5a12 !important;
        border-color: rgba(138, 90, 18, 0.40) !important;
        background: rgba(138, 90, 18, 0.10) !important;
      }

      [data-vs-badge][data-vs-bad] {
        color: #a83a4c !important;
        border-color: rgba(168, 58, 76, 0.40) !important;
        background: rgba(168, 58, 76, 0.10) !important;
      }

      /* The account/server settings page is a full-screen overlay, not the
         dialog above; it also needs an opaque base rather than bg-base's alpha. */
      [class*="TaJwIq_overlay"] {
        background: linear-gradient(160deg, #f7fdff 0%, #e5f6ff 55%, #d4edff 100%) !important;
      }

      @media (prefers-reduced-transparency: reduce) {
        body::before { filter: blur(5px) saturate(1.02); }
        [class*="_sidebarCol"], [class*="_centerCol"] { backdrop-filter: none; -webkit-backdrop-filter: none; }
      }
    `;

    /**
     * Choose an effective background blur between 30% and 50% of the theme's
     * 15px design maximum, scaled to the viewport so compact windows stay light
     * and large displays keep the art soft without turning it into a smear.
     */
    function updateBlur(root) {
      const width = typeof window === "undefined" ? 1440 : window.innerWidth;
      const ratio = Math.min(0.5, Math.max(0.3, 0.3 + ((width - 1280) / 1280) * 0.2));
      const pct = Math.round(ratio * 100);
      root.style.setProperty("--ganyu-bg-blur", `${Math.round(15 * ratio)}px`);
      root.style.setProperty("--ganyu-bg-blur-pct", `${pct}%`);
      root.dataset.ganyuBlur = `${pct}%`;
    }

    // DeepSeek's official CNY list prices per 1M tokens. Peak hours are Beijing
    // time Monday-Friday 09:00-12:00 and 14:00-18:00 (Chinese public holidays
    // are treated as off-peak by the platform; this meter does not carry a
    // holiday calendar, so it approximates those few days as peak).
    const CNY_TARIFFS = {
      flash: {
        cacheHit: [0.02, 0.04],
        cacheMiss: [1, 2],
        output: [4, 8]
      },
      pro: {
        cacheHit: [0.15, 0.3],
        cacheMiss: [4.5, 9],
        output: [13.5, 27]
      }
    };

    function positiveNumber(value) {
      const number = Number(value);
      return Number.isFinite(number) && number > 0 ? number : 0;
    }

    function isPeak(date) {
      const day = date.getDay();
      if (day === 0 || day === 6) return false;
      const minutes = date.getHours() * 60 + date.getMinutes();
      return (minutes >= 9 * 60 && minutes < 12 * 60) || (minutes >= 14 * 60 && minutes < 18 * 60);
    }

    function formatMoney(amount, currency) {
      try {
        return new Intl.NumberFormat("zh-CN", {
          style: "currency",
          currency,
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }).format(amount);
      } catch {
        return `${currency === "USD" ? "$" : "¥"}${amount.toFixed(2)}`;
      }
    }

    /** Read the total available balance (topped-up + granted) and its split. */
    function readBalance(result) {
      if (!result?.ok || !result.value || result.value.status !== "ready") return null;
      const data = result.value;
      const recharge = Array.isArray(data.value) ? data.value : [];
      const bonus = Array.isArray(data.bonusWallets) ? data.bonusWallets : [];
      const wallets = [...recharge, ...bonus];
      const currencies = [...new Set(wallets.map((wallet) => wallet?.currency).filter(Boolean))];
      const currency = currencies.includes("CNY") ? "CNY" : currencies[0];
      if (!currency) return null;
      const total = wallets
        .filter((wallet) => wallet?.currency === currency)
        .reduce((sum, wallet) => sum + positiveNumber(wallet.balance), 0);
      const bonusTotal = bonus
        .filter((wallet) => wallet?.currency === currency)
        .reduce((sum, wallet) => sum + positiveNumber(wallet.balance), 0);
      return { currency, total, bonus: bonusTotal, recharge: Math.max(0, total - bonusTotal) };
    }

    /**
     * Per-session token ledger for today.
     *
     * The card lists one row per conversation touched since local midnight, with
     * that conversation's own totals — not one aggregate for the whole day. The
     * row set is also summed so the header can show the day-wide figure.
     *
     * `tokenUsage` is the cumulative projection for a whole session, so a row
     * reports everything that conversation has used in its lifetime up to now.
     * DSH exposes no per-day slice of a session's usage, so a conversation
     * carried over from yesterday shows its running total, not today's share.
     */
    function todayTokens(items) {
      const rows = [];
      for (const item of items) {
        const day = item.dayUsage;
        if (!day) continue;
        const cacheRead = positiveNumber(day.cacheRead);
        const uncached = positiveNumber(day.cacheMiss);
        const cacheWrite = positiveNumber(day.cacheWrite);
        const output = positiveNumber(day.output);
        const billedInput = cacheRead + uncached + cacheWrite;
        const total = billedInput + output;
        if (total === 0) continue;
        const title = (item?.projections?.values?.title || "").trim();
        rows.push({
          id: item.sessionId,
          title: title === "" ? "未命名对话" : title,
          updatedAt: Number(item.updatedAt) || 0,
          cacheRead,
          cacheMiss: uncached,
          cacheWrite,
          output,
          billedInput,
          total,
          hitRate: billedInput > 0 ? cacheRead / billedInput : null
        });
      }
      rows.sort((left, right) => right.total - left.total);
      const sum = (key) => rows.reduce((acc, row) => acc + row[key], 0);
      const cacheRead = sum("cacheRead");
      const cacheMiss = sum("cacheMiss");
      const cacheWrite = sum("cacheWrite");
      const output = sum("output");
      const billedInput = cacheRead + cacheMiss + cacheWrite;
      return {
        rows,
        sessions: rows.length,
        cacheRead,
        cacheMiss,
        cacheWrite,
        output,
        billedInput,
        total: billedInput + output,
        hitRate: billedInput > 0 ? cacheRead / billedInput : null
      };
    }

    /**
     * Exact per-day usage for one session, read from its durable event log.
     *
     * The `tokenUsage` projection is a lifetime total, so pricing "today" from it
     * over-counts every conversation that spans midnight. Events carry their own
     * `time` and the provider `usage`, so walking the log and keeping only
     * today's assistant messages gives the real daily figure.
     *
     * @param session - the `remote.session` face.
     * @param sessionId - session to read.
     * @param dayStart - local midnight in epoch ms.
     * @returns summed buckets for that session today.
     */
    /**
     * Price a single usage record at the model that was active when it happened
     * and the peak/off-peak bucket of its own timestamp. `modelName` comes from
     * the last `model/selection` event seen before this message.
     *
     * Free-tier / promotional models (`*-free`, `*:free`) are billed at zero —
     * they run on granted quota rather than the paid CNY table.
     */
    function priceUsage(usage, modelName, timestamp) {
      const model = String(modelName || "");
      if (/free|promo/i.test(model)) return 0;
      const tariff = /pro/i.test(model) ? CNY_TARIFFS.pro : CNY_TARIFFS.flash;
      const bucket = isPeak(new Date(timestamp)) ? 1 : 0;
      const cacheRead = positiveNumber(usage.cacheReadTokens) / 1e6 * tariff.cacheHit[bucket];
      const cacheMiss = (positiveNumber(usage.inputTokens) + positiveNumber(usage.cacheWriteTokens)) / 1e6 * tariff.cacheMiss[bucket];
      const output = positiveNumber(usage.outputTokens) / 1e6 * tariff.output[bucket];
      return cacheRead + cacheMiss + output;
    }

    /**
     * Read one session's events for today, returning BOTH the token buckets and
     * an exact cost. `session/page` pages backwards, so pages are collected in
     * order, then replayed from oldest to newest: `model/selection` events set
     * the active model for every later `assistant/message`, which lets a
     * conversation that switched models mid-day be priced correctly.
     */
    async function readSessionDayUsage(session, sessionId, dayStart) {
      const out = { cacheRead: 0, cacheMiss: 0, cacheWrite: 0, output: 0, cost: 0 };
      const collected = [];
      let beforeSeq;
      for (let guard = 0; guard < 400; guard += 1) {
        let page;
        try {
          page = await session.page({
            address: { kind: "session", sessionId },
            maxMessages: 500,
            ...(beforeSeq === undefined ? {} : { beforeSeq })
          });
        } catch {
          return out;
        }
        if (!page?.ok) return out;
        const records = page.value?.records || [];
        if (records.length === 0) break;

        let oldestTime = Infinity;
        let oldestSeq = Infinity;
        for (const record of records) {
          const event = record?.event;
          if (event === undefined) continue;
          const seq = Number(event.seq);
          const at = Number(event.time) || 0;
          if (Number.isFinite(seq) && seq < oldestSeq) oldestSeq = seq;
          if (at < oldestTime) oldestTime = at;
          if (at < dayStart) {
            // This is the boundary event just before today. Keep its model
            // declaration if present: a conversation started yesterday under a
            // free tier and simply continued today still needs that initial
            // model for correct pricing. Do NOT keep its usage.
            if (event.type === "model/selection") collected.push(event);
            continue;
          }
          collected.push(event);
        }
        if (oldestTime < dayStart) break;
        if (page.value?.hasMore !== true) break;
        if (!Number.isFinite(oldestSeq) || oldestSeq <= 0) break;
        if (oldestSeq === beforeSeq) break;
        beforeSeq = oldestSeq;
      }

      // Replay oldest → newest so model switches apply to later messages.
      collected.sort((left, right) => (Number(left.seq) || 0) - (Number(right.seq) || 0));
      let model = "";
      for (const event of collected) {
        if (event.type === "model/selection") {
          model = String(event.data?.model || "");
          continue;
        }
        if (event.type !== "assistant/message") continue;
        const usage = event.data?.usage;
        if (usage === undefined || usage === null) continue;
        out.cacheRead += positiveNumber(usage.cacheReadTokens);
        out.cacheMiss += positiveNumber(usage.inputTokens);
        out.cacheWrite += positiveNumber(usage.cacheWriteTokens);
        out.output += positiveNumber(usage.outputTokens);
        out.cost += priceUsage(usage, model, Number(event.time) || Date.now());
      }
      return out;
    }

    /** Compact token counts: 12.3K / 4.6M, matching how the shell labels usage. */
    function formatTokens(value) {
      const count = positiveNumber(value);
      if (count >= 1e6) return `${(count / 1e6).toFixed(count >= 1e7 ? 1 : 2)}M`;
      if (count >= 1e3) return `${(count / 1e3).toFixed(count >= 1e4 ? 0 : 1)}K`;
      return String(Math.round(count));
    }

    function clockLabel(timestamp) {
      if (!timestamp) return "";
      const date = new Date(timestamp);
      return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
    }

    /**
     * Sidebar billing meter. The balance comes from the account Remote, while
     * the day total is an estimate over the Host's durable token-usage
     * projections priced with DeepSeek's official CNY table.
     */
    function createBalanceMeter(services) {
      const { account, session, locale } = services;
      return function GanyuBalanceMeter({ wide = true }) {
        const [state, setState] = React.useState({
          loading: true,
          balance: null,
          cost: null,
          tokens: null,
          error: false,
          at: null,
          expandedTokens: false,
          expandedBill: false,
          tokenMetric: "total",
          showConversations: false
        });
        const alive = React.useRef(true);

        const load = React.useCallback(async () => {
          setState((previous) => ({ ...previous, loading: true }));
          const version = (typeof window !== "undefined" && window.__DSH_BOOT__?.release?.version) || "0.2.1-rc.2";
          const accountClient = {
            version,
            locale: locale.getSnapshot().active,
            timezoneOffsetSeconds: -new Date().getTimezoneOffset() * 60
          };
          let balance = null;
          let cost = null;
          let costRows = [];
          let tokens = null;
          let error = false;
          try {
            balance = readBalance(await account.getBalance(accountClient));
          } catch {
            balance = null;
          }
          try {
            const result = await session.list({});
            if (result?.ok) {
              const items = result.value?.items || [];
              // Only conversations touched today can contribute to today's totals,
              // but their lifetime projections would over-count, so each such
              // session's log is read for the exact midnight-to-now usage.
              const startOfDay = new Date();
              startOfDay.setHours(0, 0, 0, 0);
              const dayStart = startOfDay.getTime();
              const active = items.filter((item) => Number(item.updatedAt) >= dayStart);
              const perSession = await Promise.all(active.map(async (item) => {
                const day = await readSessionDayUsage(session, item.sessionId, dayStart);
                return { item, day };
              }));
              costRows = perSession
                .map((entry) => {
                  const title = (entry.item?.projections?.values?.title || "").trim();
                  return {
                    id: entry.item.sessionId,
                    title: title === "" ? "未命名对话" : title,
                    cost: positiveNumber(entry.day?.cost)
                  };
                })
                .filter((entry) => entry.cost > 0)
                .sort((left, right) => right.cost - left.cost);
              cost = costRows.reduce((sum, entry) => sum + entry.cost, 0);
              tokens = todayTokens(perSession.map((entry) => ({ ...entry.item, dayUsage: entry.day })));
            } else error = true;
          } catch {
            error = true;
          }
          if (!alive.current) return;
          // Merge, never replace: the expand flags live in the same state and a
          // plain object would reset them on every refresh.
          setState((previous) => ({
            ...previous,
            loading: false,
            balance,
            cost,
            costRows,
            tokens,
            error,
            at: Date.now()
          }));
        }, []);

        React.useEffect(() => {
          alive.current = true;
          void load();
          const timer = window.setInterval(() => void load(), 60000);
          const onFocus = () => void load();
          const onVisibility = () => {
            if (document.visibilityState === "visible") void load();
          };
          window.addEventListener("focus", onFocus);
          document.addEventListener("visibilitychange", onVisibility);
          return () => {
            alive.current = false;
            window.clearInterval(timer);
            window.removeEventListener("focus", onFocus);
            document.removeEventListener("visibilitychange", onVisibility);
          };
        }, [load]);

        const balanceText = state.balance ? formatMoney(state.balance.total, state.balance.currency) : "--";
        const costText = state.cost === null ? "--" : `≈ ${formatMoney(state.cost, "CNY")}`;
        const tooltip = state.balance
          ? `余额：充值 ${formatMoney(state.balance.recharge, state.balance.currency)} + 赠金 ${formatMoney(state.balance.bonus, state.balance.currency)}；今日按官方 CNY 价格估算${state.at ? `，更新于 ${clockLabel(state.at)}` : ""}；点击刷新`
          : `余额暂不可用；今日按官方 CNY 价格估算${state.at ? `，更新于 ${clockLabel(state.at)}` : ""}；点击刷新`;

        const toggle = (key) => setState((previous) => ({ ...previous, [key]: !previous[key] }));

        if (!wide) {
          return React.createElement("button", {
            type: "button",
            className: "ganyu-bill ganyu-bill--rail",
            title: tooltip,
            "aria-label": `余额 ${balanceText}，今日 ${costText}`,
            onClick: () => void load()
          }, "¥");
        }

        const tokenCard = renderTokenCard(
          state,
          load,
          () => toggle("expandedTokens"),
          (metric) => setState((previous) => ({ ...previous, tokenMetric: metric })),
          () => setState((previous) => ({ ...previous, showConversations: !previous.showConversations }))
        );
        const billExpanded = state.expandedBill === true;
        const billDetail = billExpanded
          ? React.createElement("div", { className: "ganyu-token-detail" },
              (state.costRows ?? []).length === 0
                ? React.createElement("div", { className: "ganyu-token-empty" }, "今天还没有花费")
                : React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "ganyu-token-cols ganyu-bill-cols", "aria-hidden": "true" },
                      React.createElement("span", {}, "对话"),
                      React.createElement("span", {}, "花费")
                    ),
                    React.createElement("div", { className: "ganyu-token-list" },
                      (state.costRows ?? []).slice(0, 10).map((entry) =>
                        React.createElement("div", { className: "ganyu-token-item ganyu-bill-item", key: entry.id, title: `${entry.title} · 约 ${formatMoney(entry.cost, "CNY")}` },
                          React.createElement("span", { className: "ganyu-token-item__name" }, entry.title),
                          React.createElement("span", { className: "ganyu-token-item__cost" }, `≈ ${formatMoney(entry.cost, "CNY")}`)
                        )
                      )
                    )
                  )
            )
          : null;

        const billCard = React.createElement("button", {
          type: "button",
          className: `ganyu-bill${billExpanded ? " ganyu-bill--open" : " ganyu-bill--compact"}`,
          title: tooltip,
          "aria-expanded": billExpanded,
          "aria-label": `霜华账单，余额 ${balanceText}，今日 ${costText}，点击${billExpanded ? "收起" : "展开"}明细`,
          "data-ganyu-billing": "true",
          onClick: () => {
            toggle("expandedBill");
            if (!billExpanded) void load();
          }
        },
          React.createElement("div", { className: "ganyu-bill__head" },
            React.createElement("span", { className: "ganyu-bill__title" }, "❄ 霜华账单"),
            React.createElement("span", { className: "ganyu-bill__headline ganyu-bill__headline--cost" }, costText),
            React.createElement("span", { className: "ganyu-bill__chevron", "data-open": billExpanded ? "true" : "false" }, "▾")
          ),
          billExpanded
            ? React.createElement(React.Fragment, null,
                React.createElement("div", { className: "ganyu-bill__row" },
                  React.createElement("span", { className: "ganyu-bill__label" }, "余额"),
                  React.createElement("span", {
                    className: `ganyu-bill__value${state.balance ? "" : " ganyu-bill__value--muted"}`
                  }, balanceText)
                ),
                billDetail
              )
            : null
        );
        return React.createElement("div", { className: "ganyu-footer-stack" }, tokenCard, billCard);
      };
    }

    /** Metrics a conversation row can be ranked and displayed by. */
    const TOKEN_METRICS = [
      { id: "total", label: "合计", read: (row) => row.total },
      { id: "hitRate", label: "命中率", read: (row) => (row.hitRate === null ? 0 : row.hitRate) },
      { id: "cacheMiss", label: "未缓存输入", read: (row) => row.cacheMiss },
      { id: "cacheRead", label: "缓存读取", read: (row) => row.cacheRead },
      { id: "output", label: "输出", read: (row) => row.output }
    ];

    function formatMetric(metric, row) {
      if (metric.id === "hitRate") {
        return row.hitRate === null ? "--" : `${(row.hitRate * 100).toFixed(row.hitRate >= 0.995 ? 0 : 1)}%`;
      }
      return formatTokens(metric.read(row));
    }

    /**
     * Today's token card. Collapsed it is ONE line — title, day total, chevron.
     *
     * Expanded it shows the metric buttons, the day's four readings, and a
     * per-conversation list. The buttons choose BOTH what each row displays and
     * how the rows are ranked, so you can answer "which conversation burned the
     * most cache reads" as easily as "which used the most output".
     */
    function renderTokenCard(state, reload, onToggle, onMetric, onConversations) {
      const tokens = state.tokens;
      const expanded = state.expandedTokens === true;
      const activeId = state.tokenMetric ?? "total";
      const metric = TOKEN_METRICS.find((candidate) => candidate.id === activeId) ?? TOKEN_METRICS[0];
      const total = tokens === null || tokens.total === 0 ? "--" : formatTokens(tokens.total);
      const value = (count) => (tokens === null ? "--" : formatTokens(count));
      const muted = tokens === null ? " ganyu-bill__value--muted" : "";
      const rate = tokens?.hitRate;
      const rateText = rate === null || rate === undefined
        ? "--"
        : `${(rate * 100).toFixed(rate >= 0.995 ? 0 : 1)}%`;
      const rateMuted = rate === null || rate === undefined ? " ganyu-bill__value--muted" : "";
      const tooltip = tokens === null
        ? "今日的墨痕暂不可用；点击展开明细"
        : `今日 ${tokens.sessions} 段对话 · 合计 ${formatTokens(tokens.total)} tokens · ${rateText}`;

      const row = (label, text, extra) =>
        React.createElement("div", { className: "ganyu-bill__row" },
          React.createElement("span", { className: "ganyu-bill__label" }, label),
          React.createElement("span", { className: `ganyu-bill__value${extra ?? ""}` }, text)
        );

      const bar = React.createElement("div", { className: "ganyu-token-bar", "aria-hidden": "true" },
        React.createElement("span", {
          className: "ganyu-token-bar__fill",
          style: { width: `${rate === null || rate === undefined ? 0 : Math.round(rate * 100)}%` }
        })
      );

      // Metric chooser. Buttons sit outside the card's own click-to-collapse, so
      // each one stops propagation and re-ranks instead of folding the card.
      const chooser = React.createElement("div", { className: "ganyu-metric-row" },
        TOKEN_METRICS.map((candidate) =>
          React.createElement("span", {
            key: candidate.id,
            role: "button",
            tabIndex: 0,
            className: `ganyu-metric${candidate.id === metric.id ? " ganyu-metric--on" : ""}`,
            "data-metric": candidate.id,
            "aria-pressed": candidate.id === metric.id,
            title: `按「${candidate.label}」排序`,
            onClick: (event) => {
              event.preventDefault();
              event.stopPropagation();
              onMetric(candidate.id);
            },
            onKeyDown: (event) => {
              if (event.key !== "Enter" && event.key !== " ") return;
              event.preventDefault();
              event.stopPropagation();
              onMetric(candidate.id);
            }
          }, candidate.label)
        )
      );

      // The conversation list has its own switch: the totals stay visible while
      // the detailed per-conversation rows fold away.
      const listShown = state.showConversations === true;
      const listToggle = React.createElement("span", {
        role: "button",
        tabIndex: 0,
        className: `ganyu-detail-toggle${listShown ? " ganyu-detail-toggle--on" : ""}`,
        "aria-expanded": listShown,
        "data-detail-toggle": "token",
        title: listShown ? "隐藏各对话消耗" : "显示各对话消耗",
        onClick: (event) => {
          event.preventDefault();
          event.stopPropagation();
          onConversations();
        },
        onKeyDown: (event) => {
          if (event.key !== "Enter" && event.key !== " ") return;
          event.preventDefault();
          event.stopPropagation();
          onConversations();
        }
      },
        React.createElement("span", { className: "ganyu-detail-toggle__chevron", "data-open": listShown ? "true" : "false" }, "▾"),
        listShown ? "隐藏各对话" : "展开各对话"
      );

      const rows = tokens?.rows ?? [];
      const ranked = [...rows].sort((left, right) => metric.read(right) - metric.read(left));
      const conversationList = listShown
        ? React.createElement("div", { className: "ganyu-token-detail" },
            rows.length === 0
              ? React.createElement("div", { className: "ganyu-token-empty" }, "今天还没有对话消耗")
              : React.createElement(React.Fragment, null,
                  React.createElement("div", { className: "ganyu-token-cols", "aria-hidden": "true" },
                    React.createElement("span", {}, "对话"),
                    React.createElement("span", {}, metric.label)
                  ),
                  React.createElement("div", { className: "ganyu-token-list" },
                    ranked.slice(0, 12).map((entry) =>
                      React.createElement("div", {
                        className: "ganyu-token-item",
                        key: entry.id,
                        title: [
                          entry.title,
                          `合计 ${formatTokens(entry.total)}`,
                          `命中率 ${entry.hitRate === null ? "--" : `${(entry.hitRate * 100).toFixed(1)}%`}`,
                          `缓存读取 ${formatTokens(entry.cacheRead)}`,
                          `未缓存输入 ${formatTokens(entry.cacheMiss)}`,
                          `输出 ${formatTokens(entry.output)}`
                        ].join(" · ")
                      },
                        React.createElement("span", { className: "ganyu-token-item__name" }, entry.title),
                        React.createElement("span", { className: "ganyu-token-item__metric" }, formatMetric(metric, entry))
                      )
                    )
                  ),
                  ranked.length > 12
                    ? React.createElement("div", { className: "ganyu-token-more" }, `还有 ${ranked.length - 12} 段…`)
                    : null
                )
          )
        : null;

      const detail = expanded
        ? React.createElement(React.Fragment, null,
            row("命中率", rateText, rateMuted),
            row("未缓存输入", value(tokens?.cacheMiss), muted),
            row("缓存读取", value(tokens?.cacheRead), muted),
            row("输出", value(tokens?.output), muted),
            bar,
            listToggle,
            // The metric buttons only choose how the conversation list reads, so
            // they fold away together with it instead of standing on their own.
            listShown ? chooser : null,
            conversationList
          )
        : null;

      return React.createElement("button", {
        type: "button",
        className: `ganyu-bill ganyu-bill--tokens${expanded ? " ganyu-bill--open" : " ganyu-bill--compact"}`,
        title: tooltip,
        "aria-expanded": expanded,
        "aria-label": `凝霜墨痕，今日合计 ${total} tokens，点击${expanded ? "收起" : "展开"}明细`,
        "data-ganyu-tokens": "true",
        onClick: () => {
          onToggle();
          if (!expanded) void reload();
        }
      },
        React.createElement("div", { className: "ganyu-bill__head" },
          React.createElement("span", { className: "ganyu-bill__title" }, "❄ 凝霜墨痕"),
          React.createElement("span", { className: `ganyu-bill__headline ganyu-bill__headline--token${tokens === null || tokens.total === 0 ? " ganyu-bill__value--muted" : ""}` }, total),
          React.createElement("span", { className: "ganyu-bill__chevron", "data-open": expanded ? "true" : "false" }, "▾")
        ),
        detail
      );
    }

    /**
     * Place the Settings icon inside the account row, directly right of the
     * name / phone span, and keep it there across re-renders.
     *
     * The account trigger is a `<button>` owned by another package, so this is
     * a DOM placement rather than a slot: the shell declares no slot at that
     * position. A MutationObserver re-inserts the icon if React re-renders the
     * chat row, and the observer is torn down with the plugin fiber.
     */
    function mountAccountRowIcon(Icon) {
      if (typeof document === "undefined" || typeof MutationObserver === "undefined") return () => {};
      const doc = document;
      const MARK = "data-ganyu-settings-icon";

      const findRow = () => {
        const labelled =
          doc.querySelector('button[aria-label="账号菜单"]') ||
          doc.querySelector('button[aria-label="Account menu"]');
        if (labelled !== null) return labelled;
        // Fallback: the trigger is the menu button inside the sidebar footer.
        const footer = doc.querySelector('[class*="footArea"], [class*="settingsArea"]');
        return footer?.querySelector('[aria-haspopup="menu"]') ?? null;
      };

      const ensure = () => {
        const row = findRow();
        if (row === null) return;
        if (row.querySelector(`[${MARK}]`) !== null) return;
        // The name/phone span is the trigger's last span child.
        const target = [...row.children].reverse().find((node) => node.tagName === "SPAN") ?? row;
        const holder = doc.createElement("span");
        holder.className = "ganyu-settings-icon-holder";
        holder.setAttribute(MARK, "");
        // A native button; React never owns this node, so its click is ours.
        const button = doc.createElement("button");
        button.type = "button";
        button.className = "ganyu-settings-icon";
        button.title = "打开设置";
        button.setAttribute("aria-label", "打开设置");
        button.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          openSettings();
        });
        // Civilization emblem instead of a generic gear.
        button.innerHTML =
          '<img src="' + CIV_ICON + '" width="18" height="18" alt="" aria-hidden="true" ' +
          'style="display:block;border-radius:50%;pointer-events:none" />';
        holder.appendChild(button);
        target.insertAdjacentElement("afterend", holder);
      };

      const observer = new MutationObserver(() => ensure());
      const start = () => observer.observe(doc.body, { childList: true, subtree: true });
      ensure();
      start();
      return () => observer.disconnect();
    }

    /**
     * Open the settings dialog through the account menu's own item.
     *
     * Delivery constraints that shaped this:
     *  - On Desktop the shortcut is owned by the native keyboard bridge, so a
     *    synthetic keydown is ignored.
     *  - `ctx.shortcuts` can register commands but cannot run one.
     *  - The dialog's open state lives in a store behind `sidebar.settings`,
     *    which is not published as a service.
     * The menu item is therefore the one supported entry point; clicking it
     * runs the same handler the user would trigger by hand.
     */
    /**
     * Open the settings dialog directly, without going through the account menu.
     *
     * `openSettings` lives in the props of the `settings.launcher` entry — the
     * account menu component. React keeps those props reachable from its host
     * DOM node through the fiber attached to it (`__reactFiber$…`), so walking
     * up from the trigger reaches a fiber that carries `openSettings`. That is
     * the one call the shell itself performs when the menu item is chosen, so
     * behaviour stays identical — only the visible menu flash disappears.
     *
     * @returns true when a handler was found and invoked.
     */
    function openSettingsDirectly() {
      const trigger =
        document.querySelector('button[aria-label="账号菜单"]') ||
        document.querySelector('button[aria-label="Account menu"]');
      if (trigger === null) return false;
      const fiberKey = Object.keys(trigger).find((key) => key.startsWith("__reactFiber$"));
      if (fiberKey === undefined) return false;
      let fiber = trigger[fiberKey];
      for (let depth = 0; fiber !== null && fiber !== undefined && depth < 40; depth += 1) {
        const props = fiber.memoizedProps;
        if (props !== null && typeof props === "object" && typeof props.openSettings === "function") {
          try {
            props.openSettings();
            return true;
          } catch (error) {
            console.warn("[ganyu-theme] openSettings failed", error);
            return false;
          }
        }
        fiber = fiber.return;
      }
      return false;
    }

    /**
     * Fallback for the (unexpected) case where the fiber walk cannot reach
     * `openSettings`: drive the account menu's own Settings item. The menu may
     * flash briefly, but the call still lands on supported UI.
     */
    function openSettingsFromMenu() {
      const ITEM_MATCH = /^(设置|Settings)/;
      const activate = () => {
        const item = [...document.querySelectorAll('[role="menuitem"]')].find((node) =>
          ITEM_MATCH.test((node.innerText || "").trim())
        );
        if (item === undefined) return false;
        item.click();
        return true;
      };
      if (activate()) return;
      const trigger =
        document.querySelector('button[aria-label="账号菜单"]') ||
        document.querySelector('button[aria-label="Account menu"]');
      if (trigger === null) return;
      trigger.click();
      let tries = 0;
      const tick = () => {
        if (activate() || ++tries > 15) return;
        window.setTimeout(tick, 40);
      };
      window.setTimeout(tick, 60);
    }

    /** Direct first, supported-menu fallback second. */
    function openSettings() {
      if (openSettingsDirectly()) return;
      openSettingsFromMenu();
    }

    /** Shared 16px outline gear, drawn inline so no package export is needed. */
    function createGearIcon() {
      return React.createElement("svg", {
        width: 15,
        height: 15,
        viewBox: "0 0 16 16",
        fill: "none",
        "aria-hidden": "true",
        className: "ganyu-settings-btn__icon"
      },
        React.createElement("path", {
          d: "M6.7 1.9a1.3 1.3 0 0 1 2.6 0l.14.72c.32.1.62.23.9.39l.63-.36a1.3 1.3 0 0 1 1.84 1.84l-.36.63c.16.28.29.58.39.9l.72.14a1.3 1.3 0 0 1 0 2.6l-.72.14c-.1.32-.23.62-.39.9l.36.63a1.3 1.3 0 0 1-1.84 1.84l-.63-.36c-.28.16-.58.29-.9.39l-.14.72a1.3 1.3 0 0 1-2.6 0l-.14-.72c-.32-.1-.62-.23-.9-.39l-.63.36a1.3 1.3 0 0 1-1.84-1.84l.36-.63c-.16-.28-.29-.58-.39-.9l-.72-.14a1.3 1.3 0 0 1 0-2.6l.72-.14c.1-.32.23-.62.39-.9l-.36-.63A1.3 1.3 0 0 1 4.6 2.65l.63.36c.28-.16.58-.29.9-.39z",
          stroke: "currentColor",
          strokeWidth: 1.15,
          strokeLinejoin: "round"
        }),
        React.createElement("circle", {
          cx: 8,
          cy: 8,
          r: 2.1,
          stroke: "currentColor",
          strokeWidth: 1.15
        })
      );
    }

    /**
     * Icon for the `dsh-pet` settings row. Every part uses `currentColor`, so the
     * mark follows the row's own text color — the dark settings nav flips it to
     * ice white, and a light nav would keep it readable too.
     */
    function createPetSectionIcon() {
      return function GanyuPetSectionIcon({ size = 16 } = {}) {
        return React.createElement("svg", {
          width: size,
          height: size,
          viewBox: "0 0 16 16",
          fill: "none",
          "aria-hidden": "true"
        },
          React.createElement("g", { stroke: "currentColor", strokeWidth: 1.2, strokeLinecap: "round" },
            React.createElement("path", { d: "M2.4 4.6h11.2" }),
            React.createElement("path", { d: "M2.4 8h11.2" }),
            React.createElement("path", { d: "M2.4 11.4h11.2" })
          ),
          React.createElement("g", { fill: "currentColor" },
            React.createElement("circle", { cx: 5.6, cy: 4.6, r: 1.55 }),
            React.createElement("circle", { cx: 10.4, cy: 8, r: 1.55 }),
            React.createElement("circle", { cx: 6.8, cy: 11.4, r: 1.55 })
          )
        );
      };
    }

    /* ---------------------------------------------------------------------
     * 凝霜书签 — a small bookmark shelf for file paths the user wants to keep.
     *
     * Storage is localStorage only: a list of { path, label, at }. Nothing is
     * copied; a bookmark is just the path, so the file keeps living where it
     * was produced. Opening goes through the host's `openWorkspacePath`, the
     * same route the shell's own "Open in..." uses.
     * ------------------------------------------------------------------- */
    /* 雪泥鸿爪 — bookmarks of file paths, grouped by a user-chosen folder name.
       Data shape: { "groups": [{ "name": string, "at": number }],
                     "marks":  [{ "path", "label", "group", "at" }] }
       Everything lives in localStorage; no file is ever copied. */
    const MARK_KEY = "dsh-theme-ganyu/marks-v2";
    const DEFAULT_GROUP = "未分组";

    function normalizeMarks(raw) {
      if (raw === null || typeof raw !== "object") return { groups: [], marks: [] };
      const groups = Array.isArray(raw.groups)
        ? raw.groups
            .filter((g) => g !== null && typeof g === "object" && typeof g.name === "string" && g.name !== "")
            .map((g) => ({ name: g.name, at: Number(g.at) || 0 }))
        : [];
      const marks = Array.isArray(raw.marks)
        ? raw.marks
            .filter((m) => m !== null && typeof m === "object" && typeof m.path === "string")
            .map((m) => ({
              path: m.path,
              label: typeof m.label === "string" && m.label !== "" ? m.label : basenameOf(m.path),
              group: typeof m.group === "string" && m.group !== "" ? m.group : DEFAULT_GROUP,
              at: Number(m.at) || 0,
              from: typeof m.from === "string" ? m.from : ""
            }))
        : [];
      return { groups, marks };
    }

    // Parsed-store memo. Keyed on the raw string, so any external write (another
    // tab, DevTools) invalidates it automatically.
    let marksCacheRaw = null;
    let marksCacheValue = { groups: [], marks: [] };

    function readMarks() {
      try {
        const text = window.localStorage.getItem(MARK_KEY);
        if (text === marksCacheRaw) return marksCacheValue;
        marksCacheRaw = text;
        marksCacheValue = normalizeMarks(text === null ? null : JSON.parse(text));
        return marksCacheValue;
      } catch {
        return { groups: [], marks: [] };
      }
    }

    function writeMarks(data) {
      try {
        const text = JSON.stringify(data);
        window.localStorage.setItem(MARK_KEY, text);
        marksCacheRaw = text;
        marksCacheValue = data;
        return true;
      } catch {
        return false;
      }
    }

    /** Every group name in use, default group last. */
    function groupNames(data) {
      const names = [];
      for (const group of data.groups) if (!names.includes(group.name)) names.push(group.name);
      for (const mark of data.marks) if (!names.includes(mark.group)) names.push(mark.group);
      return names;
    }

    /** Last path segment, used when the user does not type a label. */
    function basenameOf(path) {
      const trimmed = String(path || "").replace(/[\\/]+$/, "");
      const cut = Math.max(trimmed.lastIndexOf("/"), trimmed.lastIndexOf("\\"));
      const name = cut >= 0 ? trimmed.slice(cut + 1) : trimmed;
      return name === "" ? trimmed : name;
    }

    /**
     * Current conversation title, read from the session header the shell renders.
     * Used only as a label on a bookmark ("came from this conversation"), so a
     * miss simply leaves it blank rather than breaking anything.
     */
    // Cached for a short window: this runs on every collect and used to call
    // `innerText`, which forces a synchronous layout of the whole header.
    let titleCache = { at: 0, value: "" };
    const TITLE_TTL_MS = 2000;

    function currentConversationTitle() {
      const now = Date.now();
      if (now - titleCache.at < TITLE_TTL_MS) return titleCache.value;

      let value = "";
      try {
        const header = document.querySelector('[data-slot="conversation.session.header"]');
        // textContent instead of innerText: no forced layout.
        const raw = (header?.textContent || "").split(String.fromCharCode(10));
        for (const chunk of raw) {
          const text = chunk.trim();
          if (text !== "") {
            value = text.slice(0, 80);
            break;
          }
        }
        if (value === "") {
          const node = document.querySelector("[class*='crumb']:not([class*='Sep'])");
          const text = (node?.textContent || "").trim();
          if (text !== "") value = text.slice(0, 80);
        }
      } catch {
        value = "";
      }

      titleCache = { at: now, value };
      return value;
    }

    /** Coarse "x 分钟前 / x 天前" for the shelf rows. */
    function relativeTime(at) {
      if (!at) return "";
      const diff = Date.now() - at;
      const min = Math.floor(diff / 60000);
      if (min < 1) return "刚刚";
      if (min < 60) return `${min} 分钟前`;
      const hour = Math.floor(min / 60);
      if (hour < 24) return `${hour} 小时前`;
      const day = Math.floor(hour / 24);
      if (day < 30) return `${day} 天前`;
      const date = new Date(at);
      return `${date.getMonth() + 1}/${date.getDate()}`;
    }

    /**
     * 雪泥鸿爪 — the header button plus its shelf.
     *
     * Grouping is manual: the user names a group and files are filed into it.
     * A group with no files still exists (it is kept in `groups`), so an empty
     * group does not vanish the moment its last file is removed.
     */
    function createMarkShelf(services) {
      const { session, holder } = services;
      // `holder` is a mutable box owned by apply(): the sidebar and sessions
      // services settle asynchronously, so they are read from the box at click
      // time. Destructuring them here would freeze them at undefined.
      const live = () => holder ?? {};
      const getSidebar = () => live().sidebarRight;
      const getSessions = () => live().sessions;

      /** DSH resource address for a workspace file, as the shell builds it. */
      const fileAddress = (sessionId, path) => {
        const normalized = String(path).replace(/\\/g, "/").replace(/^(?:\.\/)+/, "");
        const encodeSegment = (segment) => encodeURIComponent(segment).replace(/%3A/gi, ":");
        const encoded = normalized.split("/").map(encodeSegment).join("/");
        return `dsh-resource://file/session/${encodeSegment(sessionId)}/${encoded}`;
      };

      return function GanyuMarks() {
        const [open, setOpen] = React.useState(false);
        const [data, setData] = React.useState(() => readMarks());
        const [path, setPath] = React.useState("");
        const [label, setLabel] = React.useState("");
        const [group, setGroup] = React.useState(DEFAULT_GROUP);
        const [newGroup, setNewGroup] = React.useState("");
        const [filter, setFilter] = React.useState(""); // "" = all groups
        const [notice, setNotice] = React.useState("");
        // One-shot flags for the two "this just happened" animations.
        const [popped, setPopped] = React.useState(false);
        const [freshPath, setFreshPath] = React.useState("");
        const rootRef = React.useRef(null);

        // The sidebar API is keyed by session; take the active one from the
        // sessions store at render time (falls back to empty when unknown).
        /**
         * Active session id. `sessions` exposes it under different shapes
         * depending on the build, so try each instead of trusting one.
         */
        const resolveSessionId = () => {
          const snap = (() => {
            try {
              const store = getSessions();
              return store?.list?.getSnapshot?.() ?? store?.getSnapshot?.();
            } catch {
              return undefined;
            }
          })();
          const direct = snap?.mainSessionId ?? snap?.currentSessionId ?? snap?.activeSessionId;
          if (typeof direct === "string" && direct !== "") return direct;
          // Fall back to the DOM: the shell tags the active conversation.
          try {
            const node = document.querySelector("[data-sidebar-right-session]");
            const id = node?.getAttribute("data-sidebar-right-session");
            if (typeof id === "string" && id !== "") return id;
          } catch {
            /* ignore */
          }
          return "";
        };


        const commit = (next) => {
          if (!writeMarks(next)) {
            setNotice("存不进去（本地存储被禁用？）");
            return false;
          }
          setData(next);
          // Tell every presented-file card to re-read the store, so a card shows
          // "已收" for as long as the bookmark exists — not for a timer's worth.
          window.dispatchEvent(new CustomEvent("ganyu:marks-changed"));
          return true;
        };

        const flash = (text) => {
          setNotice(text);
          window.setTimeout(() => setNotice(""), 2200);
        };

        /** Fire the "added" animations once, then clear the flags. */
        const celebrate = (path) => {
          setPopped(true);
          setFreshPath(path);
          window.setTimeout(() => setPopped(false), 460);
          window.setTimeout(() => setFreshPath(""), 460);
        };

        // Outside click / Escape closes; the shelf is not a modal.
        React.useEffect(() => {
          if (!open) return;
          const onDown = (event) => {
            if (rootRef.current !== null && !rootRef.current.contains(event.target)) setOpen(false);
          };
          const onKey = (event) => {
            if (event.key === "Escape") setOpen(false);
          };
          document.addEventListener("pointerdown", onDown, true);
          document.addEventListener("keydown", onKey, true);
          return () => {
            document.removeEventListener("pointerdown", onDown, true);
            document.removeEventListener("keydown", onKey, true);
          };
        }, [open]);

        // A file card in the conversation can post a bookmark request without
        // opening the shelf; the shelf is the single writer of the store.
        React.useEffect(() => {
          const onRequest = async (event) => {
            const detail = event?.detail;
            if (detail === null || typeof detail !== "object" || typeof detail.path !== "string") return;
            // An attached file gives only a name; resolve it to a real path first.
            const target = detail.nameOnly === true ? await resolveAttachment(detail.path) : detail.path;
            const current = readMarks();
            if (current.marks.some((mark) => mark.path === target)) {
              flash("这个路径已经记下了");
              return;
            }
            const entryGroup = typeof detail.group === "string" && detail.group !== "" ? detail.group : DEFAULT_GROUP;
            const next = {
              groups: current.groups.some((g) => g.name === entryGroup)
                ? current.groups
                : [{ name: entryGroup, at: Date.now() }, ...current.groups],
              marks: [{
                path: target,
                label: basenameOf(target),
                group: entryGroup,
                at: Date.now(),
                from: typeof detail.from === "string" ? detail.from : currentConversationTitle()
              }, ...current.marks]
            };
            if (commit(next)) {
              flash("已收入雪泥鸿爪");
              celebrate(target);
            }
          };
          /**
           * A file the user attached carries only a NAME, not a path. Resolve it
           * against the session's cwd before storing, so the bookmark still
           * opens; if resolution fails, store the name and say so.
           */
          const resolveAttachment = async (name) => {
            try {
              const stat = await session.stat?.({ path: name });
              const absolute = stat?.ok ? stat.value?.absolutePath : undefined;
              if (typeof absolute === "string" && absolute !== "") return absolute;
            } catch {
              /* fall through */
            }
            try {
              const result = await session.workspaceFiles?.stat?.(undefined, name);
              const absolute = result?.ok ? result.value?.absolutePath : undefined;
              if (typeof absolute === "string" && absolute !== "") return absolute;
            } catch {
              /* fall through */
            }
            return name;
          };

          // Toggle-off from a card: remove the bookmark by path.
          const onUnmark = (event) => {
            const target = event?.detail?.path;
            if (typeof target !== "string" || target === "") return;
            const current = readMarks();
            if (!current.marks.some((mark) => mark.path === target)) return;
            const next = {
              groups: current.groups,
              marks: current.marks.filter((mark) => mark.path !== target)
            };
            if (commit(next)) flash("已从雪泥鸿爪取下");
          };

          // Reload local state whenever anyone writes the store, so a bookmark
          // made from a file card shows up in the shelf immediately.
          const onChangedOutside = () => {
            setData(readMarks());
          };

          window.addEventListener("ganyu:mark", onRequest);
          window.addEventListener("ganyu:unmark", onUnmark);
          window.addEventListener("ganyu:marks-changed", onChangedOutside);
          window.addEventListener("storage", onChangedOutside);
          return () => {
            window.removeEventListener("ganyu:mark", onRequest);
            window.removeEventListener("ganyu:unmark", onUnmark);
            window.removeEventListener("ganyu:marks-changed", onChangedOutside);
            window.removeEventListener("storage", onChangedOutside);
          };
        }, []);

        const addMark = () => {
          const target = path.trim();
          if (target === "") {
            flash("先填一个文件路径");
            return;
          }
          if (data.marks.some((mark) => mark.path === target)) {
            flash("这个路径已经记下了");
            return;
          }
          const next = {
            groups: data.groups.some((g) => g.name === group)
              ? data.groups
              : [{ name: group, at: Date.now() }, ...data.groups],
            marks: [
              {
                path: target,
                label: label.trim() === "" ? basenameOf(target) : label.trim(),
                group,
                at: Date.now(),
                from: currentConversationTitle()
              },
              ...data.marks
            ]
          };
          if (commit(next)) {
            setPath("");
            setLabel("");
            flash("已收入雪泥鸿爪");
            celebrate(target);
          }
        };

        const addGroup = () => {
          const name = newGroup.trim();
          if (name === "") return;
          if (groupNames(data).includes(name)) {
            flash("这个分组已经存在");
            return;
          }
          if (commit({ groups: [{ name, at: Date.now() }, ...data.groups], marks: data.marks })) {
            setNewGroup("");
            setGroup(name);
            flash(`已建分组「${name}」`);
          }
        };

        const removeMark = (target) => {
          commit({
            groups: data.groups,
            marks: data.marks.filter((mark) => mark.path !== target)
          });
        };

        const removeGroup = (name) => {
          // Removing a group moves its files back to the default group rather
          // than deleting them: bookmarks are cheap, but losing them is rude.
          commit({
            groups: data.groups.filter((g) => g.name !== name),
            marks: data.marks.map((mark) => (mark.group === name ? { ...mark, group: DEFAULT_GROUP } : mark))
          });
          if (filter === name) setFilter("");
          flash(`「${name}」已移除，文件移到未分组`);
        };

        const moveTo = (target, name) => {
          commit({
            groups: data.groups,
            marks: data.marks.map((mark) => (mark.path === target ? { ...mark, group: name } : mark))
          });
        };

        /**
         * Open a bookmarked file the way DSH itself does.
         *
         * `openWorkspacePath` needs an application on hosts with no recorded
         * default, so resolve the associations first and pass the default
         * application id; only fall back to a bare "open" when nothing is known.
         */
        /**
         * Open a bookmarked file the way DSH itself does it.
         *
         * `openWorkspacePath` hands the file to an OS application, which fails on
         * hosts with no recorded association ("文件可能已被移走或没有关联程序").
         * The shell's own file cards instead open a RESOURCE IN THE RIGHT SIDEBAR
         * via `sidebarRight.openResourceIn`, and that path needs no OS
         * association at all. Try the sidebar first, then fall back.
         */
        /**
         * Turn a name-only bookmark into a real path by asking the workspace to
         * resolve it, then rewriting the stored entry.
         */
        /**
         * Rewrite a name-only bookmark into an absolute path.
         *
         * Delegates to resolveToAbsolute, which joins onto the session cwd. The
         * old body only tried two `workspaceFiles.stat` shapes that this build
         * does not expose, so it always answered "没找到".
         */
        const repairMark = async (name) => {
          const resolved = await resolveToAbsolute(name);
          if (typeof resolved !== "string" || resolved === "") {
            flash(`没找到「${name}」，可能需要手动填完整路径`);
            return;
          }
          commit({
            groups: data.groups,
            marks: data.marks.map((mark) => (mark.path === name ? { ...mark, path: resolved } : mark))
          });
          flash("已修正为完整路径");
        };

        /**
         * Open a bookmarked file exactly the way DSH does on Windows.
         *
         * The host resolves `open` through `explorer.exe` + a file URI, which is
         * what a double-click uses. That route needs a path that actually exists,
         * so the primary failure is a STALE path (a display name stored instead
         * of the real one) rather than a missing program association.
         *
         * Order: sidebar (no filesystem needed) → host open → explorer fallback.
         */
        /**
         * Open a bookmark IN THE SIDEBAR, like clicking a file card in DSH.
         *
         * `sidebarRight.openResourceIn` silently does nothing when the session
         * has no adopted sidebar surface, which used to look like "the button is
         * dead" and then fell through to opening a Windows app. This now reports
         * exactly which precondition failed instead of quietly degrading.
         *
         * `openResourceIn` is synchronous and returns nothing, so success is
         * assumed once the preconditions hold; the fallback is only offered when
         * the sidebar genuinely cannot take the file.
         */
        const openInSidebar = (target) => {
          const sidebar = getSidebar();
          if (sidebar === undefined || typeof sidebar.openResourceIn !== "function") {
            return "侧边栏接口不可用";
          }
          const sessionId = resolveSessionId();
          if (sessionId === "") {
            return "拿不到当前会话 ID";
          }
          try {
            // No `destination`: place() opens a NEW tab for each file, so several
            // bookmarks can be previewed at once. Passing destination:"sidebar"
            // went through placeIn(), which reuses one tab per content id and
            // therefore replaced the previously previewed file.
            sidebar.openResourceIn(sessionId, fileAddress(sessionId, target), {});
            return null;
          } catch (error) {
            return `侧边栏打开出错：${error instanceof Error ? error.message : String(error)}`;
          }
        };
        /** Current working directory of the active session, if discoverable. */
        const sessionCwd = () => {
          try {
            const store = getSessions();
            const snap = store?.list?.getSnapshot?.() ?? store?.getSnapshot?.();
            const id = resolveSessionId();
            const entry = snap?.byId?.[id];
            const cwd = entry?.cwd ?? entry?.workspacePath ?? snap?.cwd;
            if (typeof cwd === "string" && cwd !== "") return cwd;
          } catch {
            /* fall through */
          }
          return "";
        };

        /**
         * Join a workspace-relative path onto the session cwd.
         *
         * `session.workspaceFiles.stat` is not available under that name in this
         * build, so `repairMark` always reported "没找到". Plain string joining
         * needs no API and matches how the shell builds resource addresses.
         */
        const joinCwd = (cwd, relative) => {
          if (cwd === "") return null;
          const sep = /^[A-Za-z]:/.test(cwd) ? "\\" : "/";
          const root = cwd.replace(/[/\\]+$/, "");
          const tail = String(relative).replace(/^(?:\.?[/\\])+/, "");
          return `${root}${sep}${tail}`;
        };

        /** Resolve a workspace-relative path to its absolute form. */
        const resolveToAbsolute = async (relative) => {
          const tryStat = async (result) => {
            if (result?.ok && typeof result.value?.absolutePath === "string") {
              return result.value.absolutePath;
            }
            return null;
          };

          // 1) Join onto the session cwd first. This needs no workspace-stat API
          //    and mirrors how the shell builds resource addresses, so it is the
          //    reliable route when the stat API is unavailable.
          const cwd = sessionCwd();
          const joined = joinCwd(cwd, relative);
          if (joined !== null) {
            try {
              const viaJoin = await session?.workspaceFiles?.stat?.(undefined, joined);
              const found = await tryStat(viaJoin);
              if (found !== null) return found;
            } catch {
              /* keep trying */
            }
          }


          const attempts = [relative];
          // A mention may carry only the file name; try the common workspace
          // roots before giving up.
          if (!/[\\/]/.test(relative)) {
            for (const prefix of ["wiki/", "docs/", "documents/", "src/", "assets/"]) {
              attempts.push(`${prefix}${relative}`);
            }
          }

          for (const candidate of attempts) {
            try {
              const viaFiles = await session?.workspaceFiles?.stat?.(undefined, candidate);
              const found = await tryStat(viaFiles);
              if (found !== null) return found;
            } catch {
              /* next */
            }
            try {
              const viaSession = await session?.stat?.({ path: candidate });
              const found = await tryStat(viaSession);
              if (found !== null) return found;
            } catch {
              /* next */
            }
          }

          // Last resort: search the workspace tree for a matching basename.
          const base = relative.split(/[\\/]/).pop();
          try {
            const results = await session?.workspaceFiles?.search?.(undefined, base);
            const list = results?.ok ? results.value : null;
            if (Array.isArray(list)) {
              const hit = list.find((entry) => {
                const p = typeof entry === "string" ? entry : entry?.path;
                return typeof p === "string" && p.split(/[\\/]/).pop() === base;
              });
              const p = typeof hit === "string" ? hit : hit?.path;
              if (typeof p === "string" && p !== "") return p;
            }
          } catch {
            /* search unavailable */
          }

          // Nothing verified. Return the cwd-joined path anyway: it is the correct
          // absolute location, and a failed stat must not block opening a real file.
          return joined;
        };

        const openPath = async (target) => {
          let absoluteTarget = target;
          const isAbsolute = (value) => /^[A-Za-z]:[\\/]/.test(value)
            || value.startsWith("\\\\")
            || value.startsWith("/");

          if (!isAbsolute(absoluteTarget)) {
            // The resource address is workspace-relative and the sidebar resolves
            // it against the workspace root, so opening works either way. Only the
            // stored entry gets upgraded, so later opens skip this lookup.
            const resolved = await resolveToAbsolute(absoluteTarget);
            if (resolved !== null) {
              absoluteTarget = resolved;
              try {
                commit({
                  groups: data.groups,
                  marks: data.marks.map((mark) => (mark.path === target ? { ...mark, path: resolved } : mark))
                });
              } catch {
                /* best-effort */
              }
            }
          }

          const sidebarProblem = openInSidebar(absoluteTarget);
          if (sidebarProblem === null) {
            flash("已在右侧栏打开");
            return;
          }

          // The sidebar cannot show it. Say why, then fall back to the host
          // opener (explorer.exe on Windows) rather than leaving a dead button.
          try {
            const result = await session?.openWorkspacePath?.({ path: absoluteTarget, action: "open" });
            if (result?.ok) flash(`${sidebarProblem}，已改用系统程序打开`);
            else flash(`${sidebarProblem}，系统也打不开（文件可能已被移走）`);
          } catch {
            flash(`${sidebarProblem}，系统也打不开`);
          }
        };;;

        const names = groupNames(data);
        const visible = filter === "" ? data.marks : data.marks.filter((mark) => mark.group === filter);

        // Group the visible marks; a group with no marks is still listed when it
        // is the active filter so the header never lies about being empty.
        const buckets = [];
        for (const name of names) {
          if (filter !== "" && name !== filter) continue;
          const items = visible.filter((mark) => mark.group === name);
          if (items.length === 0 && filter === "") continue;
          buckets.push({ name, items });
        }
        const orphans = visible.filter((mark) => !names.includes(mark.group));
        if (orphans.length > 0) buckets.push({ name: DEFAULT_GROUP, items: orphans });

        const markRow = (mark) =>
          React.createElement("div", {
            className: `ganyu-mark__item${freshPath === mark.path ? " ganyu-mark__item--new" : ""}`,
            key: mark.path
          },
            React.createElement("div", { className: "ganyu-mark__meta" },
              React.createElement("span", { className: "ganyu-mark__name", title: mark.path }, mark.label),
              React.createElement("span", { className: "ganyu-mark__pathrow" },
                React.createElement("span", { className: "ganyu-mark__path", title: mark.path }, mark.path),
                mark.at ? React.createElement("span", { className: "ganyu-mark__time" }, relativeTime(mark.at)) : null
              ),
              mark.from
                ? React.createElement("span", { className: "ganyu-mark__from", title: `来自对话：${mark.from}` }, `出自「${mark.from}」`)
                : null
            ),
            React.createElement("div", { className: "ganyu-mark__acts" },
              React.createElement("select", {
                className: "ganyu-mark__move",
                title: "移动到分组",
                value: mark.group,
                onChange: (event) => moveTo(mark.path, event.target.value)
              }, names.map((name) => React.createElement("option", { key: name, value: name }, name))),
              React.createElement("button", {
                type: "button", className: "ganyu-mark__act", title: "打开", "aria-label": `打开 ${mark.label}`,
                onClick: () => void openPath(mark.path)
              }, "打开"),
              // A bookmark whose stored path is only a name can never open; offer
              // a repair instead of leaving a dead row on the shelf.
              mark.path !== "" && !/^[A-Za-z]:[\\/]/.test(mark.path) && !mark.path.startsWith("/")
                ? React.createElement("button", {
                    type: "button",
                    className: "ganyu-mark__act ganyu-mark__act--fix",
                    title: "这个名字不是完整路径，点击在工作区里重新定位",
                    onClick: () => void repairMark(mark.path)
                  }, "修复")
                : null,
              React.createElement("button", {
                type: "button", className: "ganyu-mark__act ganyu-mark__act--danger", title: "取下", "aria-label": `移除 ${mark.label}`,
                onClick: () => removeMark(mark.path)
              }, "×")
            )
          );

        const groupBlock = (bucket) =>
          React.createElement("div", { className: "ganyu-mark__group", key: bucket.name },
            React.createElement("div", { className: "ganyu-mark__grouphead" },
              React.createElement("span", { className: "ganyu-mark__groupname" }, bucket.name),
              React.createElement("span", { className: "ganyu-mark__groupcount" }, String(bucket.items.length)),
              bucket.name !== DEFAULT_GROUP
                ? React.createElement("button", {
                    type: "button", className: "ganyu-mark__groupdel", title: `移除分组「${bucket.name}」`,
                    onClick: () => removeGroup(bucket.name)
                  }, "×")
                : null
            ),
            bucket.items.length === 0
              ? React.createElement("div", { className: "ganyu-mark__groupempty" }, "（这组还是空的）")
              : React.createElement("div", { className: "ganyu-mark__list" }, bucket.items.map(markRow))
          );

        return React.createElement("div", { className: "ganyu-mark", ref: rootRef },
          React.createElement("button", {
            type: "button",
            className: `ganyu-mark__trigger${open ? " ganyu-mark__trigger--on" : ""}`,
            title: "雪泥鸿爪：收着常看的文件路径",
            "aria-label": `雪泥鸿爪，已收 ${data.marks.length} 个`,
            "aria-expanded": open,
            onClick: () => setOpen((value) => !value)
          },
            React.createElement("span", { className: "ganyu-mark__glyph", "aria-hidden": "true" }, "❄"),
            React.createElement("span", { className: "ganyu-mark__label" }, "雪泥鸿爪"),
            data.marks.length > 0
              ? React.createElement("span", {
                  className: `ganyu-mark__count${popped ? " ganyu-mark__count--pop" : ""}`
                }, String(data.marks.length))
              : null
          ),
          open
            ? React.createElement("div", { className: "ganyu-mark__panel", role: "dialog", "aria-label": "雪泥鸿爪" },
                React.createElement("div", { className: "ganyu-mark__head" },
                  React.createElement("span", { className: "ganyu-mark__title" }, "❄ 雪泥鸿爪"),
                  React.createElement("span", { className: "ganyu-mark__hint" }, "留痕于此，随时取用")
                ),

                // Group filter chips.
                names.length > 0
                  ? React.createElement("div", { className: "ganyu-mark__chips" },
                      React.createElement("span", {
                        role: "button", tabIndex: 0,
                        className: `ganyu-mark__chip${filter === "" ? " ganyu-mark__chip--on" : ""}`,
                        onClick: () => setFilter(""),
                        onKeyDown: (event) => {
                          if (event.key === "Enter" || event.key === " ") setFilter("");
                        }
                      }, "全部"),
                      names.map((name) =>
                        React.createElement("span", {
                          key: name,
                          role: "button", tabIndex: 0,
                          className: `ganyu-mark__chip${filter === name ? " ganyu-mark__chip--on" : ""}`,
                          onClick: () => setFilter(filter === name ? "" : name),
                          onKeyDown: (event) => {
                            if (event.key === "Enter" || event.key === " ") setFilter(filter === name ? "" : name);
                          }
                        }, name)
                      )
                    )
                  : null,

                // New mark form.
                React.createElement("div", { className: "ganyu-mark__form" },
                  React.createElement("input", {
                    className: "ganyu-mark__input",
                    placeholder: "文件路径，如 C:\\work\\out.png",
                    value: path,
                    onChange: (event) => setPath(event.target.value),
                    onKeyDown: (event) => {
                      if (event.key === "Enter") addMark();
                    }
                  }),
                  React.createElement("div", { className: "ganyu-mark__row2" },
                    React.createElement("input", {
                      className: "ganyu-mark__input",
                      placeholder: "备注名（可选）",
                      value: label,
                      onChange: (event) => setLabel(event.target.value)
                    }),
                    React.createElement("select", {
                      className: "ganyu-mark__select",
                      value: group,
                      onChange: (event) => setGroup(event.target.value),
                      title: "存入哪个分组"
                    }, names.concat(names.includes(DEFAULT_GROUP) ? [] : [DEFAULT_GROUP]).map((name) =>
                      React.createElement("option", { key: name, value: name }, name)
                    ))
                  ),
                  React.createElement("div", { className: "ganyu-mark__row2" },
                    React.createElement("input", {
                      className: "ganyu-mark__input",
                      placeholder: "新建分组（可选）",
                      value: newGroup,
                      onChange: (event) => setNewGroup(event.target.value),
                      onKeyDown: (event) => {
                        if (event.key === "Enter") addGroup();
                      }
                    }),
                    React.createElement("button", {
                      type: "button", className: "ganyu-mark__ghost", onClick: addGroup
                    }, "建组"),
                    React.createElement("button", {
                      type: "button", className: "ganyu-mark__add", onClick: addMark
                    }, "收入")
                  )
                ),

                notice !== ""
                  ? React.createElement("div", { className: "ganyu-mark__notice" }, notice)
                  : null,

                buckets.length === 0
                  ? React.createElement("div", { className: "ganyu-mark__empty" },
                      data.marks.length === 0
                        ? "还是空的。对话里点文件卡片右上角的 ❄，或者在上面填路径。"
                        : "这个分组下还没有内容。")
                  : React.createElement("div", { className: "ganyu-mark__groups" }, buckets.map(groupBlock))
              )
            : null
        );
      };
    }


    /**
     * Put a ❄ affordance on every presented-file card in the conversation.
     *
     * The card is owned by `dsh-client-ui-deliverables`; it exposes the resolved
     * absolute path in its preview button's `title`, so this decorates rather
     * than replaces. Clicking posts `ganyu:mark` / `ganyu:unmark`; the shelf is
     * the only writer of the store.
     *
     * The label is derived from the STORE, never from a timer, so a kept file
     * stays "已收" across redraws and reloads; clicking a kept card removes it.
     *
     * ANTI-LOOP: every DOM write is guarded by a value comparison AND performed
     * with the MutationObserver disconnected. Writing textContent unconditionally
     * mutates the DOM even when the string is identical, which re-enters ensure()
     * through the observer and locks the tab.
     */
    /**
     * Find whatever element actually renders a given piece of text, and describe
     * it completely. Selector guesses failed repeatedly because the shell renders
     * a file mention in a form none of them matched; this walks the DOM by TEXT
     * instead, so it cannot miss.
     *
     * Usage from DevTools:  ganyuFindRef('ganyu-wiki')
     */
    /**
     * Manual override: bookmark whatever element renders `needle`.
     *
     * When automatic detection misses a shape, this is the escape hatch —
     * `ganyuMarkRef('ganyu-wiki')` adds the bookmark and puts the pill beside the
     * element without needing a selector that matches.
     */
    function markReferenceByText(needle) {
      // Prefer a real file-mention element; fall back to any node whose TITLE
      // holds the path, then to text.
      const mentions = [...document.querySelectorAll(
        "[class*='fileMention'], [class*='fileLink'], [data-ref-chip]"
      )];
      let el = mentions.find((node) => {
        const title = node.getAttribute("title") || "";
        return title.indexOf(needle) >= 0 || (node.textContent || "").indexOf(needle) >= 0;
      }) ?? null;

      if (el === null) {
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let node = walker.nextNode();
        while (node !== null) {
          if ((node.nodeValue || "").indexOf(needle) >= 0 && node.parentElement !== null) {
            el = node.parentElement;
            break;
          }
          node = walker.nextNode();
        }
      }
      if (el === null) return "没找到包含这段文字的元素";

      // title first: a mention shows only the short label, the path is in title.
      const source = el.getAttribute?.("title") || el.textContent || "";
      const name = /([^\\/]+\.(?:md|markdown|txt|json|ya?ml|png|jpe?g|webp|gif|svg|pdf))$/i.exec(source.trim());
      if (name === null) return "这段文字里没有能识别的文件名";

      const path = name[1];
      const current = readMarks();
      if (current.marks.some((mark) => mark.path === path)) {
        return `「${path}」已经在收藏里了`;
      }
      const next = {
        groups: current.groups.some((group) => group.name === DEFAULT_GROUP)
          ? current.groups
          : [{ name: DEFAULT_GROUP, at: Date.now() }, ...current.groups],
        marks: [
          { path, label: path, group: DEFAULT_GROUP, at: Date.now(), from: currentConversationTitle() },
          ...current.marks
        ]
      };
      if (!writeMarks(next)) return "存入失败";
      window.dispatchEvent(new CustomEvent("ganyu:marks-changed"));
      return `已收入雪泥鸿爪：${path}`;
    }

    function findReferenceByText(needle) {
      if (typeof document === "undefined" || typeof needle !== "string" || needle === "") {
        return null;
      }
      const results = [];
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          return node.nodeValue !== null && node.nodeValue.indexOf(needle) >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
        }
      });

      let node = walker.nextNode();
      while (node !== null && results.length < 8) {
        const el = node.parentElement;
        if (el !== null) {
          const attrs = {};
          for (const attr of el.attributes) attrs[attr.name] = attr.value.slice(0, 120);
          const chain = [];
          let up = el;
          for (let depth = 0; depth < 5 && up !== null; depth += 1, up = up.parentElement) {
            chain.push(`${up.tagName.toLowerCase()}${up.className ? `.${String(up.className).split(" ").join(".")}` : ""}`);
          }
          results.push({
            text: (node.nodeValue || "").trim().slice(0, 80),
            tag: el.tagName,
            className: String(el.className || "").slice(0, 160),
            attrs,
            outerHTML: el.outerHTML.slice(0, 400),
            ancestors: chain
          });
        }
        node = walker.nextNode();
      }
      return results;
    }

    /**
     * One-shot DOM report: what file-ish nodes exist and whether the theme
     * recognised them. Exposed on `window.ganyuMarksDiag` so it can be called
     * again from DevTools without reinstalling anything.
     */
    function marksDiagnostics() {
      if (typeof document === "undefined") return null;
      const report = {
        presented: [],
        attachments: [],
        images: [],
        links: [],
        marked: [],
        unrecognisedImages: [],
        unrecognisedLinks: []
      };

      for (const card of document.querySelectorAll("[data-presented-file]")) {
        report.presented.push({
          title: card.querySelector("button[title]")?.getAttribute("title") || "",
          hasMark: card.querySelector("[data-ganyu-card-mark]") !== null
        });
      }

      for (const card of document.querySelectorAll("[data-message-attachments] [class*='fileCard']")) {
        report.attachments.push({
          title: card.getAttribute("title") || "",
          hasMark: card.querySelector("[data-ganyu-card-mark]") !== null
        });
      }

      for (const img of document.querySelectorAll("img")) {
        const src = img.getAttribute("src") || "";
        const entry = { src: src.slice(0, 90), hasMark: false };
        let n = img.parentElement;
        for (let depth = 0; depth < 4 && n !== null; depth += 1, n = n.parentElement) {
          if (n.querySelector?.("[data-ganyu-card-mark]") !== null) { entry.hasMark = true; break; }
        }
        if (src.startsWith("dsh-resource://file/")) report.images.push(entry);
        else report.unrecognisedImages.push(entry);
      }

      // Anything that looks like a workspace file reference, however the shell
      // chose to render it (custom element, data attribute, or plain text).
      report.refChips = [...document.querySelectorAll("[data-ref-chip], [class*='fileMention'], [class*='fileLink']")].map((n) => ({
        appearance: n.getAttribute("data-ref-chip"),
        title: n.getAttribute("title"),
        text: (n.textContent || "").trim().slice(0, 40),
        hasMark: n.nextElementSibling?.hasAttribute?.("data-ganyu-card-mark") === true
      }));

      report.fileish = [...document.querySelectorAll("[data-resource-address], [data-file-path], [data-path]")]
        .slice(0, 8)
        .map((n) => ({
          tag: n.tagName,
          attrs: [...n.attributes].map((a) => `${a.name}=${a.value.slice(0, 60)}`).join(" ")
        }));

      for (const a of document.querySelectorAll("a[href]")) {
        const href = a.getAttribute("href") || "";
        const looksFile = /\.(png|jpe?g|webp|gif|md|txt|json|pdf|zip|mp4|webm)(\?|#|$)/i.test(href)
          || href.startsWith("dsh-resource://")
          || href.startsWith("file:");
        if (!looksFile) continue;
        const entry = {
          href: href.slice(0, 90),
          text: (a.textContent || "").trim().slice(0, 40),
          hasMark: a.parentElement?.querySelector("[data-ganyu-card-mark]") !== null
        };
        if (href.startsWith("dsh-resource://file/")) report.links.push(entry);
        else report.unrecognisedLinks.push(entry);
      }

      for (const b of document.querySelectorAll("[data-ganyu-card-mark]")) {
        report.marked.push({
          kind: b.getAttribute("data-ganyu-kind"),
          path: b.getAttribute("data-ganyu-path"),
          label: b.textContent
        });
      }

      // Raw snippets: if a selector misses, this shows the markup to match on.
      report.snippets = {
        images: [...document.querySelectorAll("img")]
          .slice(0, 4)
          .map((n) => n.outerHTML.slice(0, 300)),
        links: [...document.querySelectorAll("a[href]")]
          .slice(0, 4)
          .map((n) => n.outerHTML.slice(0, 300))
      };

      // Copy the whole report to the clipboard when possible, so it can be
      // pasted back without retyping.
      try {
        if (typeof navigator !== "undefined" && navigator.clipboard) {
          void navigator.clipboard.writeText(JSON.stringify(report, null, 2));
        }
      } catch {
        /* clipboard optional */
      }

      return report;
    }

    /**
     * Mount the shelf into the conversation header by DOM, not by slot.
     *
     * This build exposes only `conversation.session.header.corner`, and that one
     * is already used by the shell's own 打开右侧边栏 button; `utilities` does not
     * exist at all. `[data-conversation-header-corner]` is the stable wrapper
     * around the header's right-hand control cluster, so the shelf is inserted
     * there as a sibling of the native buttons.
     *
     * The React root is created once and re-rendered, so the shelf keeps its
     * open/closed state across header re-renders; the observer only re-inserts
     * the host node if it was removed.
     */
    function mountMarksHeader(Component) {
      if (typeof document === "undefined" || typeof MutationObserver === "undefined") return () => {};
      const doc = document;
      const HOST = "data-ganyu-marks-host";
      let reactRoot = null;
      let mountNode = null;

      const createRootFn = () => {
        const direct = ReactDOM?.createRoot;
        if (typeof direct === "function") return direct;
        const viaDefault = ReactDOM?.default?.createRoot;
        return typeof viaDefault === "function" ? viaDefault : null;
      };

      /** Tear down the current React root before its host node goes away. */
      const dropRoot = () => {
        try {
          reactRoot?.unmount();
        } catch {
          /* already gone */
        }
        reactRoot = null;
        if (mountNode !== null) mountNode.remove();
        mountNode = null;
      };

      const ensure = () => {
        const create = createRootFn();
        if (create === null) return;

        const corner = doc.querySelector("[data-conversation-header-corner]");
        if (corner === null) {
          // No header (welcome screen): release the root so a later header starts
          // from scratch rather than rendering into a detached node.
          if (mountNode !== null) dropRoot();
          return;
        }

        // Already mounted into THIS corner: nothing to do. Re-rendering here
        // would mutate the DOM on every observer tick and spin forever.
        if (mountNode !== null && mountNode.isConnected && corner.contains(mountNode)) {
          if (reactRoot === null) {
            reactRoot = create(mountNode);
            reactRoot.render(React.createElement(Component));
          }
          return;
        }

        // The header was rebuilt (switching conversations), so the old node is
        // detached and its React root is now unreachable. Destroy the root and
        // build a fresh node; otherwise every later render paints into a hidden
        // node and the button silently disappears.
        if (reactRoot !== null || mountNode !== null) dropRoot();

        mountNode = doc.createElement("div");
        mountNode.setAttribute(HOST, "");
        mountNode.style.display = "inline-flex";
        mountNode.style.alignItems = "center";
        mountNode.style.marginRight = "6px";
        corner.insertBefore(mountNode, corner.firstChild);

        reactRoot = create(mountNode);
        reactRoot.render(React.createElement(Component));
      };

      let observer = null;
      const quietEnsure = () => {
        if (observer !== null) observer.disconnect();
        try {
          ensure();
        } finally {
          if (observer !== null) observer.observe(doc.body, { childList: true, subtree: true });
        }
      };

      quietEnsure();
      observer = new MutationObserver(() => quietEnsure());
      observer.observe(doc.body, { childList: true, subtree: true });

      return () => {
        observer.disconnect();
        try {
          reactRoot?.unmount();
        } catch {
          /* already unmounted */
        }
        reactRoot = null;
        mountNode?.remove();
        mountNode = null;
      };
    }

    function mountFileCardMarks() {
      if (typeof document === "undefined" || typeof MutationObserver === "undefined") return () => {};
      const MARK = "data-ganyu-card-mark";
      const doc = document;
      let observer = null;

      /** Run a DOM write with the observer detached, then re-attach it. */
      const quiet = (fn) => {
        if (observer !== null) observer.disconnect();
        try {
          fn();
        } finally {
          if (observer !== null) observer.observe(doc.body, { childList: true, subtree: true });
        }
      };

      /**
       * Absolute path for a presented-file card.
       *
       * `title` is NOT reliable: depending on the entry it can hold the display
       * name ("bookmark-targets.png") instead of the resolved path, and storing
       * that produced bookmarks that could never open. Prefer a value that looks
       * absolute; otherwise remember it as a bare NAME so the shelf can resolve
       * it against the workspace before storing.
       */
      const looksAbsolute = (value) => /^[A-Za-z]:[\\/]/.test(value)
        || value.startsWith("\\\\")
        || value.startsWith("/");

      const pathOfCard = (card) => {
        const candidates = [];
        const preview = card.querySelector("button[title]");
        const title = preview?.getAttribute("title") || "";
        if (title !== "") candidates.push(title);

        const aria = preview?.getAttribute("aria-label") || "";
        const colon = aria.indexOf(":");
        if (colon >= 0) candidates.push(aria.slice(colon + 1).trim());

        // A dsh-resource href/src is the resolved address when present.
        for (const node of card.querySelectorAll("a[href], img[src]")) {
          const value = node.getAttribute("href") || node.getAttribute("src") || "";
          if (value.startsWith("dsh-resource://file/")) {
            const rest = value.slice("dsh-resource://file/session/".length);
            const slash = rest.indexOf("/");
            if (slash >= 0) {
              try {
                candidates.push(decodeURIComponent(rest.slice(slash + 1)));
              } catch {
                /* ignore malformed */
              }
            }
          }
        }

        const absolute = candidates.find((value) => looksAbsolute(value));
        if (absolute !== undefined) return { path: absolute, nameOnly: false };

        const name = candidates.find((value) => value !== "") ?? "";
        return { path: name, nameOnly: name !== "" };
      };

      // A Set is rebuilt once per scan; `some()` was a linear walk per button and
      // ran for every element on every pass.
      let storedPaths = new Set();
      const refreshStored = () => {
        storedPaths = new Set(readMarks().marks.map((mark) => mark.path));
      };
      const isStored = (path) => storedPaths.has(path);

      /** Repaint one button from the store; no-op when already correct. */
      const paint = (button, path) => {
        const words = button.querySelector(".ganyu-card-mark__label");
        const stored = isStored(path);
        const wantLabel = stored ? "已收" : "收录";
        const wantTitle = stored ? "已在雪泥鸿爪中，点击取消收录" : "收进雪泥鸿爪";
        const wantDone = stored;

        if (button.classList.contains("ganyu-card-mark--done") === wantDone
            && button.title === wantTitle
            && (words === null || words.textContent === wantLabel)) {
          return; // nothing to do: avoids any mutation, hence no observer bounce
        }

        quiet(() => {
          button.classList.toggle("ganyu-card-mark--done", wantDone);
          button.title = wantTitle;
          if (words !== null && words.textContent !== wantLabel) words.textContent = wantLabel;
        });
      };

      const repaintAll = () => {
        refreshStored();
        for (const button of doc.querySelectorAll(`[${MARK}]`)) {
          const path = button.getAttribute("data-ganyu-path") || "";
          if (path !== "") paint(button, path);
        }
      };

      /**
       * Every place a file can appear in a conversation. Each entry yields
       * { host, path } where `host` is the element the ❄ is appended to.
       *
       * 1. `[data-presented-file]` — a tool "presented" deliverable card; it
       *    carries the resolved absolute path in its preview button's title.
       * 2. `[data-message-attachments] [class*="fileCard"]` — a file the user
       *    attached. It has no path attribute, so the name is taken and marked
       *    as name-only (the shelf resolves or asks for the rest).
       * 3. Markdown images — `img[src^="dsh-resource://file/"]`, plus plain
       *    `img` whose src resolves under the workspace.
       */
      /**
       * Decode a workspace path out of any address the shell uses.
       *
       * The shell writes file references in several shapes and the exact one
       * varies by build/feature, so every known form is accepted instead of
       * betting on a single prefix:
       *   dsh-resource://file/session/<sid>/<encoded path>
       *   /api/file?path=<encoded absolute path>
       *   dsh-app://app/api/file?path=...
       *   file:///C:/...
       * A plain absolute path is returned unchanged.
       */
      const pathFromAddress = (address) => {
        if (typeof address !== "string" || address === "") return null;
        const decode = (value) => {
          try {
            return decodeURIComponent(value);
          } catch {
            return value;
          }
        };

        if (address.startsWith("dsh-resource://file/")) {
          const rest = address.slice("dsh-resource://file/".length);
          const parts = rest.split("/");
          // session/<sid>/<path...>  or a bare path
          const cut = parts[0] === "session" ? 2 : 0;
          const path = parts.slice(cut).join("/");
          return path === "" ? null : decode(path);
        }

        if (address.includes("api/file?")) {
          const query = address.slice(address.indexOf("api/file?") + "api/file?".length);
          const match = /(?:^|&)path=([^&]*)/.exec(query);
          if (match === null) return null;
          const decoded = decode(match[1]);
          return decoded === "" ? null : decoded;
        }

        if (address.startsWith("file://")) {
          const path = decode(address.replace(/^file:\/\/\/?/, ""));
          return path === "" ? null : path;
        }

        if (/^[A-Za-z]:[\\/]/.test(address) || address.startsWith("/")) return address;

        // Relative workspace paths are the common case in rendered markdown
        // ("[doc](docs/a.md)"). Returning null here is why old conversations never
        // got a button: the address was a bare relative path, not a URL.
        if (address.startsWith("./") || address.startsWith("../")) return address;
        if (/^[^\s:?#]+\.(?:md|markdown|txt|json|ya?ml|toml|csv|pdf|png|jpe?g|webp|gif|svg|avif|mp4|webm|zip|log|ts|js|tsx|jsx|py|rs|go|java|c|cc|cpp|h|hpp|sh|ps1)$/i.test(address)) {
          return address;
        }
        return null;
      };

      const collectTargets = () => {
        const targets = [];
        // Dedupe by the element the button hangs off, not by its host's tag name.
        // Using the tag collapsed every link in one <p> into a single bookmark.
        const seenEls = new WeakSet();

        const push = (target) => {
          if (target.anchor === undefined || target.anchor === null) return;
          if (seenEls.has(target.anchor)) return;
          seenEls.add(target.anchor);
          targets.push(target);
        };

        // 1) Tool-produced deliverable cards.
        for (const card of doc.querySelectorAll("[data-presented-file]")) {
          const found = pathOfCard(card);
          if (found.path !== "") {
            push({ host: card, anchor: card, path: found.path, kind: "presented", nameOnly: found.nameOnly });
          }
        }

        // 2) Files attached by the user.
        for (const card of doc.querySelectorAll("[data-message-attachments] [class*='fileCard']")) {
          const name = card.getAttribute("title") || "";
          if (name !== "") push({ host: card, anchor: card, path: name, kind: "attachment", nameOnly: true });
        }

        // 3) Hyperlinked files in rendered markdown.
        //
        // Anchors are the common case, but the shell also renders references as
        // role=link elements and as elements carrying a data attribute with the
        // address. All three are scanned; `data-ganyu-skipal` records anything
        // that looked like a reference but produced no path, for diagnostics.
        const linkNodes = [
          ...doc.querySelectorAll("a[href]"),
          ...doc.querySelectorAll("[role='link'][href], [role='link'][data-href]"),
          ...doc.querySelectorAll("[data-resource-address], [data-file-path], [data-reference]"),
          // The shell renders an "@file" mention as a ReferenceChip: a span or
          // button carrying `data-ref-chip="file"` whose `title` is the raw
          // reference text. It has no href, which is why every earlier scan
          // missed it entirely.
          ...doc.querySelectorAll("[data-ref-chip]"),
          // Real shape in this build: a button with a hashed class stem.
          ...doc.querySelectorAll("[class*='fileMention'], [class*='fileLink']")
        ];

        /**
         * Every string that could name this element's target, most specific first.
         *
         * A reference chip carries no href at all: its target lives in `title`
         * (the raw reference text) and possibly in a data attribute. Accepting a
         * single attribute was too brittle — one build difference and the chip
         * silently produced nothing.
         */
        const candidateAddresses = (node) => {
          const out = [];
          const push2 = (value) => {
            if (typeof value !== "string") return;
            const cleaned = value.trim()
              .replace(/^@+/, "")
              .replace(/^["']|["']$/g, "")
              .trim();
            if (cleaned !== "") out.push(cleaned);
          };

          push2(node.getAttribute?.("href"));
          push2(node.getAttribute?.("data-href"));
          push2(node.getAttribute?.("data-resource-address"));
          push2(node.getAttribute?.("data-file-path"));
          push2(node.getAttribute?.("data-reference"));
          push2(node.getAttribute?.("data-path"));
          push2(node.getAttribute?.("title"));

          // The visible label is the last resort; only useful when it looks like
          // a file name (the shell shows `ganyu-wiki.md` there).
          const text = (node.textContent || "").trim();
          if (/[.\/]/.test(text) && text.length <= 260) push2(text);

          return out;
        };

        for (const link of linkNodes) {
          const candidates = candidateAddresses(link);
          if (candidates.length === 0) continue;

          let path = null;
          let bestScore = -1;
          for (const candidate of candidates) {
            if (candidate.startsWith("#") || /^https?:/i.test(candidate)) continue;
            const resolved = pathFromAddress(candidate);
            if (resolved === null) continue;
            // Rank: absolute beats relative-with-directory beats bare name.
            const score = /^([A-Za-z]:[\\/]|\/)/.test(resolved)
              ? 3
              : (resolved.includes("/") ? 2 : 1);
            if (score > bestScore) {
              bestScore = score;
              path = resolved;
            }
          }
          if (path === null) continue;
          push({ host: link.parentElement ?? link, anchor: link, path, kind: "link", inline: true });
        }

        // 4) Every image that is actually displayed gets a bookmark.
        //
        // No size filter and no container check: the user wants the affordance on
        // any visible picture. The only thing that was wrong before was the pill
        // sitting INSIDE the image's zoom button, so hovering the strip under the
        // picture still zoomed; that is handled at insertion time instead.
        for (const img of doc.querySelectorAll("img[src]")) {
          const src = img.getAttribute("src") || "";
          const holder = img.closest("figure, a, p, div") ?? img.parentElement;
          if (holder === null) continue;

          let path = pathFromAddress(src);

          // Inline data URIs have no path. If the surrounding node carries a
          // file name (the shell labels generated images), use that instead so
          // the bookmark at least records which file it was.
          if (path === null && src.startsWith("data:")) {
            const labelled = img.getAttribute("alt")
              || img.getAttribute("title")
              || holder.getAttribute("title")
              || "";
            const named = /([^\\/]+\.(?:png|jpe?g|webp|gif|avif))$/i.exec(labelled);
            if (named !== null) path = named[1];
          }

          if (path === null) continue;
          push({
            host: holder,
            anchor: img,
            path,
            kind: "image",
            nameOnly: pathFromAddress(src) === null
          });
        }

        return targets;
      };;

      /**
       * Find the button already attached to one element, tolerating the two
       * shapes we produce:
       *   * wrapped:  <span.ganyu-img-wrap><anchor/><button/></span>
       *   * sibling:  <anchor/><button/>
       * Element identity is checked with a WeakMap as well, because React may
       * rebuild the anchor and leave an orphaned button behind otherwise.
       */
      const mountedFor = new WeakMap();

      /**
       * Find an existing pill for this target, scanning the whole neighbourhood.
       *
       * Previous versions only checked `anchorEl.nextElementSibling` and the image
       * wrapper. Depending on where the pill was inserted (inside a presented card,
       * inside a wrap, or as a sibling) that check missed it, so every pass created
       * ANOTHER button — the "buttons keep multiplying" report. Scanning outward
       * from the anchor to the nearest stable container catches all three layouts.
       */
      const findExisting = (anchorEl, host, path) => {
        const known = mountedFor.get(anchorEl);
        if (known !== undefined && known.isConnected && known.getAttribute("data-ganyu-path") === path) {
          return known;
        }

        const matches = (node) => node !== null
          && node.hasAttribute?.(MARK) === true
          && node.getAttribute("data-ganyu-path") === path;

        // 1) immediate siblings
        if (matches(anchorEl.nextElementSibling)) {
          mountedFor.set(anchorEl, anchorEl.nextElementSibling);
          return anchorEl.nextElementSibling;
        }
        if (matches(anchorEl.previousElementSibling)) {
          mountedFor.set(anchorEl, anchorEl.previousElementSibling);
          return anchorEl.previousElementSibling;
        }

        // 2) this anchor's own subtree (a presented card holds the pill inside)
        for (const node of anchorEl.querySelectorAll?.(`[${MARK}]`) ?? []) {
          if (node.getAttribute("data-ganyu-path") === path) {
            mountedFor.set(anchorEl, node);
            return node;
          }
        }

        // 3) climb a few levels and scan any pill whose anchor sits in that scope
        let scope = anchorEl.parentElement;
        for (let depth = 0; depth < 3 && scope !== null; depth += 1, scope = scope.parentElement) {
          for (const node of scope.querySelectorAll(`[${MARK}]`)) {
            if (node.getAttribute("data-ganyu-path") === path) {
              mountedFor.set(anchorEl, node);
              return node;
            }
          }
        }

        // 4) last resort: the passed-in host (the card / row)
        if (host !== null && host !== undefined) {
          for (const node of host.querySelectorAll?.(`[${MARK}]`) ?? []) {
            if (node.getAttribute("data-ganyu-path") === path) {
              mountedFor.set(anchorEl, node);
              return node;
            }
          }
        }
        return null;
      };

      /**
       * Remove buttons whose anchor is gone or detached. Without this, a React
       * rebuild of an image left the old wrapped button in the DOM and every
       * pass added another one — which is exactly the "button keeps multiplying"
       * symptom after opening and closing the lightbox.
       */
      const sweepOrphans = () => {
        for (const button of doc.querySelectorAll(`[${MARK}]`)) {
          const wrap = button.closest(".ganyu-img-wrap");
          const owner = wrap ?? button.previousElementSibling;
          const anchorAlive = owner !== null && owner.isConnected
            && (wrap === null || wrap.querySelector("img, a") !== null);
          if (!anchorAlive) {
            button.remove();
            if (wrap !== null && wrap.querySelector("img, a") === null) wrap.remove();
          }
        }
      };

      const ensure = () => {
        refreshStored();
        sweepOrphans();
        for (const target of collectTargets()) {
          const { host, path } = target;
          const anchorEl = target.anchor ?? host;
          const existing = findExisting(anchorEl, host, path);

          if (existing !== null) {
            paint(existing, path);
            continue;
          }

          const button = doc.createElement("button");
          button.type = "button";
          button.setAttribute(MARK, "");
          button.setAttribute("data-ganyu-path", path);
          button.setAttribute("data-ganyu-kind", target.kind);
          button.className = `ganyu-card-mark ganyu-card-mark--${target.kind}`;
          button.setAttribute("aria-label", `收录或取消 ${basenameOf(path)}`);

          const glyph = doc.createElement("span");
          glyph.className = "ganyu-card-mark__glyph";
          glyph.textContent = "❄";
          button.appendChild(glyph);

          const words = doc.createElement("span");
          words.className = "ganyu-card-mark__label";
          button.appendChild(words);

          button.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();

            // Write the store HERE rather than relying on an event listener.
            // The shelf only mounts inside the conversation header; on the
            // welcome screen (or before the header renders) nobody listened to
            // `ganyu:unmark`, so un-collecting silently did nothing.
            const current = readMarks();
            const stored = current.marks.some((mark) => mark.path === path);

            const next = stored
              ? {
                  groups: current.groups,
                  marks: current.marks.filter((mark) => mark.path !== path)
                }
              : {
                  groups: current.groups.some((group) => group.name === DEFAULT_GROUP)
                    ? current.groups
                    : [{ name: DEFAULT_GROUP, at: Date.now() }, ...current.groups],
                  marks: [
                    {
                      path,
                      label: basenameOf(path),
                      group: DEFAULT_GROUP,
                      at: Date.now(),
                      from: currentConversationTitle()
                    },
                    ...current.marks
                  ]
                };

            if (writeMarks(next)) {
              // Rebuild the Set BEFORE painting: `paint` reads it, and it is only
              // refreshed inside ensure()/repaintAll(), so without this the pill
              // repainted from a stale snapshot and never flipped to 已收.
              refreshStored();
              window.dispatchEvent(new CustomEvent("ganyu:marks-changed"));
              paint(button, path);
            }
          });

          quiet(() => {
            if (target.kind === "presented") {
              const actions = [...host.children].find((child) =>
                child.className !== undefined
                && String(child.className).indexOf("K5rwea_actions") >= 0
              );
              if (actions !== undefined && actions.parentElement === host) {
                host.insertBefore(button, actions);
              } else {
                host.appendChild(button);
              }
            } else if (target.kind === "link") {
              // Sit right after the link itself. Appending to the paragraph put
              // the button at the END of the line, far from the link text.
              const anchorEl = target.anchor ?? host;
              anchorEl.insertAdjacentElement("afterend", button);
            } else if (target.kind === "image") {
              // Place the pill immediately beside the picture, and NOT inside the
              // element that opens the zoom viewer.
              //
              // The shell wraps a message image in a clickable node (button, or a
              // div with role=button / cursor:pointer) that opens a lightbox. Two
              // mistakes are easy here:
              //   * putting the pill INSIDE that node  -> hover over the strip
              //     under the picture still zooms;
              //   * climbing past it into an ancestor  -> the pill lands inside the
              //     lightbox overlay, which made the preview janky and hid it.
              // So: step out of the clickable node ONCE, and stop at the first
              // sibling container instead of walking to the top.
              const img = target.anchor;
              if (img === undefined || img === null) {
                host.appendChild(button);
              } else {
                const isZoomHost = (node) => {
                  if (node === null) return false;
                  if (node.tagName === "BUTTON" || node.tagName === "A") return true;
                  const role = node.getAttribute?.("role");
                  if (role === "button" || role === "link") return true;
                  try {
                    const cursor = getComputedStyle(node).cursor;
                    return cursor === "pointer" || cursor === "zoom-in";
                  } catch {
                    return false;
                  }
                };

                // One step out of the first clickable wrapper, no further, then
                // WRAP that wrapper together with the pill so they stay adjacent.
                // Inserting as a plain sibling left the pill at the end of the
                // row, far from the picture.
                let anchorEl = img;
                if (img.parentElement !== null && isZoomHost(img.parentElement)) {
                  anchorEl = img.parentElement;
                }

                const outer = anchorEl.parentElement;
                if (outer !== null) {
                  const wrap = doc.createElement("span");
                  wrap.className = "ganyu-img-wrap";
                  outer.insertBefore(wrap, anchorEl);
                  wrap.appendChild(anchorEl);
                  wrap.appendChild(button);
                  mountedFor.set(anchorEl, button);

                  // Size the wrapper to the PICTURE, measured, not inherited.
                  //
                  // The shell gives message images an explicit max-width and a
                  // parent that is wider than the bitmap, so `fit-content` still
                  // resolved to the parent width and left a dead strip beside a
                  // letterboxed picture. Writing the measured bitmap box onto the
                  // wrapper guarantees the pill lands against the pixels.
                  // Measure once and write only when the value actually changes.
                  // An unconditional write fed the ResizeObserver below, which
                  // measured again — a read/write loop on every box change.
                  let lastW = -1;
                  let lastH = -1;
                  const sizeToPicture = () => {
                    const bitmap = anchorEl.tagName === "IMG"
                      ? anchorEl
                      : anchorEl.querySelector("img");
                    if (bitmap === null) return;
                    const box = bitmap.getBoundingClientRect();
                    if (box.width <= 0 || box.height <= 0) return;
                    const w = Math.round(box.width);
                    const h = Math.round(box.height);
                    if (w === lastW && h === lastH) return; // nothing changed: no write
                    lastW = w;
                    lastH = h;
                    wrap.style.width = `${w}px`;
                    wrap.style.height = `${h}px`;
                    anchorEl.style.width = `${w}px`;
                    anchorEl.style.height = `${h}px`;
                  };

                  sizeToPicture();
                  // A lazy image reports 0×0 before decode; retry once it loads.
                  const bitmap = anchorEl.tagName === "IMG" ? anchorEl : anchorEl.querySelector("img");
                  if (bitmap !== null && bitmap.complete !== true) {
                    bitmap.addEventListener("load", () => sizeToPicture(), { once: true });
                  }
                } else {
                  host.appendChild(button);
                  mountedFor.set(anchorEl, button);
                }
              }
            } else {
              host.appendChild(button);
            }
            mountedFor.set(anchorEl, button);
            paint(button, path);
          });
        }
      };

      ensure();

      const onChanged = () => repaintAll();
      const onStorage = (event) => {
        if (event.key === MARK_KEY) repaintAll();
      };
      window.addEventListener("ganyu:marks-changed", onChanged);
      window.addEventListener("storage", onStorage);

      // Debounced, and only rescan when the change could involve a file-ish node.
      //
      // `ensure()` walks the whole document. Firing it on every mutation during
      // streaming made the page and the preview pane stutter, because the chat
      // re-renders many times per second. A short debounce plus a cheap relevance
      // check keeps the cost flat.
      let pending = 0;
      const schedule = () => {
        if (pending !== 0) return;
        pending = window.setTimeout(() => {
          pending = 0;
          ensure();
        }, 120);
      };

      // Must list EVERY anchor kind collectTargets() looks for. A reference chip
      // carries no href, so omitting it here meant the scan never re-ran when a
      // markdown file mention appeared — the button simply never got created.
      const RELEVANT = [
        "img[src]",
        "a[href]",
        "[data-presented-file]",
        "[data-message-attachments]",
        "[data-ref-chip]",
        "[class*='fileMention']",
        "[class*='fileLink']",
        "[role='link'][href]",
        "[data-resource-address]",
        "[data-file-path]",
        "[data-reference]"
      ].join(", ");
      const looksRelevant = (mutation) => {
        for (const node of mutation.addedNodes) {
          if (node.nodeType !== 1) continue;
          if (node.matches?.(RELEVANT)) return true;
          if (node.querySelector?.(RELEVANT) !== null) return true;
        }
        return false;
      };

      observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (looksRelevant(mutation)) {
            schedule();
            return;
          }
        }
      });
      observer.observe(doc.body, { childList: true, subtree: true });

      // Safety net: the observer only fires for mutations it deems relevant, and
      // a reference chip is easy to misclassify. This low-frequency sweep makes
      // sure a missed element still gets its button, at negligible cost because
      // ensure() returns immediately when everything is already marked.
      const sweep = window.setInterval(() => {
        if (typeof document.visibilityState === "string" && document.visibilityState === "hidden") return;
        ensure();
      }, 4000);

      return () => {
        observer?.disconnect();
        window.clearInterval(sweep);
        if (pending !== 0) window.clearTimeout(pending);
        window.removeEventListener("ganyu:marks-changed", onChanged);
        window.removeEventListener("storage", onStorage);
      };
    }


    function apply(ctx) {      // Stylesheet: owned by the plugin fiber so disabling the plugin removes it.
      ctx.effect(() => {
        if (typeof document === "undefined") return;
        const tag = document.createElement("style");
        tag.dataset.plugin = PLUGIN_ID;
        tag.dataset.pluginCss = `${PLUGIN_ID}/ganyu.css`;
        tag.textContent = CSS;
        document.head.appendChild(tag);
        return () => tag.remove();
      }, "ganyu theme: stylesheet");

      // The light palette is a built-in theme, so selecting it is durable and
      // cannot be reverted by the settings scope's asynchronous first adoption.
      // The alias layer is stacked on top, which keeps the frost-blue look even
      // during the brief interval before the durable preference settles.
      ctx.inject(["theme"], (scope) => {
        scope.effect(() => {
          const theme = scope.theme;
          const pairs = Object.fromEntries(
            Object.entries(TOKENS).map(([name, value]) => [name, { light: value, dark: value }])
          );
          const dispose = theme.overrideTokens(PLUGIN_ID, pairs);
          const activate = () => {
            try {
              theme.setTheme("light");
            } catch (error) {
              console.warn("[ganyu-theme] could not select the light palette", error);
            }
          };
          activate();
          const timer = setTimeout(activate, 1200);
          return () => {
            clearTimeout(timer);
            dispose();
          };
        }, "ganyu theme: palette");
      });

      // Responsive 30-50% blur.
      ctx.effect(() => {
        if (typeof window === "undefined") return;
        const root = document.documentElement;
        const update = () => updateBlur(root);
        update();
        window.addEventListener("resize", update, { passive: true });
        return () => window.removeEventListener("resize", update);
      }, "ganyu theme: responsive blur");

      // Billing meter above the account/settings footer. The slot is a list, so
      // the meter joins the sidebar's own layout instead of floating over it.
      ctx.inject(["slots", "locale", "remote", "remote.account", "remote.session"], (scope) => {
        const BalanceMeter = createBalanceMeter({
          account: scope.remote.account,
          session: scope.remote.session,
          locale: scope.locale
        });
        scope.slots.inject("sidebar.footer.action", () => scope.slots.register({
          name: "sidebar.footer.action",
          id: "ganyu-billing",
          order: 20
        }, BalanceMeter));
      });

      // Section icons: DSH renders `settings.section.icon` per row with
      // `only: <row id>` and falls back to a generic gear when a package never
      // registered one. `dsh-pet` shows the gear for that reason — its own DOM
      // patch targets an older shell. Registering the slot entry restores it.
      ctx.inject(["slots"], (scope) => {
        const PetIcon = createPetSectionIcon();
        scope.slots.inject("settings.section.icon", () => scope.slots.register({
          name: "settings.section.icon",
          id: "pet-config",
          order: 30
        }, PetIcon));
      });

      // 雪泥鸿爪 lives in the session header's utilities area (top-right). The
      // bookmark is a PATH only — nothing is copied, and opening goes through the
      // host's openWorkspacePath, the same route the shell's "Open in..." uses.
      // Minimal, hard dependency only. Requiring optional services here is
      // dangerous: `ctx.inject` silently never calls the callback when ANY name
      // is missing, which takes the whole shelf down (its button stops opening).
      // Everything beyond these two is read opportunistically inside the shelf.
      // Services the "open in sidebar" path needs. Declared in a SEPARATE inject
      // so a missing one cannot take the whole shelf down: if these never become
      // available, the panel still works and 打开 falls back to the host opener.
      // One mutable box shared with the shelf. `apply` fills it when the
      // optional services settle; the shelf reads it at click time.
      const servicesHolder = { sidebarRight: undefined, sessions: undefined };
      try {
        ctx.inject(["sidebarRight", "sessions"], (later) => {
          servicesHolder.sidebarRight = later.sidebarRight;
          servicesHolder.sessions = later.sessions;
        });
      } catch {
        /* optional services unavailable: sidebar opening stays off */
      }

      // The shelf is mounted by DOM, not by a slot.
      //
      // `conversation.session.header.utilities` does not exist in this build
      // (only `.corner` does, and that one is already owned by the shell's own
      // 打开右侧边栏 button). Registering into a non-existent slot meant the
      // button simply never appeared. `[data-conversation-header-corner]` is the
      // stable wrapper around the header's right-hand control cluster, so the
      // shelf is inserted there as a sibling of the native buttons.
      ctx.inject(["slots", "remote", "remote.session"], (scope) => {
        const Marks = createMarkShelf({
          session: scope.remote?.session ?? scope["remote.session"],
          holder: servicesHolder
        });
        ctx.effect(() => mountMarksHeader(Marks), "ganyu theme: marks header mount");
      });

      // Account-row Settings icon. The account trigger's own markup owns the
      // avatar and the name/phone span, and the shell exposes no programmatic
      // "open settings" call, so the icon is appended INSIDE that trigger button
      // at runtime. It is a real button with its own handler, so clicking it does
      // not just toggle the account menu.
      ctx.effect(() => mountAccountRowIcon(), "ganyu theme: account settings icon");

      // ❄ on every presented-file card, so a file can be kept with one click.
      ctx.effect(() => mountFileCardMarks(), "ganyu theme: file card marks");

      // Diagnostics: `ganyuMarksDiag()` in DevTools prints what was recognised.
      try {
        window.ganyuMarksDiag = marksDiagnostics;
        window.ganyuFindRef = findReferenceByText;
        window.ganyuMarkRef = markReferenceByText;
      } catch {
        /* non-browser host */
      }
    }

    exports.apply = apply;
    exports.inject = ["theme"];
    return module.exports;
  }
});
