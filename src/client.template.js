window.__ModuleLoader__.load({
  id: "dsh-theme-ganyu",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

    const React = require("react");
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
        font-size: 12px;
        line-height: 1.3;
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
        font-size: 13px;
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
        font-size: 12.5px;
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
        font-size: 11px;
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
        font-size: 10.5px;
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
        font-size: 10.5px;
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
        font-size: 10px;
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
        font-size: 11.5px;
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
        font-size: 11px;
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
        font-size: 11px;
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

    /** Price one session's durable provider usage with the official CNY table. */
    /**
     * Price one session's day usage with the official CNY table.
     *
     * `day` carries the buckets already narrowed to today, so a conversation
     * that started last week is charged only for what it used today.
     *
     * @param item - the session summary (for its model route).
     * @param day - today's summed buckets for that session.
     * @param at - a timestamp inside the billed window, used to pick peak/off-peak.
     */
    function sessionCostFromUsage(item, day, at) {
      if (!day) return 0;
      const selection = item?.projections?.values?.modelSelection;
      const model = selection?.lastUsed?.model || selection?.next?.model || "";
      const tariff = /pro/i.test(model) ? CNY_TARIFFS.pro : CNY_TARIFFS.flash;
      const bucket = isPeak(new Date(at)) ? 1 : 0;
      const cacheRead = positiveNumber(day.cacheRead) / 1e6 * tariff.cacheHit[bucket];
      const cacheMiss = (positiveNumber(day.cacheMiss) + positiveNumber(day.cacheWrite)) / 1e6 * tariff.cacheMiss[bucket];
      const output = positiveNumber(day.output) / 1e6 * tariff.output[bucket];
      return cacheRead + cacheMiss + output;
    }

    /** Sum the sessions touched today; the estimate follows each session's last activity time. */
    function todayCost(items) {
      const start = new Date();
      start.setHours(0, 0, 0, 0);
      const startMs = start.getTime();
      return items
        .filter((item) => Number(item.updatedAt) >= startMs)
        .reduce((sum, item) => sum + sessionCost(item), 0);
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
    async function readSessionDayUsage(session, sessionId, dayStart) {
      const out = { cacheRead: 0, cacheMiss: 0, cacheWrite: 0, output: 0 };
      // `session/page` walks backwards and takes an EXCLUSIVE `beforeSeq`:
      // the next page must start at this page's oldest record seq. The returned
      // `cursor` is the observed log end, not a paging cursor, so it is useless
      // for continuation — using it re-reads the newest window forever.
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
          if (at < dayStart) continue;
          if (event.type !== "assistant/message") continue;
          const usage = event.data?.usage;
          if (usage === undefined || usage === null) continue;
          // Event payloads name the uncached input `inputTokens`; the
          // `uncachedInputTokens` spelling belongs to the session/list projection,
          // so reading it here always yielded 0.
          out.cacheRead += positiveNumber(usage.cacheReadTokens);
          out.cacheMiss += positiveNumber(usage.inputTokens);
          out.cacheWrite += positiveNumber(usage.cacheWriteTokens);
          out.output += positiveNumber(usage.outputTokens);
        }

        // The page reached yesterday: every event after it is already counted.
        if (oldestTime < dayStart) break;
        // Nothing older exists.
        if (page.value?.hasMore !== true) break;
        if (!Number.isFinite(oldestSeq) || oldestSeq <= 0) break;
        if (oldestSeq === beforeSeq) break;
        beforeSeq = oldestSeq;
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
                    cost: sessionCostFromUsage(entry.item, entry.day, dayStart)
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

      // Account-row Settings icon. The account trigger's own markup owns the
      // avatar and the name/phone span, and the shell exposes no programmatic
      // "open settings" call, so the icon is appended INSIDE that trigger button
      // at runtime. It is a real button with its own handler, so clicking it does
      // not just toggle the account menu.
      ctx.effect(() => mountAccountRowIcon(), "ganyu theme: account settings icon");
    }

    exports.apply = apply;
    exports.inject = ["theme"];
    return module.exports;
  }
});
