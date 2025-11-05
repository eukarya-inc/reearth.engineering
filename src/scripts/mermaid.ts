import mermaid from "mermaid";

// Initialize mermaid with default configuration
mermaid.initialize({
  startOnLoad: false,
  theme: "default",
  securityLevel: "loose",
});

// Wait for DOM to be ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initMermaid);
} else {
  initMermaid();
}

function initMermaid() {
  // Find all code blocks with language-mermaid class
  const mermaidBlocks = document.querySelectorAll<HTMLElement>(
    "pre code.language-mermaid, pre.language-mermaid code",
  );

  if (mermaidBlocks.length === 0) {
    return;
  }

  mermaidBlocks.forEach((block, index) => {
    const code = block.textContent || "";
    const pre = block.closest("pre");

    if (pre && code.trim()) {
      // Create a new div to hold the mermaid diagram
      const div = document.createElement("div");
      div.className = "mermaid";
      div.textContent = code.trim();
      div.id = `mermaid-diagram-${index}`;

      // Replace the pre element with the mermaid div
      pre.replaceWith(div);
    }
  });

  // Trigger mermaid rendering
  mermaid.run({
    querySelector: ".mermaid",
  });
}
