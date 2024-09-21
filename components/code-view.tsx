import Prism from "prismjs";
import "prismjs/components/prism-python";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
// import "prismjs/plugins/line-numbers/prism-line-numbers.js";
// import "prismjs/plugins/line-numbers/prism-line-numbers.css";

import "./code-theme.css";
import { useEffect } from "react";

export function CodeView({ code, lang }: { code: string; lang: string }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <pre
      className="p-4"
      style={{
        fontSize: 12,
        backgroundColor: "transparent",
        borderRadius: 0,
        margin: 0,
      }}
    >
      <code className={`language-tsx`}>{code}</code>
    </pre>
  );
}
